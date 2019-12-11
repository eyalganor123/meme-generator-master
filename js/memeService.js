var gCanvas = document.querySelector('#myCanvas');
var gCtx = gCanvas.getContext('2d');

var gImgs = [{
    id: 1,
    url: './img/003.jpg',
    keywords: ['happy']
}, {
    id: 2,
    url: './img/005.jpg',
    keywords: ['angry']
}];
var gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [{
        line: 'I never eat Falafel',
        size: 50,
    }]
}

function draw() {
    const img = document.querySelector('img');
    console.log(img);
    img.src = gImgs[gMeme.selectedImgId].url;
    console.log(img);

    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    gImg = new Image();
    gImg.onload = () => {
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
    };
    size = (gMeme.txts[0].size);
    gCtx.font =`${size}px Impact`;
    gCtx.strokeStyle="black";
    gCtx.lineWidth = 5
    gCtx.strokeText(gMeme.txts[0].line, 50, 50);
    gCtx.fillStyle="white"
    gCtx.fillText(gMeme.txts[0].line, 50, 50);
}
draw();