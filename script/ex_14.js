var script = document.createElement("script");
script.src = "script/ex_bonus.js";
document.head.appendChild(script);

window.addEventListener("load", function() {
	var text = $("input").pop();
	var div = $("div")[3];
	
	text.addEventListener("keyup", function(ev) {
		var str = text.value;
		check_BBcode(text.value, function(data) {
			str = data;
		});
		div.innerHTML = str;
	});
});

function check_BBcode(str, cb) {
	var preg_b = /\[b\](.*?)\[\/b\]/gi;
	var preg_u = /\[u\](.*?)\[\/u\]/gi;
	var preg_s = /\[s\](.*?)\[\/s\]/gi;
	var preg_color = /\[color=(.*?)\](.*?)\[\/color\]/gi;
	var preg_http = /\[link=(http:\/\/?.*?|https:\/\/?.*?)\](.*?)\[\/link\]/gi;

	if (str.match(preg_b)) {
		str = str.replace(preg_b, "<b>$1</b>", str);
	}
	if (str.match(preg_u)) {
		str = str.replace(preg_u, "<u>$1</u>", str);
	}
	if (str.match(preg_s)) {
		str = str.replace(preg_s, "<strike>$1</strike>", str);
	}
	if (str.match(preg_color)) {
		str = str.replace(preg_color, "<font color=\"$1\">$2</font>", str);
	}
	if (str.match(preg_http)) {
		str = str.replace(preg_http, "<a href=\"$1\">$2</a>", str);
	}
	cb(str);
}