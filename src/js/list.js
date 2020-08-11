function ajax(url,fnWin,fnFaild){
    //1. 创建一个XMLHttpRequest对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    //2. 与服务器建立连接（open)
    xhr.open('get',url,true);
    // 3. 向服务器发送请求
    xhr.send();
    // 4. 等待服务器响应
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                if(fnWin instanceof Function){
                    fnWin(xhr.responseText);
                }
            }else{
                if(fnFaild instanceof Function){
                    fnFaild();
                }
            }
        }
    }
}
// 商品列表：
class List{
    constructor(){
        this.list = document.querySelector(".list")
        this.listShop = document.querySelector(".list-Shop")
        this.load();
    }
    load(){
        ajax("../static/goods.json",(res)=>{
            // console.log(res)
            this.res = JSON.parse(res);
            // console.log(this.res)
            // console.log(this.res[0].length)
            // console.log(this.res[0])
            this.display();
        })
    }
    display(){
        let str ="";
        for(let i = 0;i<this.res[0].length;i++){
            str+=`<li>
            <div class="shopping">
                <p class="id">${this.res[0][i].goodsId}</p>
                <img src="${this.res[0][i].img}" alt="">
                <p>${this.res[0][i].title}</p>
                <p class="price">${this.res[0][i].price}</p>
                <a href="" class="bring">${this.res[0][i].buy}<i class="arr"></i></a>
            </div>
            </li>`;
        }
        this.listShop.innerHTML = str;
    }
}
new List();

// 获取信息：
class Message{
    constructor(){
        this.buy = document.querySelectorAll(".price")
        console.log(this.buy)
        // console.log(1)
    }
}
new Message(); 