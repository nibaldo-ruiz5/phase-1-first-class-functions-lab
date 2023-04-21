// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}

function fareTripler(fare) {
  return fare * 3;
}

function fareDoubler(fare) {
  return fare * 2;
}

