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
