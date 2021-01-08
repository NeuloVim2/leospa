"use strict";

const brgBtn           = $( '.burger-btn' );
const headerMenu       = $( '.header__menu' );

/************/
$(document).ready(function() {
    brgBtn.click(function() {
      brgBtn.toggleClass("active");
      headerMenu.toggleClass("active");
  });
});
