const GLOBAL = {
	styleEdit: {
		SHOW: 'block',
		SHOWF: 'flex',
		HIDE: 'none'
	},
	alertIcon: 'mdi:alert',
	defaultColor: 'var(--state-icon-color)',
	colors: [
		{ name: 'Default', value: 'var(--state-icon-color)' },
		{ name: 'Accent', value: 'var(--accent-color)' },
		{ name: 'Info', value: 'var(--info-color)' },
		{ name: 'Success', value: 'var(--success-color)' },
		{ name: 'Disable', value: 'var(--disabled-color)' },
		{ name: 'Red', value: 'var(--red-color)' },
		{ name: 'Pink', value: 'var(--pink-color)' },
		{ name: 'Purple', value: 'var(--purple-color)' },
		{ name: 'Deep purple', value: 'var(--deep-purple-color)' },
		{ name: 'Indigo', value: 'var(--indigo-color)' },
		{ name: 'Blue', value: 'var(--blue-color)' },
		{ name: 'Light blue', value: 'var(--light-blue-color)' },
		{ name: 'Cyan', value: 'var(--cyan-color)' },
		{ name: 'Teal', value: 'var(--teal-color)' },
		{ name: 'Green', value: 'var(--green-color)' },
		{ name: 'Light green', value: 'var(--light-green-color)' },
		{ name: 'Lime', value: 'var(--lime-color)' },
		{ name: 'Yellow', value: 'var(--yellow-color)' },
		{ name: 'Amber', value: 'var(--amber-color)' },
		{ name: 'Orange', value: 'var(--orange-color)' },
		{ name: 'Deep orange', value: 'var(--deep-orange-color)' },
		{ name: 'Brown', value: 'var(--brown-color)' },
		{ name: 'Light grey', value: 'var(--light-grey-color)' },
		{ name: 'Grey', value: 'var(--grey-color)' },
		{ name: 'Dark grey', value: 'var(--dark-grey-color)' },
		{ name: 'Blue grey', value: 'var(--blue-grey-color)' },
		{ name: 'Black', value: 'var(--black-color)' },
		{ name: 'White', value: 'var(--white-color)' }
	],
	layouts: [
		{ name: 'Horizontal (default)', value: 'horizontal' },
		{ name: 'Vertical', value: 'vertical' }
	],
}

const CARDS = {
	personCard: {
		type: "hha-person-card",
		name: "HHA Person Card",
		description: "Get info on a person in your Home.",
		inputFields: [
			{   name: 'entity',
				label: { en: 'Entity', fr: 'Entité' },
				type: 'person',
				required: true,
				description: {
					en: 'Select an person.',
					fr: 'Sélectionnez une personne.',
				}},
			{   name: 'charge_state_entity',
				label: { en: 'Charge State Entity', fr: 'Entité pour l\'état de la charge' },
				type: 'entity',
				required: false,
				description: {
					en: 'Select a charge state entity.',
					fr: 'Sélectionnez une entité pour voir l\'état de la charge.',
				}},
			{   name: 'name',
				label: { en: 'Name', fr: 'Nom' },
				type: 'text',
				required: false,
				description: {
					en: 'Enter a name for the entity.',
					fr: 'Saisissez un nom pour l\'entité.',
				}},
			{   name: 'layout',
				label: { en: 'Layout', fr: 'Disposition' },
				type: 'layout',
				required: false,
				description: {
					en: 'Select the layout.',
					fr: 'Sélectionnez la disposition.',
				}},
			{   name: 'icon',
				label: { en: 'Icon', fr: 'Icône' },
				type: 'icon',
				required: false,
				description: {
					en: 'Select an icon for the entity.',
					fr: 'Sélectionnez une icône pour l\'entité.',
				}},
			{   name: 'color',
				label: { en: 'Primary color', fr: 'Couleur de l\'icône' },
				type: 'color',
				required: false,
				description: {
					en: 'Select the primary color for the icon.',
					fr: 'Sélectionnez la couleur principale de l\'icône.',
				}},
		]
	},
	roomCard: {
		type: "hha-room-card",
		name: "HHA Room Card",
		description: "Get info about a room in your Home.",
		inputFields: [
			// TODO: hvac option for heating and cooling in one
			{   name: 'heating',
				label: { en: 'Heating toggle', fr: 'Toggle pour la chauffage.' },
				type: 'bool',
				required: false,
				description: {
					en: 'Select a switch or boolean selsor.',
					fr: 'Sélectionnez une switch ou un sensor booléen.',
				}},
			{   name: 'cooling',
				label: { en: 'Cooling toggle', fr: 'Toggle pour la climatisation.' },
				type: 'bool',
				required: false,
				description: {
					en: 'Select a switch or boolean selsor.',
					fr: 'Sélectionnez une switch ou un sensor booléen.',
				}},
			{   name: 'name',
				label: { en: 'Room Name', fr: 'Nom de la Pièce' },
				type: 'text',
				required: true,
				description: {
					en: 'Enter a name for the room.',
					fr: 'Saisissez un nom pour la pièce.',
				}},
			{   name: 'layout',
				label: { en: 'Layout', fr: 'Disposition' },
				type: 'layout',
				required: false,
				description: {
					en: 'Select the layout.',
					fr: 'Sélectionnez la disposition.',
				}},
			{   name: 'icon',
				label: { en: 'Icon', fr: 'Icône' },
				type: 'icon',
				required: false,
				description: {
					en: 'Select an icon for the entity.',
					fr: 'Sélectionnez une icône pour l\'entité.',
				}},
			{   name: 'color',
				label: { en: 'Primary color', fr: 'Couleur de l\'icône' },
				type: 'color',
				required: false,
				description: {
					en: 'Select the primary color for the icon.',
					fr: 'Sélectionnez la couleur principale de l\'icône.',
				}},
		]
	}
}

const LANG = {
	default: "en",
	messages: {
		en: {
			ENTITY_ERROR: "The 'entity' parameter is required!",
			ENTITY_NOTFOUND: "Entity not found in Home Assistant.",
			UNAVAILABLE: "Unavailable",
			NO_NAME: "The 'name' parameter is required!"
		},
		fr: {
			ENTITY_ERROR: "Le paramètre 'entity' est requis !",
			ENTITY_NOTFOUND: "Entité introuvable dans Home Assistant.",
			UNAVAILABLE: "Indisponible",
			NO_NAME: "Le paramètre 'name' est requis !"
		}
	},
	getLanguage: (language) => {
		for (const key in LANG.messages) {
			if (key === language) {
				return key;
			}
		}
		return LANG.default;
	}
}

const UTILS = {
    updateElement(element, callback) {
        if (element) {
            const newValue = callback(element);
            if (element.textContent !== newValue) {
                callback(element);
            }
        }
    },
    addChoices(select, options) {
        options.forEach(option => {
            const choice = document.createElement('mwc-list-item');
            choice.value = option.value;
            choice.innerText = option.name;
            select.appendChild(choice);
        });
    },
};

const GLOW = {
	colors: {
		charging: '#00FF00',
		heating: '#FF4D00',
		cooling: '#40A1EB',
		light: '#FFE79E',
	},
	offStyle: `
		.glow-off {
			animation: none;
		}
	`,
	cssGlowStyles: () => {
		let result = '';
		for (const key in GLOW.colors) {
			result = result + `
				.glow-${key} {
					animation: breathing-shadow-${key} 1.5s infinite alternate ease-in-out;
				}

				@keyframes breathing-shadow-${key} {
					0% {
						box-shadow: 0px 0px 10px 1px ${GLOW.colors[key]};
					}
					100% {
						box-shadow: 0px 0px 13px 3px ${GLOW.colors[key]};
					}
				}
			`
		};
		result = result + `
			.glow-off {
				animation: none;
			}
		`
		return (result)
	},
}

const getMessage = (key, lang) => LANG.messages[lang]?.[key] || LANG.messages[LANG.default]?.[key] || '';

const add_card = (card, cardClass, editorClass) => {
	customElements.define(card.type, cardClass);
	window.customCards = window.customCards || [];
	window.customCards.push({
		type: card.type,
		name: card.name,
		description: card.description
	});
	if (editorClass)
		customElements.define(`${card.type}-editor`, editorClass);
}

class HHAPersonCard extends HTMLElement {

	getHTML() {
		return (`
			<!-- Main container -->
			<div class="container">
				<!-- Icon Section (avatar or icon) -->
				<div class="left">
					<img src="" class="avatar"></img>
					<div class="shape"></div>
					<ha-icon class="icon"></ha-icon>
				</div>

				<!-- Section droite avec le texte -->
				<div class="right">
					<div class="name"></div>
					<div class="status"></div>
				</div>
			</div>
			<!-- HA Alert -->
			<ha-alert style="display:none;" type="error"></ha-alert>
		`)
	}

	getCSS() {
		return (`
			ha-card {
				border: none;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				padding: 0;
				box-sizing: border-box;
				border-radius: 8px;
				max-width: 600px;
				margin: 0 auto;
			}

			.container {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				padding: 0;
				margin: 7px 10px;
				gap: 10px;
				width: 100%;
				height: 100%;
				overflow: hidden;
			}

			.left {
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				width: 36px;
				height: 36px;
				flex-shrink: 0;
			}

			.shape {
				display: block;
				position: absolute;
				width: 36px;
				height: 36px;
				border-radius: 50%;
				background-color: ${GLOBAL.defaultColor};
				opacity: 0.2;
			}

			.avatar {
				display: none;
				position: absolute;
				width: 36px;
				height: 36px;
				border-radius: 50%;
				aspect-ratio: 1 / 1;
				object-fit: fill;
			}

			.icon {
				position: relative;
				z-index: 1;
				width: 24px;
				height: 24px;
			}

			.right {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				flex-grow: 1;
				overflow: hidden;
				width:100%;
			}

			.name {
				font-size: 1em;
				font-weight: bold;
				color: var(--primary-text-color);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
			}

			.status {
				font-size: 0.9em;
				color: var(--primary-text-color);
				text-overflow: ellipsis;
			}

			ha-alert {
				position: absolute;
				top: -1px;
				left: -2px;
				width: 105%;
				height: 110%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: black;
				z-index: 10;
			}

			${GLOW.cssGlowStyles()}
		`)
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this._currentLanguage = LANG.default;
		this._hass = null;
		this._elements = {};
		this._isBuilt = false;
		this._config = {
			slug: CARDS.personCard.type,
			name: CARDS.personCard.name
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
	}

	static getConfigElement() {
		return document.createElement(`${CARDS.personCard.type}-editor`);
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
		wrapper.innerHTML = this.getHTML();
		const style = document.createElement('style');
		style.textContent = this.getCSS();

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
				el.setAttribute(this._selectors.icon, this._config.icon || entity.attributes.icon || GLOBAL.alertIcon);
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
				el.classList.add('glow-charging');
				el.classList.remove('glow-off');
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

class HHAPersonCardEditor extends HTMLElement {

	constructor() {
		super();
		this._config = {};
		this._hass = null;
		this._overridableElements = {};
		this._rendered = false;
		this._currentLanguage = GLOBAL.DEFAULT_LANG;
	}

	set hass(hass) {
		if (!hass) {
			return;
		}
		this._currentLanguage = LANG.getLanguage(hass.config.language);
		if (!this._hass || this._hass.entities !== hass.entities) {
			this._hass = hass;
			if (this._rendered) {
				this.render();
			}
		}
	}

	get hass() {
		return this._hass;
	}

	setConfig(config) {
		if (!this._hass) {
			return;
		}
		this._config = config;
		this.loadEntityPicker();
		if (!this._rendered) {
			this._rendered = true;
			this.render();
		}
	}

	_reorderConfig(config) {
		const { grid_options, ...rest } = config;
		return grid_options ? { ...rest, grid_options } : { ...rest };
	}

	_updateConfigProperty(key, value) {
		if (value === '') {
			if (key in this._config) {
				delete this._config[key];
			}
		} else {
			this._config[key] = value;
		}
		this._config = this._reorderConfig(this._config);
		this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config } }));
	}

	_addColor(colorSelect) {
		const noColorOption = document.createElement('mwc-list-item');
		noColorOption.value = '';
		noColorOption.innerHTML = `
			<span style="display: inline-block; width: 16px; height: 16px; background-color: transparent; border-radius: 50%; margin-right: 8px;"></span>
		`;
		colorSelect.appendChild(noColorOption);

		GLOBAL.colors.forEach(color => {
			const option = document.createElement('mwc-list-item');
			option.value = color.value;
			option.innerHTML = `
				<span style="display: inline-block; width: 16px; height: 16px; background-color: ${color.value}; border-radius: 50%; margin-right: 8px;"></span>
				${color.name}
			`;
			colorSelect.appendChild(option);
		});
	}

	_createField({ name, label, type, required = false, description }) {
		let inputElement;
		const value = this._config[name] || '';

		switch (type) {
			case 'person':
				inputElement = document.createElement('ha-entity-picker');
				inputElement.hass = this._hass;
				inputElement.includeDomains = ['person', 'device_tracker'];
				break;
			case 'entity':
				inputElement = document.createElement('ha-entity-picker');
				inputElement.hass = this._hass;
				break;
			case 'icon':
				inputElement = document.createElement('ha-icon-picker');
				break;
			case 'layout':
				inputElement = document.createElement('ha-select');
				inputElement.popperOptions = ""
				UTILS.addChoices(inputElement, GLOBAL.layouts);
				inputElement.addEventListener('closed', (event) => {
					event.stopPropagation();
				});
				break;
			case 'color':
				inputElement = document.createElement('ha-select');
				inputElement.popperOptions = ""
				this._addColor(inputElement);
				inputElement.addEventListener('closed', (event) => {
					event.stopPropagation();
				});
				break;
			default:
				inputElement = document.createElement('ha-textfield');
				inputElement.type = 'text';
		}

		inputElement.style.display = GLOBAL.styleEdit.SHOWF;
		inputElement.required = required;
		inputElement.label = label;
		inputElement.value = value;

		inputElement.addEventListener(
			(type === 'color' || type === 'layout') ? 'selected' : (type === 'entity' || type =='person' || type === 'icon' ? 'value-changed' : 'input'),
			(event) => {
				const newValue = event.detail?.value || event.target.value;
				this._updateConfigProperty(name, newValue);
			}
		);

		const fieldContainer = document.createElement('div');
		fieldContainer.style.marginBottom = '12px';
		const fieldDescription = document.createElement('span');
		fieldDescription.style.width = '90%';
		fieldDescription.innerText = description;
		fieldDescription.style.fontSize = '12px';
		fieldDescription.style.color = '#888';

		fieldContainer.appendChild(inputElement);
		fieldContainer.appendChild(fieldDescription);

		return fieldContainer;
	}

	async loadEntityPicker() {
		if (!window.customElements.get("ha-entity-picker")) {
			const ch = await window.loadCardHelpers();
			const c = await ch.createCardElement({ type: "entities", entities: [] });
			await c.constructor.getConfigElement();
			const haEntityPicker = window.customElements.get("ha-entity-picker");
		}
	}

	render() {
		this.innerHTML = '';
		const fragment = document.createDocumentFragment();

		const container = document.createElement('div');
		container.style.display = 'flex';
		container.style.flexDirection = 'column';
		container.style.flexWrap = 'wrap';
		container.style.overflow = 'auto';
		container.style.overflowX = 'hidden';
		container.style.maxHeight = '100vh';

		CARDS.personCard.inputFields.forEach((field) => {
			container.appendChild(this._createField({
				name:field.name,
				label:field.label[this._currentLanguage],
				type:field.type,
				required:field.required,
				description: field.description[this._currentLanguage] }));
		});

		fragment.appendChild(container);
		this.appendChild(fragment);
	}
}

add_card(CARDS.personCard, HHAPersonCard, HHAPersonCardEditor);

class HHARoomCard extends HTMLElement {

	getHTML() {
		return (`
			<!-- Main container -->
			<div class="container">
				<!-- Icon Section (avatar or icon) -->
				<div class="left">
					<div class="shape"></div>
					<ha-icon class="icon"></ha-icon>
				</div>

				<!-- Section droite avec le texte -->
				<div class="right">
					<div class="name"></div>
					<div class="status"></div>
				</div>
			</div>
			<!-- HA Alert -->
			<ha-alert style="display:none;" type="error"></ha-alert>
		`)
	}

	getCSS() {
		return (`
			ha-card {
				border: none;
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				padding: 0;
				box-sizing: border-box;
				border-radius: 8px;
				max-width: 600px;
				margin: 0 auto;
			}

			.container {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				padding: 0;
				margin: 7px 10px;
				gap: 10px;
				width: 100%;
				height: 100%;
				overflow: hidden;
			}

			.left {
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				width: 36px;
				height: 36px;
				flex-shrink: 0;
			}

			.shape {
				display: block;
				position: absolute;
				width: 36px;
				height: 36px;
				border-radius: 50%;
				background-color: ${GLOBAL.defaultColor};
				opacity: 0.2;
			}

			.icon {
				position: relative;
				z-index: 1;
				width: 24px;
				height: 24px;
			}

			.right {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				flex-grow: 1;
				overflow: hidden;
				width:100%;
			}

			.name {
				font-size: 1em;
				font-weight: bold;
				color: var(--primary-text-color);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
			}

			.status {
				font-size: 0.9em;
				color: var(--primary-text-color);
				text-overflow: ellipsis;
			}

			ha-alert {
				position: absolute;
				top: -1px;
				left: -2px;
				width: 105%;
				height: 110%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: black;
				z-index: 10;
			}

			${GLOW.cssGlowStyles()}
		`)
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this._currentLanguage = LANG.default;
		this._hass = null;
		this._elements = {};
		this._isBuilt = false;
		this._config = {
			slug: CARDS.roomCard.type,
			name: CARDS.roomCard.name
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
	}

	static getConfigElement() {
		return document.createElement(`${CARDS.roomCard.type}-editor`);
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
		wrapper.innerHTML = this.getHTML();
		const style = document.createElement('style');
		style.textContent = this.getCSS();

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

		UTILS.updateElement(this._elements[this._selectors.icon], (el) => {
			el.setAttribute(this._selectors.icon, this._config.icon || GLOBAL.alertIcon);
			el.style.color = this._config.color || GLOBAL.defaultColor;
		});
		UTILS.updateElement(this._elements[this._selectors.shape], (el) => {
			el.style.backgroundColor = this._config.color || GLOBAL.defaultColor;
		});

		if (heating == 'on' || heating == 'heating') {
			UTILS.updateElement(this._elements[this._selectors.root], (el) => {
				el.classList.add('glow-heating');
				el.classList.remove('glow-off');
			});
		} else if (cooling == 'on' || cooling == 'cooling') {
			UTILS.updateElement(this._elements[this._selectors.root], (el) => {
				el.classList.add('glow-cooling');
				el.classList.remove('glow-off');
			});
		} else {
			UTILS.updateElement(this._elements[this._selectors.root], (el) => {
				el.classList.add('glow-off');
				el.classList.remove('glow-heating');
				el.classList.remove('glow-cooling');
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

class HHARoomCardEditor extends HTMLElement {

	constructor() {
		super();
		this._config = {};
		this._hass = null;
		this._overridableElements = {};
		this._rendered = false;
		this._currentLanguage = GLOBAL.DEFAULT_LANG;
	}

	set hass(hass) {
		if (!hass) {
			return;
		}
		this._currentLanguage = LANG.getLanguage(hass.config.language);
		if (!this._hass || this._hass.entities !== hass.entities) {
			this._hass = hass;
			if (this._rendered) {
				this.render();
			}
		}
	}

	get hass() {
		return this._hass;
	}

	setConfig(config) {
		if (!this._hass) {
			return;
		}
		this._config = config;
		this.loadEntityPicker();
		if (!this._rendered) {
			this._rendered = true;
			this.render();
		}
	}

	_reorderConfig(config) {
		const { grid_options, ...rest } = config;
		return grid_options ? { ...rest, grid_options } : { ...rest };
	}

	_updateConfigProperty(key, value) {
		if (value === '') {
			if (key in this._config) {
				delete this._config[key];
			}
		} else {
			this._config[key] = value;
		}
		this._config = this._reorderConfig(this._config);
		this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config } }));
	}

	_addColor(colorSelect) {
		const noColorOption = document.createElement('mwc-list-item');
		noColorOption.value = '';
		noColorOption.innerHTML = `
			<span style="display: inline-block; width: 16px; height: 16px; background-color: transparent; border-radius: 50%; margin-right: 8px;"></span>
		`;
		colorSelect.appendChild(noColorOption);

		GLOBAL.colors.forEach(color => {
			const option = document.createElement('mwc-list-item');
			option.value = color.value;
			option.innerHTML = `
				<span style="display: inline-block; width: 16px; height: 16px; background-color: ${color.value}; border-radius: 50%; margin-right: 8px;"></span>
				${color.name}
			`;
			colorSelect.appendChild(option);
		});
	}

	_createField({ name, label, type, required = false, description }) {
		let inputElement;
		const value = this._config[name] || '';

		switch (type) {
			// case 'hvac': (not implemented yet)
			// 	inputElement = document.createElement('ha-entity-picker');
			// 	inputElement.hass = this._hass;
			// 	inputElement.includeDomains = ['climate'];
			// 	break;
			case 'bool':
				inputElement = document.createElement('ha-entity-picker');
				inputElement.hass = this._hass;
				inputElement.includeDomains = ['input_boolean', 'switch'];
				break;
			case 'person':
				inputElement = document.createElement('ha-entity-picker');
				inputElement.hass = this._hass;
				inputElement.includeDomains = ['person', 'device_tracker'];
				break;
			case 'entity':
				inputElement = document.createElement('ha-entity-picker');
				inputElement.hass = this._hass;
				break;
			case 'icon':
				inputElement = document.createElement('ha-icon-picker');
				break;
			case 'layout':
				inputElement = document.createElement('ha-select');
				inputElement.popperOptions = ""
				UTILS.addChoices(inputElement, GLOBAL.layouts);
				inputElement.addEventListener('closed', (event) => {
					event.stopPropagation();
				});
				break;
			case 'color':
				inputElement = document.createElement('ha-select');
				inputElement.popperOptions = ""
				this._addColor(inputElement);
				inputElement.addEventListener('closed', (event) => {
					event.stopPropagation();
				});
				break;
			default:
				inputElement = document.createElement('ha-textfield');
				inputElement.type = 'text';
		}

		inputElement.style.display = GLOBAL.styleEdit.SHOWF;
		inputElement.required = required;
		inputElement.label = label;
		inputElement.value = value;

		inputElement.addEventListener(
			(type === 'color' || type === 'layout') ? 'selected' : (type === 'entity' || type =='person' || type === 'icon' ? 'value-changed' : 'input'),
			(event) => {
				const newValue = event.detail?.value || event.target.value;
				this._updateConfigProperty(name, newValue);
			}
		);

		const fieldContainer = document.createElement('div');
		fieldContainer.style.marginBottom = '12px';
		const fieldDescription = document.createElement('span');
		fieldDescription.style.width = '90%';
		fieldDescription.innerText = description;
		fieldDescription.style.fontSize = '12px';
		fieldDescription.style.color = '#888';

		fieldContainer.appendChild(inputElement);
		fieldContainer.appendChild(fieldDescription);

		return fieldContainer;
	}

	async loadEntityPicker() {
		if (!window.customElements.get("ha-entity-picker")) {
			const ch = await window.loadCardHelpers();
			const c = await ch.createCardElement({ type: "entities", entities: [] });
			await c.constructor.getConfigElement();
			const haEntityPicker = window.customElements.get("ha-entity-picker");
		}
	}

	render() {
		this.innerHTML = '';
		const fragment = document.createDocumentFragment();

		const container = document.createElement('div');
		container.style.display = 'flex';
		container.style.flexDirection = 'column';
		container.style.flexWrap = 'wrap';
		container.style.overflow = 'auto';
		container.style.overflowX = 'hidden';
		container.style.maxHeight = '100vh';

		CARDS.roomCard.inputFields.forEach((field) => {
			container.appendChild(this._createField({
				name:field.name,
				label:field.label[this._currentLanguage],
				type:field.type,
				required:field.required,
				description: field.description[this._currentLanguage] }));
		});

		fragment.appendChild(container);
		this.appendChild(fragment);
	}
}

add_card(CARDS.roomCard, HHARoomCard, HHARoomCardEditor);
