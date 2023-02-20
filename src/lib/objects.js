const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return property in object;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

function getAges(people) {
  return people.map(person => person.age);
}

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

function findHondas(cars) {
  // Use the filter() method to create a new array that only
  // includes the cars that are manufactured by Honda
  const hondas = cars.filter(car => car.manufacturer === 'Honda');

  // Return the new array of Honda cars
  return hondas;
}
const averageAge = people => {
  const ages = people.map(person => person.age);
  const sum = ages.reduce((total, age) => total + age, 0);
  const averageAgeIs = sum / ages.length;
  return averageAgeIs;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(to) {
      return `Hi ${to}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
