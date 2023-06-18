function myFunction() {

    var x = document.getElementById("myPopup");
    if (window.getComputedStyle(x).visibility == "hidden"){

        document.getElementById("myPopup").style.visibility = "visible"
    }else{
        document.getElementById("myPopup").style.visibility = "hidden"
    }


}