"use strict";

var brgBtn           = document.querySelector( '.burger-btn' );
var headerMenu       = document.querySelector( '.header__menu' );
var feautureItem     = document.querySelectorAll( '.feature__item' );
var feautureContent  = document.querySelectorAll( '.feature__content' );
var testimonialsCont = document.querySelector( '.testimonials__content' );
var testimonialsItems = testimonialsCont.getElementsByClassName("testimonials__item");

for (let i = 0; i < feautureItem.length; i++) {
    feautureItem[i].addEventListener ( 'mouseover', function () {
        feautureContent[i].style.display = "block";
    })
    feautureItem[i].addEventListener ( 'mouseout', function () {
        feautureContent[i].style.display = "none";      

    })
}

/************/
brgBtn.addEventListener( 'click', function() {
    brgBtn.classList.toggle( 'active' );
    headerMenu.classList.toggle( 'active' );
})
