function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    // console.log(scrollValue);

    if(scrollValue < 140){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
}
window.addEventListener('scroll' , changeBg);