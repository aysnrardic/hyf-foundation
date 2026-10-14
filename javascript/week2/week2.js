for (let i = 74; i <= 98; i++) {
  console.log(i);
}

const emailList =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|" +
  "ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com";

const emailsArray = emailList.split("|");

function sendEmailTo(recipient) {
  for (let i = 0; i < emailsArray.length; i++) {
    console.log("email sent to " + recipient);
  }
}

sendEmailTo(emailsArray);

//Exercise: ticket price

const isStudent = true;
const age = 6;

function getTicketPrice(age, isStudent) {
  if (age < 6) return 0;
  if (isStudent || age >= 65) return 50;
  return 100;
}

console.log(getTicketPrice(6, false));

//Exercise: rectangle area

// solution1:

function getRectangleArea(width, height) {
  return width * height;
}

console.log(getRectangleArea(0, 5));

//solution2:

const getRectangleArea1 = (width1, height1) => {
  return width1 * height1;
};

console.log(getRectangleArea1(4, 3));

//

function name() {
  // body
}

for (index; condition; update) {
  // body
}

if (condition) {
  // body
}

if (condition) {
  // body
} else {
  // body
}

if (condition) {
  // body
} else if (condition) {
  // body
} else if (condition) {
  // body
} else {
  // body
}

const array = ["apple", "banana", "orange"];
const fruit = "pear";
array.push(fruit);
console.log(array); // ["apple", "banana", "orange", "pear"]
