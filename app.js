(function(){
    let screen = document.querySelector('.screen');
    let screen1 =document.querySelector('.screen1');
    let buttonNum = document.querySelectorAll('.btn-number');
    let buttonClr = document.querySelector('.btn-clear');
    let buttonEquals = document.querySelector('.btn-warning');
    let buttonOperator = document.querySelectorAll('.btn-success');
    let number1,number2, answer,operator, holder;

//number buttons to be click.

    buttonNum.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })


//After pressing the operator, it will pass the value to number1 which is a variable that holds the first input number;
    
    buttonOperator.forEach(function(button){
        button.addEventListener('click',function(e){
            let buttonInnerHtml = this.innerHTML;
            number1 = screen.value;
            screen1.value += number1;
            screen.value = " ";
            operator = buttonInnerHtml;
            
        })
    })
    
// Pressing equals to get the actual answer, but I pass the value of the 2nd input after the operator is commited.

    buttonEquals.addEventListener('click',function(e){
        number2 = screen.value;
        if(operator === "+"){
            addition(number1,number2);
            screen1.value = " ";
        }else if(operator === "-"){
            subtraction(number1,number2);
            screen1.value = " ";
        }else if(operator ==="/"){
            multiplication(number1,number2);
            screen1.value = " ";
        }else if(operator ==="*"){
            division(number1,number2);
            screen1.value = " ";
        }
        
    })
//clear input box

    buttonClr.addEventListener('click',function(e){
        screen.value = "";
        screen1.value = "";
    });

    function addition(number1,number2){
        answer = eval(number1+operator+number2);
        return screen.value = answer;
    }
    function subtraction(number1,number2){
        answer = eval(number1+operator+number2);
        return screen.value = answer;
    }
    function multiplication(number1,number2){
        answer = eval(number1+operator+number2);
        return screen.value = answer;
    }
    function division(number1,number2){
        answer = eval(number1+operator+number2);
        return screen.value = answer;
    }

})();


