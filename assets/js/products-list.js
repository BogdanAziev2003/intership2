let product_swiper = new Swiper(".products-swiper", {

    slidesPerView: 'auto',
    keyboardControl: true,
    spaceBetween: 10,
    loop: true,
    navigation: {
        prevEl: '.product__swiper-prev',
        nextEl: '.product__swiper-next',
      },
    
      // And if we need scrollbar
      scrollbar: {
         el: '.service__scrollbaar',
      },
});