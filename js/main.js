'use strict'
function init() {
  renderGallery();
}


function renderGallery(){
    var elImages = document.querySelector('#images');
    var imgs = gImgs;
    var strImgs = imgs.map(function(img,position){
        return `<img src="${img.url}" alt="" onclick="hideGallery(${position},event)">`;
    })
    elImages.innerHTML = strImgs.join('');
} 
function hideGallery(id,event){
document.querySelector('.gallery').classList.add('hide')
updateCanvas(id,event);

}
function updateCanvas(id,event){
    console.log(event.target.src);
    gMeme.selectedImgId=id;
    draw();
    
}
function showGallery(){
    document.querySelector('.gallery').classList.remove('hide')
}
