//创建cookie
function setCookie(key,value,expires){
	let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
	if(!isNaN(expires)){
		let date = new Date();
		date.setDate(date.getDate() + Number(expires));
		cookieText += ';expires=' + date;
	}
	document.cookie = cookieText;
}
//获取cookie
function getCookie(key){
	let arr = document.cookie.split('; ');
	for(var i = 0,len = arr.length;i < len;i ++){
		let list = arr[i].split('=');
		if(encodeURIComponent(key) === list[0]){
			return decodeURIComponent(list[1]);
		}
	}
}
let oName = document.getElementById("uname")
let oPas = document.getElementById("upas")
let oRepas = document.getElementById("urepas")
let oPhone = document.getElementById("uphone")
let oSub = document.getElementById("sub")
let oGo = document.getElementById("go")
    oSub.onclick = function(){
        let uname = oName.value;
        let upas = oPas.value;
        if(!uname){
            alert("用户名不能为空！")
            return;
        }
    // 获取现有的cookie：
    let cookieStr = getCookie("register") ? getCookie("register") : '';
    // 转对象：
    let cookieObj = convertStrToObj(cookieStr);
    // 判断对象中是否存在用户名：
    if(uname in cookieObj){
        alert("用户名已存在！");
        return;
    }else{
        // 添加到对象中：
        cookieObj[uname] = upas;
    }
    cookieStr = JSON.stringify(cookieObj);
    setCookie("register",cookieStr,7);
    alert("注册成功！")
    oName.value = "";
    oPas.value="";
}
oGo.onclick = function(){
    location.href = "../html/login.html"
}