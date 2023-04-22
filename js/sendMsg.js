function sendMsg()
{
   var msg=`<div class="user">${document.getElementById("msg_ip").value}</div>`
   console.log(msg);
   document.getElementById("msg_block").innerHTML+=msg;
   document.getElementById("msg_ip").value="";
   document.getElementById("msg_block").scrollTo(0,document.getElementById("msg_block").clientHeight);
}

