function showMenu(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(toggle && menu){
        toggle.addEventListener("click",function(){
            menu.classList.toggle('active');
        })
    }
}
showMenu("burger" , "menu");

const heroSlider = new Swiper(".hero_cont", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,


    },
    loop: true,
   
    effect: "cube",
    cubeEffect: {
        shadow: true,
        slideShodows: true,
        shadowOffset: 20,
        shadowScale: 0.9,
    },
    navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",

    },
});

const brawlStars = ScrollReveal({
    resert: true,
    distance: "100px",
    duration: 1000,
})

brawlStars.reveal(".item-shop",{
    origin: "bottom",
    interval: 200,
})