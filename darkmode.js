var light = true;
var mode;
var theme;
const btn = document.querySelector(".btn-toggle");

mode = localStorage.getItem("mode")

if(mode == "dark"){
  document.getElementById("modeswitch").src="bilder/darkmode.png";
  theme = document.body.classList.contains("dark-theme");
  document.body.classList.toggle("dark-theme");
  light = false;
  mode = "dark";
  localStorage.setItem("mode", mode);
  document.getElementById("startbild").src="bilder/catchinghell.png"
}


btn.addEventListener("click", function () {
    if (light == true){
      document.getElementById("modeswitch").src="bilder/darkmode.png";
      theme = document.body.classList.contains("dark-theme");
      document.body.classList.toggle("dark-theme");
      mode = "dark";
      document.getElementById("startbild").src="bilder/catchinghell.png"
      light = false;

    }else{
      document.getElementById("modeswitch").src="bilder/lightmode.png";
      theme = document.body.classList.contains("light-theme");
      document.body.classList.toggle("dark-theme");
      mode = "light";
      document.getElementById("startbild").src="bilder/catching.png"
      light = true;

    }

    localStorage.setItem("theme", theme);
    localStorage.setItem("mode", mode);

    console.log(document.body.classList.value);
});