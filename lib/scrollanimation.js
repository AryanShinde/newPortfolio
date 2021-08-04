//way-1 getting height and checking
const heroImg = document.querySelector(".hero-img");
const header = document.querySelector(".nav-header");
const projects = document.querySelector(".projects");
// window.addEventListener("scroll",navColor);

// function navColor()
// {
//     const imgPos=heroImg.getBoundingClientRect().top //gives the height of the object from top;
//     const windowHeight=window.innerHeight/4; //gives the height of the window
//     if(imgPos<windowHeight)
//     {
//         header.style.boxShadow="0px 2px 5px #2e4c75"
//     }
//     else{
//         header.style.boxShadow=""
//     }
// }

//way-2 using intersection 

// const options={
//     threshold:0.5,
// }
// let observer= new IntersectionObserver(animate,options);

// function animate(entries)
// {
//     entries.forEach(proj=>{
//         if(proj.isIntersecting)
//         {
//             console.log(proj);
//             projects.style.background="white";
//         }
//         else{
//             projects.style.background="";
//         }
//     })
// }

// observer.observe(projects);

//way-3 scrollMagic

const controller = new ScrollMagic.Controller();

const projectSlide = new ScrollMagic.Scene({
    triggerElement: ".projects",
    triggerHook: 0.2
}).addIndicators({
    colorStart: "white"
}).addTo(controller).setClassToggle(".projects","active");