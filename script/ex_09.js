var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var canvas = $("canvas").shift();
  var dropper = $("footer")[0].children[0];
  var writer = $("footer")[0].children[1];
  var dragged = {};

    /**
    * Rend l'objet draggable
    * Relative pour pouvori le déplacer
    */
  canvas.setAttribute("draggable", "true");
  canvas.style.position = "relative";

  canvas.addEventListener("dragstart", function(evt){
    // Pour firefox
    evt.dataTransfer.setData("text/plain", evt.target);
    /**
    * Sauvegarde de la position de base
    */
    if (dragged.x === undefined) {
      dragged.x = evt.clientX;
      dragged.y = evt.clientY;
      dragged.e = evt.target;
    }
  });

  dropper.addEventListener("dragover", function(evt) {
    evt.preventDefault();
  });

  dropper.addEventListener("dragleave", function(evt) {
    evt.preventDefault();
  });

  dropper.addEventListener("dragenter", function(evt) {
    evt.preventDefault();
  });

  dropper.addEventListener("drop", function(evt){
    evt.preventDefault();
    /**
    * Attribution de la nouvelle position
    */
    canvas.style.left = evt.clientX - dragged.x  + "px";
    canvas.style.top = evt.clientY- dragged.y  + "px";
    writer.innerHTML = "Nouvelles coordonnées => {x:" + parseInt(canvas.style.left) + ", y:" + parseInt(canvas.style.top) + "}";
  });

});
