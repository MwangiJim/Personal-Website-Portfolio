let menu = document.querySelector('.menu')
let menuBar = document.querySelector('.nav-links')
let preloader = document.querySelector('#preloader');

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
   },1500)
})