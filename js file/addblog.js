var blogdataArray = [];


//checking data is in local storage or not
function init() {
    if (localStorage.blogdataRecord) {
        blogdataArray = JSON.parse(localStorage.blogdataRecord)
    }
  
}

// var loginArray =[];
// loginArray =JSON.parse(localStorage.loginRecord);
// var lsEmail=loginArray[0].loginEmail;
// alert(lsEmail);

function addblog() {
    event.preventDefault();

    var blogTitle = document.getElementById('title').value;
    var blogDescription = document.getElementById('desc').value;
    var em1= localStorage.getItem("loginRecord");
    // alert(em1);
    // var blogEmail = document.getElementById('email').value = loginArray[0].loginEmail;

    //storage in local storage
    if (blogTitle.length != 0 && blogDescription.length != 0) {

        var blogdataObj = { arrayTitle: blogTitle, arrayDesc: blogDescription, arrayEmail: em1 };
        blogdataArray.push(blogdataObj);
        localStorage.blogdataRecord = JSON.stringify(blogdataArray);

        location.href="./viewblog.html";
     }

    else {
        if (blogTitle.length == 0) {

            document.getElementById("title-validation").innerHTML = "kindly type Title ";
            document.getElementById("title-validation").style.visibility = "visible";
            document.getElementById("title-validation").style.color = "red";
        }


        if (blogDescription.length == 0) {

            document.getElementById("desc-validation").innerHTML = "kindly type description ";
            document.getElementById("desc-validation").style.visibility = "visible";
            document.getElementById("desc-validation").style.color = "red";
        }

        // if (blogEmail != lsEmail)  {

        //     document.getElementById("email-validation").innerHTML = " Login and type Email id Should be same ";
        //     document.getElementById("email-validation").style.visibility = "visible";
        //     document.getElementById("email-validation").style.color = "red";
        // }
    }
}
  
function navbarhome() {
    location.href="./viewblog.html";
  }
