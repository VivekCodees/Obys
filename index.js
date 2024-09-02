function loadingAnimation(){
  let tl = gsap.timeline();
tl.from(".line h1", {
  y: 200,
  stagger: 0.25,
  durartion: 1,
  delay: 0.5,
  opacity: 0,
});
tl.from(".line-loading, .line h2", {
  opacity: 0,
  delay:1,
  onStart: () => {
    let startTimer = document.querySelector(".line-loading h5");
    let grow = 0;
    setInterval(() => {
      if (grow <= 100) {
        startTimer.innerHTML = grow++;
      } else {
        grow = 100;
      }
    }, 35);
  },
});
tl.to("#loader", {
  opacity: 0,
  durartion: 0.4,
  delay: 4,
});
tl.from('#page1',{
    y:1600,
    delay:0.2,
    opacity:0,
    durartion:0.5,
    ease:Power4
})
tl.to('#loader',{
    display:'none',
})
tl.from('#nav',{
  opacity:0
})
tl.from('#hero1,#hero2,#hero3,#hero4',{
  y:100,
  opacity:0,
  delay:0.2,
  stagger:0.2,
})
}
function cursorAnimation(){
  document.addEventListener('mousemove',function(dets){
    gsap.to('#cursor',{
      left:dets.x,
      top:dets.y,
    })
  })
  
  Shery.makeMagnet("#nav-part2 h3", {});  
}

loadingAnimation()
cursorAnimation()