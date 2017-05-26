var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var div = $("div").pop();
  var mouseInDiv = false;
  if (localStorage.getItem("pangolin")) {
    var imgLS = localStorage.getItem("pangolin");
    var img = document.createElement("img");
    img.src = imgLS;
    div.appendChild(img);

    div.addEventListener("mouseenter", function() {
      mouseInDiv = true;
    });
    div.addEventListener("mouseleave", function() {
      mouseInDiv = false;
    });
    img.addEventListener("click", function() {
      div.removeChild(img);
      localStorage.removeItem("pangolin");
    });
    setInterval(function() {
      image_resize(img, mouseInDiv);
    }, 1000);
  }
});

var image_resize = function(image, mouseInDiv) {
  if (this.w === undefined && this.h === undefined) {
    this.w = image.clientWidth;
    this.h = image.clientheight;
    this.size = 100;
  }
  if (mouseInDiv) {
    if (this.size > 0) {
      this.size -= 1;
    }
  } else {
    if (this.size < 100) {
      this.size += 1;
    }
  }
  image.style.width = (this.w * this.size) / 100 + "px";
};