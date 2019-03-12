function setContainProperty() {
    var arr = $('[data-x]');
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    newArr.forEach(function (el) {
        el.setAttribute('contains', 'false');
    });
}
setContainProperty();

var arrOfPositions = "11|11";

a = arrOfPositions.split('|').map(function (a) { return a.split('') });

function colorDiv(count, row) {
    var currentDiv = $(`[data-y=${row}] [data-x=${count}]`)[0];
    $(currentDiv).css({ "background-color": "yellow", "border": "1px solid black" }).attr('contains', 'true');
}

function clearDiv(count, row) {
    var currentDiv = $(`[data-y=${row}] [data-x=${count}]`)[0];
    $(currentDiv).css({ "background-color": "transparent", "border": "none" }).attr('contains', 'false');
}



function buildSquare(row) {
    clearDiv(5, row + 2);
    clearDiv(6, row + 2);
    for (var i = 0; i < a.length; i++) {
        var count = 5;
        for (var j = 0; j < a[i].length; j++) {
            colorDiv(count, row);
            count++
        }
        ++row;
    }
}

function moveSquare(i, rowCount) {
    try {
        currentRow = 14 - rowCount
        if (i === 14) {
            moveSquare(0, 0);
        }
        else {
            if ($($(`[data-y=${currentRow}] [data-x=5]`)[0]).attr('contains') == 'true') {
                moveSquare(0, 0);
            }
            else {
                buildSquare(currentRow);
                setTimeout(moveSquare, 100, ++i, ++rowCount);
            }
        }
    }
    catch (e) {
        alert('Game Over!')
    }
}

moveSquare(0, 0);