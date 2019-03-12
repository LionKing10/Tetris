function FigureTemplate() {
    this.figure = undefined;
    this.arrOfDivs = [];
    this.positionCount = 0;
}

FigureTemplate.prototype.randomFigure = function () {
    this.rand = Math.round(Math.random() * (8 - 1) + 1);
    switch (this.rand) {
        case 1:
            this.figure = 'square';
            this.possiblePositions = "11|11";
            break;
        case 2:
            this.figure = 'line';
            this.possiblePositions = '1111:01|01|01|01';
            break;
        case 3:
            this.figure = 'greenZigzag';
            this.possiblePositions = '011|110:010|011|001';
            break;
        case 4:
            this.figure = 'redZigzag';
            this.possiblePositions = '110|011:010|110|100';
            break;
        case 5:
            this.figure = 'leftGun';
            this.possiblePositions = '111|001:01|01|11:100|111:11|10|10';
            break;
        case 6:
            this.figure = 'rightGun';
            this.possiblePositions = '111|100:10|10|11:001|111:11|01|01';
            break;
        case 7:
            this.figure = 'pyramid';
            this.possiblePositions = '111|010:10|11|10:010|111:01|11|01';
            break;
    }
    this.arrayOfPositions = this.possiblePositions.split(':');
    this.currentPosition = this.arrayOfPositions[0];
}

FigureTemplate.prototype.rotate = function () {
    if (this.positionCount++ >= this.arrayOfPositions.length - 1) {
        this.positionCount = 0;
    }
    this.currentPosition = this.arrayOfPositions[this.positionCount];
    console.log('Rotated to ' + this.currentPosition);
}

FigureTemplate.prototype.addDiv = function(div){
    this.arrOfDivs.push(div);
}

FigureTemplate.prototype.clearArr = function(){
    this.arrOfDivs = [];
}

// a = figure.currentPosition.split('|').map(function(b){         // Figure's height
//     return b; 
// });
