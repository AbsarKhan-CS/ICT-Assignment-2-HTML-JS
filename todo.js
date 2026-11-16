
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    rl.question("Enter your task: ", function(task) {

        if (task.trim() === "") {
            console.log("Task cannot be empty!");
        } else {
            tasks.push(task);
            console.log("Task added successfully!");
        }

        showMenu();
    });
}

// Function to display tasks
function displayTasks() {

    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
    } else {
        console.log("\nYour Tasks:");

        for (let i = 0; i < tasks.length; i++) {
            console.log((i + 1) + ". " + tasks[i]);
        }
    }

    showMenu();
}

// Function to remove a task
function removeTask() {

    displayTaskListForRemoval();
}

function displayTaskListForRemoval() {

    if (tasks.length === 0) {
        console.log("No tasks to remove.");
        showMenu();
        return;
    }

    console.log("\nYour Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
    }

    rl.question("Enter task number to remove: ", function(index) {

        let taskIndex = Number(index) - 1;

        if (
            Number.isInteger(Number(index)) &&
            taskIndex >= 0 &&
            taskIndex < tasks.length
        ) {
            tasks.splice(taskIndex, 1);
            console.log("Task removed successfully!");
        } else {
            console.log("Invalid task number!");
        }

        showMenu();
    });
}

// Function to clear all tasks
function clearTasks() {

    tasks = [];

    console.log("All tasks have been cleared!");

    showMenu();
}

// Function to show menu and receive commands
function showMenu() {

    console.log("\n===== TO-DO LIST =====");
    console.log("add    - Add a task");
    console.log("remove - Remove a task");
    console.log("view   - View all tasks");
    console.log("clear  - Clear all tasks");
    console.log("exit   - Exit program");

    rl.question("\nEnter your command: ", function(command) {

        switch (command.toLowerCase()) {

            case "add":
                addTask();
                break;

            case "remove":
                removeTask();
                break;

            case "view":
                displayTasks();
                break;

            case "clear":
                clearTasks();
                break;

            case "exit":
                console.log("Goodbye!");
                rl.close();
                break;

            default:
                console.log("Invalid command!");
                showMenu();
        }
    });
}

// Start the program
showMenu();
