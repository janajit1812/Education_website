// Javascript code injection

var burger= document.querySelector('.burger')
var navbar= document.querySelector('.navbar')
var rightnav= document.querySelector('.rightnav')
var navList= document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})