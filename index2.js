// const ramil = document.querySelector("#title");

// const options = {
//     root:null,
//     rootMargin: "0px 0px 0px 0px",
//     threshold: 1.0,
// }
  
// const observer = new IntersectionObserver(function(entries, observer){
//     entries.forEach(entry=>{
//         console.log(entry);
//     })
// }, options);

// observer.observe(ramil);

const numSteps = 20.0;

let vw = window.innerWidth/100;
let vh = window.innerHeight/100;

let boxElement;
let prevRatio = 0.0;
let prevScroll = 0;
let prevAction = 0;
let increasingColor = "rgba(0, 0, 0, ratio)";
let decreasingColor = "rgba(255, 255, 255, ratio)";

let ramil = document.getElementById("background");
let title = document.getElementById("title");
let social = document.getElementById("socials");
let socials = document.querySelectorAll(".social");
ramil.style.width="100vw";
ramil.style.height="200vh";
title.style.fontSize = 100+"px";


setInterval(function(){
  if(window.scrollY!=prevScroll){
    title.style.textAlign="left";
    fixImageSize(window.scrollY, prevScroll);
  }
  prevScroll=window.scrollY;
},250);

function fixImageSize(scroll,pScroll){
  if(scroll<(150*vh)){
    let s = scroll/(150*vh);
    let w = parseInt(ramil.style.width);
    ramil.style.width = (100 - (25*s))+"vw";
    ramil.style.height=(100 - (25*s))+"vw";
    ramil.style.top=(100*s*2)+"vh";
    ramil.style.overlow_y="hidden";
    title.style.width = (100 - (75*s))+"vw";
    title.style.top = (50 - (50*s))+"vh";
    title.style.fontSize = (100 - (75*s))+"px";
    title.style.letterSpacing = (35 - (25*s))+"px";
    social.style.width=(100 - (80 * s))+"vw";
    socials.forEach((obj)=>{
      obj.style.width=(9-(6*s))+"vh";
      obj.style.height=(9-(6*s))+"vh";
    })

  }else if(scroll>(150*vh)&&(scroll<(250*vh))){
    let s = 1;
    ramil.style.width = (100 - (25*s))+"vw";
    ramil.style.height=(100 - (25*s))+"vw";
    ramil.style.top=(200*s)+"vh";
    ramil.style.overlow_y="hidden";
    title.style.width = (100 - (75*s))+"vw";
    title.style.top = (50 - (50*s))+"vh";
    title.style.fontSize = (100 - (75*s))+"px";
    title.style.letterSpacing = (35 - (25*s))+"px";
    social.style.width=(100 - (80 * s))+"vw";
    socials.forEach((obj)=>{
      obj.style.width=(9-(6*s))+"vh";
      obj.style.height=(9-(6*s))+"vh";
    })
  }
}

// Set things up
// window.addEventListener("load", (event) => {
//   boxElement = document.querySelector("#background");

//   createObserver();
// }, false);

// function createObserver() {
//     let observer;
  
//     let options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: buildThresholdList()
//     };
  
//     observer = new IntersectionObserver(handleIntersect, options);
//     observer.observe(boxElement);
// }

// function handleIntersect(entries, observer) {
//     entries.forEach((entry) => {

//       // ramil.style.opacity = entry.intersectionRatio*2;
//       // console.log(window.scrollY);

//       // if(window.scrollY>prevScroll){
//       //   small(ramil);
//       // }else if(window.scrollY<prevScroll){
//       //   big(ramil);
//       // }else if(window.scrollY==prevScroll){
//       //   if(prevAction!=0){
//       //     if(prevAction==true){

//       //     }
//       //   }
//       // }

//       fixramil();
//       prevScroll = window.scrollY;
//       prevRatio = entry.intersectionRatio;
//     });
//   }
  
// function big(elem){
//   let w = parseInt(elem.style.width);
//   let h = parseInt(elem.style.height);
//   elem.style.width = (w + 2)+ "vw";
//   elem.style.height = (h + 3)+"vh";
// }

// function small(elem){
//   let w = parseInt(elem.style.width);
//   let h = parseInt(elem.style.height);
//   let y = parseInt(elem.style.y);
//   elem.style.width = (w - 2)+ "vw";
//   elem.style.height = (h - 3)+"vh";
//   elem.style.y = (y+2)+"vh";
// }

// function buildThresholdList() {
//     let thresholds = [];
//     let numSteps = 20;
  
//     for (let i=1.0; i<=numSteps; i++) {
//       let ratio = i/numSteps;
//       thresholds.push(ratio);
//     }
  
//     thresholds.push(0);
//     return thresholds;
//   }
