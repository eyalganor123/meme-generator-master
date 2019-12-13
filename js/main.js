'use strict'

function init() {
    document.querySelector('.editor').style.display = "none";
    renderGallery();
    document.querySelector('#text-input').value = gMeme.txts[0].line;
 
}

function renderGallery() {
    var elImages = document.querySelector('#images');
    var imgs = gImgs;
    var strImgs = imgs.map(function (img, position) {
        return `<img src="${img.url}" alt="" onclick="hideGallery(${position})">`;
    })
    elImages.innerHTML = strImgs.join('');
}

function hideGallery(id) {
    document.querySelector('.gallery').style.display = "none";
    document.querySelector('.editor').style.display = "block";

    updateCanvas(id, event);

}
function draw() {
    let img = document.querySelector('img');
    img.src = gImgs[gMeme.selectedImgId].url;

    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

    gMeme.txts.forEach(function (object) {
        gCtx.lineWidth = 4;
        gCtx.font = `${object.size}px Impact`;
        gCtx.strokeStyle = object.strokecolor;
        gCtx.strokeText(object.line, object.x, object.y + object.direction);

        gCtx.fillStyle = object.fillcolor;
        gCtx.fillText(object.line, object.x, object.y + object.direction);
    

    });

    document.querySelector('#text-input').value = gMeme.txts[gCurrLine].line;
}

function updateCanvas(id) {
    gMeme.selectedImgId = id;
    draw();

}

function onShowGallery() {
    document.querySelector('.gallery').style.display = "block";
    document.querySelector('.editor').style.display = "none";
    gMeme.selectedImgId = 0;
    draw();
    document.querySelector('.gallery').classList.remove('hide');
}

function onDeleteClick() {
    gMeme.txts = [{
        line: ' ',
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
    }];
    gCurrLine = 0;
    draw();
}

function onFontUp() {
    console.log(gMeme.txts[gCurrLine]);
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
    gCurrLine++;
    console.log(gMeme.txts[gCurrLine - 1].y);console.log(gCurrLine-1);
    if (gCurrLine > gMeme.txts.length - 1) gCurrLine = 0;
    gCtx.lineWidth = 3;
    gCtx.strokeStyle = "red";
    gCtx.beginPath();
    gCtx.moveTo(0, gMeme.txts[gCurrLine ].y+ gMeme.txts[gCurrLine].direction+10);
    gCtx.lineTo(1000,gMeme.txts[gCurrLine ].y+ gMeme.txts[gCurrLine].direction+10);
    gCtx.stroke();
    setTimeout(function(){
        draw(); }, 3000);

}

function onUpdateFillColor() {
    console.log('fill');
    gMeme.txts[gCurrLine].fillcolor = document.querySelector('#fill-color').value;
    draw();
}

function onUpdateStrokeColor() {
    console.log(222);
    gMeme.txts[gCurrLine].strokecolor = document.querySelector('#stroke-color').value;
    draw();
}

var distance = 50;

function onAddLine() {
    gCurrLine++;
    var newLine = {
        line: 'new line',
        size: 50,
        direction: 0,
        fillcolor: "white",
        strokecolor: "black",
        x: 50,
        y: gMeme.txts[0].y + distance

    }
    gMeme.txts.splice(1, 0, newLine);
    gCurrLine++;

    draw();
    distance += 50;

}

function onRemoveLine() {
    if (gMeme.txts.length <= 1) return
    // gCurrLine--;
    gMeme.txts.splice(gCurrLine, 1);
      gCurrLine=0;  
    draw();
}
function showLocation(event){
    console.log(event.layerX);
}
function showText(event){
    var elTextInput=document.querySelector('#text-input');
    var text = elTextInput.value;
    changeGMeme(text);
    }