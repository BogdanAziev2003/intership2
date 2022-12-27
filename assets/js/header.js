let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu__body")
burger.addEventListener("click", ()=>{
    console.log("dwdwdwdwd")
    menu.classList.toggle("_active")
})
let catalogButton = document.querySelector(".menu__catalog-btn")
let catalog = document.querySelector(".header__catalog")
catalogButton.addEventListener("click", ()=>{
    catalog.classList.toggle("_active-catalog")
})