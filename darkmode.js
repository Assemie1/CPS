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
}


btn.addEventListener("click", function () {
    if (light == true){
      document.getElementById("modeswitch").src="bilder/darkmode.png";
      theme = document.body.classList.contains("dark-theme");
      document.body.classList.toggle("dark-theme");
      mode = "dark";

      light = false;

    }else{
      document.getElementById("modeswitch").src="bilder/lightmode.png";
      theme = document.body.classList.contains("light-theme");
      document.body.classList.toggle("dark-theme");
      mode = "light";

      light = true;

    }

    localStorage.setItem("theme", theme);
    localStorage.setItem("mode", mode);

    console.log(document.body.classList.value);
});