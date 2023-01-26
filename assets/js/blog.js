
let blogSwiper = new Swiper(".blog-box__list", {

    slidesPerView: 'auto',
    keyboardControl: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        prevEl: '.blog-box__arrow-prev',
        nextEl: '.blog-box__arrow-next',
      },
    
      scrollbar: {
        //  el: '.blog-box__skrollbar',
      },
});
