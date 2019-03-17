function checkKey(figure, rowCount, count, timerId) {
    return function (e) {
        e = e || window.event;

        if (e.keyCode === 38 || e.keyCode === 87) {
            e.preventDefault();
            clearTimeout(timerId);
            if (holdedFigure === undefined) {
                holdedFigure = figure;
                setHoldedFigureImage();
                holdedFigure.currentPosition = holdedFigure.possiblePositions.split(':')[0]
                clearDiv(figure);
                moveFigure(nFigure, 0);
                nFigure = nextFigure();
                return;
            }
            else {
                clearDiv(figure);
                holdedFigure.currentPosition = holdedFigure.possiblePositions.split(':')[0]
                moveFigure(holdedFigure, 0);
                holdedFigure = figure;
                setHoldedFigureImage();
                return;
            }
        }

        else if (e.keyCode === 40 || e.keyCode === 83) {
            e.preventDefault();
            clearTimeout(timerId);
            moveFigure(figure, rowCount, count);
        }

        else if (e.keyCode === 37 || e.keyCode === 65) {
            e.preventDefault();
            if (count === 1) {
                return;
            }
            clearTimeout(timerId);
            clearDiv(figure);
            count = count - 1;
            moveFigure(figure, rowCount - 1, count);
        }

        else if (e.keyCode === 39 || e.keyCode === 68) {
            e.preventDefault();
            if (count + figureWidth == 11) {
                return;
            }
            figureWidth = figure.currentPosition.split('|')[0].length;
            clearTimeout(timerId);
            clearDiv(figure);
            count = count + 1;
            moveFigure(figure, rowCount - 1, count);
        }
        else if (e.keyCode === 32) {
            e.preventDefault();
            clearTimeout(timerId);
            clearDiv(figure);
            figure.rotate();
            moveFigure(figure, rowCount - 1, count);
        }
    }
}