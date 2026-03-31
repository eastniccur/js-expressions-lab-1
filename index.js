//! Start by creating the variables for the data recorded
const day1TempC = (32 - 32) * 5 / 9
const day2TempC = 25
const day3TempC = (70 - 32) * 5 / 9
const day4TempC = 18
const day5TempC = (80 - 32) * 5 / 9
const day6TempC = 15
const day7TempC = (72 - 32) * 5 / 9
const day8TempC = 28
const day9TempC = (68 - 32) * 5 / 9
const day10TempC = 20
const day11TempC = (75 - 32) * 5 / 9
const day12TempC = 23
const day13TempC = (82 - 32) * 5 / 9
const day14TempC = 30
const day15TempC = (65 - 32) * 5 / 9
const day16TempC = 22
const day17TempC = (77 - 32) * 5 / 9
const day18TempC = 26
const day19TempC = (78 - 32) * 5 / 9
const day20TempC = 24
const day21TempC = (73 - 32) * 5 / 9
const day22TempC = 21
const day23TempC = (79 - 32) * 5 / 9
const day24TempC = 27
const day25TempC = (71 - 32) * 5 / 9
const day26TempC = 19
const day27TempC = (74 - 32) * 5 / 9
const day28TempC = 17
const day29TempC = (76 - 32) * 5 / 9
const day30TempC = 29

//* Convert all temperatures to Fahrenheit for the total in Fahrenheit
const day1F = 32
const day2F = (25 * 9 / 5) + 32
const day3F = 70
const day4F = (18 * 9 / 5) + 32
const day5F = 80
const day6F = (15 * 9 / 5) + 32
const day7F = 72
const day8F = (28 * 9 / 5) + 32
const day9F = 68
const day10F = (20 * 9 / 5) + 32
const day11F = 75
const day12F = (23 * 9 / 5) + 32
const day13F = 82
const day14F = (30 * 9 / 5) + 32
const day15F = 65
const day16F = (22 * 9 / 5) + 32
const day17F = 77
const day18F = (26 * 9 / 5) + 32
const day19F = 78
const day20F = (24 * 9 / 5) + 32
const day21F = 73
const day22F = (21 * 9 / 5) + 32
const day23F = 79
const day24F = (27 * 9 / 5) + 32
const day25F = 71
const day26F = (19 * 9 / 5) + 32
const day27F = 74
const day28F = (17 * 9 / 5) + 32
const day29F = 76
const day30F = (29 * 9 / 5) + 32

//! Start the calculation of the total temperatures
const tot_temperature_in_fahrenheit =
day1F + day2F + day3F + day4F + day5F + day6F + day7F + day8F + day9F + day10F +
day11F + day12F + day13F + day14F + day15F + day16F + day17F + day18F + day19F + day20F +
day21F + day22F + day23F + day24F + day25F + day26F + day27F + day28F + day29F + day30F

//* Total in Celsius
const tot_temperature_in_celsius =
day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC +
day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC +
day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC

//! Start the calculation of the average temperatures
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30

//! Console.log the results for your inspection
console.log("Total temperature in Fahrenheit:", Math.floor(tot_temperature_in_fahrenheit));
console.log("Total temperature in Celsius:", Math.floor(tot_temperature_in_celsius));
console.log("Average temperature in Fahrenheit:", Math.floor(avg_temperature_in_fahrenheit));
console.log("Average temperature in Celsius:", Math.floor(avg_temperature_in_celsius));

//* Export the variables for tests
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};