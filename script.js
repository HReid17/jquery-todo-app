// Wait until the HTML page is fully loaded before running any jQuery
$(document).ready(function () {

    // Function to add a new task
    function addTask() {

        // Get the value from the input field and remove extra spaces
        const taskText = $("#taskInput").val().trim();

        // If the input is empty, show an alert and stop
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Add a new task item to the list
        $("#taskList").append(`
            <li class="task-item">
                <span class="task-text">${taskText}</span>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </li>
        `);

        // Clear the input field
        $("#taskInput").val("");
    }

    // Add task when button is clicked
    $("#addTaskBtn").on("click", addTask);

    // Add task when Enter key is pressed
    $("#taskInput").on("keydown", function (event) {
        if (event.key === "Enter") {
            addTask(); // reuse the same function (cleaner than .click())
        }
    });

    // Delete task (event delegation for dynamically added elements)
    $(document).on("click", ".delete-btn", function () {
        $(this).parent().remove();
    });

    // Toggle completed state
    $(document).on("click", ".complete-btn", function () {
        $(this).siblings(".task-text").toggleClass("completed");
    });

});