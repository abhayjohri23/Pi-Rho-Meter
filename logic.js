let value = "";
console.log("Javascript");
let buttons = document.querySelectorAll('.numberBtn');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', event => {
        var currVal = event.target.innerHTML.toString();
        if(currVal === '='){
            try{
                value = eval(value);
                document.getElementById('text-display').value = value; 
            }catch(e){
                console.log('Couldnt evaluate!')
            }
        }
        else if(currVal === 'C'){
            value = "";
            document.getElementById('text-display').value = value;
        }
        else if(currVal === '⬅'){
            value = value.substring(0,value.length()-1);  
            document.getElementById('text-display').value = value;
        } 
        else{
            if(currVal === 'x')                     value = value + '*';
            else if(currVal === '÷')                value = value + '/';
            else{
                // console.log(typeof value);
                if(event.target.getAttribute("class").includes("pi-btn"))            
                    value = value + ((value.length>0) ? "*" :"") + Math.PI;
                else                                                                    
                    value = value + event.target.innerHTML.toString();
            }                                    

            document.getElementById('text-display').value = value;
        }
    });
});

