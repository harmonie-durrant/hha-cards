import { GLOBAL, CARDS, LANG, UTILS, GLOW } from '../../constants.js';
import { getMessage } from '../../utils.js';
import html from "bundle-text:./card.html";
import css from "bundle-text:./card.css";

const CARD_DATA = CARDS.automationCard;

export class HHAAutomationCard extends HTMLElement {

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
		this.addEventListener('click', this._showMoreInfo.bind(this));
	}

	static getConfigElement() {
		return document.createElement(`${CARD_DATA.type}-editor`);
	}

	setConfig(config) {
		const layoutChanged = this._config?.layout !== config.layout;
		this._config = config;
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
		if (!this._config.entity) {
			this._showError(getMessage('ENTITY_ERROR', this._currentLanguage));
			return;
		}
		this._hideError();
		const entity = this._hass?.states[this._config.entity];
		if (!entity) {
			this._showError(getMessage('ENTITY_NOTFOUND', this._currentLanguage));
			return;
		}
		this._hideError();

		UTILS.updateElement(this._elements[this._selectors.name], (el) => {
			el.textContent = this._config.name || entity.attributes.friendly_name || this._config.entity;
		});

		UTILS.updateElement(this._elements[this._selectors.status], (el) => {
			el.textContent = entity.state || getMessage('UNAVAILABLE', this._currentLanguage);
		});

		// icon
		UTILS.updateElement(this._elements[this._selectors.icon], (el) => {
			el.setAttribute(this._selectors.icon, this._config.icon || GLOBAL.autoIcon);
			el.style.color = this._config.color || GLOBAL.defaultColor;
		});
		UTILS.updateElement(this._elements[this._selectors.shape], (el) => {
			el.style.backgroundColor = this._config.color || GLOBAL.defaultColor;
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

	_showMoreInfo() {
        if (this._config && this._config.entity) {
            this.dispatchEvent(new CustomEvent('hass-more-info', {
                bubbles: true,
                composed: true,
                detail: { entityId: this._config.entity },
            }));
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