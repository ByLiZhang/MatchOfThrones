$(document).ready(initializeApp);

var first_card_clicked = null;
var match_counter = 0;

function initializeApp() {
	var card = $('#game .card');
	$(card).on('click', handleClick);
}

function handleClick() {
	hideBack(this);
	if (first_card_clicked === null) {
		first_card_clicked = this;
	} else {
		var second_card_clicked = this;
		compareCards(first_card_clicked, second_card_clicked);
	}
}

function hideBack(card) {
	$(card).addClass('hide');
}

function compareCards(card1, card2) {
	var cardName1 = $(card1).find('.front img').attr('src');
	var cardName2 = $(card2).find('.front img').attr('src');
	if (cardName1 === cardName2){
		match_counter++;
		updateScore(match_counter);
	} else {
		$(card1).removeClass('hide');
		$(card2).removeClass('hide');
	}
}

function updateScore(argument) {
	// body...
}
