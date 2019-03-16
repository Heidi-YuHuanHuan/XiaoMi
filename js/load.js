function check(){
    var flag=true;
    var uname=document.getElementById("username").value;
    var upwd=document.getElementById("pwd").value;
    if(uname==""||uname==null||upwd==""||upwd==""){
        document.getElementById("remind-text").innerHTML="请输入帐号/密码";
        flag=false;
    }
    return flag;
}
$(document).ready(function() {
    $("#login-button").click(function(event) {
        $("#username").css('border-color', '#ff6700');
        $(".login-move").css('margin-top', '10px');
        $(".error-tip-image").css('display', 'block');
    });
    $(".nav-tab-link").click(function(event) {
        $(".saoma").css('display', 'block');
        $("form").css('display', 'none');
    });
    $(".now").click(function(event) {
        $(".saoma").css('display', 'none');
        $("form").css('display', 'block');
    });
});