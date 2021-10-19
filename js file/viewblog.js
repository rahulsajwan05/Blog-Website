var personarray = [];
var blogdataArray = [];
var filterarray = [];
var index;

function view_blogs() {
    if (!localStorage.loginRecord) {
        location.href = "./home.html";
    }


    var wel = localStorage.getItem("loginRecord");
    document.getElementById("welcomeH").innerHTML = "Welcome" + " " + wel;

    blogdataArray = JSON.parse(localStorage.blogdataRecord);
    for (var i = 0; i < blogdataArray.length; i++) {
        blogdataArray[i].book_id = 'card'+i;
    }
    localStorage.blogdataRecord = JSON.stringify(blogdataArray);
    blogdataArray = JSON.parse(localStorage.blogdataRecord);
    for (var i = 0; i < blogdataArray.length; i++) {
        let str = blogdataArray[i].arrayEmail;
        if (str === wel) {
            filterarray.push(blogdataArray[i]);
        }
    }




    for (var i = 0; i < filterarray.length; i++) {
// alert(i)
        var main_div = document.getElementById('cardRow');
        var div1 = document.createElement("div");
        div1.className = "col-md-4";
        div1.id = filterarray[i].book_id;

        var div2 = document.createElement("div");
        div2.className = "card";
        div2.style.width = "18rem";
        div2.style.minHeight = "12rem";
        var div3 = document.createElement("div");
        div3.className = "card-body";
        var h1 = document.createElement("h5");
        h1.textContent = filterarray[i].arrayTitle;
        var p1 = document.createElement("p");
        p1.textContent = filterarray[i].arrayDesc;

        var btn1 = document.createElement("button");
        btn1.className = "btn btn-primary after_mybtn1";
        btn1.textContent = "Edit";
        btn1.setAttribute('data-toggle','modal');
        btn1.setAttribute('data-target','#myModel');
        btn1.onclick = function () {
            edit_card(this);
        };

        var btn2 = document.createElement("button");
        btn2.className = "btn btn-primary after_mybtn2  ";
        btn2.textContent = "Delete";
        btn2.onclick = function () {
            delete_card(this);
        };

        div3.appendChild(h1);
        div3.appendChild(p1);
        div3.appendChild(btn1);
        div3.appendChild(btn2);
        div2.appendChild(div3);
        div1.appendChild(div2);
        main_div.appendChild(div1);

        btn1.classList.add('name');
           btn2.classList.add('name');
        //    div1.classList.add('col-md-4')
    }
}
function delete_card(e) {
    var id1 = e.parentNode.parentNode.parentNode.getAttribute("id");

    var dltcard = document.getElementById(id1);
    dltcard.remove();
    blogdataArray = JSON.parse(localStorage.blogdataRecord);
    for (var i = 0; i < blogdataArray.length; i++) {
        if (blogdataArray[i].book_id == id1) {
            blogdataArray.splice(i, 1);
            break;

        }
    }
    localStorage.blogdataRecord = JSON.stringify(blogdataArray);
}
function edit_card(e) {
 
   
    var id1 = e.parentNode.parentNode.parentNode.getAttribute("id");
    blogarray = JSON.parse(localStorage.blogdataRecord);
    for (var i = 0; i < blogarray.length; i++) {
        if (blogarray[i].book_id == id1) {
            index = i;
            break;
        }
    }

    var tit = blogdataArray[index].arrayTitle;
    

    var desc = blogdataArray[index].arrayDesc;

    
    document.getElementById("title").value=tit;
    document.getElementById("description").value=desc;

}

function update(){
   
    
    blogdataArray=JSON.parse(localStorage.blogdataRecord);
    blogdataArray.splice(index,1);
    // alert("hi");
    // alert(index);
    localStorage.blogdataRecord=JSON.stringify(blogdataArray);
    var em1= localStorage.getItem("loginRecord");

    var tit = document.getElementById("title").value;
    var des = document.getElementById("description").value;
    if(localStorage.blogdataRecord){
        blogdataArray=JSON.parse(localStorage.blogdataRecord);
       
   var blogobject={arrayEmail:em1,arrayTitle:tit,arrayDesc:des};
   blogdataArray.push(blogobject);
    //console.log(bookarray);
    localStorage.blogdataRecord=JSON.stringify(blogdataArray);
    //  alert('You suceesfully changed blog.');
     location.href = "./viewblog.html";
    }
    else{
        var blogobject={arrayEmail:em1,arrayTitle:tit,arrayDesc:des};
        blogdataArray.push(blogobject);
        //console.log(bookarray);
        localStorage.blogdataRecord=JSON.stringify(blogdataArray);
       
        //  alert('You suceesfully changed blog. ');
         location.href = "./viewblog.html";
    }
   

}

function navbaraddblog() {
    event.preventDefault()
   location.href = "./addblog.html";
}
function navbarlogout() {
    localStorage.removeItem("loginRecord");
    location.href = "./home.html";

}

