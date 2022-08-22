// const btn = document.getElementById('menu-btn')
// const menu = document.getElementById('menu')
// const menuclick = document.getElementsByClassName('active-menu')

// btn.addEventListener('click', navToggle)

// function navToggle() {
//   btn.classList.toggle('open')
//   menu.classList.toggle('flex')
//   menu.classList.toggle('hidden')
// }

// menu.addEventListener('click', navToggleActive)

// function navToggleActive(){
//   btn.classList.toggle('open')
//   menu.classList.toggle('flex')
//   menu.classList.toggle('hidden')
// }

// Loading 

function onReady(callback) {
  // var intervalID = window.setInterval(checkReady, 4170);
  var intervalID = window.setInterval(checkReady, 0);

  function checkReady() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalID);
          callback.call(this);
      }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
  show('page', true);
  show('loading', false);
});

// scrol top button


// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 50
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

AOS.init({
  duration:1000,
  offset:5,
  delay:10,
});
AOS.refresh();
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});







