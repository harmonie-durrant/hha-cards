
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/* CARDS */ const $6f7bb9e4197d1082$export$17ff3f7e02c6ac22 = {
    styleEdit: {
        SHOW: 'block',
        SHOWF: 'flex',
        HIDE: 'none'
    },
    autoIcon: 'mdi:auto-mode',
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
            {
                name: 'redirect',
                label: {
                    en: 'Redirect URL',
                    fr: 'URL de redirection'
                },
                type: 'text',
                required: false,
                description: {
                    en: 'Enter a URL to redirect to.',
                    fr: 'Saisissez une URL pour rediriger.'
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
    automationCard: {
        type: "hha-automation-card",
        name: "HHA Automation Card",
        description: "Get info about automations in your Home.",
        inputFields: [
            {
                name: 'entity',
                label: {
                    en: 'Automation',
                    fr: 'Automatisation'
                },
                type: 'automation',
                required: true,
                description: {
                    en: 'Enter an automation entity.',
                    fr: "Saisissez une entit\xe9 d'automatisation."
                }
            },
            {
                name: 'name',
                label: {
                    en: 'Automation Name',
                    fr: 'Nom de l\'automatisation'
                },
                type: 'text',
                required: false,
                description: {
                    en: 'Enter a name for the automation.',
                    fr: 'Saisissez un nom pour l\'automatisation.'
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
            }
        ]
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
$fd6996cfe1945934$exports = "ha-card {\n  --glow-color: \"#00FF00\";\n  box-sizing: border-box;\n  border: none;\n  border-radius: 8px;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n}\n\n.container {\n  cursor: pointer;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  margin: 7px 10px;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n}\n\n.left {\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  position: relative;\n}\n\n.shape {\n  background-color: var(--state-icon-color);\n  opacity: .2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: block;\n  position: absolute;\n}\n\n.avatar {\n  aspect-ratio: 1;\n  object-fit: fill;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: none;\n  position: absolute;\n}\n\n.icon {\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.badge {\n  z-index: 2;\n  --mdc-icon-size: var(--badge-icon-size, 12px);\n  background-color: #4caf50;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.badge-icon {\n  display: flex;\n}\n\n.right {\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: flex-start;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.name {\n  color: var(--primary-text-color);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  font-size: 1em;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.status {\n  color: var(--primary-text-color);\n  text-overflow: ellipsis;\n  font-size: .9em;\n}\n\nha-alert {\n  z-index: 10;\n  background-color: #000;\n  justify-content: center;\n  align-items: center;\n  width: 105%;\n  height: 110%;\n  display: flex;\n  position: absolute;\n  top: -1px;\n  left: -2px;\n}\n";


const $261d4ffc75f45809$var$CARD_DATA = (0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCard;
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
            slug: $261d4ffc75f45809$var$CARD_DATA.type,
            name: $261d4ffc75f45809$var$CARD_DATA.name
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
        this.addEventListener('click', this._showMoreInfo.bind(this));
    }
    static getConfigElement() {
        return document.createElement(`${$261d4ffc75f45809$var$CARD_DATA.type}-editor`);
    }
    setConfig(config) {
        const layoutChanged = this._config?.layout !== config.layout;
        this._config = config;
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
    _showMoreInfo() {
        if (this._config && this._config.entity) this.dispatchEvent(new CustomEvent('hass-more-info', {
            bubbles: true,
            composed: true,
            detail: {
                entityId: this._config.entity
            }
        }));
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
$3506481bf3e6fd87$exports = "ha-card {\n  --glow-color: \"#FF4D00\";\n  box-sizing: border-box;\n  border: none;\n  border-radius: 8px;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n}\n\n.container {\n  cursor: pointer;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  margin: 7px 10px;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n}\n\n.left {\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  position: relative;\n}\n\n.shape {\n  background-color: var(--state-icon-color);\n  opacity: .2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: block;\n  position: absolute;\n}\n\n.icon {\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.right {\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: flex-start;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.name {\n  color: var(--primary-text-color);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  font-size: 1em;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.status {\n  color: var(--primary-text-color);\n  text-overflow: ellipsis;\n  font-size: .9em;\n}\n\nha-alert {\n  z-index: 10;\n  background-color: #000;\n  justify-content: center;\n  align-items: center;\n  width: 105%;\n  height: 110%;\n  display: flex;\n  position: absolute;\n  top: -1px;\n  left: -2px;\n}\n";


const $3a98db7cf4537cf5$var$CARD_DATA = (0, $6f7bb9e4197d1082$export$5f768699f44cc740).roomCard;
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
            slug: $3a98db7cf4537cf5$var$CARD_DATA.type,
            name: $3a98db7cf4537cf5$var$CARD_DATA.name
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
        this.addEventListener('click', this._navigate.bind(this));
    }
    static getConfigElement() {
        return document.createElement(`${$3a98db7cf4537cf5$var$CARD_DATA.type}-editor`);
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
        // Pointer
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.container], (el)=>{
            el.style.cursor = this._config && this._config.redirect ? 'pointer' : 'default';
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
    _navigate() {
        if (this._config && this._config.redirect) {
            // dont refresh page to navigate if redirect starts with #
            if (this._config.redirect.startsWith('#')) {
                window.location.href = this._config.redirect;
                return;
            }
            window.open(this._config.redirect, '_blank');
        }
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




var $f852706b81d5457b$exports = {};
$f852706b81d5457b$exports = "<!-- Main container -->\r\n<div class=\"container\">\r\n\t<!-- Icon Section (avatar or icon) -->\r\n\t<div class=\"left\">\r\n\t\t<img class=\"avatar\" alt=\"avatar\">\r\n\t\t<div class=\"shape\"></div>\r\n\t\t<ha-icon class=\"icon\"></ha-icon>\r\n\t</div>\r\n\r\n\t<!-- Section droite avec le texte -->\r\n\t<div class=\"right\">\r\n\t\t<div class=\"name\"></div>\r\n\t\t<div class=\"status\"></div>\r\n\t</div>\r\n</div>\r\n<!-- HA Alert -->\r\n<ha-alert style=\"display: none\" type=\"error\"></ha-alert><script src=\"/card.f5f5b52c.js\"></script>";


var $bdcf0e48dd3f2b63$exports = {};
$bdcf0e48dd3f2b63$exports = "ha-card {\n  --glow-color: \"#00FF00\";\n  box-sizing: border-box;\n  border: none;\n  border-radius: 8px;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n}\n\n.container {\n  cursor: pointer;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n  margin: 7px 10px;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n}\n\n.left {\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  position: relative;\n}\n\n.shape {\n  background-color: var(--state-icon-color);\n  opacity: .2;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: block;\n  position: absolute;\n}\n\n.avatar {\n  aspect-ratio: 1;\n  object-fit: fill;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: none;\n  position: absolute;\n}\n\n.icon {\n  z-index: 1;\n  width: 24px;\n  height: 24px;\n  position: relative;\n}\n\n.badge {\n  z-index: 2;\n  --mdc-icon-size: var(--badge-icon-size, 12px);\n  background-color: #4caf50;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.badge-icon {\n  display: flex;\n}\n\n.right {\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: flex-start;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n\n.name {\n  color: var(--primary-text-color);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n  font-size: 1em;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.status {\n  color: var(--primary-text-color);\n  text-overflow: ellipsis;\n  font-size: .9em;\n}\n\nha-alert {\n  z-index: 10;\n  background-color: #000;\n  justify-content: center;\n  align-items: center;\n  width: 105%;\n  height: 110%;\n  display: flex;\n  position: absolute;\n  top: -1px;\n  left: -2px;\n}\n";


const $7769f3d3893bce30$var$CARD_DATA = (0, $6f7bb9e4197d1082$export$5f768699f44cc740).automationCard;
class $7769f3d3893bce30$export$d0f2c6a290ca64b6 extends HTMLElement {
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
            slug: $7769f3d3893bce30$var$CARD_DATA.type,
            name: $7769f3d3893bce30$var$CARD_DATA.name
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
        this.addEventListener('click', this._showMoreInfo.bind(this));
    }
    static getConfigElement() {
        return document.createElement(`${$7769f3d3893bce30$var$CARD_DATA.type}-editor`);
    }
    setConfig(config) {
        const layoutChanged = this._config?.layout !== config.layout;
        this._config = config;
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
        wrapper.innerHTML = (0, (/*@__PURE__*/$parcel$interopDefault($f852706b81d5457b$exports)));
        const style = document.createElement('style');
        style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($bdcf0e48dd3f2b63$exports))) + (0, $6f7bb9e4197d1082$export$41842ee8fe7a2916).cssGlowStyles();
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
            el.textContent = entity.state || (0, $88fd31ba9313240f$export$2e51780da3c3a61)('UNAVAILABLE', this._currentLanguage);
        });
        // icon
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.icon], (el)=>{
            el.setAttribute(this._selectors.icon, this._config.icon || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).autoIcon);
            el.style.color = this._config.color || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).defaultColor;
        });
        (0, $6f7bb9e4197d1082$export$baddb3df286a0284).updateElement(this._elements[this._selectors.shape], (el)=>{
            el.style.backgroundColor = this._config.color || (0, $6f7bb9e4197d1082$export$17ff3f7e02c6ac22).defaultColor;
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
    _showMoreInfo() {
        if (this._config && this._config.entity) this.dispatchEvent(new CustomEvent('hass-more-info', {
            bubbles: true,
            composed: true,
            detail: {
                entityId: this._config.entity
            }
        }));
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



const $e1ab43b7edcf407d$var$CARD_FIELDS = (0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCard.inputFields;
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
        $e1ab43b7edcf407d$var$CARD_FIELDS.forEach((field)=>{
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



const $3e3b493af902abcc$var$CARD_FIELDS = (0, $6f7bb9e4197d1082$export$5f768699f44cc740).roomCard.inputFields;
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
        $3e3b493af902abcc$var$CARD_FIELDS.forEach((field)=>{
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



const $c97284bc6ad136b0$var$CARD_FIELDS = (0, $6f7bb9e4197d1082$export$5f768699f44cc740).automationCard.inputFields;
class $c97284bc6ad136b0$export$6a595fcb47d642b0 extends HTMLElement {
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
            case 'automation':
                inputElement = document.createElement('ha-entity-picker');
                inputElement.hass = this._hass;
                inputElement.includeDomains = [
                    'automation'
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
        $c97284bc6ad136b0$var$CARD_FIELDS.forEach((field)=>{
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





const $d832f2ef8a5ce6ac$var$add_card = (card, cardClass, editorClass1)=>{
    customElements.define(card.type, cardClass);
    window.customCards = window.customCards || [];
    window.customCards.push({
        type: card.type,
        name: card.name,
        description: card.description
    });
    if (editorClass1) customElements.define(`${card.type}-editor`, editorClass1);
};
$d832f2ef8a5ce6ac$var$add_card((0, $6f7bb9e4197d1082$export$5f768699f44cc740).personCard, (0, $261d4ffc75f45809$export$ad7810377d4d2567), (0, $e1ab43b7edcf407d$export$783e5511aa4d824d));
$d832f2ef8a5ce6ac$var$add_card((0, $6f7bb9e4197d1082$export$5f768699f44cc740).roomCard, (0, $3a98db7cf4537cf5$export$a6f3b6d8cfe91fa4), (0, $3e3b493af902abcc$export$5ea5fe548a187fbc));
$d832f2ef8a5ce6ac$var$add_card((0, $6f7bb9e4197d1082$export$5f768699f44cc740).automationCard, (0, $7769f3d3893bce30$export$d0f2c6a290ca64b6), (0, $c97284bc6ad136b0$export$6a595fcb47d642b0));
customElements.define((0, $6f7bb9e4197d1082$export$5f768699f44cc740).automationCard.type, (0, $7769f3d3893bce30$export$d0f2c6a290ca64b6));
window.customCards = window.customCards || [];
window.customCards.push({
    type: (0, $6f7bb9e4197d1082$export$5f768699f44cc740).automationCard.type,
    name: (0, $6f7bb9e4197d1082$export$5f768699f44cc740).automationCard.name,
    description: (0, $6f7bb9e4197d1082$export$5f768699f44cc740).automationCard.description
});
if (editorClass) customElements.define(`${(0, $6f7bb9e4197d1082$export$5f768699f44cc740).automationCard.type}-editor`, (0, $c97284bc6ad136b0$export$6a595fcb47d642b0));


//# sourceMappingURL=index.js.map
