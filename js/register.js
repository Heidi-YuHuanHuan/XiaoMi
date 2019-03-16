
function checkForm(){
      var uphone=document.getElementById("phone").value;
      var re=/^1(3|4|5|7|8)\d{9}$/;
      var image= document.getElementById("remind-imag");
      /*alert(uphone);*/
      if(uphone==""){
            document.getElementById("remind-text").innerText="请输入手机号码";
            image.style.cssText ='display:block;';
            return false;
      }else if (!re.test(uphone)) {
            document.getElementById("remind-text").innerText="请输入正确的手机号码";
            image.style.cssText ='display:block;';
            return false;
      }
}

