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
const burger=document.querySelector(".burger");
burger.addEventListener("click",navOpen);
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
function navOpen(e)
{
    const line1=(e.target.children[0]);
    const line2=e.target.children[1];
    const line3=e.target.children[2];
    if(!burger.classList.contains("active"))
    {
        gsap.to(line2,1,{x:'100',opacity:'0',});
        gsap.to(line1,0.3,{rotate:"42",y:'8.8',});
        gsap.to(line3,0.3,{rotate:"-42",y:'-8.8',});
        gsap.to(burger,0.5,{rotate:'360'});
        gsap.to('.navbar',1.2,{clipPath:'circle(2500px at 100% -10%'});
        document.body.classList.add("hide");
        burger.classList.add("active")
    }
    else{
        gsap.to(line1,0.2,{rotate:"0",y:'0',x:'0',background:'white'});
        gsap.to(line3,0.2,{rotate:"0",y:'0',background:'white'});
        gsap.to(burger,0.4,{rotate:'0'})
        gsap.to(line2,1,{x:'0',opacity:'1',background:'white'});
        document.body.classList.remove("hide");
        gsap.to('.navbar',1.2,{clipPath:'circle(50px at 100% -10%'});
       

        burger.classList.remove("active")
    }
}


animateSlides();

