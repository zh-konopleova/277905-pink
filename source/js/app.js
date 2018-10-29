var width = document.body.offsetWidth;
document.querySelector('.header').classList.add('header--js');

document.getElementById('close__header-nav').addEventListener('click', function () {
  document.querySelector('.header').classList.add('header--closed');
});

document.getElementById('open__header-nav').addEventListener('click', function () {
  document.querySelector('.header').classList.remove('header--closed');
});

window.addEventListener('resize', function () {
  document.querySelector('.header').classList.remove('header--closed');
});

var sliders = document.querySelectorAll('.slider');
for (var i = 0; i < sliders.length; i++) {
  var slider = sliders[i];
  slider.classList.add('slider--js');
}

function moveToSlide(slider, item, offset_callback) {
  var max = slider.dataset.max,
      min = slider.dataset.min;

  if (item < min) item = max;
  if (item > max) item = 0;

  slider.querySelector('.slider__nav-link--active').classList.remove('slider__nav-link--active');

  var offset = offset_callback(item);

  slider.dataset.current = item;
  slider.querySelector('.slider__nav-link[data-item="' + item + '"]').classList.add('slider__nav-link--active');
  slider.querySelector('.slider__list').style.transform = 'translateX(' + offset + ')';
}

var reviewsSlider = document.querySelector('#reviews-slider'),
    reviewsOffset = function (item) {
      return (-1 * item * 100) + '%';
    };

if (reviewsSlider) {
  var links = reviewsSlider.querySelectorAll('.slider__nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      moveToSlide(
        reviewsSlider,
        parseInt(this.dataset.item, 10),
        reviewsOffset
      );
    });
  }

  reviewsSlider.querySelector('.slider__nav-arrow--prev').addEventListener('click', function () {
    moveToSlide(
      reviewsSlider,
      parseInt(reviewsSlider.dataset.current, 10) - 1,
      reviewsOffset
    );
  });

  reviewsSlider.querySelector('.slider__nav-arrow--next').addEventListener('click', function () {
    moveToSlide(
      reviewsSlider,
      parseInt(reviewsSlider.dataset.current, 10) + 1,
      reviewsOffset
    );
  });
}

var tariffsSlider = document.querySelector('#tariffs-slider'),
    tariffsOffset = function (item) {
      return (-1 * item * 280) + 'px';
    };

if (tariffsSlider) {
  var links = tariffsSlider.querySelectorAll('.slider__nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      moveToSlide(
        tariffsSlider,
        parseInt(this.dataset.item, 10),
        tariffsOffset
      )
    });
  }
}

function initMap() {
  var coords = { lat: 59.9387942, lng: 30.3230833 };
  var map = new google.maps.Map(document.getElementById('map-container'), {
    center: coords,
    zoom: 14
  });

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: 'Pink'
  });
}
