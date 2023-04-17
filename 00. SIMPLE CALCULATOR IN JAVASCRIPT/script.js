let input = document.getElementById('input');
/*
This line of code creates a variable called 'input' and assigns it the value returned by 'document.getElementById('input')'.

The 'document.getElementById()' method is used to select an element with a specific 'id' attribute from the HTML document. In this case, 
it selects the input field of the calculator interface with 'id="input"'.

By assigning the result of this method to the 'input' variable, we are able to access and modify the input field element using JavaScript.
*/


function addToInput(value) {
    input.value += value;     //  (input.value = input.value + value;)
}
/*
This code defines a JavaScript function called 'addToInput' that takes a parameter called 'value'.

When this function is called, it concatenates (links together in the chain) the 'value' parameter to the current value of the 
'input' field. The 'input.value' property represents the value of the input field in the HTML document, and by using the '+=' 
operator, we are able to concatenate (links together in the chain) the 'value' parameter to the end of the current value of the 
'input' field.

This function is used by the calculator interface to add numbers and operators to the input field when the user clicks on the 
corresponding buttons or presses the corresponding keys on the keyboard. 
*/


function clearInput() {
    input.value = '';
}
/*
This code defines a JavaScript function called 'clearInput' that sets the value of the 'input' field to an empty string.

When this function is called, it assigns an empty string to the 'input.value' property. This effectively clears the input field of any 
existing text or values.

This function is used by the calculator interface to clear the input field when the user clicks on the "C" button or presses the 
"Delete" key on the keyboard. 
*/


function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        if (error instanceof SyntaxError) {
            input.value = 'Syntax Error';
        } else {
            throw error;
        }
    }
}
/*
This code defines a JavaScript function called 'calculate'.

When this function is called, it attempts to evaluate the contents of the 'input' field using the 'eval()' method. The 'eval()' method 
evaluates a string as a JavaScript expression and returns the result. In this case, the string being evaluated is the current value 
of the 'input' field.

If the expression is successfully evaluated, the result is assigned to the 'input.value' property, which updates the value of the input 
field to the result of the expression.

However, if there is a syntax error in the expression, the 'eval()' method will throw an exception. In this case, the 'catch' 
block catches the exception and checks if it is an instance of the 'SyntaxError' class. If it is, the input field is updated to 
display the message "Syntax Error". If the error is of a different type, it is re-thrown using the 'throw' statement to be handled 
by other parts of the program.

This function is used by the calculator interface to evaluate the contents of the input field and display the result when the user 
clicks on the "=" button or presses the "Enter" key on the keyboard.
*/


document.addEventListener('keydown', function (event) {
    if (event.key >= 0 && event.key <= 9) {
        addToInput(event.key);
    } else if (event.key === '.') {
        addToInput('.');
    } else if (event.key === '/') {
        addToInput('/');
    }
})
/*
This code adds an event listener to the document object that listens for a keydown event.

When the user presses a key on the keyboard, the event listener checks if the key corresponds to a number between 0 and 9. 
If it does, the 'addToInput' function is called with the value of the key. This effectively adds the number to the input field 
of the calculator interface.

If the key is a period (.), the 'addToInput' function is called with a period. This is used to allow users to input decimal 
points when entering numbers.

If the key is a forward slash (/), the 'addToInput' function is called with a forward slash. This is used to allow users to 
input the division operator when entering expressions.

This code enables the user to enter numbers and operators into the calculator interface using the keyboard, in addition to 
clicking on the corresponding buttons on the interface.
*/
