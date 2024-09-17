


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