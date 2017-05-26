var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var div = $("div").pop();
  var my_url = "http://cdn.bulbagarden.net/upload/thumb/9/9e/027Sandshrew.png/250px-027Sandshrew.png";
  //var my_url = "http://sujet.webacademie.fr/racing_js/pangolin.jpg";
  if (!localStorage.getItem("pangolin")) {
    set_localStorage(my_url);
  }

  if (localStorage.getItem("pangolin")) {
    var imgLS = localStorage.getItem("pangolin");
    var img = document.createElement("img");
    img.src = imgLS;
    div.appendChild(img);
  }
});

var set_localStorage = function(my_url) {
  var img = new Image();
  img.src = my_url;
  localStorage.setItem("pangolin", img.src);
};