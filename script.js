


function validation(){
  var username=document.myform.Name.value;
  if (username==""){
    document.getElementById("err1").innerHTML="*Please enter your name";
    return false;
  }
  else{
  document.getElementById("err1").innerHTML="";
  }
  var email=document.myform.Email.value;
  var email1=/^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/;
  if (email==""){
    document.getElementById("err2").innerHTML="*Please enter your email";
    return false;
  }
  else if (!email1.test(email)){
    document.getElementById("err2").innerHTML="*Invalid email address";
    return false;
  }
  else{
  document.getElementById("err2").innerHTML="";
  }

  var phonenum=document.myform.Number.value;
  if (phonenum==""){
    document.getElementById("err3").innerHTML="*Please enter your Phone Number";
    return false;
  }
  else if (phonenum.length !=10||isNaN(phonenum)){
    document.getElementById("err3").innerHTML="*Invalid Phone number";
    return false;
  } 
  else{
    document.getElementById("err3").innerHTML="";
  }

  
  
  var review =document.myform.Review.value;
  if (review==""){
    document.getElementById("err4").innerHTML="*Please enter your review";
    return false;
  }
  else{
    document.getElementById("err4").innerHTML="";
  }
  
  if(username !==""&&phonenum !==""&&phonenum.length ==10&&email !==""&&review !==""&&email1.test(email)&&!isNaN(phonenum)){
    alert("Thank you for your valuable feedback");
  }

}

  
