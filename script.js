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
   
   
