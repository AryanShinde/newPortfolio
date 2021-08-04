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
        // slideTl.fromTo(header,{y:"-100"},{y:"0%"},"-=0.5");

        //scrollMagic
        SlideScene=new ScrollMagic.Scene({
            triggerElement:slide,
            triggerHook:0.58,
            // reverse:false,
        }).setTween(slideTl).addIndicators({colorStart:"white"}).addTo(controller)
        
        NavScene=new ScrollMagic.Scene({
            triggerElement:".hero-img",
            triggerHook:0.10,
        }).addIndicators({colorStart:"white",name:"nav-trig"}).addTo(controller).setClassToggle(".nav-header","active");


    });



 
}

window.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{const nav=document.querySelector(".nav-header");
    nav.classList.add("fix");},1000)
    }
);
const mouse=document.querySelector(".cursor");

window.addEventListener("mousemove",mouseDetect);
function mouseDetect(e)
{
    mouse.style.top=e.pageY+"px";
    mouse.style.left=e.pageX+"px";
}

window.addEventListener("mouseover",mouseAnimate);
const swipe1=document.querySelector(".t-swipe1");
const swipe2=document.querySelector(".t-swipe2");
const swipe3=document.querySelector(".t-swipe3");
function mouseAnimate(e)
{
    if(e.target.classList.contains("burger"))
    {
       mouse.classList.add("burger-active"); 
        console.log("f")
    }
    else{
        mouse.classList.remove("burger-active");
    }
    if(e.target.classList.contains("btn"))
    {
        mouse.classList.add("burger-active");
    }
    else{
        mouse.classList.remove("burge-active");
    }
    if(e.target.classList.contains("hero-github"))
    {
        swipe1.classList.add("s1-active");
    }
    else{
        swipe1.classList.remove("s1-active");
    }
    if(e.target.classList.contains("btn-projects"))
    {
        swipe2.classList.add("s2-active");
    }
    else{
        swipe2.classList.remove("s2-active");
    }
    if(e.target.classList.contains("btn-blog"))
    {
        swipe3.classList.add("s3-active");
    }
    else{
        swipe3.classList.remove("s3-active");
    }
}



animateSlides();

