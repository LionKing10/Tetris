// Script for global variables and functions that execute
// before the start of the game

var cFigure = currentFigure();
var nFigure = nextFigure();
var holdedFigure;

var mainScreenSelector = $('#main-screen').children();
var mainScreen = [];
for (var i = 0; i < mainScreenSelector.length; i++) {
    mainScreen.push(mainScreenSelector[i]);
}

function setContainProperty() {
    var blocks = $('[data-x]');
    newArr = [];
    for (var i = 0; i < blocks.length; i++) {
        newArr.push(blocks[i]);
    }
    newArr.forEach(function (el) {
        el.setAttribute('contains', 'false');
    });
}
setContainProperty();



function setFillProperty() {
    var rows = $('[data-y]');
    newArr = [];
    for (var i = 0; i < rows.length; i++) {
        newArr.push(rows[i]);
    }
    newArr.forEach(function (el) {
        el.setAttribute('fill', 0);
    });
}
setFillProperty();



function currentFigure() {
    var currentFigure = new FigureTemplate();
    currentFigure.randomFigure();
    return currentFigure;
}

function nextFigure() {
    var nextFigure = new FigureTemplate();
    nextFigure.randomFigure();
    setNextFigureImage(nextFigure);
    return nextFigure;
}
