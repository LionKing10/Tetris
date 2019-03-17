function FigureTemplate() {
    this.figure = undefined;
    this.arrOfDivs = [];
    this.positionCount = 0;
}

FigureTemplate.prototype.randomFigure = function () {
    this.rand = Math.round(Math.random() * (7 - 1) + 1);
    switch (this.rand) {
        case 1:
            this.figure = 'square';
            this.color = 'yellow';
            this.possiblePositions = "11|11";
            break;
        case 2:
            this.figure = 'line';
            this.color = 'rgb(34, 158, 230)';
            this.possiblePositions = '1111:1|1|1|1';
            break;
        case 3:
            this.figure = 'greenZigzag';
            this.color = 'rgb(37, 179, 37)'
            this.possiblePositions = '011|110:10|11|01';
            break;
        case 4:
            this.figure = 'redZigzag';
            this.color = 'rgb(221, 22, 22)'
            this.possiblePositions = '110|011:01|11|10';
            break;
        case 5:
            this.figure = 'leftGun';
            this.color = 'rgb(30, 30, 240)';
            this.possiblePositions = '111|001:01|01|11:100|111:11|10|10';
            break;
        case 6:
            this.figure = 'rightGun';
            this.color = 'orange';
            this.possiblePositions = '111|100:10|10|11:001|111:11|01|01';
            break;
        case 7:
            this.figure = 'pyramid';
            this.color = 'rgb(160, 31, 185)'
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
}

FigureTemplate.prototype.addDiv = function(div){
    this.arrOfDivs.push(div);
}

FigureTemplate.prototype.clearArr = function(){
    this.arrOfDivs = [];
}