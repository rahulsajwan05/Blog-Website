var regexEmail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z]{2,8}).([a-zA-Z]{2,4})$/;
var regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
var regexName = /^[a-z A-Z]+$/;
var regexPhone = /^[6-9]\d{9}$/;

// alert("fdfdsf");
var userObj;
var userArray = [];

// var loginArray = [];
var authEmail=localStorage.getItem("loginRecord");
if (authEmail) {
  location.href = "./viewblog.html";
}

function init() {
    if (localStorage.userRecord) {
      userArray = JSON.parse(localStorage.userRecord);
    }  
  }
  
  function registration() {
  
    event.preventDefault();
    var i;
  
    var inputEmail = document.getElementById("email").value;
    var inputName = document.getElementById("name").value;
    var inputPhone = document.getElementById("phone").value;
    var inputPass = document.getElementById("password").value;
  
    if (inputEmail.match(regexEmail) && inputName.match(regexName) && inputPhone.match(regexPhone) && inputPass.match(regexPass)) {
      // alert("dsdsad");
      // var duplicateEmail=localStorage.getItem("userRecord");
      // userArray = JSON.parse(duplicateEmail);
       // alert(userArray.length);
      // for (i = 0; i < userArray.length; i++) {
      //   if (userArray[i].arrayEmail == inputEmail) {
      //     document.getElementById("email-validation").innerHTML = "This Email is already Register";
      //     document.getElementById("email-validation").style.visibility = "visible";
      //     document.getElementById("email-validation").style.color = "red";
      //     break;
      //   }
      // }
  
      // if (i == userArray.length) {
  
        var userObj = { arrayName: inputName, arrayEmail: inputEmail, arrayPhone: inputPhone, arrayPassword: inputPass }
        userArray.push(userObj);
        localStorage.userRecord = JSON.stringify(userArray)
        window.location.href = './index.html';
      }
    // }
  
    else {
  
      if (inputEmail.match(regexEmail)) {
        
        document.getElementById("email-validation").innerHTML = "valid";
        document.getElementById("email-validation").style.visibility = "hidden";
        document.getElementById("email-validation").style.color = "green";

      }
      else {
        document.getElementById("email-validation").innerHTML = "Invalid";
        document.getElementById("email-validation").style.visibility = "visible";
        document.getElementById("email-validation").style.color = "red";
      }
  
      if (inputName.match(regexName)) {
        document.getElementById("name-validation").innerHTML = "valid";
        document.getElementById("name-validation").style.visibility = "hidden";
        document.getElementById("name-validation").style.color = "green";
      }
      else {
        document.getElementById("name-validation").innerHTML = "Invalid";
        document.getElementById("name-validation").style.visibility = "visible";
        document.getElementById("name-validation").style.color = "red";
      }
  
      if (inputPhone.match(regexPhone)) {
        document.getElementById("phone-validation").innerHTML = "valid";
        document.getElementById("phone-validation").style.visibility = "hidden";
        document.getElementById("phone-validation").style.color = "green";
      }
      else {
        document.getElementById("phone-validation").innerHTML = "Invalid";
        document.getElementById("phone-validation").style.visibility = "visible";
        document.getElementById("phone-validation").style.color = "red";
      }
  
      if (inputPass.match(regexPass)) {
        document.getElementById("password-validation").innerHTML = "valid";
        document.getElementById("password-validation").style.visibility = "hidden";
        document.getElementById("password-validation").style.color = "green";
      }
      else {
        document.getElementById("password-validation").innerHTML = "Invalid";
        document.getElementById("password-validation").style.visibility = "visible";
        document.getElementById("password-validation").style.color = "red";
      }
  
    }
  }

  function navbarhome() {
    location.href = "./home.html";
  }