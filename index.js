document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.carousel-image-wrapper');
    const images = document.querySelectorAll('.carousel-image-wrapper img');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const totalImages = images.length;
    let currentIndex = 0;
  
    function updateCarousel() {
      wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
      updateIndicators();
    }
  
    function updateIndicators() {
      const indicators = document.querySelectorAll('.indicator');
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }
  
    function createIndicators() {
      for (let i = 0; i < totalImages; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', function () {
          currentIndex = i;
          updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
      }
    }
  
    function navigateCarousel(direction) {
      if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalImages;
      } else {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      }
      updateCarousel();
    }
  
    function startCarousel() {
      setInterval(function () {
        navigateCarousel('next');
      }, 3000);
    }
  
    createIndicators();
    startCarousel();
  
    document.querySelector('.carousel-button-left').addEventListener('click', function () {
      navigateCarousel('prev');
    });
  
    document.querySelector('.carousel-button-right').addEventListener('click', function () {
      navigateCarousel('next');
    });
  });
  