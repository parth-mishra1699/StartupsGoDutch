const btnhamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
document.querySelector('#btnHamburger').addEventListener('click', function(){
   
    if(header.classList.contains('open')){ //Close hamburger menu
        header.classList.remove('open');
        fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });

}
    else{ // Open Hamburger menu
        
    header.classList.add('open');
    fadeElems.forEach(function(element){
    element.classList.remove('fade-out');
    element.classList.add('fade-in')
    });

    }
})

var flkty = new Flickity( '.main-gallery', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 5000
  });

  