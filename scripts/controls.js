document.onkeydown = checkKey;

function checkKey(e){
    e = e || window.event;

    if (e.keyCode === 38 || e.keyCode === 87) {
        console.log('up');
    }
    else if (e.keyCode === 40 || e.keyCode === 83) {
        console.log('down');
    }
    else if (e.keyCode === 37 || e.keyCode === 65) {
       console.log('left')
    }
    else if (e.keyCode === 39 || e.keyCode === 68) {
        console.log('right');
    }
    else if(e.keyCode === 32){
        console.log('space');
    }
}