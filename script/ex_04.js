var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var div = $("div").pop();
  var str = "";
  document.addEventListener("keypress", function(event) {
    var key_code;
    if (window.event) {
      key_code = event.keyCode;
    }
    if (event.which) {
      key_code = event.which;
    }
    str += String.fromCharCode(key_code);
    str = str.replace(/\s{1,}/, "", str);
    str = str.substr(-42);
    div.innerHTML = str;
  });
});
