


const productsList = document.querySelectorAll('.product-card .product-card__inner');
productsList.forEach( (item, ind) => {
    if (ind % 2 != 0) {
        
        item.classList.add('flex-rev')
    }
})


// .flex-rev 