const navToggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

const init = () => {
	navToggle.addEventListener('click', () => {
		navToggle.classList.toggle('active');
		nav.classList.toggle('active');
	});
};

init();
