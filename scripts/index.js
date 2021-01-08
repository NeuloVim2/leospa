"use strict";

const brgBtn               = $( '.burger-btn' ); // Get .burger-btn element from DOM
const headerMenu           = $( '.header__menu' ); // Get .header__menu element from DOM
const sliderTestimonials   = $('.testimonials__slider'); // Get .testimonials__slider element from DOM

$(document).ready(function() {

    //Set click event listener on burger button
    brgBtn.click(function() {
      
      //Toggle burger button style on click
      brgBtn.toggleClass("active");

      //Toggle headerMenu visability on click
      headerMenu.toggleClass("active");
  });

  // Slider Slick initialisation
  sliderTestimonials.slick({

      slidesToShow: 1, // Show one slide per time
      touchMove: true, // Enabele slides moving with a dinger on mobile device
      dots: true,      // Show dots 
      autoplay: true,  // Enable autoplay
      autoplaySpeed: 3000,  // Set autoplay speed
      dotsClass: "testimonials__controller" // Set custom class on dots

  })
});

