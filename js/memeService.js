var gCanvas = document.querySelector('#myCanvas');
var gCtx = gCanvas.getContext('2d');
let gCurrLine = 0;

var gImgs = [{
    id: 0,
    url: './img/8.jpg',
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
    url: './img/5.jpg',
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
    selectedImgId: 0,
    selectedTxtIdx: 0,
    txts: [{
        line: '',
        size: 50,
        direction: 0,
        fillcolor: "white",
        strokecolor: "black",
        x: 50,
        y: 80
    }, {
        line: '',
        size: 50,
        direction: 0,
        fillcolor: "white",
        strokecolor: "black",
        x: 50,
        y: 350
    }],
}


function changeGMeme(text) {
    gMeme.txts[gCurrLine].line = text;
    draw();
}

function downloadImg(elLink) {debugger;
    gCanvas.crossOrigin='';
    const data = gCanvas.toDataURL();
    elLink.href = data
    elLink.download = 'my-img.gif'
}