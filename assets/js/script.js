const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



 
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


 
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split("/").pop() || 'index.html';
  const menuLinks = document.querySelectorAll('.navbar-link');
  
  menuLinks.forEach(link => {
      if(link.getAttribute('href') === currentPage) {
          link.classList.add('active');
      }
  });
});

 

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.querySelector('img').src;
      const title = item.querySelector('h3').textContent;
      
      lightboxImg.src = imgSrc;
      document.querySelector('.project-title').textContent = title;
      lightbox.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-card');

  filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          filterBtns.forEach(btn => btn.classList.remove('active'));
          btn.classList.add('active');
          
          const filter = btn.getAttribute('data-filter');
          
          newsCards.forEach(card => {
              if (filter === 'all' || card.getAttribute('data-category') === filter) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });
});
 
const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

 
let autoSlideInterval;

const startAutoSlide = function () {
  autoSlideInterval = setInterval(slideNext, 8000);  
}

const stopAutoSlide = function () {
  clearInterval(autoSlideInterval);
}

heroSlider.addEventListener("mouseover", stopAutoSlide);
heroSlider.addEventListener("mouseout", startAutoSlide);

 
startAutoSlide();

const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);



 
const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});

function showLightbox(item) {
  const techSpecs = item.querySelector('.tech-specs').cloneNode(true);
  techSpecs.style.display = 'block';
  document.querySelector('.lightbox-details').appendChild(techSpecs);
}
// Add preloading for images
window.addEventListener('load', () => {
    const heroSlides = document.querySelectorAll('.hero-slider .slider-item');
    let currentSlide = 0;
    const slideInterval = 5000; // Fixed 5 second interval

    function showSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroSlides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }

    // Preload images
    heroSlides.forEach(slide => {
        const img = new Image();
        img.src = slide.querySelector('img').src;
    });

    // Start slider with consistent timing
    showSlide(0);
    setInterval(nextSlide, slideInterval);
});


function updateMenuColors() {
  const bodyStyle = window.getComputedStyle(document.body);
  const bgColor = bodyStyle.backgroundColor;

  // Convertir el color RGB a un valor de luminancia
  const [r, g, b] = bgColor.match(/\d+/g).map(Number);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Cambiar el color de texto según la luminancia
  const textColor = luminance > 0.5 ? "black" : "white";
  document.documentElement.style.setProperty('--menu-text-color', textColor);
}

updateMenuColors();
// O actualizar dinámicamente al cambiar fondo
document.body.addEventListener('click', () => {
  document.body.style.backgroundColor =
    `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  updateMenuColors();
});


