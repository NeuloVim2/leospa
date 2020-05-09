"use strict";
/*************************************pixPer *****************************************/

var body = document.getElementById('page');
var pixPer = document.querySelector('.pixPer');

function increaseOpacity() {
    let style, opacityAtStart, opacityAtEnd;

    style = getComputedStyle(body);
    opacityAtStart = parseFloat(style.opacity);
    opacityAtStart += 0.2;
    opacityAtEnd = opacityAtStart.toString();
    body.style.opacity = opacityAtEnd;
}
function decreaseOpacity() {
    let style, opacityAtStart, opacityAtEnd;
    
    style = getComputedStyle(body);
    opacityAtStart = parseFloat(style.opacity);
    opacityAtStart -= 0.2;
    opacityAtEnd = opacityAtStart.toString();
    body.style.opacity = opacityAtEnd;
}
function toogleMockUp () {
    let pStyle = getComputedStyle(pixPer);
    if (pStyle.backgroundImage == 'none') {
        console.log(pStyle.backgroundImage);
        pixPer.style.backgroundImage = 'url("' + 'images/04_SPA_main.jpg' + '")';
        body.style.opacity = '0.7';
        console.log(pixPer.style.backgroundImage);
    }
    else {
        pixPer.style.backgroundImage = 'none';
        body.style.opacity = '1';
    }
}

/**********************************************************************************/
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
