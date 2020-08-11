
  // 鼠标移入显示注册登录：
  class Login{
    constructor(){
      this.unkon = document.querySelector(".unkon");
      this.log = document.querySelector(".log");
      this.mouseEve();
    }
    mouseEve(){
        let that = this;
        this.unkon.onmouseover = function(){
          that.log.display = "block";
          console.log(111)
          // console.log(that.log)
        }
    }
}
new Login();