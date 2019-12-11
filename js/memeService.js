var gCanvas = document.querySelector('#myCanvas');
var gCtx = gCanvas.getContext('2d');
let gCurrLine=0;

var gImgs = [{
    id:0,
    url: './img/003.jpg',
    keywords: ['happy']
}, {
    id: 1,
    url: './img/005.jpg',
    keywords: ['angry']
},{
    id: 2,
    url: './img/006.jpg',
    keywords: ['angry']
},{
    id: 3,
    url: './img/8.jpg',
    keywords: ['angry']
},{
    id: 4,
    url: './img/9.jpg',
    keywords: ['angry']
},{
    id: 5,
    url: './img/004.jpg',
    keywords: ['angry']
},{
    id: 6,
    url: './img/leo.jpg',
    keywords: ['angry']
},{
    id: 7,
    url: './img/12.jpg',
    keywords: ['angry']
},{
    id: 8,
    url: './img/putin.jpg',
    keywords: ['angry']
}];
var gMeme = {
    selectedImgId:1,
    selectedTxtIdx: 0,
    txts: [{
        line: 'I love Falafel',
        size: 50,
    }, {
        line: 'but not today',
        size: 50
    }]
}
let direction = 0
function draw() {
    const img = document.querySelector('img');
    img.src = gImgs[gMeme.selectedImgId].url;

    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    gImg = new Image();
    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
    };
    size = (gMeme.txts[0].size);
    gCtx.font =`${size}px Impact`;
    gCtx.strokeStyle="black";
    gCtx.lineWidth = 5
    gCtx.strokeText(gMeme.txts[0].line, 50, 80+direction);
    gCtx.strokeText(gMeme.txts[1].line, 50, 350+direction);
    gCtx.fillStyle="white"
    gCtx.fillText(gMeme.txts[0].line, 50, 80+direction);
    gCtx.fillText(gMeme.txts[1].line, 50, 350+direction);
}

function changeGMeme(text){
   gMeme.txts[gCurrLine].line = text;
   draw();
}


draw();