//ref
var hamburgerMenu = $('.hamburger-menu');
var chiudere = $('.close');
var menu = $('a .fas');
//far apparire il menu nascosto
menu.click(function(){
    //alert('click')
    hamburgerMenu.fadeIn();
})
//chiudere il menu
chiudere.click(function(){
    //alert('click')
    hamburgerMenu.fadeOut();
})