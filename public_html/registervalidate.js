function validateForm() {
    
    var x1 = document.logon.Fname.value;
    if (x1 == null || x1 == "") {
        alert( "Oops! First name is required to register!" );
        document.logon.fname.focus();
        return false;
    }


    var x2 = document.logon.username.value;
    if (x2 == null || x2 == "") {
        alert("Oops! Username is required to register!!");
        document.logon.username.focus();
        return false;
    }
    


    var x3 = document.logon.dob.value ;
    if (x3 == null || x3 == "") {
        alert("Oops! Date Of Birth is required to register!");
        document.logon.dob.focus();
        return false;
    }
    if(x3.length!=10){
        alert("Please enter the valid Birth Date in format (dd-mm-yyyy)!");
        document.logon.dob.focus();
        return false;
    }
    
    
    var x4=document.logon.email.value;
    atpos = x4.indexOf("@");
    dotpos = x4.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 )) 
    {
        alert("Please enter correct email ID!");
        document.logon.email.focus();
        return false;
    }
    
    
    var x5=document.logon.password.value;
    if(x5.length<=8){
        alert("Please enter password of more than 8 characters!");
        document.logon.password.focus();
        return false;
    }
    
    
    var x6=document.logon.repass.value;
    if(x6!=x5){
        alert("Please re-enter correct password!");
        document.logon.repass.focus();
        return false;
    }
       
       document.getElementById("logon").reset();
       return (true); 
       
}