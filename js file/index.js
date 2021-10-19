// var loginArray = [];
  var authEmail=localStorage.getItem("loginRecord");
  if (authEmail) {
    location.href = "./viewblog.html";
  }

  var userObj;
var userArray = [];

function login() {
  
  var loginObj;
  var loginArray = [];
  event.preventDefault();

  const users = JSON.parse(localStorage.getItem('userRecord'));

  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  // find the user where emil = useremail && password = userpassword
  const emailCheck = users.find(u => u.arrayEmail === email);
  const passCheck = users.find(u => u.arrayPassword === pass);

  // This means we find a user is storage
  if (emailCheck && passCheck) {

    // var loginObj = { loginEmail: email };
    localStorage.setItem("loginRecord", email);
    
    // loginArray.push(loginObj);
    // localStorage.loginRecord = JSON.stringify(loginArray);
    // alert("has created");
    window.location.href = "./viewblog.html";
  }

  else {
    if (emailCheck) {
      document.getElementById("email-validation").innerHTML = "Email is Incorrect ";
      document.getElementById("email-validation").style.visibility = "hidden";
      document.getElementById("email-validation").style.color = "red";
    }
    else {
      document.getElementById("email-validation").innerHTML = "Email is Incorrect ";
      document.getElementById("email-validation").style.visibility = "visible";
      document.getElementById("email-validation").style.color = "red";
    }

    if (passCheck) {
      document.getElementById("password-validation").innerHTML = "Password is Incorrect ";
      document.getElementById("password-validation").style.visibility = "hidden";
      document.getElementById("password-validation").style.color = "red";
    }
    else {
      document.getElementById("password-validation").innerHTML = "Password is Incorrect ";
      document.getElementById("password-validation").style.visibility = "visible";
      document.getElementById("password-validation").style.color = "red";
    }
  }
}

function navbarhome() {
  location.href = "./home.html";
}