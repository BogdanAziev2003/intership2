let placeSwiper1 = new Swiper(".place__swiper-1", {

    slidesPerView: 'auto',
    keyboardControl: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        prevEl: '.place__button-prev-1',
        nextEl: '.place__button-next-1',
      },
    
      // And if we need scrollbar
      scrollbar: {
         el: '.place__scrollbaar-1',
      },
});

let placeSwiper2 = new Swiper(".place__swiper-2", {

    slidesPerView: 'auto',
    keyboardControl: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        prevEl: '.place__button-prev-2',
        nextEl: '.place__button-next-2',
      },
    
      // And if we need scrollbar
      scrollbar: {
         el: '.place__scrollbaar-2',
      },
});

let placeSwiper3 = new Swiper(".place__swiper-3", {

    slidesPerView: 'auto',
    keyboardControl: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        prevEl: '.place__button-prev-3',
        nextEl: '.place__button-next-3',
      },
    
      // And if we need scrollbar
      scrollbar: {
         el: '.place__scrollbaar-3',
      },
});

let placeSwiper4 = new Swiper(".place__swiper-4", {

    slidesPerView: 'auto',
    keyboardControl: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        prevEl: '.place__button-prev-4',
        nextEl: '.place__button-next-4',
      },
    
      // And if we need scrollbar
      scrollbar: {
         el: '.place__scrollbaar-4',
      },
});

let placeImageBlocks = document.querySelectorAll(".element__image-block")
placeImageBlocks.forEach((elem)=>{
    elem.addEventListener("mouseover", ()=>{
        elem.querySelector(".element__white-block").classList.remove("element__white-block_none")
    })
    elem.addEventListener("mouseout", ()=>{
        elem.querySelector(".element__white-block").classList.add("element__white-block_none")
    })
})