const {
  cropWateringCalculator,
  cropWateringCalculatorImproved,
} = require("./farm");
const { mixedForecast, noRainForecast } = require("./resources/weather");

describe("cropWateringCalculator", () => {
  test("should return a number", () => {
    const result = cropWateringCalculator(noRainForecast);
    expect(typeof result).toBe("number");
  });

  test("should return 0 if there are no rainy days in the forecast", () => {
    const result = cropWateringCalculator(noRainForecast);
    expect(result).toBe(0);
  });
  test("should return the number of days where watering the crops is not needed", () => {
    const result = cropWateringCalculator(mixedForecast);
    expect(result).toBe(7);
  });
  test("should not mutate the original array of objects", () => {
    const input = [
      { day: 1, weather: "rain" },
      { day: 2, weather: "sunny" },
    ];
    cropWateringCalculator(input);
    expect(input).toEqual([
      { day: 1, weather: "rain" },
      { day: 2, weather: "sunny" },
    ]);
    expect(input[0]).toEqual({ day: 1, weather: "rain" });
  });
});
describe("cropWateringCalculatorImproved", () => {
  test("should return a string", () => {
    const inputArr = noRainForecast;
    const inputCropNum = 1;
    const result = cropWateringCalculatorImproved(inputArr, inputCropNum);
    expect(typeof result).toBe("string");
  });
  test("should return a string with the number of days where watering the crops is not needed and how many sprinkles of water are needed", () => {
    const inputArr = noRainForecast;
    const inputCropNum = 1;
    const result = cropWateringCalculatorImproved(inputArr, inputCropNum);
    expect(result).toBe(
      "There are 0 days that you can skip watering your crops. You will need 28 sprinkles of water"
    );
    const inputArr2 = mixedForecast;
    const inputCropNum2 = 2;
    const result2 = cropWateringCalculatorImproved(inputArr2, inputCropNum2);
    expect(result2).toBe(
      "There are 7 days that you can skip watering your crops. You will need 42 sprinkles of water"
    );
    const inputArr3 = mixedForecast;
    const inputCropNum3 = 15;
    const result3 = cropWateringCalculatorImproved(inputArr3, inputCropNum3);
    expect(result3).toBe(
      "There are 7 days that you can skip watering your crops. You will need 315 sprinkles of water"
    );
  });
  test("should take a third optional argument of a boolean. If it is false then the function should show the amount of water in sprinkels", () => {
    const inputArr = noRainForecast;
    const inputCropNum = 1;
    const inputBoolean = false;
    const result = cropWateringCalculatorImproved(
      inputArr,
      inputCropNum,
      inputBoolean
    );
    expect(result).toBe(
      "There are 0 days that you can skip watering your crops. You will need 28 sprinkles of water"
    );
  });
  test("should take a third optional argument of a boolean. If it is false then the function should show the amount of water in sprinkels", () => {
    const inputArr = mixedForecast;
    const inputCropNum = 60;
    const inputBoolean = false;
    const result = cropWateringCalculatorImproved(
      inputArr,
      inputCropNum,
      inputBoolean
    );
    expect(result).toBe(
      "There are 7 days that you can skip watering your crops. You will need 1260 sprinkles of water"
    );
  });
  test("should take a third optional argument of a boolean. If it is true then the function should show the amount of water in watering cans", () => {
    const inputArr = noRainForecast;
    const inputCropNum = 1;
    const inputBoolean = true;
    const result = cropWateringCalculatorImproved(
      inputArr,
      inputCropNum,
      inputBoolean
    );
    expect(result).toBe(
      "There are 0 days that you can skip watering your crops. You will need 1 can of water"
    );
  });
  test("should take a third optional argument of a boolean. If it is true then the function should show the amount of water in the correct number of watering cans", () => {
    const inputArr = noRainForecast;
    const inputCropNum = 60;
    const inputBoolean = true;
    const result = cropWateringCalculatorImproved(
      inputArr,
      inputCropNum,
      inputBoolean
    );
    expect(result).toBe(
      "There are 0 days that you can skip watering your crops. You will need 2 cans of water"
    );
  });
  test("should take a third optional argument of a boolean. If it is true then the function should show the amount of water in the correct number of watering cans", () => {
    const inputArr = mixedForecast;
    const inputCropNum = 120;
    const inputBoolean = true;
    const result = cropWateringCalculatorImproved(
      inputArr,
      inputCropNum,
      inputBoolean
    );
    expect(result).toBe(
      "There are 7 days that you can skip watering your crops. You will need 3 cans of water"
    );
  });
});
