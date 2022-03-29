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

let ramil = document.getElementById("background");
let title = document.getElementById("title");
let social = document.getElementById("socials");
let socials = document.querySelectorAll(".social");
