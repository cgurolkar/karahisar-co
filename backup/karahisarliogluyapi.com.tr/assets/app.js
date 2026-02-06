// function myBtn(){
//     const btnBtn =document.createElement("h1");
//     const textBtn = document.createTextNode("Come Inside");
//     btnBtn.classList.add(comeinside);
   
// }
// myBtn()


const tl = gsap.timeline({ onComplete: myFunc, defaults: { ease: 'expo.inOut' } });


tl.to('.st81', { y: 0, opacity: 0.8,duration: 1 });
tl.to('.img1' ,{ scaleX:0 , duration:1})
tl.to('.st0', { y: '0%', duration: 0.5, stagger: 0.25 });
tl.to('.img2' ,{ scaleY:0 , duration:1})
tl.to('.st1', { opacity: 0.9, duration: 0.5, stagger: 0.25 });
tl.to('.img3' ,{ scale:0 ,  duration:1})
tl.to('.st2', { y: '0%', duration: 0.5, stagger: 0.25 });
tl.to('.img4' ,{ scaleY:0 , duration:1})
tl.to('.st3', { opacity: 0.8, duration: 0.5, stagger: 0.25 });
tl.to('.img5' ,{ opacity:0 , duration:1} )
tl.to('.st4', { y: '0%', duration: 0.5, stagger: 0.25 }, "-=1");
tl.to('.kara', { xPercent: 0, opacity: 0.8, duration: 1, stagger: 0.05 }, "-=1");
tl.to('.yapi', { yPercent: 0, opacity: 0.5, duration: 0.75 });
tl.to('.tasa', { yPercent: 0, opacity: 0.5, duration: 0.75 });
tl.to('.ener', { yPercent: 0, opacity: 0.5, duration: 0.75 });
tl.to('.food', { yPercent: 0, opacity: 0.5, duration: 0.75 });
tl.to('.st71', { x: '0', opacity: 0.8,duration: 1, stagger: 0.25 });
tl.to('.st73', { x: '0', opacity: 0.8,duration: 1, stagger: 0.25 });
tl.to('.st72', { y: '0', opacity: 0.8,duration: 1, stagger: 0.25 });
tl.to('.st82', { y: '0', opacity: 0.8,duration: 1, stagger: 0.25 });
tl.to('svg', { scale: 0, rotate: 360, duration: 1.5, stagger: 0.25 });
// tl.to(".comeinside" , {x: 0  ,duration: 2 , ease:"elastic.out"})

function myFunc(){
    const newPage = window.location.href = "../mainpage.html"
    return
}





