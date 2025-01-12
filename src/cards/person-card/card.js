import { GLOBAL, CARDS, LANG, UTILS, GLOW } from '../../constants.js';
import { getMessage } from '../../utils.js';
import html from "bundle-text:./card.html";
import css from "bundle-text:./card.css";

const CARD_DATA = CARDS.personCard;

export class HHAPersonCard extends HTMLElement {

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
			badge: "badge",
			badge_icon: "badge-icon",
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
			[this._selectors.avatar]: this.shadowRoot.querySelector(`.${this._selectors.avatar}`),
			[this._selectors.name]: this.shadowRoot.querySelector(`.${this._selectors.name}`),
			[this._selectors.status]: this.shadowRoot.querySelector(`.${this._selectors.status}`),
			[this._selectors.alert]: this.shadowRoot.querySelector(`.${this._selectors.alert}`),
			[this._selectors.badge]: this.shadowRoot.querySelector(`.${this._selectors.badge}`),
			[this._selectors.badge_icon]: this.shadowRoot.querySelector(`.${this._selectors.badge_icon}`),
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
			if (!entity.state || entity.state == 'unavailable') {
				el.textContent = getMessage('UNAVAILABLE', this._currentLanguage);
			} else if (entity.state == 'home') {
				el.textContent = getMessage('HOME', this._currentLanguage);
			} else if (entity.state == 'unknown') {
				el.textContent = getMessage('UNKNOWN', this._currentLanguage);
			} else {
				el.textContent = getMessage('AWAY', this._currentLanguage)
			}
		});
		if (entity.state == 'home') {
			this._elements[this._selectors.badge].style.display = GLOBAL.styleEdit.SHOWF;
			UTILS.updateElement(this._elements[this._selectors.badge_icon], (el) => {
				el.setAttribute('icon', GLOBAL.homeIcon);
			});
			UTILS.updateElement(this._elements[this._selectors.badge], (el) => {
				el.style.backgroundColor = '#4CAF50';
			});
		} else if (entity.state == 'not_home') {
			this._elements[this._selectors.badge].style.display = GLOBAL.styleEdit.SHOWF;
			UTILS.updateElement(this._elements[this._selectors.badge_icon], (el) => {
				el.setAttribute('icon', GLOBAL.awayIcon);
			});
			UTILS.updateElement(this._elements[this._selectors.badge], (el) => {
				el.style.backgroundColor = "#F44336"
			});
		} else {
			this._elements[this._selectors.badge].style.display = GLOBAL.styleEdit.HIDE;
		}

		var avatar = entity.attributes.entity_picture;
		if (avatar) {
			this._elements[this._selectors.avatar].style.display = GLOBAL.styleEdit.SHOW;
			this._elements[this._selectors.shape].style.display = GLOBAL.styleEdit.HIDE;
			this._elements[this._selectors.icon].style.display = GLOBAL.styleEdit.HIDE;
			UTILS.updateElement(this._elements[this._selectors.avatar], (el) => {
				el.src = avatar;
			});
		} else {
			this._elements[this._selectors.avatar].style.display = GLOBAL.styleEdit.HIDE;
			this._elements[this._selectors.shape].style.display = GLOBAL.styleEdit.SHOW;
			this._elements[this._selectors.icon].style.display = GLOBAL.styleEdit.SHOW;
			UTILS.updateElement(this._elements[this._selectors.icon], (el) => {
				el.setAttribute('icon', this._config.icon || entity.attributes.icon || GLOBAL.alertIcon);
				el.style.color = this._config.color || GLOBAL.defaultColor;
			});
			UTILS.updateElement(this._elements[this._selectors.shape], (el) => {
				el.style.backgroundColor = this._config.color || GLOBAL.defaultColor;
			});
		}

		// Charging animation
		const charging = this._hass?.states[this._config.charge_state_entity]?.state || '';
		if (charging == 'charging' || charging == 'Charging') {
			UTILS.updateElement(this._elements[this._selectors.root], (el) => {
				el.classList.add('glow');
				el.classList.remove('glow-off');
				// Set the color for the glow
				el.style.setProperty('--glow-color', this._config.charging_color || GLOW.colors.charging);
			});
		} else {
			UTILS.updateElement(this._elements[this._selectors.root], (el) => {
				el.classList.add('glow-off');
				el.classList.remove('glow-charging');
			});
		}
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