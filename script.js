// Wait until the HTML page is fully loaded before running any jQuery
$(document).ready(function () {

    // Add a click event to the "Add Task" button
    $("#addTaskBtn").on("click", function () {

        // Get the value from the input field and remove any extra spaces
        const taskText = $("#taskInput").val().trim();

        // If the input is empty, show an alert and stop the function
        if (taskText === "") {
            alert("Please enter a task");
            return; // stops the rest of the code from running
        }

        // Add a new task item to the task list
        // This includes the task text, a complete button, and a delete button
        $("#taskList").append(`
      <li class="task-item">
        <span class="task-text">${taskText}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
      </li>
    `);

        // Clear the input field after adding the task
        $("#taskInput").val("");
    });

    // Listen for clicks on any delete button
    // We use $(document) because the buttons are added dynamically
    $(document).on("click", ".delete-btn", function () {

        // 'this' = the delete button that was clicked
        // .parent() = the <li> that contains the task
        // .remove() = removes that task from the DOM
        $(this).parent().remove();

    });
});