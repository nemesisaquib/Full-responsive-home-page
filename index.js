navbar = document.querySelector(".navbar").querySelectorAll("a");

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});


const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});


window.onscroll = function() {myFunction()};

var navtop = document.getElementById('navbar');
var sticky = navtop.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navtop.classList.add("sticky")
  } else {
    navtop.classList.remove("sticky");
  }
};


