function myfunc(div) {
  var className = div.getAttribute("class");
  if (className=="normale") {
    div.className = "abilitato";
    }
  else {
    div.className = "normale";
  }
}
function pageDown() {
    var h = window.innerHeight;
    window.scrollBy(0, h);
}
var tess = [0, 0, 0];

function contatore(id,ind) {
  tess[ind]+=1;
  if (tess[ind]==10) {
    tess[ind]=0;
  }
  v=tess[ind];
  document.getElementById(id).innerHTML = v;
  var aumenta = new Audio('success.wav');
  aumenta.play();
}
