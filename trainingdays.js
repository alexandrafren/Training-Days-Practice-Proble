// The scope of `random` is too loose
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  let event;
  if (random === 0) {
     event = 'Marathon';
  } else if (random === 1) {
    event = 'Triathalon';
  } else if (random === 2) {
    event = 'Pentathlon';
  }
  return event;
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathalon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (event, name) => {
  console.log(name + "'s event is:" + event);
};

const logTime = (days, name) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

const name = 'Nala';
logEvent(event, name);
logTime(days, name);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(event2, name2);
logTime(days2, name2);
