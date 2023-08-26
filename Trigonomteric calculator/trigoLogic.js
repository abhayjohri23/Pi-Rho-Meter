var tiles = Array.from(document.getElementsByClassName('tiles'));

tiles.forEach((tile) => {
    let calcBtn = tile.querySelector('.input').querySelector('.refresh-button');
    calcBtn.addEventListener('click', (calcEvent) => {
        try{
            let val = tile.querySelector('.input').querySelector('input').value;
            let id = tile.querySelector('.output').getAttribute('id');
            let output = Number(val);

            if(id === 'sine')           output = Math.sin(val);
            else if(id === 'cosine')    output = Math.cos(val);
            else if(id === 'tan')       output = Math.tan(val);
            else if(id === 'cotan')     output = 1/Math.tan(val);
            else if(id === 'cosec')     output = 1/Math.sin(val);
            else if(id === 'secant')    output = 1/Math.cos(val);
            

            tile.querySelector('.output').querySelector('label').innerHTML = output.toFixed(2);
        }catch(exception){
            console.log('Could not calculate the value!');
        }
    });

    console.log(tile.querySelector('.output').querySelector('.output-label'));

});