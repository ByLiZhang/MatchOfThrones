$(document).ready(initializeApp);

var first_card_clicked = null;
var second_card_clicked = null;

function initializeApp() {
	var card = $('#game .card');
	$(card).on('click', '.back', hideBack);
}

function hideBack() {
	$(this).addClass('hide');
	var frontImg = $(this).prev().children();
	console.log(frontImg);
	if (first_card_clicked === null) {
		first_card_clicked = frontImg.attr('src');
		console.log(first_card_clicked);
	} else {
		second_card_clicked = frontImg.attr('src');
		console.log(second_card_clicked);
		if (first_card_clicked === second_card_clicked) {
			return
		} else {
			setTimeout(function(){
				$('#game .card .back').removeClass('hide');
			}, 2000);
		}
	}

	
}

function getImageName() {
	console.log(this);
}