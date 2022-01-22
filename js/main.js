const burgerBtn = document.querySelector('.header__bars-menu')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__box-link')
const navBtnBars = document.querySelector('.header__bars-menu-item')
const allSections = document.querySelectorAll('.section')

const handleBtn = () => {
	nav.classList.toggle('toggle-nav')
	navBtnBars.classList.toggle('cross-btn')
	navBtnBars.classList.remove('black-bars-color')

	navLinks.forEach(item => {
		item.addEventListener('click', () => {
			navBtnBars.classList.remove('cross-btn')
		})
	})

	navLinks.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('toggle-nav')
		})
	})
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

burgerBtn.addEventListener('click', handleBtn)
window.addEventListener('scroll', handleObserver)
