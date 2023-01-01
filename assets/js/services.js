let case_swiper = new Swiper(".services-swiper", {

    slidesPerView: 'auto',
    keyboardControl: true,
    spaceBetween: 10,
    navigation: {
        prevEl: '.service__swiper-prev',
        nextEl: '.service__swiper-next',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.service__scrollbaar',
      },
  });