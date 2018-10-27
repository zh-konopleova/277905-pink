document.getElementById('close__header-nav').addEventListener('click', function () {
  document.querySelector('.header').classList.add('closed');
});

document.getElementById('open__header-nav').addEventListener('click', function () {
  document.querySelector('.header').classList.remove('closed');
});

window.addEventListener('resize', function () {
  document.querySelector('.header').classList.remove('closed');
});

document.querySelectorAll('.slider').forEach(function (el) {
  el.classList.add('slider--js');
});


function moveToSlide(slider, item, offset_callback) {
  var max = slider.dataset.max,
      min = slider.dataset.min;

  if (item < min) item = max;
  if (item > max) item = 0;

  slider.querySelector('.slider__nav-link.active').classList.remove('active');

  var offset = offset_callback(item);

  slider.dataset.current = item;
  slider.querySelector('.slider__nav-link[data-item="' + item + '"]').classList.add('active');
  slider.querySelector('.slider__list').style.transform = 'translateX(' + offset + ')';
}

var reviewsSlider = document.querySelector('#reviews-slider'),
    reviewsOffset = function (item) {
      return (-1 * item * 100) + '%';
    };

if (reviewsSlider) {
  reviewsSlider.querySelectorAll('.slider__nav-link').forEach(function (el) {
    el.addEventListener('click', function () {
      moveToSlide(
        reviewsSlider,
        parseInt(this.dataset.item, 10),
        reviewsOffset
      );
    });
  });

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
  tariffsSlider.querySelectorAll('.slider__nav-link').forEach(function (el) {
    el.addEventListener('click', function () {
      moveToSlide(
        tariffsSlider,
        parseInt(this.dataset.item, 10),
        tariffsOffset
      )
    });
  });
}
