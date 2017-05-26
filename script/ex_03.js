var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var div = $("div").pop();
  div.addEventListener("click", function() {
    set_my_name(function(name) {
      if (name) {
        div.innerHTML = "<em>Bonjour <strong>" + name + "</strong> !</em>";
        alert("Bonjour " + name + " !");
      }
    });
  });
});

function set_my_name(cb) {
  var name = prompt("Quel est votre nom ?");
  if (name === null) {
    return false;
  }
  if (name !== "" && name !== undefined && !name.match(/^\s{1,}/)) {
    if (confirm("Etes vous sûr que " + name + " est votre nom ?")) {
      cb(name);
      return true;
    }
  }

  set_my_name(cb);
}