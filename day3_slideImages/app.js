var images= document.querySelectorAll('.image img')
var closebtn= document.querySelector('.close')
var NextBtn= document.querySelector('.gallery_next')
var PrevBtn= document.querySelector('.gallery_prev')
var galleryImg= document.querySelector('.gallery__inner img')
var gallery= document.querySelector('.gallery')

var currentIndex= 0


function galleryShow(){
    if(currentIndex==0){
        PrevBtn.classList.add('hide')
    }
    else{
        PrevBtn.classList.remove('hide')
    }
    if(currentIndex==images.length-1){
        NextBtn.classList.add('hide')
    }
    else{
        NextBtn.classList.remove('hide')
    }
    galleryImg.src=images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((image,index)=>{
    image.onclick=function(){
        currentIndex=index
        galleryShow()
    }
})

closebtn.onclick=function(){
    gallery.classList.remove('show')
}
document.addEventListener('keydown', function(e){
    if(e.keyCode=27){
        gallery.classList.remove('show')
    }
})

PrevBtn.addEventListener('click', function(){
    if(currentIndex>0){
        currentIndex--
        galleryShow()
    }
})
NextBtn.addEventListener('click', function(){
    if(currentIndex<images.length-1){
        currentIndex++
        galleryShow()
    }
})