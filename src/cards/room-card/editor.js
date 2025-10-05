import { GLOBAL, CARDS, LANG, UTILS } from '../../constants.js';

const CARD_FIELDS = CARDS.roomCard.inputFields;

export class HHARoomCardEditor extends HTMLElement {

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
		const newConfig = { ...this._config };
		if (value === '') {
			delete newConfig[key];
		} else {
			newConfig[key] = value;
		}
		this._config = this._reorderConfig(newConfig);
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
			(type === 'color' || type === 'layout') ? 'selected' : (type === 'entity' || type === 'person' || type === 'bool' || type === 'icon' ? 'value-changed' : 'input'),
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

		CARD_FIELDS.forEach((field) => {
			container.appendChild(this._createField({
				name: field.name,
				label: field.label[this._currentLanguage],
				type: field.type,
				required: field.required,
				description: field.description[this._currentLanguage]
			}));
		});

		fragment.appendChild(container);
		this.appendChild(fragment);
	}
}