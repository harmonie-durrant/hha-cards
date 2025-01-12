
export const GLOBAL = {
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

export const CARDS = {
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
			{   name: 'charge_state_entity',
				label: { en: 'Charge State Entity', fr: 'Entité pour l\'état de la charge' },
				type: 'entity',
				required: false,
				description: {
					en: 'Select a charge state entity.',
					fr: 'Sélectionnez une entité pour voir l\'état de la charge.',
				}},
			{   name: 'charging_color',
				label: { en: 'Charging color', fr: 'Couleur pour la charge' },
				type: 'color',
				required: false,
				description: {
					en: 'Select the color for the charging glow.',
					fr: 'Sélectionnez la couleur pour la lueur de charge.',
				}},
		]
	},
	roomCard: {
		type: "hha-room-card",
		name: "HHA Room Card",
		description: "Get info about a room in your Home.",
		inputFields: [
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
			{   name: 'redirect',
				label: { en: 'Redirect URL', fr: 'URL de redirection' },
				type: 'text',
				required: false,
				description: {
					en: 'Enter a URL to redirect to.',
					fr: 'Saisissez une URL pour rediriger.',
				}},
			// TODO: hvac option for heating and cooling in one
			{   name: 'heating',
				label: { en: 'Heating toggle', fr: 'Toggle pour la chauffage.' },
				type: 'bool',
				required: false,
				description: {
					en: 'Select a switch or boolean selsor.',
					fr: 'Sélectionnez une switch ou un sensor booléen.',
				}},
			{   name: 'heating_color',
				label: { en: 'Heating color', fr: 'Couleur pour la chauffage' },
				type: 'color',
				required: false,
				description: {
					en: 'Select the color for the heating glow.',
					fr: 'Sélectionnez la couleur pour la lueur du chauffage.',
				}},
			{   name: 'cooling',
				label: { en: 'Cooling toggle', fr: 'Toggle pour la climatisation.' },
				type: 'bool',
				required: false,
				description: {
					en: 'Select a switch or boolean selsor.',
					fr: 'Sélectionnez une switch ou un sensor booléen.',
				}},
			{   name: 'cooling_color',
				label: { en: 'Cooling color', fr: 'Couleur pour la climatisation' },
				type: 'color',
				required: false,
				description: {
					en: 'Select the color for the cooling glow.',
					fr: 'Sélectionnez la couleur pour la lueur du climatisation.',
				}},
		]
	},
	automationCard: {
		type: "hha-automation-card",
		name: "HHA Automation Card",
		description: "Get info about automations in your Home.",
		inputFields: [
			{   name: 'entity',
				label: { en: 'Automation', fr: 'Automatisation' },
				type: 'automation',
				required: true,
				description: {
					en: 'Enter an automation entity.',
					fr: 'Saisissez une entité d\'automatisation.',
				}},
			{   name: 'name',
				label: { en: 'Automation Name', fr: 'Nom de l\'automatisation' },
				type: 'text',
				required: false,
				description: {
					en: 'Enter a name for the automation.',
					fr: 'Saisissez un nom pour l\'automatisation.',
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

export const LANG = {
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
			ENTITY_ERROR: "Le paramètre 'entity' est requis !",
			ENTITY_NOTFOUND: "Entité introuvable dans Home Assistant.",
			UNAVAILABLE: "Indisponible",
			NO_NAME: "Le paramètre 'name' est requis !",
			AWAY: "sorti(e)",
			UNKNOWN: "inconnu",
			HOME: "à la maison"
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

export const UTILS = {
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

export const GLOW = {
	colors: {
		charging: '#00FF00',
		heating: '#FF4D00',
		cooling: '#40A1EB',
		light: '#FFE79E',
	},
	cssGlowStyles: () => {
		return (`
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
		`)
	},
}