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

checkScroll();
    
