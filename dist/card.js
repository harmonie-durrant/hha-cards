
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
const $6f7bb9e4197d1082$export$17ff3f7e02c6ac22 = {
    styleEdit: {
        SHOW: 'block',
        SHOWF: 'flex',
        HIDE: 'none'
    },
    alertIcon: 'mdi:alert',
    helpIcon: 'mdi:help',
    awayIcon: 'mdi:home-export-outline',
    homeIcon: 'mdi:home',
    defaultColor: 'var(--state-icon-color)',
    colors: [
        {
            name: 'Default',
            value: 'var(--state-icon-color)'
        },
        {
            name: 'Accent',
            value: 'var(--accent-color)'
        },
        {
            name: 'Info',
            value: 'var(--info-color)'
        },
        {
            name: 'Success',
            value: 'var(--success-color)'
        },
        {
            name: 'Disable',
            value: 'var(--disabled-color)'
        },
        {
            name: 'Red',
            value: 'var(--red-color)'
        },
        {
            name: 'Pink',
            value: 'var(--pink-color)'
        },
        {
            name: 'Purple',
            value: 'var(--purple-color)'
        },
        {
            name: 'Deep purple',
            value: 'var(--deep-purple-color)'
        },
        {
            name: 'Indigo',
            value: 'var(--indigo-color)'
        },
        {
            name: 'Blue',
            value: 'var(--blue-color)'
        },
        {
            name: 'Light blue',
            value: 'var(--light-blue-color)'
        },
        {
            name: 'Cyan',
            value: 'var(--cyan-color)'
        },
        {
            name: 'Teal',
            value: 'var(--teal-color)'
        },
        {
            name: 'Green',
            value: 'var(--green-color)'
        },
        {
            name: 'Light green',
            value: 'var(--light-green-color)'
        },
        {
            name: 'Lime',
            value: 'var(--lime-color)'
        },
        {
            name: 'Yellow',
            value: 'var(--yellow-color)'
        },
        {
            name: 'Amber',
            value: 'var(--amber-color)'
        },
        {
            name: 'Orange',
            value: 'var(--orange-color)'
        },
        {
            name: 'Deep orange',
            value: 'var(--deep-orange-color)'
        },
        {
            name: 'Brown',
            value: 'var(--brown-color)'
        },
        {
            name: 'Light grey',
            value: 'var(--light-grey-color)'
        },
        {
            name: 'Grey',
            value: 'var(--grey-color)'
        },
        {
            name: 'Dark grey',
            value: 'var(--dark-grey-color)'
        },
        {
            name: 'Blue grey',
            value: 'var(--blue-grey-color)'
        },
        {
            name: 'Black',
            value: 'var(--black-color)'
        },
        {
            name: 'White',
            value: 'var(--white-color)'
        }
    ],
    layouts: [
        {
            name: 'Horizontal (default)',
            value: 'horizontal'
        },
        {
            name: 'Vertical',
            value: 'vertical'
        }
    ]
};
const $6f7bb9e4197d1082$export$5f768699f44cc740 = {
    personCard: {
        type: "hha-person-card",
        name: "HHA Person Card",
        description: "Get info on a person in your Home.",
        inputFields: [
            {
                name: 'entity',
                label: {
                    en: 'Entity',
                    fr: "Entit\xe9"
                },
                type: 'person',
                required: true,
                description: {
                    en: 'Select an person.',
                    fr: "S\xe9lectionnez une personne."
                }
            },
            {
                name: 'name',
                label: {
                    en: 'Name',
                    fr: 'Nom'
                },
                type: 'text',
                required: false,
                description: {
                    en: 'Enter a name for the entity.',
                    fr: "Saisissez un nom pour l'entit\xe9."
                }
            },
            {
                name: 'layout',
                label: {
                    en: 'Layout',
                    fr: 'Disposition'
                },
                type: 'layout',
                required: false,
                description: {
                    en: 'Select the layout.',
                    fr: "S\xe9lectionnez la disposition."
                }
            },
            {
                name: 'icon',
                label: {
                    en: 'Icon',
                    fr: "Ic\xf4ne"
                },
                type: 'icon',
                required: false,
                description: {
                    en: 'Select an icon for the entity.',
                    fr: "S\xe9lectionnez une ic\xf4ne pour l'entit\xe9."
                }
            },
            {
                name: 'color',
                label: {
                    en: 'Primary color',
                    fr: "Couleur de l'ic\xf4ne"
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the primary color for the icon.',
                    fr: "S\xe9lectionnez la couleur principale de l'ic\xf4ne."
                }
            },
            {
                name: 'charge_state_entity',
                label: {
                    en: 'Charge State Entity',
                    fr: "Entit\xe9 pour l'\xe9tat de la charge"
                },
                type: 'entity',
                required: false,
                description: {
                    en: 'Select a charge state entity.',
                    fr: "S\xe9lectionnez une entit\xe9 pour voir l'\xe9tat de la charge."
                }
            },
            {
                name: 'charging_color',
                label: {
                    en: 'Charging color',
                    fr: 'Couleur pour la charge'
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the color for the charging glow.',
                    fr: "S\xe9lectionnez la couleur pour la lueur de charge."
                }
            }
        ]
    },
    roomCard: {
        type: "hha-room-card",
        name: "HHA Room Card",
        description: "Get info about a room in your Home.",
        inputFields: [
            {
                name: 'name',
                label: {
                    en: 'Room Name',
                    fr: "Nom de la Pi\xe8ce"
                },
                type: 'text',
                required: true,
                description: {
                    en: 'Enter a name for the room.',
                    fr: "Saisissez un nom pour la pi\xe8ce."
                }
            },
            {
                name: 'layout',
                label: {
                    en: 'Layout',
                    fr: 'Disposition'
                },
                type: 'layout',
                required: false,
                description: {
                    en: 'Select the layout.',
                    fr: "S\xe9lectionnez la disposition."
                }
            },
            {
                name: 'icon',
                label: {
                    en: 'Icon',
                    fr: "Ic\xf4ne"
                },
                type: 'icon',
                required: false,
                description: {
                    en: 'Select an icon for the entity.',
                    fr: "S\xe9lectionnez une ic\xf4ne pour l'entit\xe9."
                }
            },
            {
                name: 'color',
                label: {
                    en: 'Primary color',
                    fr: "Couleur de l'ic\xf4ne"
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the primary color for the icon.',
                    fr: "S\xe9lectionnez la couleur principale de l'ic\xf4ne."
                }
            },
            // TODO: hvac option for heating and cooling in one
            {
                name: 'heating',
                label: {
                    en: 'Heating toggle',
                    fr: 'Toggle pour la chauffage.'
                },
                type: 'bool',
                required: false,
                description: {
                    en: 'Select a switch or boolean selsor.',
                    fr: "S\xe9lectionnez une switch ou un sensor bool\xe9en."
                }
            },
            {
                name: 'heating_color',
                label: {
                    en: 'Heating color',
                    fr: 'Couleur pour la chauffage'
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the color for the heating glow.',
                    fr: "S\xe9lectionnez la couleur pour la lueur du chauffage."
                }
            },
            {
                name: 'cooling',
                label: {
                    en: 'Cooling toggle',
                    fr: 'Toggle pour la climatisation.'
                },
                type: 'bool',
                required: false,
                description: {
                    en: 'Select a switch or boolean selsor.',
                    fr: "S\xe9lectionnez une switch ou un sensor bool\xe9en."
                }
            },
            {
                name: 'cooling_color',
                label: {
                    en: 'Cooling color',
                    fr: 'Couleur pour la climatisation'
                },
                type: 'color',
                required: false,
                description: {
                    en: 'Select the color for the cooling glow.',
                    fr: "S\xe9lectionnez la couleur pour la lueur du climatisation."
                }
            }
        ]
    },
    personCardv2: {
        type: "hha-person-card-2",
        name: "HHA Person Card 2",
        description: "Get info on a person in your Home. v2"
    }
};
const $6f7bb9e4197d1082$export$ce37e184d908d785 = {
    default: "en",
    messages: {
        en: {
            ENTITY_ERROR: "The 'entity' parameter is required!",
            ENTITY_NOTFOUND: "Entity not found in Home Assistant.",
            UNAVAILABLE: "Unavailable",
            NO_NAME: "The 'name' parameter is required!",
            AWAY: "away",
            UNKNOWN: "unknown",
            HOME: "home"
        },
        fr: {
            ENTITY_ERROR: "Le param\xe8tre 'entity' est requis !",
            ENTITY_NOTFOUND: "Entit\xe9 introuvable dans Home Assistant.",
            UNAVAILABLE: "Indisponible",
            NO_NAME: "Le param\xe8tre 'name' est requis !",
            AWAY: "sorti(e)",
            UNKNOWN: "inconnu",
            HOME: "\xe0 la maison"
        }
    },
    getLanguage: (language)=>{
        for(const key in $6f7bb9e4197d1082$export$ce37e184d908d785.messages){
            if (key === language) return key;
        }
        return $6f7bb9e4197d1082$export$ce37e184d908d785.default;
    }
};
const $6f7bb9e4197d1082$export$baddb3df286a0284 = {
    updateElement (element, callback) {
        if (element) {
            const newValue = callback(element);
            if (element.textContent !== newValue) callback(element);
        }
    },
    addChoices (select, options) {
        options.forEach((option)=>{
            const choice = document.createElement('mwc-list-item');
            choice.value = option.value;
            choice.innerText = option.name;
            select.appendChild(choice);
        });
    }
};
const $6f7bb9e4197d1082$export$41842ee8fe7a2916 = {
    colors: {
        charging: '#00FF00',
        heating: '#FF4D00',
        cooling: '#40A1EB',
        light: '#FFE79E'
    },
    cssGlowStyles: ()=>{
        return `
			.glow {
				animation: breathing-shadow 1.5s infinite alternate ease-in-out;
			}

			@keyframes breathing-shadow {
				0% {
					box-shadow: 0px 0px 10px 1px var(--glow-color);
				}
				100% {
					box-shadow: 0px 0px 13px 3px var(--glow-color);
				}
			}

			.glow-off {
				animation: none;
			}
		`;
    }
};



const $88fd31ba9313240f$export$2e51780da3c3a61 = (key, lang)=>(0, $6f7bb9e4197d1082$export$ce37e184d908d785).messages[lang]?.[key] || (0, $6f7bb9e4197d1082$export$ce37e184d908d785).messages[(0, $6f7bb9e4197d1082$export$ce37e184d908d785).default]?.[key] || '';


var $c8b68c45bd35b693$exports = {};
$c8b68c45bd35b693$exports = "<!-- Main container -->\r\n<div class=\"container\">\r\n\t<!-- Icon Section (avatar or icon) -->\r\n\t<div class=\"left\">\r\n\t\t<img class=\"avatar\" alt=\"avatar\">\r\n\t\t<div class=\"shape\"></div>\r\n\t\t<ha-icon class=\"icon\"></ha-icon>\r\n\t\t<div class=\"badge\">\r\n\t\t\t<ha-icon class=\"badge-icon\"></ha-icon>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Section droite avec le texte -->\r\n\t<div class=\"right\">\r\n\t\t<div class=\"name\"></div>\r\n\t\t<div class=\"status\"></div>\r\n\t</div>\r\n</div>\r\n<!-- HA Alert -->\r\n<ha-alert style=\"display: none\" type=\"error\"></ha-alert><script src=\"/card.f6a55a20.js\"></script>";


var $fd6996cfe1945934$exports = {};
$fd6996cfe1945934$exports = "ha-card {\n  --glow-color: \"#00FF00\";\n  box-sizing: border-box;\n  border: none;\n  border-radius: 8px;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n}\n\n.container {\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  margin: 7px 10px;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n}\n\n.left {\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  position: relative;\n}\n\n.shape {\n  background-color: var(--state-icon-color);\n  opacity: .2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: block;\n  position: absolute;\n}\n\n.avatar {\n  aspect-ratio: 1;\n  object-fit: fill;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: none;\n  position: absolute;\n}\n\n.icon {\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.badge {\n  z-index: 2;\n  --mdc-icon-size: var(--badge-icon-size, 12px);\n  background-color: #4caf50;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.badge-icon {\n  display: flex;\n}\n\n.right {\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: flex-start;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.name {\n  color: var(--primary-text-color);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  font-size: 1em;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.status {\n  color: var(--primary-text-color);\n  text-overflow: ellipsis;\n  font-size: .9em;\n}\n\nha-alert {\n  z-index: 10;\n  background-color: #000;\n  justify-content: center;\n  align-items: center;\n  width: 105%;\n  height: 110%;\n  display: flex;\n  position: absolute;\n  top: -1px;\n  left: -2px;\n}\n";


class $261d4ffc75f45809$export$ad7810377d4d2567 extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$ce37e184d908d785).default;
        this._hass = null;
        this._elements = {};
        this._isBuilt = false;
        this._config = {
            slug: (0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCard.type,
            name: (0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCard.name
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
            badge_icon: "badge-icon"
        };
        this._layout_size = {
            horizontal: {
                grid_rows: 1,
                grid_min_rows: 1,
                grid_columns: 2,
                grid_min_columns: 2
            },
            vertical: {
                grid_rows: 2,
                grid_min_rows: 2,
                grid_columns: 1,
                grid_min_columns: 1
            }
        };
    }
    static getConfigElement() {
        return document.createElement(`${(0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCard.type}-editor`);
    }
    setConfig(config) {
        const layoutChanged = this._config?.layout !== config.layout;
        this._config = config;
        this._max_value = this._config.max_value;
        if (this._config.unit) this._unit = this._config.unit;
        if (!this._isBuilt) {
            this._isBuilt = true;
            this._buildCard();
        }
        if (layoutChanged) this._changeLayout();
    }
    set hass(hass) {
        this._hass = hass;
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$ce37e184d908d785).getLanguage(hass.config.language);
        this._updateDynamicElements();
    }
    _buildCard() {
        const wrapper = document.createElement('ha-card');
        wrapper.classList.add(this._config.slug);
        wrapper.innerHTML = (0, (/*@__PURE__*/$parcel$interopDefault($c8b68c45bd35b693$exports)));
        const style = document.createElement('style');
        style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($fd6996cfe1945934$exports))) + (0, $6f7bb9e4197d1082$export$41842ee8fe7a2916).cssGlowStyles();
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
            [this._selectors.badge_icon]: this.shadowRoot.querySelector(`.${this._selectors.badge_icon}`)
        };
    }
    _changeLayout() {
        if (this._config.layout === (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[1].value) {
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
            this._showError((0, $88fd31ba9313240f$export$2e51780da3c3a61)('ENTITY_ERROR', this._currentLanguage));
            return;
        }
        this._hideError();
        const entity = this._hass?.states[this._config.entity];
        if (!entity) {
            this._showError((0, $88fd31ba9313240f$export$2e51780da3c3a61)('ENTITY_NOTFOUND', this._currentLanguage));
            return;
        }
        this._hideError();
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.name], (el)=>{
            el.textContent = this._config.name || entity.attributes.friendly_name || this._config.entity;
        });
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.status], (el)=>{
            if (!entity.state || entity.state == 'unavailable') el.textContent = (0, $88fd31ba9313240f$export$2e51780da3c3a61)('UNAVAILABLE', this._currentLanguage);
            else if (entity.state == 'home') el.textContent = (0, $88fd31ba9313240f$export$2e51780da3c3a61)('HOME', this._currentLanguage);
            else if (entity.state == 'unknown') el.textContent = (0, $88fd31ba9313240f$export$2e51780da3c3a61)('UNKNOWN', this._currentLanguage);
            else el.textContent = (0, $88fd31ba9313240f$export$2e51780da3c3a61)('AWAY', this._currentLanguage);
        });
        if (entity.state == 'home') {
            this._elements[this._selectors.badge].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.SHOWF;
            (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.badge_icon], (el)=>{
                el.setAttribute('icon', (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).homeIcon);
            });
            (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.badge], (el)=>{
                el.style.backgroundColor = '#4CAF50';
            });
        } else if (entity.state == 'not_home') {
            this._elements[this._selectors.badge].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.SHOWF;
            (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.badge_icon], (el)=>{
                el.setAttribute('icon', (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).awayIcon);
            });
            (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.badge], (el)=>{
                el.style.backgroundColor = "#F44336";
            });
        } else this._elements[this._selectors.badge].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.HIDE;
        var avatar = entity.attributes.entity_picture;
        if (avatar) {
            this._elements[this._selectors.avatar].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.SHOW;
            this._elements[this._selectors.shape].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.HIDE;
            this._elements[this._selectors.icon].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.HIDE;
            (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.avatar], (el)=>{
                el.src = avatar;
            });
        } else {
            this._elements[this._selectors.avatar].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.HIDE;
            this._elements[this._selectors.shape].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.SHOW;
            this._elements[this._selectors.icon].style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.SHOW;
            (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.icon], (el)=>{
                el.setAttribute('icon', this._config.icon || entity.attributes.icon || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).alertIcon);
                el.style.color = this._config.color || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).defaultColor;
            });
            (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.shape], (el)=>{
                el.style.backgroundColor = this._config.color || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).defaultColor;
            });
        }
        // Charging animation
        const charging = this._hass?.states[this._config.charge_state_entity]?.state || '';
        if (charging == 'charging' || charging == 'Charging') (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow');
            el.classList.remove('glow-off');
            // Set the color for the glow
            el.style.setProperty('--glow-color', this._config.charging_color || (0, $6f7bb9e4197d1082$export$41842ee8fe7a2916).colors.charging);
        });
        else (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow-off');
            el.classList.remove('glow-charging');
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
        if (alertElement) alertElement.style.display = 'none';
    }
    getCardSize() {
        if (this._config.layout === (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[1].value) return this._layout_size.vertical.grid_rows;
        return this._layout_size.horizontal.grid_rows;
    }
    getLayoutOptions() {
        if (this._config.layout === (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[1].value) return this._layout_size.vertical;
        return this._layout_size.horizontal;
    }
}




var $ad233402d5ceb9b9$exports = {};
$ad233402d5ceb9b9$exports = "<!-- Main container -->\r\n<div class=\"container\">\r\n\t<!-- Icon Section (avatar or icon) -->\r\n\t<div class=\"left\">\r\n\t\t<div class=\"shape\"></div>\r\n\t\t<ha-icon class=\"icon\"></ha-icon>\r\n\t</div>\r\n\r\n\t<!-- Section droite avec le texte -->\r\n\t<div class=\"right\">\r\n\t\t<div class=\"name\"></div>\r\n\t\t<div class=\"status\"></div>\r\n\t</div>\r\n</div>\r\n<!-- HA Alert -->\r\n<ha-alert style=\"display: none\" type=\"error\"></ha-alert><script src=\"/card.1439a8ac.js\"></script>";


var $3506481bf3e6fd87$exports = {};
$3506481bf3e6fd87$exports = "ha-card {\n  --glow-color: \"#FF4D00\";\n  box-sizing: border-box;\n  border: none;\n  border-radius: 8px;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n}\n\n.container {\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  margin: 7px 10px;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n}\n\n.left {\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  position: relative;\n}\n\n.shape {\n  background-color: var(--state-icon-color);\n  opacity: .2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: block;\n  position: absolute;\n}\n\n.icon {\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.right {\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: flex-start;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.name {\n  color: var(--primary-text-color);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  font-size: 1em;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.status {\n  color: var(--primary-text-color);\n  text-overflow: ellipsis;\n  font-size: .9em;\n}\n\nha-alert {\n  z-index: 10;\n  background-color: #000;\n  justify-content: center;\n  align-items: center;\n  width: 105%;\n  height: 110%;\n  display: flex;\n  position: absolute;\n  top: -1px;\n  left: -2px;\n}\n";


class $3a98db7cf4537cf5$export$a6f3b6d8cfe91fa4 extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$ce37e184d908d785).default;
        this._hass = null;
        this._elements = {};
        this._isBuilt = false;
        this._config = {
            slug: (0, $6f7bb9e4197d1082$export$5f768699f44cc740).roomCard.type,
            name: (0, $6f7bb9e4197d1082$export$5f768699f44cc740).roomCard.name
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
            alert: "alert"
        };
        this._layout_size = {
            horizontal: {
                grid_rows: 1,
                grid_min_rows: 1,
                grid_columns: 2,
                grid_min_columns: 2
            },
            vertical: {
                grid_rows: 2,
                grid_min_rows: 2,
                grid_columns: 1,
                grid_min_columns: 1
            }
        };
    }
    static getConfigElement() {
        return document.createElement(`${(0, $6f7bb9e4197d1082$export$5f768699f44cc740).roomCard.type}-editor`);
    }
    setConfig(config) {
        const layoutChanged = this._config?.layout !== config.layout;
        this._config = config;
        this._max_value = this._config.max_value;
        if (this._config.unit) this._unit = this._config.unit;
        if (!this._isBuilt) {
            this._isBuilt = true;
            this._buildCard();
        }
        if (layoutChanged) this._changeLayout();
    }
    set hass(hass) {
        this._hass = hass;
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$ce37e184d908d785).getLanguage(hass.config.language);
        this._updateDynamicElements();
    }
    _buildCard() {
        const wrapper = document.createElement('ha-card');
        wrapper.classList.add(this._config.slug);
        wrapper.innerHTML = (0, (/*@__PURE__*/$parcel$interopDefault($ad233402d5ceb9b9$exports)));
        const style = document.createElement('style');
        style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($3506481bf3e6fd87$exports))) + (0, $6f7bb9e4197d1082$export$41842ee8fe7a2916).cssGlowStyles();
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
            [this._selectors.alert]: this.shadowRoot.querySelector(`.${this._selectors.alert}`)
        };
    }
    _changeLayout() {
        if (this._config.layout === (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[1].value) {
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
            this._showError((0, $88fd31ba9313240f$export$2e51780da3c3a61)('NO_NAME', this._currentLanguage));
            return;
        }
        this._hideError();
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.name], (el)=>{
            el.textContent = this._config.name || (0, $88fd31ba9313240f$export$2e51780da3c3a61)('UNAVAILABLE', this._currentLanguage);
        });
        // const climate = this._hass?.states[this._config.climate]?.state || '';
        const heating = this._hass?.states[this._config.heating]?.state || '';
        const cooling = this._hass?.states[this._config.cooling]?.state || '';
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.status], (el)=>{
            el.textContent = heating == 'on' || heating == 'heating' ? "heating" : cooling == 'on' || cooling == 'cooling' ? "cooling" : "Off";
        });
        // icon
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.icon], (el)=>{
            el.setAttribute(this._selectors.icon, this._config.icon || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).alertIcon);
            el.style.color = this._config.color || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).defaultColor;
        });
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.shape], (el)=>{
            el.style.backgroundColor = this._config.color || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).defaultColor;
        });
        if (heating == 'on' || heating == 'heating') (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow');
            el.classList.remove('glow-off');
            // Set the color for the glow
            el.style.setProperty('--glow-color', this._config.heating_color || (0, $6f7bb9e4197d1082$export$41842ee8fe7a2916).colors.heating);
        });
        else if (cooling == 'on' || cooling == 'cooling') (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow');
            el.classList.remove('glow-off');
            // Set the color for the glow
            el.style.setProperty('--glow-color', this._config.cooling_color || (0, $6f7bb9e4197d1082$export$41842ee8fe7a2916).colors.cooling);
        });
        else (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.root], (el)=>{
            el.classList.add('glow-off');
            el.classList.remove('glow-heating');
            el.classList.remove('glow-cooling');
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
        if (alertElement) alertElement.style.display = 'none';
    }
    getCardSize() {
        if (this._config.layout === (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[1].value) return this._layout_size.vertical.grid_rows;
        return this._layout_size.horizontal.grid_rows;
    }
    getLayoutOptions() {
        if (this._config.layout === (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[1].value) return this._layout_size.vertical;
        return this._layout_size.horizontal;
    }
}


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$y(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$P(t, i) {
    if (!$f58f44579a4747ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$V(t, s);
        if (this.el = $f58f44579a4747ac$var$N.createElement(f, n), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$H : "?" === e[1] ? $f58f44579a4747ac$var$I : "@" === e[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$C.currentNode = e;
        let h = $f58f44579a4747ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$C.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.O($f58f44579a4747ac$var$l()), this.O($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$S(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$S(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$S(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$e,
    P: $f58f44579a4747ac$var$h,
    A: $f58f44579a4747ac$var$o,
    C: 1,
    L: $f58f44579a4747ac$var$V,
    R: $f58f44579a4747ac$var$M,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$k,
    N: $f58f44579a4747ac$var$I,
    U: $f58f44579a4747ac$var$L,
    B: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$j?.($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.2.1");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$i = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$i?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;







var $c8d81bd5f40983b1$export$2e2bcd8739ae039 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
	ha-card {
		--glow-color: '#00FF00';
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

	.container-column {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0;
		margin: 7px 10px;
		gap: 10px;
		width: 100%;
		height: 100%;
		overflow: hidden;
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
		background-color: var(--state-icon-color);
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

	.badge {
		z-index: 2;
		position: absolute;
		top: -3px;
		right: -3px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(76, 175, 80);
		width: 16px;
		height: 16px;
		border-radius: 50%;
		--mdc-icon-size: var(--badge-icon-size, 12px);
	}

	.badge-icon {
		display: flex;
	}

	.right-column {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex-grow: 0;
		overflow: hidden;
		width:90%;
		text-align: center;
	}

	.right {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		flex-grow: 1;
		overflow: hidden;
		width:100%;
		text-align: left;
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
`;


class $9edbe27cbaecc13b$export$372b3bb8d25ad5d3 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    _hass;
    static get properties() {
        return {
            _entity_name: {
                state: true
            },
            _entity_status: {
                state: true
            },
            _entity_picture: {
                state: true
            },
            _entity: {
                state: true
            }
        };
    }
    setConfig(config) {
        this._entityID = config.entity;
        this._charge_state_entity = config.charge_state_entity;
        this._charging_color = config.charging_color;
        this._icon_color = config.icon_color;
        this._icon = config.icon;
        if (this._hass) this.hass = this._hass;
    }
    set hass(hass) {
        this._hass = hass;
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$ce37e184d908d785).getLanguage(hass.config.language);
        this._layout = this._config.layout || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[0].value;
        this._entity = hass.states[this._entityID];
        if (!this._entity) {
            this._entity = null;
            return;
        }
        this._entity_status = this._entity.state;
        this._entity_name = this._entity.attributes.friendly_name;
        this._entity_picture = this._entity.attributes.entity_picture;
    }
    static styles = (0, $c8d81bd5f40983b1$export$2e2bcd8739ae039);
    render() {
        var content = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        if (!this._entityID || !this._entity) content = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
				<ha-alert alert="error" style="display:block;">${(0, $88fd31ba9313240f$export$2e51780da3c3a61)('ENTITY_ERROR', this._currentLanguage)}</ha-alert>
			`;
        else {
            this._entity_name = this._entity.attributes.friendly_name;
            this._entity_picture = this._entity.attributes.entity_picture;
            this._entity_status = this._entity.state;
            content = (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
				<div class="${this._layout === (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[1].value ? "container-column" : "container"}" @click="${this.openMoreInfo}">
					<div class="left">
						${this._entity_picture == null ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
								<div class="shape"></div>
								<ha-icon class="icon"></ha-icon>
							` : (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
								<img src="${this._entity_picture}" class="avatar" alt="avatar"></img>
							`}
						<div class="badge">
							<ha-icon class="badge-icon"></ha-icon>
						</div>
					</div>
					<div class="${this._layout === (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts[1].value ? "right-column" : "right"}">
						<div class="name">${this._name || this._entity_name}</div>
						<div class="status">${this._entity_status || (0, $88fd31ba9313240f$export$2e51780da3c3a61)('UNAVAILABLE', this._currentLanguage)}</div>
					</div>
				</div>
			`;
        }
        var glow = false;
        if (this._charge_state_entity && (this._charge_state_entity.state === 'charging' || this._charge_state_entity.state === 'Charging')) {
            glow = true;
            const glow_color = this._charging_color || (0, $6f7bb9e4197d1082$export$41842ee8fe7a2916).colors.charging;
            this.style.setProperty('--glow-color', glow_color);
        }
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
			<ha-card class="${glow ? 'glow' : 'glow-off'}">
				${content}
			</ha-card>
		`;
    }
    _fire(type, detail, options) {
        const event = new Event(type, {
            bubbles: options?.bubbles || true,
            cancelable: options?.cancelable || true,
            composed: options?.composed || true
        });
        event.detail = detail || {};
        this.dispatchEvent(event);
    }
    openMoreInfo(event) {
        if (this._entityID) this._fire('hass-more-info', {
            entityId: this._entityID
        });
    }
    static getConfigElement() {
        return document.createElement(`${(0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCardv2.type}-editor`);
    }
    static getStubConfig() {
        return {
            entity: "person.me"
        };
    }
}



class $e1ab43b7edcf407d$export$783e5511aa4d824d extends HTMLElement {
    constructor(){
        super();
        this._config = {};
        this._hass = null;
        this._overridableElements = {};
        this._rendered = false;
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).DEFAULT_LANG;
    }
    set hass(hass) {
        if (!hass) return;
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$ce37e184d908d785).getLanguage(hass.config.language);
        if (!this._hass || this._hass.entities !== hass.entities) {
            this._hass = hass;
            if (this._rendered) this.render();
        }
    }
    get hass() {
        return this._hass;
    }
    setConfig(config) {
        if (!this._hass) return;
        this._config = config;
        this.loadEntityPicker();
        if (!this._rendered) {
            this._rendered = true;
            this.render();
        }
    }
    _reorderConfig(config) {
        const { grid_options: grid_options, ...rest } = config;
        return grid_options ? {
            ...rest,
            grid_options: grid_options
        } : {
            ...rest
        };
    }
    _updateConfigProperty(key, value) {
        if (value === '') {
            if (key in this._config) delete this._config[key];
        } else this._config[key] = value;
        this._config = this._reorderConfig(this._config);
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: {
                config: this._config
            }
        }));
    }
    _addColor(colorSelect) {
        const noColorOption = document.createElement('mwc-list-item');
        noColorOption.value = '';
        noColorOption.innerHTML = `
			<span style="display: inline-block; width: 16px; height: 16px; background-color: transparent; border-radius: 50%; margin-right: 8px;"></span>
		`;
        colorSelect.appendChild(noColorOption);
        (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).colors.forEach((color)=>{
            const option = document.createElement('mwc-list-item');
            option.value = color.value;
            option.innerHTML = `
				<span style="display: inline-block; width: 16px; height: 16px; background-color: ${color.value}; border-radius: 50%; margin-right: 8px;"></span>
				${color.name}
			`;
            colorSelect.appendChild(option);
        });
    }
    _createField({ name: name, label: label, type: type, required: required = false, description: description }) {
        let inputElement;
        const value = this._config[name] || '';
        switch(type){
            case 'person':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                inputElement.includeDomains = [
                    'person',
                    'device_tracker'
                ];
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
                inputElement.popperOptions = "";
                (0, $6f7bb9e4197d1082$export$baddb3df286a0284).addChoices(inputElement, (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts);
                inputElement.addEventListener('closed', (event)=>{
                    event.stopPropagation();
                });
                break;
            case 'color':
                inputElement = document.createElement('ha-select');
                inputElement.popperOptions = "";
                this._addColor(inputElement);
                inputElement.addEventListener('closed', (event)=>{
                    event.stopPropagation();
                });
                break;
            default:
                inputElement = document.createElement('ha-textfield');
                inputElement.type = 'text';
        }
        inputElement.style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.SHOWF;
        inputElement.required = required;
        inputElement.label = label;
        inputElement.value = value;
        inputElement.addEventListener(type === 'color' || type === 'layout' ? 'selected' : type === 'entity' || type == 'person' || type === 'icon' ? 'value-changed' : 'input', (event)=>{
            const newValue = event.detail?.value || event.target.value;
            this._updateConfigProperty(name, newValue);
        });
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
            const c = await ch.createCardElement({
                type: "entities",
                entities: []
            });
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
        (0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCard.inputFields.forEach((field)=>{
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



class $3e3b493af902abcc$export$5ea5fe548a187fbc extends HTMLElement {
    constructor(){
        super();
        this._config = {};
        this._hass = null;
        this._overridableElements = {};
        this._rendered = false;
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).DEFAULT_LANG;
    }
    set hass(hass) {
        if (!hass) return;
        this._currentLanguage = (0, $6f7bb9e4197d1082$export$ce37e184d908d785).getLanguage(hass.config.language);
        if (!this._hass || this._hass.entities !== hass.entities) {
            this._hass = hass;
            if (this._rendered) this.render();
        }
    }
    get hass() {
        return this._hass;
    }
    setConfig(config) {
        if (!this._hass) return;
        this._config = config;
        this.loadEntityPicker();
        if (!this._rendered) {
            this._rendered = true;
            this.render();
        }
    }
    _reorderConfig(config) {
        const { grid_options: grid_options, ...rest } = config;
        return grid_options ? {
            ...rest,
            grid_options: grid_options
        } : {
            ...rest
        };
    }
    _updateConfigProperty(key, value) {
        if (value === '') {
            if (key in this._config) delete this._config[key];
        } else this._config[key] = value;
        this._config = this._reorderConfig(this._config);
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: {
                config: this._config
            }
        }));
    }
    _addColor(colorSelect) {
        const noColorOption = document.createElement('mwc-list-item');
        noColorOption.value = '';
        noColorOption.innerHTML = `
			<span style="display: inline-block; width: 16px; height: 16px; background-color: transparent; border-radius: 50%; margin-right: 8px;"></span>
		`;
        colorSelect.appendChild(noColorOption);
        (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).colors.forEach((color)=>{
            const option = document.createElement('mwc-list-item');
            option.value = color.value;
            option.innerHTML = `
				<span style="display: inline-block; width: 16px; height: 16px; background-color: ${color.value}; border-radius: 50%; margin-right: 8px;"></span>
				${color.name}
			`;
            colorSelect.appendChild(option);
        });
    }
    _createField({ name: name, label: label, type: type, required: required = false, description: description }) {
        let inputElement;
        const value = this._config[name] || '';
        switch(type){
            // case 'hvac': (not implemented yet)
            // 	inputElement = document.createElement('ha-entity-picker');
            // 	inputElement.hass = this._hass;
            // 	inputElement.includeDomains = ['climate'];
            // 	break;
            case 'bool':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                inputElement.includeDomains = [
                    'input_boolean',
                    'switch'
                ];
                break;
            case 'person':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                inputElement.includeDomains = [
                    'person',
                    'device_tracker'
                ];
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
                inputElement.popperOptions = "";
                (0, $6f7bb9e4197d1082$export$baddb3df286a0284).addChoices(inputElement, (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).layouts);
                inputElement.addEventListener('closed', (event)=>{
                    event.stopPropagation();
                });
                break;
            case 'color':
                inputElement = document.createElement('ha-select');
                inputElement.popperOptions = "";
                this._addColor(inputElement);
                inputElement.addEventListener('closed', (event)=>{
                    event.stopPropagation();
                });
                break;
            default:
                inputElement = document.createElement('ha-textfield');
                inputElement.type = 'text';
        }
        inputElement.style.display = (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).styleEdit.SHOWF;
        inputElement.required = required;
        inputElement.label = label;
        inputElement.value = value;
        inputElement.addEventListener(type === 'color' || type === 'layout' ? 'selected' : type === 'entity' || type == 'person' || type === 'icon' ? 'value-changed' : 'input', (event)=>{
            const newValue = event.detail?.value || event.target.value;
            this._updateConfigProperty(name, newValue);
        });
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
            const c = await ch.createCardElement({
                type: "entities",
                entities: []
            });
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
        (0, $6f7bb9e4197d1082$export$5f768699f44cc740).roomCard.inputFields.forEach((field)=>{
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



const $d832f2ef8a5ce6ac$var$add_card = (card, cardClass, editorClass)=>{
    customElements.define(card.type, cardClass);
    window.customCards = window.customCards || [];
    window.customCards.push({
        type: card.type,
        name: card.name,
        description: card.description
    });
    if (editorClass && editorClass !== null) customElements.define(`${card.type}-editor`, editorClass);
};
$d832f2ef8a5ce6ac$var$add_card((0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCard, (0, $261d4ffc75f45809$export$ad7810377d4d2567), (0, $e1ab43b7edcf407d$export$783e5511aa4d824d));
$d832f2ef8a5ce6ac$var$add_card((0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCardv2, (0, $9edbe27cbaecc13b$export$372b3bb8d25ad5d3), (0, $e1ab43b7edcf407d$export$783e5511aa4d824d));
$d832f2ef8a5ce6ac$var$add_card((0, $6f7bb9e4197d1082$export$5f768699f44cc740).roomCard, (0, $3a98db7cf4537cf5$export$a6f3b6d8cfe91fa4), (0, $3e3b493af902abcc$export$5ea5fe548a187fbc));


//# sourceMappingURL=card.js.map
