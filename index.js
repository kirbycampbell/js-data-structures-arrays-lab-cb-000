// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newDrivers = [drivers[0], drivers[1], drivers[2], name];
  return newDrivers;
}

function prependDriver(name) {
  const newDrivers = [name, drivers[0], drivers[1], drivers[2]];
  return newDrivers;
}
