var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var exists = get_cookie("acceptsCookies");
  var footer = $("footer")[0];

  if (exists === "true") {
    footer.children[0].innerHTML = "";
    footer.innerHTML += "<div><a href=\"#\">Supprimer le cookie</a></div>";
  }

  var childs = footer.children;
  var div = childs[childs.length -1];
  var a = div.children[0];

  a.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (exists === "true") {
      set_cookie("acceptsCookies", true, 0);
    } else {
      set_cookie("acceptsCookies", true, 1);
    }
    location.reload();
  });
});

var set_cookie = function(name, value, expires_days) {
  var date = new Date();
  date.setTime(date.getTime() + (expires_days * 24 * 60 * 60 * 1000));
  var cookie = name + "=" + escape(value) + ";";
  cookie += "expires=" + date.toGMTString() + ";";
  document.cookie = cookie;
};

var get_cookie = function(name, cb) {
  if (document.cookie === "" || document.cookie === undefined) {
    return false;
  }
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var data = cookies[i].split("=");
    if (data[0] === name) {
      return data[1];
    }
  }
  return false;
};
