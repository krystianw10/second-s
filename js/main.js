const burgerBtn = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__box-link')


const handleBtn = () => {
	nav.classList.toggle('toggle-nav')


	navLinks.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('toggle-nav')
		})
	})
}

burgerBtn.addEventListener('click', handleBtn)
