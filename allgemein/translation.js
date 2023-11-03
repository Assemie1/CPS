document.addEventListener('DOMContentLoaded', loadJSON);

function loadJSON(){
  var currentPage = window.location.pathname.split("/").pop();
  var links = ["index.html", "message.html", "frankfurt.html", "newyork.html", "koeln.html", "evolution.html"];
  for (var i = 0; i < links.length; i++) {

    var link = links[i];
    if(currentPage === ""){
      jsonFile = "translations/index.html.json";
    }
    else if (link === currentPage) {
        jsonFile = "translations/"+link +".json";
        console.log("WARUM");
      }
  }
}

function translate(){
 // Lade die JSON-Datei
 try{
  fetch(jsonFile)
 .then(response => response.json())
 .then(data => {
     // Hole die gewünschten Texte basierend auf der ausgewählten Sprache
     const selectedLanguage = localStorage.getItem("language"); // Du solltest die ausgewählte Sprache dynamisch festlegen
     console.log(localStorage.getItem("language"));


     // Füge die Texte in die HTML-Elemente ein
     document.getElementById('uberschrift').textContent = data.uberschrift[selectedLanguage];
     document.getElementById('unterschrift').textContent = data.unterschrift[selectedLanguage];
     document.getElementById('t1').textContent = data.t1[selectedLanguage];
     document.getElementById('t2').textContent = data.t2[selectedLanguage];
     document.getElementById('t3').textContent = data.t3[selectedLanguage];
     document.getElementById('t4').textContent = data.t4[selectedLanguage];
     document.getElementById('t5').textContent = data.t5[selectedLanguage];
     document.getElementById('t6').textContent = data.t6[selectedLanguage];
     document.getElementById('t7').textContent = data.t7[selectedLanguage];

 })
}catch(err) {
    console.log("JSON lädt nicht")
 };
}
