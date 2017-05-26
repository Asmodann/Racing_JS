var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var body = $("body").pop();
  var btn = $("button");
  var select = $("select").pop();
  select.addEventListener("change", function() {
    body.style.backgroundColor = select.value;
  });
  for (var k = 0; k < btn.length; k++) {
    button_click(btn[k], body);
  }
});

function button_click(btn, body) {
  btn.addEventListener("click", function(c_btn) {
    c_btn = c_btn.target.innerText;
    var elem = window.getComputedStyle(body, null);
    var size = elem.getPropertyValue("font-size");
    if (c_btn === "+") {
      size = parseInt(size) + 1;
    } else {
      size = parseInt(size) - 1;
    }
    body.style.fontSize = size + "px";
  });
}
