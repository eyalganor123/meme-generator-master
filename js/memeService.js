var gCanvas = document.querySelector('#myCanvas');
var gCtx = gCanvas.getContext('2d');
let gCurrLine = 0;

var gImgs = [{
    id: 0,
    url: './img/003.jpg',
    keywords: ['happy']
}, {
    id: 1,
    url: './img/005.jpg',
    keywords: ['angry']
}, {
    id: 2,
    url: './img/006.jpg',
    keywords: ['angry']
}, {
    id: 3,
    url: './img/8.jpg',
    keywords: ['angry']
}, {
    id: 4,
    url: './img/9.jpg',
    keywords: ['angry']
}, {
    id: 5,
    url: './img/004.jpg',
    keywords: ['angry']
}, {
    id: 6,
    url: './img/leo.jpg',
    keywords: ['angry']
}, {
    id: 7,
    url: './img/12.jpg',
    keywords: ['angry']
}, {
    id: 8,
    url: './img/putin.jpg',
    keywords: ['angry']
}];
var gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [{
        line: 'I love Falafel',
        size: 50,
        direction: 0,
        fillcolor: "white",
        strokecolor: "black"
    }, {
        line: 'but not today',
        size: 60,
        direction: 0,
        fillcolor: "white",
        strokecolor: "black"
    }],
}

function draw() {
    const img = document.querySelector('img');
    img.src = gImgs[gMeme.selectedImgId].url;

    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    gImg = new Image();
    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
    };
    size1 = (gMeme.txts[0].size);
    size2 = (gMeme.txts[1].size);

    // gCtx.strokeStyle = gMeme.txts[0].strokecolor;
    gCtx.lineWidth = 6;
    gCtx.font = `${size1}px Impact`;
    gCtx.strokeStyle = gMeme.txts[0].strokecolor;
    gCtx.strokeText(gMeme.txts[0].line, 50, 80 + gMeme.txts[0].direction);

    gCtx.fillStyle = gMeme.txts[0].fillcolor;
    gCtx.fillText(gMeme.txts[0].line, 50, 80 + gMeme.txts[0].direction);
    
    gCtx.strokeStyle = gMeme.txts[1].strokecolor;
    gCtx.font = `${size2}px Impact`;
    gCtx.strokeText(gMeme.txts[1].line, 50, 350 + gMeme.txts[1].direction);
    gCtx.fillStyle = gMeme.txts[1].fillcolor;
    gCtx.fillText(gMeme.txts[1].line, 50, 350 + gMeme.txts[1].direction);
}

function changeGMeme(text) {
    gMeme.txts[gCurrLine].line = text;
    draw();
}


draw();