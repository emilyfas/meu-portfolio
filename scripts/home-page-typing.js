var i = 0;
var txt = document.getElementById("text-typing").textContent;
var speed = 70;
document.getElementById("text-typing").textContent = "";
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text-typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
  }
}
typeWriter();