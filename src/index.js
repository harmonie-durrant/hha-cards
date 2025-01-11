import {
	HHAPersonCard, HHAPersonCardEditor,
	HHARoomCard, HHARoomCardEditor
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
