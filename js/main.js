


const productsList = document.querySelectorAll('.product-card .product-card__inner');
productsList.forEach( (item, ind) => {
    if (ind % 2 != 0) {
        item.classList.add('flex-rev')
    }
})


// burger + menu

const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	mobileMenu.classList.toggle("active");
	document.body.classList.toggle("stopScroll");
});


const links = document.querySelectorAll('.mobile-menu__item');
links.forEach( i => {
    i.addEventListener('click', () => {
        burger.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.classList.remove("stopScroll");
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 800) {
        document.body.classList.remove("stopScroll");
        burger.classList.remove("active");
        mobileMenu.classList.remove("active");
    }
})