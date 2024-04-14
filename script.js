
//  circulating image with mouse
// for one image only

// var relem =  document.querySelector("#right-elem1")
// var relemIMG = document.querySelector("#right-elem1  img ")
// relem.addEventListener("mouseenter" , function(){
//     relemIMG.computedStyleMap.opacity = 1;
// })

// IMAGE WITH MOUSE

var rightelems = document.querySelectorAll(".right-elem")
// rightelems is now a node list



rightelems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave" , function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:0
        })
    })

    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x -50,
            y:dets.y -  elem.getBoundingClientRect().y -150
        })
    })
})







// VIDEO PLAY ON CLICK
var page3Center = document.querySelector(".page3-center")

var video = document.querySelector("#page3 video")

page3Center.addEventListener("click" , function(){
    video.play()
    gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1 ,
        borderRadius : 0
    })
} )


video.addEventListener("click" , function(){
    video.pause()
    gsap.to(video, {
        transform: "scaleX(0) scaleY(0)",
        opacity: 0 ,
        borderRadius : "5%"
    })
})



// page5 video play on hover

var sections = document.querySelectorAll(".sec-right")

sections.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play()
    })

    elem.addEventListener("mouseleave" , function(){
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load ()
    })
    
})


gsap.to(".btm7-part2 h4", {
    x:100 ,
    duration:2,
    stagger: {

        amount:-0.6
    },
    scrollTrigger: {
        trigger:".btm7-part2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top -80%",
        scrub:true
    }
})

gsap.to(".btm7-part3 h4", {
    x:55 ,
    duration:1,
    stagger: {

        amount:-0.6
    },
    scrollTrigger: {
        trigger:".btm7-part3",
        scroller:"body",
        // markers:true,
        // start:"top 80%",
        // end:"top -80%",
        scrub:true
    }
})


gsap.to(".btm7-part4 h4", {
    x:55 ,
    duration:1,
    stagger: {

        amount:-0.6
    },
    scrollTrigger: {
        trigger:".btm7-part3",
        scroller:"body",
        // markers:true,
        // start:"top 80%",
        // end:"top -80%",
        scrub:true
    }
})



// EXLANATION
// gsap.from(".btm7-part3 h4", { ... }): This selects all h4 elements within the .btm7-part3 class and applies the animation to them.

// x: 100: This property animates the elements horizontally by moving them 100 pixels to the right.

// duration: 1: Specifies the duration of the animation, which is 1 second.

// stagger: { amount: -0.6 }: This staggers the animations of the selected elements. The amount property determines the time delay between each animation. A negative value (-0.6) means the animations will overlap slightly.

// scrollTrigger: { ... }: This sets up a scroll trigger for the animation.

// trigger: ".btm7-part3": Specifies the trigger element for the animation, which is .btm7-part3.

// scroller: "body": Defines the scroll container for the trigger. In this case, it's the body element.

// markers: true: Displays markers on the scrollbar to visualize the trigger.

// scrub: true: Smoothly animates the elements based on the scroll position. This means the animation progresses as the user scrolls.



// function loadingAnimation(){
//     gsap.from("#page1", {
//         transform:"scaleX(0.7) scaleY(0)"
//     })
// }

// loadingAnimation();



var tl = gsap.timeline()
tl.from("#page1", {
    opacity:0,
    duration:0.3,
    delay:0.2

})
tl.from("#page1", {
    transform:"scaleX(1 ) scaleY(0.1) translateY(80% )",
    borderRadius:"100px ",
    duration:1,
    ease: "expo.out"
})

tl.from("nav", {
    opacity:0 ,
    delay:-0.2  
})

tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity:0,
    duration:0.5,
    stragger:0.2
})
