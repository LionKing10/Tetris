function moveFigure(figure, rowCount, count) {
    currentRow = 14 - rowCount;
    var count = count || 5;
    if (currentRow === 1) {
        if (checkContains(figure, currentRow, count)) {
            buildFigure(figure, currentRow, count);
        }
        checkFill(figure);
        figure = nFigure;
        nFigure = nextFigure();
        moveFigure(figure, 0);
    }
    else {
        if (checkContains(figure, currentRow, count)) {
            buildFigure(figure, currentRow, count);
            var timerId = setTimeout(moveFigure, 1000, figure, ++rowCount, count);
            document.onkeydown = checkKey(figure, rowCount, count, timerId);
        }
        else {
            if (currentRow === 14) {
                alert('Game over')
                return;
            }
            checkFill(figure);
            figure = nFigure;
            nFigure = nextFigure();
            moveFigure(figure, 0);
        }
    }
}

function checkContains(figure, currentRow, count) {
    arr = figure.currentPosition.split('|').map(function (b) {
        return b;
    });
    figureWidth = arr[0].length;
    figureHeight = arr.length;
    var nextDivs = [];
    skipDivs = [];

    for (var i = 0; i < figureHeight; i++) {
        var newArr = (figure.currentPosition.split('|')).map(function (a) { return a.split(''); })[i];
        for (var j = 0; j < figureWidth; j++) {
            checkrow = newArr[j];
            currentDiv = $(`[data-y=${currentRow + i}] [data-x=${count + j}]`)[0];
            if (checkrow == 1 && skipDivs.indexOf(j) === -1) {
                skipDivs.push(j);
                nextDivs.push(currentDiv);
            }
        }
    }
    if (nextDivs.some(function (el) { return el == undefined })) {
        return true;
    }
    return nextDivs.every(function (el) {
        return ($($(el)).attr('contains')) == 'false';
    })
}

function buildFigure(figure, row, count) {
    clearDiv(figure);
    a = figure.currentPosition.split('|');
    b = a.length;
    for (var i = 0; i < b; i++) {
        var currentCount = count;
        for (var j = 0; j < a[0].length; j++) {
            if (a[i][j] == 1) {
                colorDiv(figure, currentCount, row);
            }
            currentCount++;
        }
        ++row;
    }
}

function colorDiv(figure, count, row) {
    var currentDiv = $(`[data-y=${row}] [data-x=${count}]`)[0];
    $(currentDiv).css({ "background-color": figure.color, "border": "1px solid black" }).attr('contains', 'true');
    figure.addDiv(currentDiv);
}

function clearDiv(figure) {
    figure.arrOfDivs.forEach(function (el) {
        $(el).css({ "background-color": "transparent", "border": "none" }).attr('contains', 'false');
    })
    figure.clearArr();
}

function clearRow(row) {
    arr = [];
    for (var i = 0; i < row.children.length; i++) {
        arr.push(row.children[i])
    }
    $(row).attr('fill', 0);
    arr.forEach(function (el) {
        $(el).css({ "background-color": "transparent", "border": "none" }).attr('contains', 'false').attr('fill', 0);
    });
}

function checkFill(figure) {
    figure.arrOfDivs.forEach(function (el) {
        parent = $(el).parent()[0]
        var currentFill = Number($(parent).attr('fill'));
        $(parent).attr('fill', currentFill + 1);
    })
    mainScreen.forEach(function (el) {
        if ($(el).attr('fill') >= 10) {
            var rowPosition = mainScreen.indexOf(el);
            for (var i = rowPosition; i > 1; i--) {
                var tempFill = $($(mainScreen[i - 1])[0]).attr('fill');
                $($(mainScreen[i])[0]).attr('fill', tempFill);
                $($(mainScreen[i])[0]).html($($(mainScreen[i - 1])[0]).html());
                console.log('sex')
            }
        }
    })
}

moveFigure(cFigure, 0)