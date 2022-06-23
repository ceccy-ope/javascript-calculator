const num1 = parseFloat(prompt('Enter No1: '))
const operator = prompt('Enter operator(+, -, /, *): ')
const num2 = parseFloat(prompt('Enter No2: '))

let result = 0;
if(isNaN(num1)|| isNaN(num2)){
    alert('Wrong Input! Refresh the page again and provide right data')
}
else{ if(operator == '+'){
        result = num1 + num2;
    }
else
    if(operator == '-'){
        result = num1 - num2;
    }

else
    if(operator == '*'){
        result = num1 * num2;
    }

else
    if(operator == '/'){
        result = num1 / num2;
    }
}

alert(num1 + operator + num2 + '=' + result)
