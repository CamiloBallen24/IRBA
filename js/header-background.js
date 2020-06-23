let header = document.getElementById("header");

window.onscroll = function (){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > 0){
        header.style.background = "#0A0A0A";
    }
    else{
        header.style.background = "rgba(0,0,0,0)";
    }
}
