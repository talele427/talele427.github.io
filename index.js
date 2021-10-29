function checkScroll(){
    setTimeout(function(){
        if(window.pageYOffset>0){
            $("body > h1").addClass('minimized');
            $("#social").addClass('minimized');
            $("#social").children().addClass('minimized');
        }else if(window.pageYOffset==0){
            $("body > h1").removeClass('minimized');
            $("#social").removeClass('minimized');
            $("#social").children().removeClass('minimized');
        }
        checkScroll();
    },500)
}

checkScroll();
    
