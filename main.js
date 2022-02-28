let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenval='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='x'){
            buttonText='*';
            screenval+=buttonText;
            screen.value=screenval;
        }
        else if(buttonText=='C'){
         screenval="";
         screen.value=screenval;
        }
        else if(buttonText=='='){
            screen.value=eval(screenval)
            screenval=screen.value;
        }
        else if(buttonText=='del'){
            screenval = screenval.slice(0, -1)
            screen.value=screenval;
        }
        else{
            screenval+=buttonText;
            screen.value=screenval;
        }
    })
}