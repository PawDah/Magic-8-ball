const ball = document.querySelector('.ball-img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answers = [
	'Mój wywiad donosi: NIE',
	'Wygląda dobrze',
	'Kto wie?',
	'Zapomnij o tym',
	'Tak - w swoim czasie',
	'Prawie jak tak',
	'Nie teraz',
	'YES, YES, YES',
	'To musi poczekać',
	'Mam pewne wątpliwości',
	'Możesz na to liczyć',
	'Zbyt wcześnie aby powiedzieć',
	'Daj spokój',
	'Absolutnie',
	'Chyba żatrujesz?',
	'Na pewno nie',
	'Zrób to',
	'Prawdopodobnie',
	'Dla mnie rewelacja',
	'Na pewno tak',
];

const showAnswer = () => {
	answer.innerHTML = `<span>Odpowiedź:</span>${
		answers[Math.floor(Math.random() * answers.length)]
	}`;
};

const validation = () => {
	ball.classList.remove('shake-animation');
	if (input.value == '') {
		error.textContent = 'Musisz wpisać pytanie!';
		answer.innerHTML = '';
		return;
	}
	if (input.value.endsWith('?') == false) {
		error.textContent = 'Pytanie musi się kończyć znakiem zapytania (?)';
		answer.innerHTML = '';
	} else {
		showAnswer();
		error.textContent = '';
	}
};

const submit = () => {
	ball.classList.add('shake-animation');
	setTimeout(() => {
		validation();
	}, 1000);
};

ball.addEventListener('click', submit);
