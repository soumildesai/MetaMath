const intro = document.querySelector(".aboutIntro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const section = document.querySelector("section");
const end = section.querySelector("h1");
const scrollDown = document.querySelector("#scrollDown");
const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: 16000,
  triggerElement: intro,
  triggerHook: 0
}).setPin(intro)
  .addTo(controller);
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);
scrollDown.addEventListener("click", function(){
  window.scrollTo({
    top: 16750,
    left: 0,
    behavior: 'smooth'
  });
})