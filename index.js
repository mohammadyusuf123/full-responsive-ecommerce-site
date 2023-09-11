const checkBtn = document.getElementById('check')
const close=document.getElementById('close')
const navbar =document.getElementById('nav')
const navList =document.getElementById('nav-list')



//    Navbar Collapasing
if (checkBtn) {
    checkBtn.addEventListener('click',()=>{
        navList.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click',()=>{
        navList.classList.remove('active')
    })
}

// Changing Image source
var mainImg =document.getElementById('mainImg')
var smallImg =document.getElementsByClassName('small-img')





smallImg[0].onclick=function() {
    mainImg.src=smallImg[0].src
}
smallImg[1].onclick=function() {
    mainImg.src=smallImg[1].src
}
smallImg[2].onclick=function() {
    mainImg.src=smallImg[2].src
}
smallImg[3].onclick=function() {
    mainImg.src=smallImg[3].src
}

