var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var form = $("form").pop();
  var file = $("input").shift();
  var data = new FormData();

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    if (file.value === undefined || file.value === "") {
      return false;
    }
    data.append("SelectedFile", file.files[0]);
    ajax_request(data);
  });
});

var ajax_request = function(data) {
  var destUrl = "http://localhost/webacademie/upload.php";
  var xhr = new XMLHttpRequest();
  if (!xhr) {
    alert("An error is occured!");
    return true;
  }

  xhr.addEventListener("readystatechange", function() {
    response_request(xhr);
  });
  xhr.open("POST", destUrl, true);
  xhr.send(data);
};

var response_request = function(xhr) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var div = $("div").pop();
    var data = JSON.parse(xhr.response);
    div.innerHTML = data.data;
  }
};