$('.otherProduts_carousel').owlCarousel({
    loop: false,
    items : 4,
    margin:10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1100:{
            items: 4
        }

    }
});

$('.purchase_carousel').owlCarousel({
    loop: true,
    items : 4,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});

