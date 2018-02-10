$(document).ready(initializeApp);

var first_card_clicked = null;
var match_counter = 0;
var attempt_counter = 0;
var anotherClickAllowed = true;
var cardArr = ['img/card-1.png', 'img/card-1.png', 'img/card-2.png', 'img/card-2.png',
			   'img/card-3.png', 'img/card-3.png', 'img/card-4.png', 'img/card-4.png',
			    'img/card-5.png', 'img/card-5.png', 'img/card-6.png', 'img/card-6.png',
			     'img/card-7.png', 'img/card-7.png', 'img/card-8.png', 'img/card-8.png',
			      'img/card-9.png', 'img/card-9.png'];

function initializeApp() {
	makeCards(cardArr);
	var card = $('#game .card');
	$(card).on('click', handleClick);
	$('#game .stats .reset').on('click', reset);
}

function handleClick() {
	if (first_card_clicked === null && anotherClickAllowed) {
		first_card_clicked = this;
		flipBack(this);
	} else {
		if(!$(this).hasClass('flipper') && anotherClickAllowed ){
			anotherClickAllowed= false;
			var second_card_clicked = this;
			flipBack(this);
			attempt_counter++;
			compareCards(first_card_clicked, second_card_clicked);
		}
	}
}

function flipBack(card) {
	$(card).addClass('flipper');
}

function showBack(card) {
	$(card).removeClass('flipper');
}

function compareCards(card1, card2) {
	var cardName1 = $(card1).find('.front img').attr('src');
	var cardName2 = $(card2).find('.front img').attr('src');
	if (cardName1 === cardName2){
		match_counter++;
		updateStats(match_counter);
		anotherClickAllowed = true;
		first_card_clicked = null;  //no need to check if second_card_clicked = null;
	} else {
		setTimeout(function(){
			showBack(card1);
			showBack(card2);
			setTimeout(function(){
			anotherClickAllowed = true;
			first_card_clicked = null;  //no need to check if second_card_clicked = null;
			}, 1050);
		}, 1500);
	}
}

function updateStats(score) {
	if (score%9 === 0 && score !== 0){
		var gameWon = (score/9).toString();
		$('#game .stats .games-played .value').text(gameWon);
		updateAttempts(attempt_counter.toString());
		updateAccuray((((score/attempt_counter).toFixed(2))*100).toString());
		displayWin();
	} 
}

function updateAttempts(num) {
	$('#game .stats .attempts .value').text((num).toString());
}

function updateAccuray(string) {
	$('#game .stats .accuracy .value').text(string + '%');
}

function reset() {
	$('#game .card').removeClass('flipper');
	$('.win_message').addClass('hide');
	anotherClickAllowed = true;
}

function displayWin() {
	setTimeout(function(){
		$('.win_message.hide').removeClass('hide');
	}, 1050);
	anotherClickAllowed = false;
}

function makeCards(cardArr) {
	var game_area = $('#game-area');
	for (var i = 0; i < cardArr.length; i++) {
		var card = $('<div>').addClass('card');
		var front = $('<div>').addClass('front');
		var back = $('<div>').addClass('back');
		var frontImg = $('<img>').addClass('front').attr('src', cardArr[i]);
		var backImg	= $('<img>').addClass('back').attr('src', 'img/card-back.png');
		front.append(frontImg);
		back.append(backImg);
		card.append(front);
		card.append(back);
		game_area.append(card);
	}
}