"use strict";

var brgBtn           = document.querySelector( '.burger-btn' );
var headerMenu       = document.querySelector( '.header__menu' );
var testimonialsCont = document.querySelector( '.testimonials__content' );
var testimonialsItems = testimonialsCont.getElementsByClassName("testimonials__item");


/************/
brgBtn.addEventListener( 'click', function() {
    brgBtn.classList.toggle( 'active' );
    headerMenu.classList.toggle( 'active' );
})
