// Mobile Menu Burger
function burgerMenu() {
	const menu = document.querySelector('#mobile-menu')
	const burger = document.querySelector('#burger')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('hidden')
		menu.classList.toggle('flex')
		body.classList.toggle('overflow-hidden')
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.add('hidden')
			menu.classList.remove('flex')
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})
}
burgerMenu()

// Hero Slider
new Swiper('.swiper-hero', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next-hero',
		prevEl: '.swiper-button-prev-hero',
	},
})

// Discover Slider
new Swiper('.swiper-discover', {
	// Optional parameters
	loop: true,
	spaceBetween: 30,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},

		// when window width is >= 640px
		640: {
			slidesPerView: 2,
		},

		// when window width is >= 992px
		992: {
			slidesPerView: 3,
		},
	},
})
