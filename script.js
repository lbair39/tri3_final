'use strict'
 
var slideIndex3 = 1;
showSlides3(slideIndex3);

var slideIndex4 = 1;
showSlides4(slideIndex4);
 
function plusSlides3(c) {
 showSlides3(slideIndex3 += c);
}
function plusSlides4(w) {
    showSlides4(slideIndex4 += w);
   }
 
function currentSlide3(c) {
 showSlides3(slideIndex3 = c);
}

function currentSlide4(w) {
 showSlides4(slideIndex4 = w);
}
 
function showSlides3(c) {
 var i;
 var slides3 = document.getElementsByClassName("mySlides3");
 var dots3 = document.getElementsByClassName("dot3");
 if (c > slides3.length) {slideIndex3 = 1}
 if (c < 1) {slideIndex3 = slides3.length}
 for (i = 0; i < slides3.length; i++) {
     slides3[i].style.display = "none";
 }
 for (i = 0; i < dots3.length; i++) {
     dots3[i].className = dots3[i].className.replace(" active", "");
 }
 slides3[slideIndex3-1].style.display = "block";
 dots3[slideIndex3-1].className += " active";
}

function showSlides4(w) {
    var i;
    var slides4 = document.getElementsByClassName("mySlides4");
    var dots4 = document.getElementsByClassName("dot4");
    if (w > slides4.length) {slideIndex4 = 1}
    if (w < 1) {slideIndex4 = slides4.length}
    for (i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }
    slides4[slideIndex4-1].style.display = "block";
    dots4[slideIndex4-1].className += " active";
   }
   
 
var slideIndex = 1;
showSlides(slideIndex);

var slideIndex2 = 1; 
showSlides2(slideIndex2);
 
// Next/previous controls
function plusSlides(n) {
 showSlides(slideIndex += n);
}

function plusSlides2(m){
    showSlides2(slideIndex2 += m);
}
 
// Thumbnail image controls
function currentSlide(n) {
 showSlides(slideIndex = n);
}

function currentSlide2(m){
showSlides2(slideIndex2 = m);
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

function showSlides2(m) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    if (m > slides2.length) {slideIndex2 = 1}
    if (m < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";
    dots2[slideIndex2-1].className += " active";
}

// DROP DOWN 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

