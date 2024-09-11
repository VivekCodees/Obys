
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: false, // Disable smooth scrolling on mobile devices
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll?.y || 0;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  window.addEventListener("resize", () => {
    locoScroll.update();
    ScrollTrigger.refresh();
  });

  ScrollTrigger.refresh();
}

function loadingAnimation() {
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
    delay: 1,
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
  tl.from("#page1", {
    y: 1600,
    delay: 0.2,
    opacity: 0,
    durartion: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1,#hero2,#hero3,#hero4", {
    y: 100,
    opacity: 0,
    delay: 0.2,
    stagger: 0.2,
  });
}
function cursorAnimation() {
  Shery.mouseFollower({
    skew:true,
    ease: 'cubic-bezier(0.23,1,0.320,1)',
    durartion:1,
  })
  Shery.makeMagnet("#nav-part2 h3", {});

  let videoContainer = document.querySelector("#video-container") 
  let video = document.querySelector("#video-container video")
  videoContainer.addEventListener('mouseenter',function(){
    videoContainer.addEventListener('mousemove',function(dets){
      gsap.to('.mousefollower',{
        opacity:0,
      })
      gsap.to('#video-cursor',{
        // cursor:none,
        left: dets.x - 500,
        top: dets.y - 500,
      })
    })
  })
  videoContainer.addEventListener('mouseleave',function(){
    gsap.to('.mousefollower',{
      opacity:1,
    })
    gsap.to("#video-cursor",{
      left: "80%",
      top: "-10%",
    })
  })


// This variable is used to stop the video which is playing
  let flag = 0
  videoContainer.addEventListener('click',function(){
    if(flag==0){
      video.play()
      video.style.opacity = 1
  
      document.querySelector('#video-cursor').innerHTML=`<i class="ri-pause-line"></i>`
      gsap.to("#video-cursor",{
        scale:0.5
      })
      flag=1
    }
    else{
      video.pause()
      video.style.opacity = 0
  
      document.querySelector('#video-cursor').innerHTML=`<i class="ri-play-fill"></i>`
      gsap.to("#video-cursor",{
        scale:1,
      })
      flag=0
    }
  })
}

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 1,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.99,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
  });
}


loadingAnimation();
cursorAnimation();
locomotiveAnimation();
sheryAnimation();


document.addEventListener('mousemove',function(dets){
  gsap.to("#flag",{
    x: dets.x,
    y: dets.y,
  })
})
document.querySelector('#hero3').addEventListener('mouseenter',function(){
  gsap.to("#flag",{
    opacity:1,
  })
})
document.querySelector('#hero3').addEventListener('mouseleave',function(){
  gsap.to("#flag",{
    opacity:0,
  })
})