gsap.registerPlugin("ScrollTrigger");

gsap.to(".img1",
{   x: "0%" , 
    duration: 5 ,
    scrollTrigger: {
        trigger: ".img1" ,
        start: "top 20%" ,
        end:"center center",
        markers:true ,
        toggleActions: "restart resume none none"
    }
})
gsap.to(".small-text",
{   opacity: 1 , 
    duration: 5 ,
    delay: 3,
    scrollTrigger: {
        trigger: ".img1" ,
        start: "right right" ,
        end:"center center",
        markers:true ,
        toggleActions: "restart resume none none"
    }
})


const tl = gsap.timeline()
tl.to(".hero-text span" , {y:0 ,duration:3 , stagger:0.5 , ease:Expo.inOut})
tl.to(".img2" , { scaleX : 0 , duration :2 , ease:"power1.out" } , "-=1")
tl.to(".img2" , { scaleX : 1 , duration :2 , ease:"power1.out" } )

