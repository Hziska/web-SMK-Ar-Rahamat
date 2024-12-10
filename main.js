// sticky bar
const navigasi = document.querySelector('.navigasi')
const stickyOffset = navigasi.offsetTop;


window.addEventListener("scroll",()=>{
    if(window.pageYOffset > stickyOffset){
        navigasi.classList.add('aktif')
    }else{
        navigasi.classList.remove('aktif')
    }
})




// menuu
const menuBar = document.querySelector('.menu-bar');
const menuNav = document.querySelector('.menu-navigasi')

menuBar.addEventListener('click',function(){
    menuNav.classList.toggle('menu-active');
})