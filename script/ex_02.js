var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var div = $("div").pop();
  var i = 0;
  div.addEventListener("click", function() {
    div.innerHTML = ++i;
  });
});