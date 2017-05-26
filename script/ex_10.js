var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
  var div = $(".result")[0];
  var buttons = $(".buttons")[0].children;
  
  for (var k = 0; k < buttons.length; k++) {
    check_button(buttons[k], div);
  }

  document.addEventListener("keypress", function(ev) {
    var key;
    if (window.event) {
      key = ev.keyCode;
    }
    if (ev.which) {
      key = ev.which;
    }
    
    if (key === 42) {
      key = "x";
    } else if (key === 13) {
      key = "=";
    } else if (key === 8) {
      key = "←";
    } else {
      key = String.fromCharCode(key);
    }
    if (specials.indexOf(key) > -1 || key.match(/[0-9\.]/)) {
      program(key, div);
    }
  });
});

var numbers = [];
var init = true;
var last_operator;
var specials = ["+", "-", "/", "x", "%", "C", "=", "←"];

var check_button = function(button, div) {
  button.addEventListener("click", function() {
    var btn_content = button.innerHTML;
    program(btn_content, div);
  });
};

var program = function(btn_content, div) {
  if (specials.indexOf(btn_content) > -1) {
    if (btn_content === "C") {
      data_reset(div);
    } else if (btn_content === "←") {
      var content = div.innerHTML;
      div.innerHTML = content.substr(0, content.length - 1);
      init = true;
    } else {
      do_special(btn_content, div);
    }
  } else {
    if ((div.innerText === "" || init === false) && btn_content === ".") {
      div.innerHTML = "0.";
      init = true;
    } else if (numbers[0] === undefined) {
      div.innerHTML += btn_content;
    } else {
      if (div.innerHTML === "" || init === true) {
        div.innerHTML += btn_content;
      } else {
        div.innerHTML = btn_content;
        init = true;
      }
    }
  }
};

var do_special = function(content, div) {
  switch (content) {
    case "=":
        show_results(div);
        last_operator = "";
      break;
    case "+":
        last_operator = content;
        sum(div);
      break;
    case "-":
        last_operator = content;
        subtract(div);
      break;
    case "/":
        last_operator = content;
        divide(div);
      break;
    case "x":
        last_operator = content;
        multiplicator(div);
      break;
    case "%":
        last_operator = content;
        modulo(div);
      break;
  }
};

var data_reset = function(div, total) {
  if (total === undefined) {
    div.innerHTML = "";
    numbers = [];
    last_operator = "";
    init = true;
  } else {
    div.innerHTML = total;
    numbers = [total];
    init = false;
  }
};

var add_number = function(number) {
  number = parseFloat(number);
  if (isNaN(number)) {
    return null;
  }
  if (last_operator !== "" && init === true) {
    if (numbers[0] === undefined) {
      numbers[0] = number;
    } else {
      numbers[1] = number;
    }
    init = false;
  }
};

var show_results = function(div) {
  var number = parseFloat(div.innerHTML);
  if (isNaN(number)) {
    return null;
  }
  console.log(last_operator);
  switch (last_operator) {
    case "+":
        sum(div, numbers[0] + number);
      break;
    case "-":
        subtract(div, numbers[0] - number);
      break;
    case "x":
        multiplicator(div, numbers[0] * number);
      break;
    case "/":
        divide(div, numbers[0] / number);
      break;
    case "%":
        modulo(div, numbers[0] % number);
      break;
  }
};

var sum = function(div) {
  add_number(div.innerHTML);
  if (numbers[0] === undefined || numbers[1] === undefined) {
    return null;
  }
  data_reset(div, (numbers[0] + numbers[1]));
};

var subtract = function(div) {
  add_number(div.innerHTML);
  if (numbers[0] === undefined || numbers[1] === undefined) {
    return null;
  }
  data_reset(div, (numbers[0] - numbers[1]));
};

var divide = function(div) {
  add_number(div.innerHTML);
  if (numbers[0] === undefined || numbers[1] === undefined) {
    return null;
  }
  data_reset(div, numbers[0] / numbers[1]);
};

var multiplicator = function(div) {
  add_number(div.innerHTML);
  if (numbers[0] === undefined || numbers[1] === undefined) {
    return null;
  }
  data_reset(div, (numbers[0] * numbers[1]));
};

var modulo = function(div) {
  add_number(div.innerHTML);
  if (numbers[0] === undefined || numbers[1] === undefined) {
    return null;
  }
  data_reset(div, numbers[0] % numbers[1]);
};