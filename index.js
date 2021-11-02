var vw = window.innerWidth/100;
var vh = window.innerHeight/100;

function checkScroll(){
    setTimeout(function(){
        if(window.pageYOffset>0){
            $("body > h1").addClass('minimized');
            $("#social").addClass('minimized');
            $("#social").children().addClass('minimized');
            if(window.pageYOffset==window.innerHeight*2){
                $("body > h1").removeClass('minimized');
            }else if(window.pageYOffset==window.innerHeight*3){
                $("#social").removeClass('minimized');
                $("#social").children().removeClass('minimized');
            }
        }else if(window.pageYOffset==0){
            $("body > h1").removeClass('minimized');
            $("#social").removeClass('minimized');
            $("#social").children().removeClass('minimized');
        }
        checkScroll();
    },500)
}

// checkScroll();

$("#menu").click(function(){
    
    if(document.querySelector("#menu-div").style.display=="grid"){
        $("#menu-div").css("display", "none");
    }else{
        $("#menu-div").css("display","grid");
    }
})
    
function checkScroll2(){
    console.log(window.pageYOffset);
    setTimeout(function(){
        if(window.pageYOffset>(3*vh)){
            $("body > h1").addClass('minimized');
        }else if(window.pageYOffset==0){
            $("body > h1").removeClass('minimized');
        }
        if(window.pageYOffset>(50*vh)){
            $("#social").addClass('minimized');
            $(".icon").addClass('minimized');
        }else if(window.pageYOffset==0){
            $("#social").removeClass('minimized');
            $(".icon").removeClass('minimized');
        }
        checkScroll2();
    },500)
}

checkScroll2();