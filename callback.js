const uname = "admin";
const pwd = 12345;
const url ="main.html";

function myLogin(urldata){
  
    var d = document.getElementById("name").value;
    var f = document.getElementById("pswd").value;
    console.log("inside  block");
    if(d == uname && f == pwd){
               console.log("inside if block");
       urldata(url);
       

    }
    else{
        alert("INVALID");
         
    }
       
}
function redirect(value){
  window.location.replace(value, '_blank');

}



