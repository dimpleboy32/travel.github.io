let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');


let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu= document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');
let videoBtn= document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
searchBtn.classList.remove('fa-times');
searchBar.classList.remove('active');
menu.classList.remove('fa-times');
navbar.classList.remove('active');
loginForm.classList.remove('active');

}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    });

searchBtn.addEventListener('click', () =>{
searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
    });

    formClose.addEventListener('click', () =>{
        loginForm.classList.remove('active');
        });


        videoBtn.forEach(btn => {
        btn.addEventListener('click',()=>{
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let src=btn.getAttribute('data-src');
            document.querySelector('#video-slider').src=src;
        });
        });

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
                }, 800, function(){
          
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
                });
              } // End if
            });
          });

        