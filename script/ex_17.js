var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  const density = 1; // Kg/m3
  const gravity = 9.81;
  const volume = 10;
  var footer = $("footer")[0];
  var div = {liquid: footer.children[1], square: footer.children[2]}
  var water = f_newton([volume, density, gravity, poids]);

  // CUBE
  var poids = 1; // kg
  var in_water = 10; // L

  footer.addEventListener("click", function() {
    div.liquid.innerHTML = ++poids;
    newton = f_newton([in_water, density, gravity, poids]);
    console.log(newton);
  })
});

var f_newton = function(data) {
  if (data === undefined) {
    return false;
  }
  var volume = data[0];
  var density = data[1]; // 1000kg/m3
  var gravity = data[2];
  var poids = data[3];
  return volume * density * (gravity * poids);
};


/*
1t   ->  1m2
?     0,20m2


Masse de la surface de mon eau = 0.00026462026 kg/m2
Masse de la surface de mon eau = 0.00026 kg/m2
1px = 0.00027 mètre

*/