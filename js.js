var ascii = document.getElementById("ascii");
var Scroll = 1;

var oldScrollY = window.scrollY;
var directionText = document.getElementById('direction');
ascii.style.opacity=Scroll = "1";

window.onscroll = function(e) {
    if(oldScrollY < window.scrollY){
        Scroll= Scroll - 0.02;
    } else {
        Scroll= Scroll + 0.02;
    }
    oldScrollY = window.scrollY;
    ascii.style.opacity=Scroll;

}


      
