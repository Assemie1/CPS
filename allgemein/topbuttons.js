
// Funktion zum Laden der Navbar in das DOM
function loaddarkmode() {
  // Erstelle ein neues XMLHttpRequest-Objekt
  var xhr = new XMLHttpRequest();
  
  // Definiere die Callback-Funktion für den Ladevorgang
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Wenn die Navbar erfolgreich geladen wurde, füge sie in das DOM ein
        var darkmodeContainer = document.getElementById('darkmodeContainer');
        darkmodeContainer.innerHTML = xhr.responseText;
      } else {
        console.error('Fehler beim Laden der darkmode datei: ' + xhr.status);
      }
    }
  };
  
  // Lade die Navbar-Datei
  xhr.open('GET', 'allgemein/topbutton.html', true);
  xhr.send();
  console.log("Darkmode loaded");
}

document.addEventListener('DOMContentLoaded', loaddarkmode)


setTimeout(function(){
var light = true;
var mode;
var theme;
const btn = document.querySelector(".btn-toggle");

mode = localStorage.getItem("mode");
language = localStorage.getItem("language")


if(mode == "dark"){
  document.getElementById("modeswitch").src="bilder/darkmode.png";
  theme = document.body.classList.contains("dark-theme");
  document.body.classList.toggle("dark-theme");
  light = false;
  mode = "dark";
  localStorage.setItem("mode", mode);
  try{
  document.getElementById("startbild").src="bilder/catching2hell.png"
  } catch{
    console.log("Nicht index.html")
  }

}


btn.addEventListener("click", function () {
    if (light == true){
      document.getElementById("modeswitch").src="bilder/darkmode.png";
      theme = document.body.classList.contains("dark-theme");
      document.body.classList.toggle("dark-theme");
      mode = "dark";
      light = false;
      try{
        document.getElementById("startbild").src="bilder/catching2hell.png"
        } catch{
          console.log("Nicht index.html")
        }


    }else{
      document.getElementById("modeswitch").src="bilder/lightmode.png";
      theme = document.body.classList.contains("light-theme");
      document.body.classList.toggle("dark-theme");
      mode = "light";
      light = true;
      try{
        document.getElementById("startbild").src="bilder/catching2.png"
        } catch{
          console.log("Nicht index.html")
        }
    }
    

    localStorage.setItem("theme", theme);
    localStorage.setItem("mode", mode);


});

  if(language === "deu"){
    language = "deu";
    document.getElementById("languageswitch").src="bilder/deutschland.png";
    localStorage.setItem("language", language);
    console.log(localStorage.getItem("language"));
    translate()
  }


}, 600);



function changeLanguage() {
  console.log("Sprache im Stoarge " + language);
  if(language === "en"){
    language = "deu";
    document.getElementById("languageswitch").src="bilder/deutschland.png";
  }else{
    language = "en";
    document.getElementById("languageswitch").src="bilder/england.jpg";
  }
  localStorage.setItem("language", language);
  console.log(localStorage.getItem("language"));

  translate();
}
