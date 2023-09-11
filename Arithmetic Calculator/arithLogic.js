let value = "";
console.log("Arithmetic Javascript");
let buttons = document.querySelectorAll('.numberBtn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', event => {
        var currVal = event.target.innerHTML.toString();
        if(currVal === '='){
            try{
                let expression = document.getElementById('text-display').value;
                value = eval(value).toString();
                document.getElementById('text-display').value = value; 
                document.getElementById('histTab1').innerHTML = document.getElementById('histTab2').innerHTML;
                document.getElementById('histTab2').innerHTML = expression + " = " + value;
            }catch(e){
                console.log('Couldnt evaluate!');
            }
        }
        else if(currVal === 'C'){
            value = "";
            document.getElementById('text-display').value = value;
        }
        else if(currVal === '⬅'){
            value = value.substring(0,value.length-1);
            console.log(value);  
            document.getElementById('text-display').value = value;
        } 
        else{
            if(currVal === 'x')                     value = value + '*';
            else if(currVal === '÷')                value = value + '/';
            else{
                if(event.target.getAttribute("class").includes("pi-btn"))            
                    value = value + ((value.length>0) ? "*" :"") + Math.PI;
                else                                                                    
                    value = value + event.target.innerHTML.toString();
            }                                    

            document.getElementById('text-display').value = value;
        }
    });
});

