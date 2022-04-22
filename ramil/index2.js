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

let social = document.getElementById("socials");
let socials = document.querySelectorAll(".social");

let tracklist=["bhoola", "gulmohar", "tu", "daastaan", "dhundho"]

$('.aa').click(function(){
    let a = this.src.split('/');
    let b = a[a.length-1].split('.');
    if(b[0]!="phir"){
        pauseAllMusic();
        document.getElementById(b[0]).play();
    }
    
})

$('.btn').click(function(){
    let song = this.attributes.song.value;
    let fn = this.attributes.current.value;
    if(fn == "play"){
        if(song!="phir"){
            pauseAllMusic();
            document.getElementById(song).play();
            this.src="/ramil/images/pause.png"
            this.attributes.current.value = "pause";
        }
    }else{
        pauseAllMusic();
        this.src="/ramil/images/play-button.png"
        this.attributes.current.value="play";
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



$('#title').click(()=>{
    window.location.href="./";
})
$('#epk').click(()=>{
    window.location.href="./epk.html";
})
$('#music').click(()=>{
    window.location.href="./music.html";
})
$('#contact').click(()=>{
    window.location.href="./contact.html";
})