(function(){
    let screen = document.querySelector('.screen');
    let screen1 =document.querySelector('.screen1');
    let buttonNum = document.querySelectorAll('.btn-number');
    let buttonClr = document.querySelector('.btn-clear');
    let buttonEquals = document.querySelector('.btn-warning');
    let buttonOperator = document.querySelectorAll('.btn-success');
    let number1,number2, answer,operator;


    buttonNum.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })
    
    buttonOperator.forEach(function(button){
        button.addEventListener('click',function(e){
            let buttonInnerHtml = this.innerHTML;
            number1 = screen.value;
            screen1.value += number1;
            screen.value = " ";
            operator = buttonInnerHtml;
            
        })
    })
    

    buttonEquals.addEventListener('click',function(e){
        number2 = screen.value;
        if(operator === "+"){
            answer = eval(number1+operator+number2);
            screen.value = answer;
        }else if(operator === "-"){
            answer = eval(number1+operator+number2);
            screen.value = answer;
        }else if(operator ==="/"){
            answer = eval(number1+operator+number2);
            screen.value = answer;
        }else if(operator ==="*"){
            answer = eval(number1+operator+number2);
            screen.value = answer;
        }
        
    })
    buttonClr.addEventListener('click',function(e){
        screen.value = "";
        screen1.value = "";
    })
    console.log(buttonOperator.innerHTML);
})();


