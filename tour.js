var eifelascii = document.getElementById("Eifelascii");
var moeweascii = document.getElementById("Moeweascii")
var wegascii = document.getElementById("Wegascii")
var EifelD1 = 1;
var Position = 0;
var MoeweD1 = -0.03;
moeweascii.style.opacity= 0.1;

var WegD1 = 1;
var WegD2;
var WegA = 1;

var Drück = 0;
var Stehen = false;

var oldScrollY = window.scrollY;
var directionText = document.getElementById('direction');


document.getElementById("knopf").addEventListener("click", pageScroll);

function pageScroll() {
    if (Drück == 0){
        Runter();
        Drück = 1;
        document.getElementById("knopf").textContent = "Stop"

    }else if(Drück == 1){
        Stehen = true;
        Drück = 2;
        document.getElementById("knopf").textContent = "Hoch"
    }else if(Drück == 2){
        Hoch();
        Drück = 3;
        document.getElementById("knopf").textContent = "Stop"

    } else if(Drück == 3){
        Stehen = true;
        Drück = 0;
        document.getElementById("knopf").textContent = "Runter"
    }
}

function Runter() {

    if (Stehen == false){
        window.scrollBy(0,30);
        scrolldelay = setTimeout(Runter,40);
    } else{
        Stehen = false;
    }
}

function Hoch() {

    if (Stehen == false){
        window.scrollBy(0,-30);
        scrolldelay = setTimeout(Hoch,40);

    }else{
        Stehen = false;
    }
}




window.onscroll = function() {

    if(oldScrollY < window.scrollY){

        //Eifelturm
        if ((EifelD1 > 0)&& (Position < 1)){
            EifelD1 = EifelD1 -0.008;
            eifelascii.style.opacity=EifelD1;
            Position = Position + 0.008;        
        }
        else if((WegD1 > 0) && ( Position < 2)){
            EifelD1 = EifelD1 + 0.008;
            eifelascii.style.opacity=EifelD1;
            Position = Position + 0.008;        

            //Weg
            WegD1 =WegD1 -0.008;
            wegascii.style.opacity=WegD1;
        }
        else{
            EifelD1 = EifelD1 + 0.008;
            WegD1 = WegD1 +0.008;
            wegascii.style.opacity=WegD1;
            Position = Position + 0.008;        
        }


        //Moewe
        MoeweD1 = MoeweD1 + 0.008;
        moeweascii.style.opacity=MoeweD1;

        //Weg



    } else {
        //Riesiger Denkfehler mit dem Hochgehen für Eifel
        
        //Eifelturm
        if ((Position > 1) && (Position < 2)){
            EifelD1 = EifelD1 - 0.008;

            Position = Position - 0.008;        
            eifelascii.style.opacity=EifelD1;

            WegD1 =WegD1 + 0.008;
            wegascii.style.opacity=WegD1; 

        }
        else if((Position >2)){
            EifelD1 = EifelD1 + 0.008;
            eifelascii.style.opacity=EifelD1;
            Position = Position - 0.008;      

            //Weg
            WegD1 =WegD1 -0.008;
            wegascii.style.opacity=WegD1;  

        }

        //Moewe
        MoeweD1 = MoeweD1 - 0.008;
        moeweascii.style.opacity=MoeweD1;

    }

    //Moewe
    

    oldScrollY = window.scrollY;
    console.log(WegD1);

}



      
