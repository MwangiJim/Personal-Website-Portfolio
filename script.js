let menu = document.querySelector('#menu')
let menuBar = document.querySelector('.nav-links')
let preloader = document.querySelector('#preloader');
let leftArrow = document.querySelector('#left')
let rightArrow = document.querySelector('#right')
let GymImages = [
    '/Images/gym.png','/Images/1.jpg','/Images/2.jpg','/Images/3.jpg','/Images/4.jpg',
    '/Images/5.jpg','/Images/6.jpg','/Images/7.jpg','/Images/8.jpg','/Images/9.jpg',
    '/Images/10.jpg','/Images/11.jpg','/Images/12.jpg','/Images/13.jpg','/Images/14.jpg'
]
let Slider = document.querySelector('.slider')
let Image = document.querySelector('#image')

menu.onclick =()=>{
    
    if(menuBar.style.display === 'none'){
        menuBar.style.display = 'block'
        menu.src = '/Images/close.png'  
    }
    else{
        menuBar.style.display = 'none'
        menu.src = '/Images/menu.png' 
    }
}
window.addEventListener('load',()=>{
   setTimeout(()=>{
    preloader.style.display = 'none'
   },2000)
})