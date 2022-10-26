function validation(){
    var phone = document.getElementById("phone").value;
    if(phone.length <5){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
}