// Automatic Slideshow - change image every 4 seconds
let currentSlide = 0;
const slides = document.getElementsByClassName("pictures");
let slideInterval;

function showSlide(index) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  // Show current slide
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 4000);
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Start the slideshow
  startSlideshow();

  // Button interaction
  const btn = document.getElementById("interactBtn");
  let clickCount = 0;

  btn.addEventListener("click", function() {
    clickCount++;
    
    if (clickCount === 1) {
      
      // Move to next slide when clicked
      stopSlideshow();
      nextSlide();
      clickCount = 0;
      setTimeout(function() {
        startSlideshow();
      }, 2000);
      
    }
  });

  // Smooth scrolling for navigation
  const navLinks = document.querySelectorAll('.nav-item');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Pause slideshow when user hovers over images
  const homeSection = document.getElementById('home');
  homeSection.addEventListener('mouseenter', stopSlideshow);
  homeSection.addEventListener('mouseleave', startSlideshow);
});
