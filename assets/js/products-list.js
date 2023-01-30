let product_swiper = new Swiper(".products-swiper", {

    slidesPerView: 'auto',
    keyboardControl: true,
    spaceBetween: 10,
    loop: false,
    navigation: {
        prevEl: '.product-prev',
        nextEl: '.product-next',
      },
    
      // And if we need scrollbar
      scrollbar: {
         el: '.product-scrollbar',
      },
});