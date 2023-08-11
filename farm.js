// Level 1
function cropWateringCalculator(forecast) {
  let count = 0;

  forecast.forEach((day) => {
    day.weather === "rain" ? count++ : count;
  });

  return count;
}

// Level 2 and 3
function cropWateringCalculatorImproved(forecast, numOfCrops, inWateringCans) {
  const numberOfDaysWithRain = cropWateringCalculator(forecast);

  const numOfSprinklesForSeason = (28 - numberOfDaysWithRain) * numOfCrops;

  const numOfWateringCans = Math.ceil(numOfSprinklesForSeason / 1120);

  let returnString = `There are ${numberOfDaysWithRain} days that you can skip watering your crops. You will need`;

  if (!inWateringCans) {
    return returnString + ` ${numOfSprinklesForSeason} sprinkles of water`;
  } else if (inWateringCans && numOfWateringCans > 1) {
    return returnString + ` ${numOfWateringCans} cans of water`;
  } else {
    return returnString + ` ${numOfWateringCans} can of water`;
  }
}

module.exports = { cropWateringCalculator, cropWateringCalculatorImproved };
