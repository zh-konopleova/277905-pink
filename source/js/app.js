document.querySelectorAll('.slider').forEach(function (el) {
  el.classList.add('slider--js');
});

var reviewsSlider = document.querySelector('#reviews-slider');
function moveToSlide(item) {
  var max = reviewsSlider.dataset.max;
  if (item < 0) item = max;
  if (item > max) item = 0;

  reviewsSlider.querySelector('.slider__nav-link.active').classList.remove('active');

  var offset = -1 * item * 100;
  offset = offset + '%';

  reviewsSlider.dataset.current = item;
  reviewsSlider.querySelector('.slider__nav-link[data-item="' + item + '"]').classList.add('active');
  reviewsSlider.querySelector('.slider__list').style.transform = 'translateX(' + offset + ')';
}

reviewsSlider.querySelectorAll('.slider__nav-link').forEach(function (el) {
  el.addEventListener('click', function () {
    moveToSlide(parseInt(this.dataset.item, 10));
  });
});

reviewsSlider.querySelector('.slider__nav-arrow--prev').addEventListener('click', function () {
  moveToSlide(parseInt(reviewsSlider.dataset.current, 10) - 1);
})

reviewsSlider.querySelector('.slider__nav-arrow--next').addEventListener('click', function () {
  moveToSlide(parseInt(reviewsSlider.dataset.current, 10) + 1);
})
