var ascii = document.getElementById("ascii");
var Scroll = 1;

var oldScrollY = window.scrollY;
var directionText = document.getElementById('direction');


window.onscroll = function() {
    if(oldScrollY < window.scrollY){
        Scroll= Scroll - 0.02;
    } else {
        Scroll= Scroll + 0.02;
    }
    oldScrollY = window.scrollY;
    ascii.style.opacity=Scroll;

}


      
