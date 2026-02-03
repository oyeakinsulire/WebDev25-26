// timeline starts paused so it doesn't run immediately
let tl = gsap.timeline({ paused: true });

// basic animation steps one after the other
tl.to("#box2", { x: 200, duration: 1 })
  .to("#box2", { scale: 1.5, duration: 0.6 })
  .to("#box2", { y: 200, duration: 1 })
  .to("#box2", { rotation: 720, duration: 1 })
  .to("#box2", { 
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 1
  });

// buttons
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const reverseBtn = document.getElementById("reverseBtn");

// button actions
playBtn.addEventListener("click", function () {
    tl.play();
});

pauseBtn.addEventListener("click", function () {
    tl.pause();
});

reverseBtn.addEventListener("click", function () {
    tl.reverse();
});