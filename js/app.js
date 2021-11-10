


let a = colorChange();
colorChange('black');

function colorChange(color = 'red'){
    if (color == 'red'){
        return;
    }
    color = 'green';
    console.log(color);
}