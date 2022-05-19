 var nameError = document.getElementById("name-error");
 var phoneError = document.getElementById("phone-error");
 var emailError = document.getElementById("email-error");
 var passwordError = document.getElementById("password-error");
 var confpasswordError = document.getElementById("confpassword-error");
 var SubmitError = document.getElementById("Submit-error");

function validateName(event){
    var name = document.getElementById('contact-name').value;
    console.log("EVENT",event.target.value);
    if(name.length == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false; 
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone No is Required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only Numbers';
        return false;
    }
     phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is Required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validatePassword(){
    var password = document.getElementById('password-a').value;

    if(password.length == 0){
        passwordError.innerHTML = 'Password Required';
        return false;
    }
    if(!password.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,16}$/)){
        passwordError.innerHTML = 'Password ';
        return false;
    }
     passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
     return true;
}

function validateConfirmPassword(){

    var password = document.getElementById('password-a').value;
    var confpass = document.getElementById('password-b').value;

    if(confpass.length == ''){
        confpasswordError.innerHTML = 'Enter to confirm password ';
        return false;
    }
    if(confpass != password){
        confpasswordError.innerHTML = 'Password does not match';
        return false;
    }
    confpasswordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        SubmitError.style.display = 'block';
        SubmitError.innerHTML = 'Please fill all the details';
        setTimeout(function(){SubmitError.style.display = 'none';}, 5000);
        return false;
    }
}