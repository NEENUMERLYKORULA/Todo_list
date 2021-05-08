const uname = "admin";
const pwd = 12345;
const url ="main.html";

function myLogin(urldata){
  
    var d = document.getElementById("name").value;
    var f = document.getElementById("pswd").value;
    //console.log("inside  block");
    if(d == uname && f == pwd){
               //console.log("inside if block");
       urldata(url);
       

    }
    else{
      Swal.fire("AWWW..(", "Invalid Username or Password!");
                            $(".swal2-modal").css('background-color', 'orange');
                            $(".swal2-modal").css('width', 'auto');
                            $(".swal2-modal").css('height', '33%');
                            $(".swal2-modal").css('font-style', 'italic');
         
    }
       
}
function redirect(value){
  window.location.replace(value, '_blank');

}



