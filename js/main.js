'use strict'

function init() {
    renderGallery();
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
    gMeme.txts[0].size += 1;
    draw();
}

function onFontDown() {
    gMeme.txts[0].size -= 1;
    draw();
}

function onMoveUp() {
    console.log('up');
    direction -= 10;
    draw();
}

function onMoveDown() {
    console.log('down');
    direction += 10;
    draw();
}

function onSwitchLines() {
    if (gCurrLine === 0) {
        gCurrLine = 1;
        document.querySelector('#text-input').value = ""
    }else {
        gCurrLine = 0;
        document.querySelector('#text-input').value = ""
    }


}