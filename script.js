const videosButton = document.getElementById("videosButton");
const aboutButton = document.getElementById("aboutButton");
const contactButton = document.getElementById("contactButton");
const homeButton = document.getElementById("headerHome");
const tl = gsap.timeline({defaults:{ease: 'power1.out'}});
const videosMain = document.getElementById("videosMain");
const aboutMain = document.getElementById("aboutMain");
const contactMain = document.getElementById("contactMain");
const youtubeAbout = document.getElementById("youtube");
const linkedinAbout = document.getElementById("linkedin");
const channelButton = document.getElementById("channelButton");
const aboutmm = document.getElementById("aboutmm");
const subscribe = document.getElementById("subscribe");
videosButton.onclick = function(){window.location.href = "videos.html";}
aboutButton.onclick = function(){window.location.href = "about.html";}
contactButton.onclick = function(){window.location.href = "contact.html"}
homeButton.onclick = function(){window.location.href = "index.html";}
tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:'-100%', duration:1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity:1, duration: 1}, "-=2");
videosMain.onclick = function(){window.location.href = "videos.html";}
aboutMain.onclick = function(){window.location.href = "about.html"}
contactMain.onclick = function(){window.location.href = "contact.html"}
youtubeAbout.onclick = function(){window.open("https://youtube.com/metamath", "_blank")}
linkedinAbout.onclick = function(){window.open("https://linkedin.com/in/jaideepn", "_blank")}
channelButton.onclick = function(){window.open("https://youtube.com/metamath", "_blank")}
subscribe.onclick = function(){window.open("https://youtube.com/metamath?sub_confirmation=1", "_blank")};
aboutmm.onclick = function(){window.location.href = "about.html"}