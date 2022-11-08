var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var textPick = document.getElementById('largetext');
textPick.addEventListener('mousemove', () => {
    textPick.style.letterSpacing = '0.3em';
    textPick.style.transitionDuration = '3s';
});

var slideJunt1 = document.getElementById('worstpartslide');
slideJunt1.addEventListener('mouseenter', () => { 
  slideJunt1.style.mixBlendMode = 'normal';
  slideJunt1.style.transitionDuration = '3s';
});

var slideJunt12 = document.getElementById('worstpartslide');
slideJunt12.addEventListener('mouseleave', () => { 
  slideJunt12.style.mixBlendMode = 'luminosity';
  slideJunt12.style.transitionDuration = '3s';
});

var slideJunt2 = document.getElementById('jornadaslide');
slideJunt2.addEventListener('mouseenter', () => { 
  slideJunt2.style.mixBlendMode = 'normal';
  slideJunt2.style.transitionDuration = '3s';
});

var slideJunt21 = document.getElementById('jornadaslide');
slideJunt21.addEventListener('mouseleave', () => { 
  slideJunt21.style.mixBlendMode = 'luminosity';
  slideJunt21.style.transitionDuration = '3s';
});

var slideJunt3 = document.getElementById('reflectionsslide');
slideJunt3.addEventListener('mouseenter', () => { 
  slideJunt3.style.mixBlendMode = 'normal';
  slideJunt3.style.transitionDuration = '3s';
});

var slideJunt31 = document.getElementById('reflectionsslide');
slideJunt31.addEventListener('mouseleave', () => { 
  slideJunt31.style.mixBlendMode = 'luminosity';
  slideJunt31.style.transitionDuration = '3s';
});

// function clickSound() {
//   var clickSound = getElementById('clicksound');
//   clickSound.play;
// }