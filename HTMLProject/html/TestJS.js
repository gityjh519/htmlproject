function firstFun() {
	document.getElementById("text").innerHTML = "这是JS改变的文本";
	document.getElementById("text").style.color = "red";
}

function validate_email() {
	alert("鼠标点击");

	var btns = document.getElementsByTagName("button");
	var btn = btns[0];
	btn.style.onClick = firstFun();
}

function mouseOut() {
	var firstP = document.getElementsByTagName("p");
	firstP[0].innerText = "鼠标离开了";
	firstP[0].style.color = "red";

}

function mouseIn() {
	alert("鼠标up");
	var firstP = document.getElementsByTagName("p");
	firstP[0].innerText = "鼠标进来了";
	firstP[0].style.color = "green";
	firstP[0].style.height = "120px"
	var list = document.getElementsByTagName("input");
	//	alert(list[0]);
	list[0].style.color = "red"
	list[0].style.height = "100px";
	list[0].style.width = "100px";

}

function createDivByClick() {
	var para = document.createElement("div");
	para.style.background = "red";
	para.style.width = "100px";
	para.style.height = "100px";
	var node = document.createTextNode("This is new.");
	para.appendChild(node);

	var element = document.getElementById("div1");
	element.appendChild(para);

	checkCookie();

}

function createRequest() {
	var http = new XMLHttpRequest();
	http.open("GET", "js/gethint.asp?q=a", true);
	http.onreadystatechange = function() {
		if(http.readyState == 4) {
			var element = document.getElementById("div1");
			element.innerHTML = http.responseText;

		}
	}
	http.send();
}

var timer;

function createDiv() {

	// 	var div = document.createElement("h2");
	// 	var text = document.createTextNode("这是一个div");
	// 	div.appendChild(text);
	// 	div.innerHTML = "<h6>你好吗侄儿是</h6> 好好"
	// 	document.body.appendChild(div);
	// 	var oldDiv = document.getElementById("iab");
	// 	oldDiv.appendChild(div);

	var tody = new Date();
	var h = tody.getHours();
	var m = tody.getMinutes();
	var s = tody.getSeconds();

	m = checkTime(m);

	s = checkTime(s);
	var label = document.getElementById("text");

	label.innerHTML = h + ":" + m + ":" + s;
	timer = setTimeout('createDiv()', 100);

}

function checkTime(t) {
	if(t < 10) {
		t = "0" + t;
	}
	return t;
}

function stopTimer() {
	clearTimeout(timer);
	var label = document.getElementById("text");

	label.innerHTML = "停止计时";
}

function getCookie(cname) {
	if(document.cookie.length > 0) {
		var c_start = document.cookie.indexOf(cname + "=");
		if(c_start != -1) {
			c_start = c_start + cname.length + 1;
			var cend = document.cookie.indexOf(";", c_start);
			if(cend == -1) {
				cend = document.cookie.length;
				return unescape(document.cookie.substring(c_start, cend));
			}

		}
	}
	return "";
}

function setCookie(cname, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	var cookieStrl = cname + "=" + escape(value) + ";expires=" + exdate.toGMTString();
	alert(cookieStrl);

	document.cookie = cookieStrl;

}

function checkCookie() {
	var username = getCookie('username');

	if(username != null && username != "") {
		alert('你是 ' + username);
	} else {
		username = prompt('请输入你的名字', "");
		if(username != null && username != "") {
			setCookie('username', username, 365);
		}
	}
}

function detectZoom() {
    var mvp = document.documentElement.clientWidth;
    
    
    window.webkit.messageHandlers.calliOSFunc.postMessage("abc");
    

}
