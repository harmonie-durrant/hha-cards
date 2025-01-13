import { GLOBAL, CARDS, LANG, UTILS, GLOW } from '../../constants.js';
import { getMessage } from '../../utils.js';
import html from "bundle-text:./card.html";
import css from "bundle-text:./card.css";

const CARD_DATA = CARDS.roomCard;

export class HHARoomCard extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this._currentLanguage = LANG.default;
		this._hass = null;
		this._elements = {};
		this._isBuilt = false;
		this._config = {
			slug: CARD_DATA.type,
			name: CARD_DATA.name
		};
		this._selectors = {
			container: "container",
			left: "left",
			shape: "shape",
			icon: "icon",
			avatar: "avatar",
			right: "right",
			name: "name",
			status: "status",
			alert: "alert",
		}
		this._layout_size = {
			horizontal: { grid_rows: 1, grid_min_rows: 1, grid_columns: 2, grid_min_columns: 2 },
			vertical:   { grid_rows: 2, grid_min_rows: 2, grid_columns: 1, grid_min_columns: 1 }
		}
		this.addEventListener('click', this._navigate.bind(this));
	}

	static getConfigElement() {
		return document.createElement(`${CARD_DATA.type}-editor`);
	}

	setConfig(config) {
		const layoutChanged = this._config?.layout !== config.layout;
		this._config = config;
		this._max_value = this._config.max_value;
		if (this._config.unit) {
			this._unit = this._config.unit;
		}
		if (!this._isBuilt) {
			this._isBuilt = true;
			this._buildCard();
		}
		if (layoutChanged) {
			this._changeLayout();
		}
	}

	set hass(hass) {
		this._hass = hass;
		this._currentLanguage = LANG.getLanguage(hass.config.language);
		this._updateDynamicElements();
	}

	_buildCard() {
		const wrapper = document.createElement('ha-card');
		wrapper.classList.add(this._config.slug);
		wrapper.innerHTML = html;
		const style = document.createElement('style');
		style.textContent = css + GLOW.cssGlowStyles();

		this.shadowRoot.innerHTML = '';
		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(wrapper);

		this._elements = {
			[this._selectors.root]: wrapper,
			[this._selectors.container]: this.shadowRoot.querySelector(`.${this._selectors.container}`),
			[this._selectors.right]: this.shadowRoot.querySelector(`.${this._selectors.right}`),
			[this._selectors.icon]: this.shadowRoot.querySelector(`.${this._selectors.icon}`),
			[this._selectors.shape]: this.shadowRoot.querySelector(`.${this._selectors.shape}`),
			[this._selectors.name]: this.shadowRoot.querySelector(`.${this._selectors.name}`),
			[this._selectors.status]: this.shadowRoot.querySelector(`.${this._selectors.status}`),
			[this._selectors.alert]: this.shadowRoot.querySelector(`.${this._selectors.alert}`),
		};
	}

	_changeLayout() {
		if (this._config.layout === GLOBAL.layouts[1].value) {
			this._elements[this._selectors.container].style.flexDirection = 'column';
			this._elements[this._selectors.right].style.textAlign = 'center';
			this._elements[this._selectors.right].style.width = '90%';
			this._elements[this._selectors.right].style.flexGrow = '0';
		} else {
			this._elements[this._selectors.container].style.flexDirection = 'row';
			this._elements[this._selectors.right].style.textAlign = 'left';
			this._elements[this._selectors.right].style.width = '100%';
			this._elements[this._selectors.right].style.flexGrow = '1';
		}
	}

	_updateDynamicElements() {
		if (!this._config.name) {
			this._showError(getMessage('NO_NAME', this._currentLanguage));
			return;
		}
		this._hideError();

		UTILS.updateElement(this._elements[this._selectors.name], (el) => {
			el.textContent = this._config.name || getMessage('UNAVAILABLE', this._currentLanguage);
		});

		// const climate = this._hass?.states[this._config.climate]?.state || '';
		const heating = this._hass?.states[this._config.heating]?.state || '';
		const cooling = this._hass?.states[this._config.cooling]?.state || '';
		UTILS.updateElement(this._elements[this._selectors.status], (el) => {
			el.textContent = (heating == 'on' || heating == 'heating') ? "heating" : (cooling == 'on' || cooling == 'cooling') ? "cooling" : "Off";
		});

		// icon
		UTILS.updateElement(this._elements[this._selectors.icon], (el) => {
			el.setAttribute(this._selectors.icon, this._config.icon || GLOBAL.alertIcon);
			el.style.color = this._config.color || GLOBAL.defaultColor;
		});
		UTILS.updateElement(this._elements[this._selectors.shape], (el) => {
			el.style.backgroundColor = this._config.color || GLOBAL.defaultColor;
		});

		if (heating == 'on' || heating == 'heating') {
			UTILS.updateElement(this._elements[this._selectors.root], (el) => {
				el.classList.add('glow');
				el.classList.remove('glow-off');
				// Set the color for the glow
				el.style.setProperty('--glow-color', this._config.heating_color || GLOW.colors.heating);
			});
		} else if (cooling == 'on' || cooling == 'cooling') {
			UTILS.updateElement(this._elements[this._selectors.root], (el) => {
				el.classList.add('glow');
				el.classList.remove('glow-off');
				// Set the color for the glow
				el.style.setProperty('--glow-color', this._config.cooling_color || GLOW.colors.cooling);
			});
		} else {
			UTILS.updateElement(this._elements[this._selectors.root], (el) => {
				el.classList.add('glow-off');
				el.classList.remove('glow-heating');
				el.classList.remove('glow-cooling');
			});
		}

		// Pointer
		UTILS.updateElement(this._elements[this._selectors.container], (el) => {
			el.style.cursor = (this._config && this._config.redirect) ? 'pointer' : 'default';
		});
	}

	_showError(message) {
		const alertElement = this._elements[this._selectors.alert];
		if (alertElement) {
			alertElement.style.display = 'flex';
			alertElement.textContent = message;
		}
	}

	_hideError() {
		const alertElement = this._elements[this._selectors.alert];
		if (alertElement) {
			alertElement.style.display = 'none';
		}
	}

	_navigate() {
        if (this._config && this._config.redirect) {
			if (this._config.redirect.startsWith('#')) {
				const element = document.querySelector(this._config.redirect);
				if (element)
					element.scrollIntoView({ behavior: 'smooth' });
				return;
			}
			window.history.pushState({}, '', this._config.redirect);
			this.dispatchEvent(new CustomEvent('location-changed', { bubbles: true, composed: true, detail: { path: this._config.redirect } }));
			window.location.href = this._config.redirect;
        }
    }

	getCardSize() {
		if (this._config.layout === GLOBAL.layouts[1].value) {
			return this._layout_size.vertical.grid_rows;
		}
		return this._layout_size.horizontal.grid_rows;
	}

	getLayoutOptions() {
		if (this._config.layout === GLOBAL.layouts[1].value) {
			return this._layout_size.vertical;
		}
		return this._layout_size.horizontal;
	}
}