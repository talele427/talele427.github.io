
var sCounter=0;

var services = [
    {
        branch:"Personal Management",
        name:"Marketing and brand image",
        text:"An artist's success is heavily reliant on effective marketing and branding. We assist artists in developing a public image that is relevant to current music and pop culture trends. While delivering art to the right niche seems like the major focus for an artist to grow in the industry, it is equally important to build artist-fan relations by appearing in the right spotlight and utilising all available resources to cultivate a career that is impressionable and rewarding.",
    },
    {
        branch:"Personal Management",
        name:"Artist development",
        text:"We support our artists throughout their creative development journey. As we grow and establish our network in the industry, we encourage artists to collaborate with various music producers or other artists, for their overall development as performers. Maintaining good communication with our clients on a daily basis can assist them in making artistic and business decisions.",
    },
    {
        branch:"Personal Management",
        name:"Plan album projects and record releases",
        text:"It is an important part of management to focus on production of new music. To ensure an easy and smooth process for artists, we keep all the parties connected to the client’s career in conversation, such as a PR team, the teams in charge of mixing and mastering music, directing and editing music videos, taking photos, everyone involved in a tour, and those involved in pushing songs for sync and licensing opportunities.",
    },
    {
        branch:"Personal Management",
        name:"Promotion and publicity",
        text:"An artist’s success is contingent on good promotion. We try to market our clients' music by getting them published on music websites and media among other platforms, while also looking for offline promotional opportunities.",
    },
    {
        branch:"Personal Management",
        name:"Multimedia Opportunities",
        text:"As artist’s grow more successful, opportunities crop up outside of the music industry. Musicians frequently appear in TV series, films, and advertisements in order to diversify their brand and reach beyond a specific audience.",
    },
    {
        branch:"Personal Management",
        name:"Booking Agency",
        text:"As part of our management services, one of the major areas of work we focus on are booking gigs and live shows in the desired location or city. From choosing the right venue for artists, to closing the best deals through signed contracts, we like to take full charge of the performance.",
    },
    {
        branch:"Personal Management",
        name:"Social Media Management",
        text:"Strategizing, Content curation, shooting, scheduling, posting and audience engagement are only parts of what social media is about. ",
    },
    {
        branch:"Business Management",
        name:"Budgeting and Money management",
        text:"We assist artists in managing their finances and keeping tours and production costs under control. Artists rarely have the time to manage every aspect of their finances, hence, we also provide competent finance managers and accountants to assist them through the said business.",
    },
    {
        branch:"Business Management",
        name:"Negotiating contracts",
        text:"Contracts in the music industry are incredibly complicated. Advising a client on business decisions and negotiating on their behalf is a big part of our responsibility. As managers have a financial stake in their client's success, it's a given that it is in our best interests to negotiate aggressively for the best possible deals.",
    },
    {
        branch:"Road Management",
        name:"Music Touring",
        text:"Music tours are extremely valuable in an artist’s career path as they provide an opportunity for the artists to gauge the impact their music has on people across different regions and cultures. As romantic as it may sound, some of the best music numbers have been picked up on tour. We engage with artists to plan out their music tour schedules. Tours involve many moving components and necessitate good logistics and planning skills. We as managers work to get our clients scheduled in good locations and markets, as well as follow up to ensure that the tours go off without a hitch.",
    }
]

$("#services-branch").html(services[sCounter].branch);
$("#services-name-1").html(services[sCounter].name);
$("#services-text").html(services[sCounter].text);

document.getElementById('email').addEventListener("click", function(){
    navigator.clipboard.writeText("crulezmanagement@gmail.com");
})

function myFunction(){
    navigator.clipboard.writeText("crulezmanagement@gmail.com");
    alert("e-mail ID copied to clipboard");
}

function updateHTML(){
    $("#services-branch").html(services[sCounter].branch);
    updateName();
    // $("#services-name-1").html(services[sCounter].name);
    $("#services-text").html(services[sCounter].text);
}

const menuToggle = document.getElementById('menu-button');
var toggle = 0;

menuToggle.addEventListener('click', () => {
    
    if(toggle===0){
        $('.menu').css("z-index","5000");
        toggle=1;
    }else{
        $('.menu').css("z-index","0");
        toggle=0;
    }
    menuToggle.classList.toggle('active');
    
    
})


var sleft = document.getElementById('services-left');
if(sleft){
    document.getElementById('services-left').addEventListener("click", function(){
        if(sCounter>0){
            sCounter--;
        }else{
            sCounter=services.length-1;
        }
        updateHTML();
    })
}

var sright = document.getElementById('services-right');
if(sright){
    document.getElementById('services-right').addEventListener("click", function(){
        if(sCounter+1>=services.length){
            sCounter=0;
        }else{
            sCounter++;
        }
        updateHTML();
    })
}

function updateName(){
    let name = "asd dab fat lmao"
    let words = name.split(" ");
    let j = 1;
    let k = 0;
    let line = "";
    
}