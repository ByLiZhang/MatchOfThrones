$(document).ready(initializeApp);

var first_card_clicked = null;
var match_counter = 0;
var attempt_counter = 0;

function initializeApp() {
	var card = $('#game .card');
	$(card).on('click', handleClick);
}

function handleClick() {
	if (first_card_clicked === null) {
		first_card_clicked = this;
		// console.log('1st clicked', first_card_clicked);
		hideBack(this);
	} else {
		if(!$(this).hasClass('hide')){
			var second_card_clicked = this;
			// console.log('2nd clicked',second_card_clicked);
			hideBack(this);
			attempt_counter++;
			compareCards(first_card_clicked, second_card_clicked);
		}	
	}
}

function hideBack(card) {
	$(card).addClass('hide');
}

function showBack(card) {
	$(card).removeClass('hide');
}

function compareCards(card1, card2) {
	var cardName1 = $(card1).find('.front img').attr('src');
	var cardName2 = $(card2).find('.front img').attr('src');
	// console.log(cardName1);
	// console.log(cardName2);
	if (cardName1 === cardName2){
		match_counter++;
		// console.log(match_counter);
		updateStats(match_counter);
	} else {
		setTimeout(function(){
			showBack(card1);
			showBack(card2);
		}, 1500);
	}
	first_card_clicked = null;  //no need to check if second_card_clicked = null;
}

function updateStats(score) {
	if (score%9 === 0 && score !== 0){
		var gameWon = (score/9).toString();
		$('#game .stats .games-played .value').text(gameWon);
		updateAttempts(attempt_counter.toString());
		updateAccuray((score/attempt_counter).toString());
		alert('YOU WON!');
	} 
}

function updateAttempts(num) {
	$('#game .stats .attempts .value').text((num).toString());
}

function updateAccuray(string) {
	$('#game .stats .accuracy .value').text(string);
}