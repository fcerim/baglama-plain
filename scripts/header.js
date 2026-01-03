//Shrinking header on scroll down 64 px from top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
    document.querySelector('.banner').classList.add('banner-shrinked');
    document.querySelector('.logo').classList.add('logo-shrinked');
    document.querySelector('.title').classList.add('title-shrinked');
    document.querySelector('.subtitle').classList.add('subtitle-shrinked');
    document.querySelector('nav').classList.add('nav-shrinked');
  } 
  else {
    document.querySelector('.banner').classList.remove('banner-shrinked');
    document.querySelector('.logo').classList.remove('logo-shrinked');
    document.querySelector('.title').classList.remove('title-shrinked');
    document.querySelector('.subtitle').classList.remove('subtitle-shrinked');
    document.querySelector('nav').classList.remove('nav-shrinked');
  }
}