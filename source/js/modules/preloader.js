const preloader = document.querySelector('.preloader');
const video = document.querySelector('video');

function initPreloader() {
  window.onload = function () {
    preloader.classList.add('hide-preloader');
  };
  setTimeout(function () {
    preloader.classList.remove('hide-preloader');
    preloader.classList.add('preloader-hidden');
    video.style.display = 'block';
  }, 990);
}

export {initPreloader};
