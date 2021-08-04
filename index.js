let controller;
let SlideScene;

function animateSlides() {
    controller = new ScrollMagic.Controller();

    const sliders = document.querySelectorAll(".slide");
    const header = document.querySelector(".nav-header");

    sliders.forEach(slide => {
        const revealImg = slide.querySelector(".reveal-img");
        const revealText = slide.querySelector(".reveal-text");
        const img = slide.querySelector("img");

        const slideTl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.inOut"
            }
        })
        slideTl.fromTo(revealImg,{x:"0%"},{x:"100%"});
        slideTl.fromTo(img,{scale:"1"},{scale:"1.2"},"-=1");
        slideTl.fromTo(revealText,{x:"0%"},{x:"100%"},"-=1");
        slideTl.fromTo(header,{y:"-100"},{y:"0%"},"-=0.5");

        //scrollMagic
        SlideScene=new ScrollMagic.Scene({
            triggerElement:slide,
            triggerHook:0.20,
            reverse:false,
        }).setTween(slideTl).addIndicators({colorStart:"white"}).addTo(controller)
        
        NavScene=new ScrollMagic.Scene({
            triggerElement:".hero-img",
            triggerHook:0.10,
        }).addIndicators({colorStart:"white",name:"nav-trig"}).addTo(controller).setClassToggle(".nav-header","active");


    })
}
animateSlides();