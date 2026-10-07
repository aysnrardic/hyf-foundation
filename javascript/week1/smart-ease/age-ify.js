//Exercise 1

const yearOfBirth = 1987;
const yearFuture = 2064;
const age = yearFuture - yearOfBirth;

console.log(
  "You will be" + " " + age + " " + "years old in" + " " + yearFuture + ".",
);

//Exercise 2

const dogYearOfBirth = 2006;
const dogYearFuture = 2027;

const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = humanYear * 7;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYear} dog years in ${dogYearFuture}.`);
} else {
  console.log(`Your dog will be ${humanYear} human years in ${dogYearFuture}.`);
}

//Exercise 3

const peterHouseWidth = 8;
const peterHouseHeight = 10;
const peterHouseDepth = 10;
const peterVolumeInMeters =
  peterHouseWidth * peterHouseHeight * peterHouseDepth;

const peterGardenSizeInM2 = 100;

const peterHousePrice =
  peterVolumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;

console.log(peterHousePrice);

const peterHouseActualPrice = 2500000;

console.log(peterHouseActualPrice > peterHousePrice);

const juliaHouseWidth = 5;
const juliaHouseHeight = 8;
const juliaHouseDepth = 11;
const juliaVolumeInMeters =
  juliaHouseWidth * juliaHouseHeight * juliaHouseDepth;

const juliaGardenSizeInM2 = 70;

const juliaHousePrice =
  juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSizeInM2 * 300;

console.log(juliaHousePrice);

const juliaHouseActualPrice = 1000000;

console.log(juliaHouseActualPrice > juliaHousePrice);

//Exercise 4

const firstWords = [
  "Bright",
  "Happy",
  "Clever",
  "Cosmic",
  "Fresh",
  "Tiny",
  "Bold",
  "Quick",
  "Sunny",
  "Magic",
];

const secondWords = [
  "Rocket",
  "Garden",
  "Cloud",
  "Factory",
  "Market",
  "Studio",
  "Bridge",
  "Kitchen",
  "Planet",
  "Workshop",
];

const randomNumber = Math.floor(Math.random() * 10);
const chosenFirstWord = firstWords[randomNumber];
const chosenSecondWord = secondWords[randomNumber];

const startupName = chosenFirstWord + " " + chosenSecondWord;
const startupNameLength = startupName.length;

console.log(
  `The startup: "${startupName}" contains ${startupNameLength} characters.`,
);
