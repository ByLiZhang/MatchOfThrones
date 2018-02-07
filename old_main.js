$(document).ready(initializeApp);

var first_card_clicked = null;
var second_card_clicked = null;
var match_counter = 0;

function initializeApp() {
	var card = $('#game .card');
	$(card).on('click', '.back', hideBack);
}

function hideBack() {
	$(this).addClass('hide');
	var frontImg = $(this).prev().children();
	var backImg = $(this);
	var first_card_src = '';
	var second_card_src = '';
	console.log(frontImg);
	if (first_card_clicked === null) {
		first_card_clicked = frontImg;
		first_card_src = first_card_clicked.attr('src');
		console.log(first_card_src);
		console.log(first_card_clicked);
	} else {
		second_card_clicked = frontImg;
		second_card_src = second_card_clicked.attr('src');
		console.log(second_card_src);
		console.log(second_card_clicked);

		if (first_card_src === second_card_src) {
			match_counter++;
			return
		} else {
			console.log('2nd card',second_card_clicked);
			setTimeout(function(){
				console.log('first card',first_card_clicked);
			}, 1000);
			// }
			// 		// first_card_clicked.removeClass('hide');
			// 		// second_card_clicked.removeClass('hide');
			// 	 $('#game .card .back').removeClass('hide'); // not good
			// 	// }, 1000);
			// }, 1000);
		}
	first_card_clicked = null;
	second_card_clicked = null;
	}
}

function getImageName() {
	console.log(this);
}