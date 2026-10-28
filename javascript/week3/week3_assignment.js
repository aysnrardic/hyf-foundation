// Exercise 1

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const index = names.indexOf(nameToRemove);

if (index !== -1) {
  names.splice(index, 1);
}

console.log(names);

//Exercise 2

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
  const totalHours =
    travelInformation.destinationDistance / travelInformation.speed;

  const hours = Math.floor(totalHours);

  const minutes = Math.floor((totalHours - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);

console.log(travelTime);

//Exercise 3

const seriesDurations = [
  {
    title: "The Office",
    days: 2,
    hours: 20,
    minutes: 12,
  },

  {
    title: "Ozark",
    days: 1,
    hours: 20,
    minutes: 0,
  },

  {
    title: "Person of Interest",
    days: 3,
    hours: 0,
    minutes: 6,
  },

  {
    title: "the Middle",
    days: 3,
    hours: 6,
    minutes: 50,
  },
];

const lifespanInMinutes = 80 * 365 * 24 * 60;

function logOutSeriesText() {
  let totalMinutes = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    const durationInMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;

    totalMinutes = totalMinutes + durationInMinutes;

    const percentage = (durationInMinutes / lifespanInMinutes) * 100;

    console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
  }
  const totalPercentage = (totalMinutes / lifespanInMinutes) * 100;

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}

logOutSeriesText();

//Smart-ease

const notes = [];

function saveNote(content, id) {
  const note = {
    content: content,
    id: id,
  };
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Call the doctor", 3);
saveNote("Study next lesson", 4);

console.log(notes);

function getNote(id) {
  if (typeof id !== "number") {
    console.log("Please provide an id as a number");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    if (note.id === id) {
      return note;
    }
  }
}

const fourthNote = getNote(4);
console.log(fourthNote);

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`,
    );
  }
}

logOutNotesFormatted();

function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    if (note.id === id) {
      notes.splice(i, 1);
      return;
    }
  }
}
deleteNote(2);
console.log(notes);

//Smart phone usage app

const activities = [];

const usageLimit = 200;

function addActivity(activity, duration) {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const date = `${day}/${month}-${year}`;

  const activityEntry = {
    date: date,
    activity: activity,
    duration: duration,
  };
  activities.push(activityEntry);
}

addActivity("Netflix", 45);
addActivity("Instagram", 25);
addActivity("WhatsApp", 38);
addActivity("Google", 56);

console.log(activities);

function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const today = `${day}/${month}-${year}`;

  let totalDuration = 0;
  let activityCount = 0;

  for (let i = 0; i < activities.length; i++) {
    const activityEntry = activities[i];

    if (activityEntry.date === today) {
      totalDuration = totalDuration + activityEntry.duration;
      activityCount = activityCount + 1;
    }
  }

  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  } else {
    const remainingMinutes = usageLimit - totalDuration;
    console.log(`You have ${remainingMinutes} minutes left.`);
  }

  return `You have added ${activityCount} activities. They amount to ${totalDuration} min. of usage`;
}

console.log(showStatus(activities));

function getMostUsedActivity(activities) {
  let mostUsedActivity = activities[0];
  for (let i = 1; i < activities.length; i++) {
    if (activities[i].duration > mostUsedActivity.duration) {
      mostUsedActivity = activities[i];
    }
  }
  return mostUsedActivity;
}
console.log(getMostUsedActivity(activities));
