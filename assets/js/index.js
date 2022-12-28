const swiper = new Swiper('.main__swiper', {
    // Optional parameters
    direction: 'horizontal',
  
    // Navigation arrows
    navigation: {
      nextEl: '.main__button-next',
      prevEl: '.main__button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.main__scrollbar',
    },
  });

console.log(swiper)