module.exports = function toReadable (number) {
  const arrauUnitsTexts = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  const arrauUnitsNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const arrayDozenTexts = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  const arrayDozenNumbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  const arrayDozensTexts = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  const arrayDozensNumbers = [20, 30, 40, 50, 60, 70, 80, 90];

  let units = number % 10;
  let dozens = Math.trunc((number % 100) / 10);
  let hundreds = Math.trunc(number / 100);

  let result = [];

  if (hundreds) {
    result.push(
      arrauUnitsTexts[arrauUnitsNumbers.indexOf(hundreds)] + " hundred"
    );
  }

  if (dozens === 1) {
    result.push(arrayDozenTexts[arrayDozenNumbers.indexOf(number % 100)]);
  }

  if (dozens - 1 && dozens !== 0) {
    result.push(arrayDozensTexts[arrayDozensNumbers.indexOf(dozens * 10)]);
  }

  if (units && dozens - 1) {
    result.push(arrauUnitsTexts[arrauUnitsNumbers.indexOf(units)]);
  }

  if (!units && !dozens && !hundreds) {
    result.push("zero");
  }

  console.log(number % 10);

  return result.join(" ");
}
