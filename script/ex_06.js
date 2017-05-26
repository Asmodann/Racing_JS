var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

class Hero {
  constructor(name_, class_, int_, str_) {
    this.name = name_;
    this.class = class_;
    this.int = int_;
    this.str = str_;
  }

  toString() {
    var txt = "Je suis " + this.my_ucfirst(this.name) + " le ";
    txt += this.class + ", ";
    txt += "j'ai " + this.int + " points d'intelligence ";
    txt += "et " + this.str + " points de force !";

    var div = $("div").pop();
    div.innerText += txt + "\n";
  }

  my_ucfirst(str) {
    var first = str.substr(0,1).toUpperCase();
    str = first + str.substr(1);
    return str;
  }
}
