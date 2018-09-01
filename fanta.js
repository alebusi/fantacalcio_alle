function myfunc(div) {
  var className = div.getAttribute("class");
  if (className=="normale") {
    div.className = "abilitato";
    }
  else {
    div.className = "normale";
  }
}
function pagedown() {
    var h = window.innerHeight;
    window.scrollBy(0, 500);
}
