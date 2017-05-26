var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var btn = $("button");
  var canvas = draw_canvas();
  //var audio = new Audio("http://novacraft.fr/000webacademie/song_01.ogg");
  var s_url = "https://wac.epitech.eu/www/racingjs/pony_song.ogg";
  var audio = new Audio(s_url);

  canvas.addEventListener("click", function() {
    if (audio.played) {
      audio.play();
    } else if (audio.paused) {
      audio.play();
    }
  });

  for (var i = 0; i < btn.length; i++) {
    button_click(btn[i], audio);
  }
});

function draw_canvas() {
  var canvas = $("canvas").pop();

  if (canvas.getContext){
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#FFFFFF";

    ctx.beginPath();
    ctx.lineTo(6,6);
    ctx.lineTo(14,10);
    ctx.lineTo(6,14);
    ctx.closePath();
    ctx.stroke();
  }

  return canvas;
}

function manage_audio(audio, c_btn) {
  if (c_btn === "Pause") {
    audio.pause();
  } else if (c_btn === "Stop") {
    audio.load();
  } else if (c_btn === "Mute") {
    audio.muted = !audio.muted;
  }
}

function button_click(btn, audio) {
  btn.addEventListener("click", function(c_btn) {
    c_btn = c_btn.target.innerText;
    manage_audio(audio, c_btn);
  });
}