let bar = document.querySelector(".fa-bars");
let menuBox = document.querySelector(".menu-box");
bar.addEventListener('click',()=>{
   bar.classList.toggle("fa-xmark");
   menuBox.classList.toggle("show");
});


const slider = document.querySelector('.slider-container');
let slideIndex = 0;

function showSlides() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  const translateXValue = `translateX(-${slideIndex * 100}%)`;
  slider.style.transform = translateXValue;
}
setInterval(showSlides, 3000);

const scrollTopButton = document.getElementById('scrollTopButton');


scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


$(document).ready(function() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $("#navbar").css("top", "0");
    } else {
      $("#navbar").css("top", "-200px"); 
    }
    prevScrollpos = currentScrollPos;
  }
});
