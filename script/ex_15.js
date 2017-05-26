var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var div = $("div").pop();
  var myEvent = document.createEvent("Event");
  var bgColors = ["#FF0000", "#00FF00", "#0000FF", "#FFFFFF"];

  myEvent.initEvent("pangolin", true, true);

  setInterval(function(e) {
    div.dispatchEvent(myEvent);
  }, 1000);
  
  div.addEventListener("pangolin", function() {
    var rnd = Math.floor(Math.random() * bgColors.length);
    div.style.backgroundColor = bgColors[rnd];
  }, true);
});