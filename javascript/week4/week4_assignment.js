let userName = "";
const todos = [];
const completedTodos = [];

function getReply(command) {
  if (command.startsWith("Hello my name is ")) {
    userName = command.slice("Hello my name is ".length).trim();
    return "Nice to meet you " + userName;
  }
  if (command.toLowerCase().replace("?", "").trim() === "what is my name") {
    if (userName === "") {
      return "You haven't told me your name yet.";
    }
    return "Your name is " + userName;
  }
  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    const todo = command
      .slice("Add ".length, command.length - " to my todo".length)
      .trim();
    todos.push(todo);
    return todo + " added to your todo";
  }

  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    const todo = command
      .slice("Remove ".length, command.length - " from my todo".length)
      .trim();
    const index = todos.indexOf(todo);
    if (index !== -1) {
      todos.splice(index, 1);
      return "Removed " + todo + " from your todo";
    }
    return todo + " is not on your todo list";
  }

  if (command === "What is on my todo?") {
    if (todos.length === 0) {
      return "You have no todos.";
    }

    let todoWord = "todos";

    if (todos.length === 1) {
      todoWord = "todo";
    }

    return (
      "You have " + todos.length + " " + todoWord + " - " + todos.join(" and ")
    );
  }

  if (command === "What day is it today?") {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[currentDate.getMonth()];
    return day + ". of " + month + " " + year;
  }

  if (command.startsWith("what is ")) {
    const parts = command.split(" ");
    const firstNumber = Number(parts[2]);
    const operator = parts[3];
    const secondNumber = Number(parts[4]);

    if (operator === "+") {
      return firstNumber + secondNumber;
    }

    if (operator === "*") {
      return firstNumber * secondNumber;
    }
  }

  if (command.startsWith("Set a timer for ") && command.endsWith(" minutes")) {
    const minutes = Number(
      command
        .slice("Set a timer for ".length, command.length - " minutes".length)
        .trim(),
    );

    const milliseconds = minutes * 60 * 1000;
    setTimeout(function () {
      console.log("Timer done");
    }, milliseconds);
    return "Timer set for " + minutes + " minutes";
  }

  if (command === "Clear my todo") {
    todos.splice(0, todos.length);
    return "Your todo list is now empty.";
  }

  if (command === "How many todos are left?") {
    let todoWord = "todos";
    if (todos.length === 1) {
      todoWord = "todo";
    }
    return "You have " + todos.length + " " + todoWord + " left.";
  }

  if (command.startsWith("Complete ")) {
    const todo = command.slice("Complete ".length).trim();

    const index = todos.indexOf(todo);
    if (index === -1) {
      return todo + " is not on your todo list";
    }
    completedTodos.push(todo);
    todos.splice(index, 1);
    return "Completed " + todo;
  }
}

console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(todos);
console.log(getReply("Remove fishing from my todo"));
console.log(todos);
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 0.05 minutes"));
console.log(getReply("How many todos are left?"));
console.log(getReply("Add reading to my todo"));
console.log(getReply("Complete reading"));
console.log(completedTodos);
console.log(getReply("Clear my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove swimming from my todo"));
console.log(getReply("Complete swimming"));
console.log(getReply("Clear my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("How many todos are left?"));
console.log(getReply("Hello my name is Aysenur"));
console.log(getReply("Hello my name is Aysenur"));
console.log(getReply("What is my name?"));
