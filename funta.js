var cursor=document.querySelector('#cursor');
document.addEventListener("mousemove",function(dets){
    cursor.style.left=(dets.x-10)+'px';
    cursor.style.top=(dets.y-100)+'px';
})
var tl=gsap.timeline();
tl.to("#funtacan",{
    top:"98vh",
    left:0,
    rotate:"0",
    duration:2,
    delay:0.2,
    scrollTrigger:
    {
        trigger:"#page1 #funtacan",
        scroller:"body",
        start:"top 10%",
        end:"top 60%",
        scrub:true,
        markers:false,    
    }
})

tl.to("#theglass",{
    top:"90vh",
    left:0,
    rotate:"0",
    duration:2,
    delay:0.2,
    scrollTrigger:
    {
        trigger:"#page1 #theglass",
        scroller:"body",
        start:"top 20%",
        end:"top 90%",
        scrub:true,
        markers:false,    
    }
})

gsap.from("#leaf1",{
x:-100,
y:50,
duration:1,
})
gsap.from("#cocoleaf",{
    x:100,
    y:100,
    duration:1.5,
})
gsap.from("#funtacan",{
    x:100,
    y:100,
    duration:1.5,
})
gsap.from("#funta-txt",{
    x:800,
    scale:0.4,
    duration:2,
    ease:"bounce",
})