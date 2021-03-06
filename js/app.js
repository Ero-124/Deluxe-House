// Меню бургер для моб.
const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

document.onclick = function (e) {
	if (e.target.id !== 'menu' && e.target.id !== 'toggle') {
		menu.classList.remove('active');
		toggle.classList.remove('active');
		body.classList.remove('lock');
	}
}
toggle.onclick = function () {
	menu.classList.toggle('active');
	toggle.classList.toggle('active');
	body.classList.toggle('lock');
}


// Слайдер для studios-swiper
const studiosSwiper = new Swiper('.studios-swiper', {
	navigation: {
		nextEl: '._icon-arrow-right',
		prevEl: '._icon-arrow-left',
	},
	grabCursor: true,
})

// Слайдер для swiper-block
const blockSlider = new Swiper('.swiper-block', {
	navigation: {
		nextEl: '._icon-arrow-right',
		prevEl: '._icon-arrow-left',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	grabCursor: true,
})


// Таб
const tabItems = Array.from(document.querySelectorAll('.term-item'));
const contentItems = Array.from(document.querySelectorAll('.term__content-item'));

const clearActiveClass = (element, className = 'is-active') => {
	element.find(item => item.classList.remove(`${className}`))
}

const setActiveClass = (element, index, className = 'is-active') => {
	element[index].classList.add(`${className}`)
}

const checkoutTabs = (item, index) => {
	item.addEventListener('click', () => {

		if (item.classList.contains('is-active')) return
		console.log('item')

		clearActiveClass(tabItems)
		clearActiveClass(contentItems)

		setActiveClass(tabItems, index)
		setActiveClass(contentItems, index)

	})
}
tabItems.forEach(checkoutTabs);



// LightGallery JS
lightGallery(document.querySelector("#lightgallery"));

lightGallery(document.querySelector("#lightgallery-proj"));


// Аккордеон
const accordion = document.getElementsByClassName('useful-tips__item');

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active');
	})
}

// Выпадашка для большого текста

function readMore() {
	let dots = document.getElementById('dots');
	let more = document.getElementById('more');
	let btn = document.getElementById('btn');

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btn.style.transform = "rotate(0deg)";
		more.style.display = "none";
	} else {
		dots.style.display = "none";
		btn.style.transform = "rotate(180deg)";
		more.style.display = "inline";
	}
}