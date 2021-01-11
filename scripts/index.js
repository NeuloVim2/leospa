"use strict";

const brgBtn               = $( '.burger-btn' ); // Get .burger-btn element from header section for mobile
const headerMenu           = $( '.header__menu' ); // Get .header__menu element from header section
const sliderTestimonials   = $('.testimonials__slider'); // Get .testimonials__slider element from testimonials sections
const datepicker           = $('#datepicker'); // Get #datepicker element from appointment section
const timepicker           = $('#timepicker'); // Get #timepicker element from appointment section
const videoPreviewer       = $('[fancy-box]');

$(document).ready(function() {

    //Set click event listener on burger button
    brgBtn.click(function() {
      
      //Toggle burger button style on click
      brgBtn.toggleClass("active");

      //Toggle headerMenu visability on click
      headerMenu.toggleClass("active");
  });

  // Slider 'Slick' initialisation
  sliderTestimonials.slick({

      slidesToShow: 1, // Show one slide per time
      touchMove: true, // Enabele slides moving with a dinger on mobile device
      dots: true,      // Show dots 
      autoplay: true,  // Enable autoplay
      autoplaySpeed: 3000,  // Set autoplay speed
      dotsClass: "testimonials__controller" // Set custom class on dots

  });

  // Datepicker 'Pickaday' initialisation
  datepicker.pikaday({
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000,2020]
  });

  // Timepicker 'Timepicker' initialisation
  timepicker.wickedpicker();

  // FancyBox initialisation
  videoPreviewer.fancybox();
});

// Plugin for using css var at IE
cssVars({watch: true});

