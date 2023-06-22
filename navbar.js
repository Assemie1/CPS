var zu = true;
i = 2

function openNav() {
    document.getElementById("mySidepanel").style.width = "200px";
    document.getElementById("openbtn").style.visibility = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0%";
    document.getElementById("openbtn").style.visibility = "visible";

  }


  function openOrte() {
    /*if (zu){
      document.getElementById("dropdown").style.display = "block";
      document.getElementById("orte").style.backgroundColor= "rgb(34, 31, 31)"
      console.log("GEH A")
      zu = false
    } else {
      document.getElementById("dropdown").style.display = "none";
      document.getElementById("orte").style.backgroundColor= "rgb(91, 87, 92)"
      console.log("GEH ZU")
      zu = true
    }
    */
  }


function resnav(){
  if (window.innerWidth > 700){
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("mySidepanel").style.width = "100%";
  }else{
    document.getElementById("openbtn").style.visibility = "visible";
    document.getElementById("mySidepanel").style.width = "0";
  }
}