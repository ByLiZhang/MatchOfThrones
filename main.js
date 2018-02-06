$(document).ready(initializeApp);

function initializeApp() {
	var card = $('#game .card');
	$(card).on('click', flipCard);
}

function flipCard(event) {
	var back = event.target;
	console.log(back);
	$(back[2]).toggleClass('hide');
}