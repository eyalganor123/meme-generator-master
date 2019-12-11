'use strict'

function init() {
    renderGallery();
    document.querySelector('#text-input').value = gMeme.txts[0].line
}


function renderGallery() {
    var elImages = document.querySelector('#images');
    var imgs = gImgs;
    var strImgs = imgs.map(function (img, position) {
        return `<img src="${img.url}" alt="" onclick="hideGallery(${position},event)">`;
    })
    elImages.innerHTML = strImgs.join('');
}

function hideGallery(id, event) {
    document.querySelector('.gallery').classList.add('hide')
    updateCanvas(id, event);

}

function updateCanvas(id, event) {
    console.log(event.target.src);
    gMeme.selectedImgId = id;
    draw();

}

function showGallery() {
    document.querySelector('.gallery').classList.remove('hide')
}

function onFontUp() {

    gMeme.txts[gCurrLine].size += 1;
    draw();
}

function onFontDown() {
    gMeme.txts[gCurrLine].size -= 1;
    draw();
}

function onMoveUp() {
    gMeme.txts[gCurrLine].direction -= 10;
    draw();
}

function onMoveDown() {
    gMeme.txts[gCurrLine].direction += 10;
    draw();
}

function onSwitchLines() {
    if (gCurrLine === 0) {
        gCurrLine = 1;
        document.querySelector('#text-input').value = gMeme.txts[1].line;
        document.querySelector('#fill-color').value = gMeme.txts[1].fillcolor;
        document.querySelector('#stroke-color').value = gMeme.txts[1].strokecolor;
       
    } else {
        gCurrLine = 0;
        document.querySelector('#text-input').value = gMeme.txts[0].line;
        document.querySelector('#fill-color').value = gMeme.txts[0].fillcolor;
        document.querySelector('#stroke-color').value = gMeme.txts[0].strokecolor;
    }
}
function onUpdateFillColor(){
    console.log('fill');
    gMeme.txts[gCurrLine].fillcolor = document.querySelector('#fill-color').value;
    draw();
}
function onUpdateStrokeColor(){
    console.log(222);
    gMeme.txts[gCurrLine].strokecolor = document.querySelector('#stroke-color').value;
    draw();
}