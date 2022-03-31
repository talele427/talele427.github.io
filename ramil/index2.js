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

let tracklist=["bhoola", "gulmohar", "tu", "daastaan", "dhundho"]

$('.music > div > div > img').click(function(){
    let a = this.src.split('/');
    let b = a[a.length-1].split('.');
    if(b[0]!="phir"){
        pauseAllMusic();
        document.getElementById(b[0]).play();
        $('.music > p').html("click here for the full discography")
        if(this.classList.includes("active")){
            document.getElementById(b[0]).pause();
            this.classList.remove('active')
        }else{
            this.classList.add('active')
        }
    }
    
})

function pauseAllMusic(){
    for (let track of tracklist){
        document.getElementById(track).pause();
    }
    let icons = document.querySelectorAll('.music > div > div > img');
    for (let icon of icons){
        icon.classList.remove('active');
    }
}

setInterval(()=>{
    console.log(title)
},2000)