let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu__body")
let body = document.querySelector("body")
burger.addEventListener("click", ()=>{
    console.log("dwdwdwdwd")
    menu.classList.toggle("_active")
    body.classList.toggle("_no-overflow")
    burger.innerHTML = menu.classList.contains("_active")?
    `
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3161 3.41421L12.9019 2L8.65932 6.24262L4.41674 2.00003L3.00252 3.41425L7.24511 7.65683L3.00244 11.8995L4.41665 13.3137L8.65932 9.07104L12.902 13.3137L14.3162 11.8995L10.0735 7.65683L14.3161 3.41421Z" fill="#192040"/>
    </svg>
    `
    :
    `
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.14286C0 0.535714 0.5 0 1.14286 0H14.8571C15.4643 0 16 0.535714 16 1.14286C16 1.78571 15.4643 2.28571 14.8571 2.28571H1.14286C0.5 2.28571 0 1.78571 0 1.14286ZM0 6.85714C0 6.25 0.5 5.71429 1.14286 5.71429H14.8571C15.4643 5.71429 16 6.25 16 6.85714C16 7.5 15.4643 8 14.8571 8H1.14286C0.5 8 0 7.5 0 6.85714ZM14.8571 13.7143H1.14286C0.5 13.7143 0 13.2143 0 12.5714C0 11.9643 0.5 11.4286 1.14286 11.4286H14.8571C15.4643 11.4286 16 11.9643 16 12.5714C16 13.2143 15.4643 13.7143 14.8571 13.7143Z" fill="#192040"/>
    </svg>
    `
})
