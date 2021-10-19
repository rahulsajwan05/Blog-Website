var blogdataArray = [];
var selectedIndex = 1;

var loginArray = [];
  var authEmail=localStorage.getItem("loginRecord");
  if (authEmail) {
    location.href = "./viewblog.html";
  }

function init() {
  if (localStorage.blogdataRecord) {
    blogdataArray = JSON.parse(localStorage.blogdataRecord);

    for (var i = 0; i < blogdataArray.length; i++) {

      var title = blogdataArray[i].arrayTitle;
      var descriptions = blogdataArray[i].arrayDesc;

      preparedCard(title, descriptions, i);
    }
  }
}

  function preparedCard(title, descriptions, index) {

    var main = document.getElementById('cardRow');

    var col = document.createElement('div');
    col.className = "col-md-4";

    var card = document.createElement('div');
    card.className = "card";

    var image = document.createElement('img');
    image.src = "mountain.jpg"
    image.className = "card-img-top";

    var cardBody = document.createElement('div');
    cardBody.className = "card-body";

    var blogTitle = document.createElement('h3');
    blogTitle.className = "card-title";

    var blogDesc = document.createElement('p');
    blogDesc.id = "descriptionid";
    blogDesc.className = "card-text";

    var showButton = document.createElement('button');
    showButton.id = "showbtnid";
    showButton.className = "name";
    showButton.className = " btn btn-primary";

    // var hideButton = document.createElement('button');
    // hideButton.id="hidebtnid";
    // hideButton.className ="name";
    // hideButton.className = " btn btn-primary";

    blogTitle.textContent = title;
    blogDesc.textContent = descriptions;
    showButton.textContent = 'show/Hide';
    // hideButton.textContent = 'Hide';
    image.innerHTML = 'image';

    showButton.onclick = () => showbtn(index);
    // hideButton.onclick = () => hidebtn(index);

    cardBody.appendChild(blogTitle);
    cardBody.appendChild(blogDesc);
    cardBody.appendChild(showButton);
    // cardBody.appendChild(hideButton);
    card.appendChild(image);

    col.appendChild(card);
    col.appendChild(cardBody);

    col.classList.add('col-md-4');
    image.classList.add('card-img-top');
    card.classList.add('card');
    cardBody.classList.add('card-body');
    // cardBody.classList.add('name');

    main.appendChild(col);

  }


  function showbtn(index) {

    var toogle = document.getElementsByClassName('card-text');
    var x = toogle[index];
    console.log(x);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    // document.getElementById('showbtnid').innerHTML = "show"
  }

  function navbarregister() {
    location.href = "./register.html";
  }

  function navbarlogin() {
    location.href = "./index.html";
  }

  function navbarhome() {
    location.href = "./home.html";
  }


