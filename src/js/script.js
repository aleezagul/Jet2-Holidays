const slidess = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-btn');
let currentSlide = 0;

function showSlide(index) {
  slidess.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    navButtons[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slidess.length;
  showSlide(nextIndex);
}

// Auto-slide every 3 seconds
let slideInterval = setInterval(nextSlide, 6000);

// Manual navigation
navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide
    showSlide(index);
    slideInterval = setInterval(nextSlide, 3000); // Restart auto-slide
  });
});

