let homeLink = document.querySelector(".home");
let aboutLink = document.querySelector(".about");
let contactLink = document.querySelector(".contact");
let privacyLink = document.querySelector(".privacy");


homeLink.addEventListener("click", async ()=>{
    let response  = await fetch("/about");
    let data = await response;
    console.log(data.url);
})
