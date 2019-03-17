function setHoldedFigureImage() {
    var holdedFigureImage = $('#holded-figure')[0];
    switchImages(holdedFigureImage, holdedFigure);
}

function setNextFigureImage(nextFigure) {
    var nextFigureImage = $('#next-figure')[0];
    switchImages(nextFigureImage, nextFigure);
}

function switchImages(divName, variableName) {
    switch (variableName.figure) {
        case 'line':
            divName.innerHTML = '<span class="helper"></span>';
            divName.innerHTML += '<img src=img/line-figure.png>';
            break;
        case 'square':
            divName.innerHTML = '<span class="helper"></span>';
            divName.innerHTML += '<img src=img/square-figure.png>';
            break;
        case 'leftGun':
            divName.innerHTML = '<span class="helper"></span>';
            divName.innerHTML += '<img src=img/left-gun.png>';
            break;
        case 'redZigzag':
            divName.innerHTML = '<span class="helper"></span>'
            divName.innerHTML += '<img src=img/red-zigzag-figure.png>';
            break;
        case 'greenZigzag':
            divName.innerHTML = '<span class="helper"></span>';
            divName.innerHTML += '<img src=img/green-zigzag-figure.png>';
            break;
        case 'rightGun':
            divName.innerHTML = '<span class="helper"></span>';
            divName.innerHTML += '<img src=img/right-gun.png>';
            break;
        case 'pyramid':
            divName.innerHTML = '<span class="helper"></span>';
            divName.innerHTML += '<img src=img/pyramid-figure.png>';
            break;
    }
}