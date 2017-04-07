export const getTemperature = (temperature, unit) =>
  unit === 'C' ? temperature : temperature * (9 / 5) + 32;
