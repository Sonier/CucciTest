let oName = document.getElementById("uname")
let oPas = document.getElementById("upas")
let oPhone = document.getElementById("uphone")
let oSub = document.querySelector(".chjian")
let oGo = document.querySelector(".log-L")
oGo.onclick = function(){
    let uname = oName.value;
    let upas = oPas.value;
    if(!uname){
        // alert("用户名不能为空！")
        return;
    }
// 获取cookie：
    let cookieStr = getCookie("register") ? getCookie("register") : '';
// 转为对象：
    let cookieObj = convertStrToObj(cookieStr);

    if(uname in cookieObj){
        if(cookieObj[uname] === upas){
            alert("登录成功");
            location.href = "../index.html"
            oName.value = "";
            oPas.value = "";
        }else{
            alert("请确认密码是否正确！")
        }
    }else{
        alert("用户名不存在！")
    }
}
