const taskList = document.querySelector('#task-list');
/*
This line of code selects the HTML element with the id of "task-list" and assigns it to the variable 'taskList'.

'document' is an object that represents the current HTML document in the browser. 'querySelector()' is a method on the 'document' 
object that takes a CSS selector as an argument and returns the first matching HTML element it finds in the document.

In this case, querySelector() is used to select the ul element with an id attribute of "task-list". The # symbol before 
"task-list" indicates that we are selecting by ID.

Once the ul element is selected, it is assigned to the taskList variable using the const keyword, which creates a constant 
variable that cannot be reassigned.

By assigning the ul element to the taskList variable, we can manipulate the list of tasks by adding, updating, or deleting 
list items using JavaScript. 
*/


const newTaskInput = document.querySelector('#new-task');
/*

'const newTaskInput = document.querySelector('#new-task');'

    This line of code selects the HTML input element with the ID of "new-task" and assigns it to the variable newTaskInput.

'document' is an object that represents the current HTML document in the browser. 'querySelector()' is a method on the 'document' 
object that takes a CSS selector as an argument and returns the first matching HTML element it finds in the document.

    In this case, 'querySelector()' is used to select the 'input' element with an 'id' attribute of "new-task". The '#' symbol 
    before "new-task" indicates that we are selecting by ID.

Once the 'input' element is selected, it is assigned to the 'newTaskInput' variable using the 'const' keyword, which creates a 
constant variable that cannot be reassigned.

By assigning the 'input' element to the 'newTaskInput' variable, we can manipulate the value of the input element (e.g. retrieve 
the user's input, clear the input field after adding a new task) using JavaScript.

*/


const addTaskBtn = document.querySelector('#add-task-btn');
/*
'const addTaskBtn = document.querySelector('#add-task-btn');'

    This line of code selects the HTML button element with the ID of "add-task-btn" and assigns it to the variable 'addTaskBtn'.

'document' is an object that represents the current HTML document in the browser. 'querySelector()' is a method on the 'document'
object that takes a CSS selector as an argument and returns the first matching HTML element it finds in the document.

In this case, 'querySelector()' is used to select the 'button' element with an 'id' attribute of "add-task-btn". The '#' symbol 
before "add-task-btn" indicates that we are selecting by ID.

Once the 'button' element is selected, it is assigned to the 'addTaskBtn' variable using the 'const' keyword, which creates 
a constant variable that cannot be reassigned.

By assigning the 'button' element to the 'addTaskBtn' variable, we can listen for user click events on the button using 
JavaScript and then add a new task to the list when the button is clicked.

*/

// Add new task to list
function addTask(e) {
    e.preventDefault();

    if (newTaskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <span>${newTaskInput.value}</span>
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
  `;
    taskList.appendChild(taskItem);
    newTaskInput.value = '';
}
/*
This is the function that is called when the "Add" button is clicked. It adds a new task to the list by creating a new 'li' 
element, adding the task text and delete/edit buttons to it, and then appending it to the 'ul' element with the ID of "task-list".

Here's a step-by-step breakdown of what's happening in this function:

    1. The function takes an event object 'e' as an argument, which is passed in automatically when the function is called 
        as an event listener.

    2. The first line of the function ('e.preventDefault();') prevents the default behavior of the form element from 
        triggering, which would cause the page to refresh when the "Add" button is clicked.

    3. The 'if' statement checks if the value of the 'newTaskInput' input element is empty or consists only of whitespace
        characters. If it is, an alert is displayed asking the user to enter a task, and the function exits early with the 
        'return' statement. This prevents the empty task from being added to the list.

    4. If the 'if' condition is not met, a new 'li' element is created using the 'document.createElement()' method and 
        assigned to the 'taskItem' variable.

    5. The 'innerHTML'  property of the 'taskItem' element is set to a template literal string that contains the task text and 
        two buttons: "Delete" and "Edit". The task text is retrieved from the 'newTaskInput' input element using 
        its 'value' property.

    6. The 'taskItem' element is appended to the 'taskList' 'ul' element using the 'appendChild()' method.

    7. Finally, the value of the 'newTaskInput' input element is cleared by setting its 'value' property to an empty string.

That's a brief summary of what this code does. Let me know if you have any further questions!

*/



// Delete task from list
function deleteTask(e) {
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this task?')) {
            e.target.parentElement.remove();
        }
    }
}
/*
This function is responsible for deleting a task from the task list. It takes an event object as a parameter, which 
contains information about the event that triggered the function.

First, it checks if the target of the event has a class of "delete-btn" using the 'classList.contains' method. If it does, 
it displays a confirmation dialog using the 'confirm' function, asking the user if they are sure they want to delete the task.

If the user confirms, the function then removes the parent element of the delete button, which is the '<li>' element containing 
the task, using the 'remove' method. This effectively removes the task from the task list.

*/


// Update task in list
function updateTask(e) {
    if (e.target.classList.contains('edit-btn')) {
        const span = e.target.parentElement.querySelector('span');
        const textInput = document.createElement('input');
        textInput.value = span.innerText;
        span.replaceWith(textInput);

        const saveBtn = document.createElement('button');
        saveBtn.innerText = 'Save';
        e.target.parentElement.insertBefore(saveBtn, e.target);

        e.target.style.display = 'none';

        saveBtn.addEventListener('click', function () {
            span.innerText = textInput.value;
            textInput.replaceWith(span);
            saveBtn.parentElement.querySelector('.edit-btn').style.display = 'inline-block';
            saveBtn.remove();
        });
    }
}
/*
This function is responsible for updating a task in the task list. It takes an event object as a parameter, which contains 
information about the event that triggered the function.

First, it checks if the target of the event has a class of "edit-btn" using the 'classList.contains' method. If it does, 
the function creates a new 'input' element and sets its value to the current task text. It then replaces the task text 'span' 
element with the 'input' element using the 'replaceWith' method.

Next, the function creates a "Save" button using the 'createElement' method and adds it to the task 'li' element using the 
'insertBefore' method. It then sets the 'display' style of the original "Edit" button to "none" using the 'style' property.

Finally, the function adds a click event listener to the "Save" button. When clicked, the listener replaces the 'input' element 
with the updated task text 'span' element, sets the 'innerText' property of the 'span' to the value of the 'input', and restores 
the "Edit" button's 'display' style to "inline-block". It also removes the "Save" button using the 'remove' method.

*/


// Event listeners
addTaskBtn.addEventListener('click', addTask);
/*

This code adds an event listener to the "add task" button with the 'addEventListener()' method. The first argument of this 
method is the type of event to listen for, which is "click" in this case. The second argument is the function to be executed 
when the event occurs, which is the 'addTask()' function.

So when the "add task" button is clicked, the 'addTask()' function will be executed.

*/


taskList.addEventListener('click', deleteTask);
/*

This code adds an event listener to the 'taskList' element with the 'addEventListener()' method. The first argument of this 
method is the type of event to listen for, which is "click" in this case. The second argument is the function to be 
executed when the event occurs, which is the 'deleteTask()' function.

So when a click event occurs inside the 'taskList' element, the 'deleteTask()' function will be executed. This function 
checks if the clicked element has a class of "delete-btn" using the 'classList.contains()' method. If it does, it 
displays a confirmation dialog box asking the user if they want to delete the task. If the user confirms, the task's 
parent element (which is the li element) is removed from the taskList element using the remove() method.

*/


taskList.addEventListener('click', updateTask);
/*
This line of code adds an event listener to the 'taskList' element that listens for a click event. When a click event occurs, 
it triggers the 'updateTask' function.

In the context of a to-do list app, this code allows the user to update a task on the list. When the user clicks the "Edit" 
button next to a task, the 'updateTask' function is triggered. This function replaces the task's text with an input field and a 
"Save" button. The user can then edit the task's text in the input field and click the "Save" button to save the changes.

Overall, this line of code enables the interactive and dynamic features of the to-do list app, making it more user-friendly 
and functional.
*/
