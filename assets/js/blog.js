
let blogSwiper = new Swiper(".blog-box__list", {

    slidesPerView: 'auto',
    keyboardControl: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        prevEl: '.blog-prev',
        nextEl: '.blog-next',
      },
    
      scrollbar: {
        el: '.blog-scrollbar',
      },
});
