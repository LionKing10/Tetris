function checkKey(figure, rowCount, count, timerId) {
    return function (e) {
        e = e || window.event;

        if (e.keyCode === 38 || e.keyCode === 87) {
            e.preventDefault();
            clearTimeout(timerId);
        }
        else if (e.keyCode === 40 || e.keyCode === 83) {
            e.preventDefault();
            clearTimeout(timerId);
            moveFigure(figure, rowCount, count);
        }
        else if (e.keyCode === 37 || e.keyCode === 65) {
            e.preventDefault();
            if (count === 1){
                return;
            }
            clearTimeout(timerId);
            clearDiv(figure);
            count = count - 1;
            moveFigure(figure, rowCount - 1, count);
        }
        else if (e.keyCode === 39 || e.keyCode === 68) {
            e.preventDefault();
            figureWidth = figure.currentPosition.split('|')[0].length;
            clearTimeout(timerId);
            clearDiv(figure);
            if (count + figureWidth == 11){
                return;
            }
            count = count + 1;
            moveFigure(figure, rowCount - 1, count);
        }
        else if (e.keyCode === 32) {
            e.preventDefault();
            clearTimeout(timerId);
            clearDiv(figure);
            figure.rotate();
            moveFigure(figure, rowCount, count);
        }
    }
}