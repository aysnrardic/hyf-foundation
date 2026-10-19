//Exercise 1

function getFullName(firstName, surname) {
  return firstName + " " + surname;
}

const fullName1 = getFullName("Benjamin", "Hughes");
const fullName2 = getFullName("Aysenur", "Ardic");

console.log(fullName1);
console.log(fullName2);

//Exercise 2

function getFullName(firstName, surname, useFormalName, title) {
  const fullName = (firstName + " " + surname).trim();

  if (fullName === "") {
    return "";
  }

  if (useFormalName === true) {
    return title + " " + fullName;
  } else {
    return fullName;
  }
}

console.log(getFullName("Benjamin", "Hughes", true, "Lord"));
console.log(getFullName("Aysenur", "Ardic", true, "Lady"));
console.log(getFullName("Ferhat Can", "Ardic"));
console.log(getFullName("", ""));

//Exercise 3

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(eventDayFromToday) {
  const currentDate = new Date();
  const today = currentDate.getDay();

  const eventDayNumber = (today + eventDayFromToday) % 7;
  const eventWeekDay = weekdays[eventDayNumber];

  return eventWeekDay;
}

console.log(getEventWeekday(67));

//Exercise 4

function whatShouldIWearToday(temperature) {
  if (temperature >= 25) {
    return "It's warm! Wear a dress or a t-shirt with shorts.";
  } else if (temperature >= 15 && temperature < 25) {
    return "Wear a shirt with trousers. Bring a jacket or cardigan, just in case.";
  } else {
    return "It's cold! Wear a sweater and a warm coat.";
  }
}
const clothesToWear = whatShouldIWearToday(16);
console.log(clothesToWear);

//Exercise 5

const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    return;
  }
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }
  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
    return;
  }

  class07Students.push(studentName);
}

addStudentToClass("Bob");
addStudentToClass("David");
addStudentToClass("Maria");
addStudentToClass("Anna");
addStudentToClass("Clara");
addStudentToClass("Cindy");
addStudentToClass("");
addStudentToClass("Maria");
addStudentToClass("Aysenur");
addStudentToClass("Queen");

console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;
}

console.log(getNumberOfStudents());

//Exercise 6

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let pricePerGram;

  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  }

  const price = pricePerGram * weight;
  boughtCandyPrices.push(price);
}

addCandy("sweet", 20);
addCandy("chocolate", 40);

console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let totalPrice = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice = totalPrice + boughtCandyPrices[i];
  }
  return totalPrice < amountToSpend;
}

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
