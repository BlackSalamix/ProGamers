document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar")
	const nav_list = document.querySelector(".navbar-collapse")
	const all_nav_items = document.querySelectorAll(".nav-link")
	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add("shadow-bg")
		} else {
			nav.classList.remove("shadow-bg")
		}
	}
	all_nav_items.forEach(item => item.addEventListener('click', () => nav_list.classList.remove('show')))
    window.addEventListener('scroll', addShadow)
});
