var n, p, a, s, d,t,c;

var coins = document.getElementById("coins");
var price = document.getElementById("price");
var rate = document.getElementById("rate");
var frequency = document.getElementById("frequency");
var duration = document.getElementById("duration");
var cost = document.getElementById("cost");
var submit = document.getElementById("submit");

var result = document.getElementById("result");

submit.addEventListener("click", function(){
    n = parseInt(coins.value);
    p = parseInt(price.value);
    s = parseInt(rate.value);
    d = parseInt(frequency.value);
    t = parseInt(duration.value);
    c = parseInt(cost.value);
    console.log(n,p,s,d,t,c);

    a = n * p;
    compound();
})

function compound(){
   var f=0,l=0;

    for(var j = 1; j <= t; j++){
        a-=c;
        stakes=Math.floor(t/j);
        for(var i = 0; i<stakes;i++){
            var interest2 = Math.pow((1+ (s/36500)),(j));		
            var interest = (a *interest2);
            a=interest - c;
        }
        if(j>t/2){

        }else{
            
    
        }
        if(a>f){
                f = a;
                l = j;
            }
        console.log(j,a);
        result.innerHTML+="compounded every "+j.toString()+" days: "+a.toString()+"<br><br>";
        
        a = n * p;
    }
    console.log(f,l);
    result.innerHTML+="max profit: "+f.toString()+"<br>optimal compounding frequency: "+l.toString()+" day <br><br>";
}
