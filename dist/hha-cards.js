const GLOBAL = {
	STYLE_EDIT: {
		SHOW: 'block',
		SHOWF: 'flex',
		HIDE: 'none'
	},
	ALERT_ICON: 'mdi:alert',
	DEFAULT_COLOR: 'var(--state-icon-color)',
	COLORS: [
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
	LAYOUTS: [
		{ name: 'Horizontal (default)', value: 'horizontal' },
		{ name: 'Vertical', value: 'vertical' }
	],
	EDITOR_INPUT_FIELDS: {
		PERSON_CARD: [
			{   name: 'entity',
				label: { en: 'Entity', fr: 'Entité', es: 'Entidad', de: 'Entität', },
				type: 'entity',
				required: true,
				description: {
					en: 'Select an entity from Home Assistant.',
					fr: 'Sélectionnez une entité de Home Assistant.',
					es: 'Seleccione una entidad de Home Assistant.',
					de: 'Wählen Sie eine Entität aus Home Assistant.',
				}},
			{   name: 'name',
				label: { en: 'Name', fr: 'Nom', es: 'Nombre', de: 'Name', },
				type: 'text',
				required: false,
				description: {
					en: 'Enter a name for the entity.',
					fr: 'Saisissez un nom pour l\'entité.',
					es: 'Introduzca un nombre para la entidad.',
					de: 'Geben Sie einen Namen für die Entität ein.',
				}},
			{   name: 'layout',
				label: { en: 'Layout', fr: 'Disposition', es: 'Disposición', de: 'Layout', },
				type: 'layout',
				required: false,
				description: {
					en: 'Select the layout.',
					fr: 'Sélectionnez la disposition.',
					es: 'Seleccione la disposición.',
					de: 'Wählen Sie das Layout.',
				}},
			{   name: 'icon',
				label: { en: 'Icon', fr: 'Icône', es: 'Icono', de: 'Symbol', },
				type: 'icon',
				required: false,
				description: {
					en: 'Select an icon for the entity.',
					fr: 'Sélectionnez une icône pour l\'entité.',
					es: 'Seleccione un icono para la entidad.',
					de: 'Wählen Sie ein Symbol für die Entität.',
				}},
			{   name: 'color',
				label: { en: 'Primary color', fr: 'Couleur de l\'icône', es: 'Color del icono', de: 'Primärfarbe', },
				type: 'color',
				required: false,
				description: {
					en: 'Select the primary color for the icon.',
					fr: 'Sélectionnez la couleur principale de l\'icône.',
					es: 'Seleccione el color principal del icono.',
					de: 'Wählen Sie die Primärfarbe für das Symbol.',
				}},
		],
		// TODO: add more cards here
	},
	DEFAULT_LANG: "en",
	LANGUAGES: {
		en: true,
		fr: true
	},
	MESSAGES: {
		en: {
			ENTITY_ERROR: "Le paramètre 'entity' est requis !",
			ENTITY_NOTFOUND: "Entité introuvable dans Home Assistant.",
			UNAVAILABLE: "Unavailable"
		},
		fr: {
			ENTITY_ERROR: "Le paramètre 'entity' est requis !",
			ENTITY_NOTFOUND: "Entité introuvable dans Home Assistant.",
			UNAVAILABLE: "Indisponible"
		}
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

const getMessage = (key, lang) => GLOBAL.MESSAGES[lang]?.[key] || '';

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
				background-color: ${GLOBAL.DEFAULT_COLOR};
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
        this._currentLanguage = GLOBAL.DEFAULT_LANG;
		this._hass = null;
        this._elements = {};
        this._isBuilt = false;
		this._config = {
			slug: "hha-person-card",
			name: "HHA: Person Card"
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
		this._layout = [
			{ name: 'Horizontal (default)', value: 'horizontal' },
			{ name: 'Vertical', value: 'vertical' }
		];
		this._layout_size = {
			horizontal: { grid_rows: 1, grid_min_rows: 1, grid_columns: 2, grid_min_columns: 2 },
			vertical:   { grid_rows: 2, grid_min_rows: 2, grid_columns: 1, grid_min_columns: 1 }
		}
	}

	static getConfigElement() {
        return document.createElement("hha-person-card-editor");
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
        this._currentLanguage = GLOBAL.LANGUAGES[hass.config.language] ? hass.config.language : GLOBAL.DEFAULT_LANG;
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
		const entity = this._hass?.states[this._config.entity];
		if (this._config.layout === this._layout[1].value) {
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
			this._elements[this._selectors.avatar].style.display = GLOBAL.STYLE_EDIT.SHOW;
			this._elements[this._selectors.shape].style.display = GLOBAL.STYLE_EDIT.HIDE;
			this._elements[this._selectors.icon].style.display = GLOBAL.STYLE_EDIT.HIDE;
			UTILS.updateElement(this._elements[this._selectors.avatar], (el) => {
				el.src = avatar;
			});
		} else {
			this._elements[this._selectors.avatar].style.display = GLOBAL.STYLE_EDIT.HIDE;
			this._elements[this._selectors.shape].style.display = GLOBAL.STYLE_EDIT.SHOW;
			this._elements[this._selectors.icon].style.display = GLOBAL.STYLE_EDIT.SHOW;
			UTILS.updateElement(this._elements[this._selectors.icon], (el) => {
				el.setAttribute(this._selectors.icon, this._config.icon || entity.attributes.icon || GLOBAL.ALERT_ICON);
				el.style.color = this._config.color || GLOBAL.DEFAULT_COLOR;
			});
			UTILS.updateElement(this._elements[this._selectors.shape], (el) => {
				el.style.backgroundColor = this._config.color || GLOBAL.DEFAULT_COLOR;
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
        if (this._config.layout === this._layout[1].value) {
            return this._layout_size.vertical.grid_rows;
        }
        return this._layout_size.horizontal.grid_rows;
    }

    getLayoutOptions() {
        if (this._config.layout === this._layout[1].value) {
            return this._layout_size.vertical;
        }
        return this._layout_size.horizontal;
    }
}

HHAPersonCard._moduleLoaded = false;
customElements.define("hha-person-card", HHAPersonCard);

window.customCards = window.customCards || [];
window.customCards.push({
    type: "hha-person-card",
    name: "HHA Person Card",
    description: "Get info on a person in your Home."
});

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
        this._currentLanguage = GLOBAL.LANGUAGES[hass.config.language] ? hass.config.language : DEF_LANG;
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

        GLOBAL.COLORS.forEach(color => {
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
				UTILS.addChoices(inputElement, GLOBAL.LAYOUTS);
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

        inputElement.style.display = GLOBAL.STYLE_EDIT.SHOWF;
        inputElement.required = required;
        inputElement.label = label;
        inputElement.value = value;

        inputElement.addEventListener(
            (type === 'color' || type === 'layout') ? 'selected' : (type === 'entity' || type === 'icon' ? 'value-changed' : 'input'),
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

        GLOBAL.EDITOR_INPUT_FIELDS.PERSON_CARD.forEach((field) => {
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

customElements.define("hha-person-card-editor", HHAPersonCardEditor);
