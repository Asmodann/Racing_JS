var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var div = $("div").pop();
  var canvas = $("canvas");
  var colors = [
    "rgb(255, 165, 0)", // Orange
    "rgb(128, 0, 128)", // Purple
    "rgb(0, 0, 0)", // Black
    "rgb(128, 128, 0)" // Olive
  ];
  var reorder = [];
  
  for (var k = 0; k < colors.length; k++) {
    for (var i = 0; i < canvas.length; i++) {
      var data = sort_color(colors[k], canvas[i]);
      if (data) {
        reorder.push(data);
      }
    }
  }

  div.innerHTML = "";
  for (k = 0; k < reorder.length; k++) {
    div.innerHTML += reorder[k].outerHTML;
  }
});

function sort_color(color, element) {
  var elem = window.getComputedStyle(element, null);
  var tmp = elem.getPropertyValue("background-color");
  if (tmp == color) {
    element.setAttribute("style", "background-color: " + color + " !important");
    return element;
  }
}