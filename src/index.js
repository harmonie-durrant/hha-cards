import {
	HHAAutomationCard,
	HHAPersonCard, HHAPersonCardEditor,
	HHARoomCard, HHARoomCardEditor,
	HHAAutomationCard, HHAAutomationCardEditor
} from './cards';

import { CARDS } from './constants.js';

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

add_card(CARDS.personCard, HHAPersonCard, HHAPersonCardEditor);

add_card(CARDS.roomCard, HHARoomCard, HHARoomCardEditor);

add_card(CARDS.automationCard, HHAAutomationCard, HHAAutomationCardEditor);

customElements.define(CARDS.automationCard.type, HHAAutomationCard);
	window.customCards = window.customCards || [];
	window.customCards.push({
		type: CARDS.automationCard.type,
		name: CARDS.automationCard.name,
		description: CARDS.automationCard.description
	});
	if (editorClass)
customElements.define(`${CARDS.automationCard.type}-editor`, HHAAutomationCardEditor);
