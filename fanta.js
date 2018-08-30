function myfunc(div) {
  var className = div.getAttribute("class");
  if (className=="normale") {
    div.className = "abilitato";
    }
  else {
    div.className = "normale";
  }
}
