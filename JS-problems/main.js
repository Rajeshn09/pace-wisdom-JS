/* Displaying planet id problem*/
function getPlanet() {
  var number = parseInt(document.getElementById("numberInput").value);
  var planetName;

  switch (number) {
    case 1:
      planetName = "Mercury";
      break;
    case 2:
      planetName = "Venus";
      break;
    case 3:
      planetName = "Earth";
      break;
    case 4:
      planetName = "Mars";
      break;
    case 5:
      planetName = "Jupiter";
      break;
    case 6:
      planetName = "Saturn";
      break;
    case 7:
      planetName = "Uranus";
      break;
    case 8:
      planetName = "Neptune";
      break;
    default:
      planetName = "Invalid input";
  }

  document.getElementById("output").innerHTML =
    "<p>Planet Name: " + planetName + "</p>";
}

/* multiplication of two number */
function multiply() {
  let num1 = parseInt(document.getElementById("multiply1").value);
  let num2 = parseInt(document.getElementById("multiply2").value);
  let mul = num1 * num2;
  document.getElementById("output").innerHTML = `<p>The answer is ${mul}</p>`;
}
/*Reverse a string problem */
function reverseString() {
  let str = document.getElementById("string").value;
  document.getElementById("output").innerHTML = `<p>The reverse string is ${str
    .split("")
    .reverse()
    .join("")}</p>`;
}
/*Even or Odd problem */
function evenOrOdd() {
  let num = parseInt(document.getElementById("evn").value);
  if (num % 2 == 0) {
    document.getElementById("output").innerHTML = `<p>${num} is Even</p>`;
  } else {
    document.getElementById("output").innerHTML = `<p>${num} is Odd</p>`;
  }
}

/* counting a vowel in string*/

function Vowel() {
  let count = 0;
  let s = document.getElementById("vowel").value;
  let splt = s.split("");
  for (i = 0; i < splt.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(splt[i])) {
      count++;
    }
  }
  document.getElementById(
    "output"
  ).innerHTML = `<p>Number of Vowels are=${count}</p>`;
}
/* secret message generator*/
function secretMessage() {
  let str = document.getElementById("secretmessage").value;
  if (str === "johny") {
    document.getElementById("output").innerHTML =
      "<p>Welcome johny to the secret world.</p>";
  } else {
    document.getElementById("output").innerHTML = `<p>Hello ${str}!...</p>`;
  }
}
/* Divisble or not problem*/
function divisble() {
  let divident = document.getElementById("divident").value;
  let divisor1 = document.getElementById("divisor1").value;
  let divisor2 = document.getElementById("divisor2").value;
  let divisibleByBoth = divident % divisor1 === 0 && divident % divisor2 === 0;

  if (divisibleByBoth) {
    document.getElementById("output").innerHTML =
      "<p>true both number is divisble</p>";
  } else {
    let notDivisibleBy = "";
    if (divident % divisor1 !== 0) {
      notDivisibleBy += divisor1 + " ";
    }
    if (divident % divisor2 !== 0) {
      notDivisibleBy += divisor2;
    }
    document.getElementById(
      "output"
    ).innerHTML = `<p>false with the number ${notDivisibleBy} is not divisible</p>`;
  }
}
/* negative number conversion*/
function negative() {
  let num = document.getElementById("negativeNum").value;
  document.getElementById(
    "output"
  ).innerHTML = `<p>the negative number is ${-Math.abs(num)}</p>`;
}

/* minimum element in an array*/

function minArray() {
  let userInput = document.getElementById("array").value;
  let inputArray = userInput.split(",");
  inputArray = inputArray.map((item) => Number(item.trim()));
  inputArray = inputArray.filter((item) => !isNaN(item) && item !== "");

  if (inputArray.length === 0) {
    document.getElementById("output").innerHTML = "No valid numbers entered.";
    return;
  }

  let minElement = Math.min(...inputArray);

  document.getElementById(
    "output"
  ).innerHTML = `Minimum element: ${minElement}`;
}
/* summation of a number */
function summation() {
  let count = 0;
  let val = parseInt(document.getElementById("sum").value);
  for (i = 0; i < val + 1; i++) {
    count += i;
  }
  document.getElementById(
    "output"
  ).innerHTML = `<p>The summation of ${val} is  ${count}.</p>`;
}
/*average of a array */
function average() {
  let marksInput = document.getElementById("average1").value;
  let marksArray = marksInput.split(",");
  marksArray = marksArray.map((mark) => parseFloat(mark));
  let totalMarks = 0;
  for (let i = 0; i < marksArray.length; i++) {
    totalMarks += marksArray[i];
  }
  let averageMarks = totalMarks / marksArray.length;
  document.getElementById("output").innerHTML =
    "<p>Average is: </p>" + averageMarks.toFixed(2);
}
/* Rock paper Scissors*/
function rockpaper() {
  let p1 = document.getElementById("sign1").value.trim();
  let p2 = document.getElementById("sign2").value.trim();
  p1 = p1.toLowerCase();
  p2 = p2.toLowerCase();
  if (
    (p1 == "p" && p2 == "s") ||
    (p1 == "r" && p2 == "s") ||
    (p1 == "p" && p2 == "r")
  ) {
    document.getElementById("output").innerHTML = "Player 1 won!";
  } else if (
    (p1 == "s" && p2 == "r") ||
    (p1 == "p" && p2 == "s") ||
    (p1 == "r" && p2 == "p")
  ) {
    document.getElementById("output").innerHTML = "Player 2 won!";
  } else if (
    (p1 == "p" && p2 == "p") ||
    (p1 == "r" && p2 == "r") ||
    (p1 == "s" && p2 == "s")
  ) {
    document.getElementById("output").innerHTML = "Draw!";
  }
}
/* remove first and last letter*/
function removeString() {
  let str = document.getElementById("remove1").value.trim();
  const arr = str.split("");
  if (arr.length <= 2) {
    document.getElementById("output").innerHTML = "";
  } else {
    let temp_arr = [];
    for (let i = 1; i <= arr.length - 2; i++) {
      temp_arr.push(arr[i]);
    }
    const result = temp_arr.join("");
    document.getElementById("output").innerHTML =
      "<p>The string after removing is</p>" + result;
  }
}
/* sum of positive number*/
function sumOfPositive() {
  let num = document.getElementById("sop").value;
  let arr = num.split(",");
  arr = arr.map(Number);
  arr = arr.filter((num) => !isNaN(num));
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  document.getElementById("output").innerHTML = "<p>The sum is</p>" + total;
}
/* maths operations*/
function operation() {
  let operation = document.getElementById("operator").value.trim();
  let value1 = parseInt(document.getElementById("value1").value);
  let value2 = parseInt(document.getElementById("value2").value);
  switch (operation) {
    case "+":
      document.getElementById("output").innerHTML = value1 + value2;
      break;
    case "-":
      document.getElementById("output").innerHTML = value1 - value2;
      break;
    case "*":
      document.getElementById("output").innerHTML = value1 * value2;
      break;
    case "/":
      document.getElementById("output").innerHTML = value1 / value2;
      break;
    default:
      document.getElementById("output").innerHTML = "Invalid";
  }
}
function repeat() {
  let str = document.getElementById("str1").value;
  let count = document.getElementById("str2").value;
  let repeatedString = "";

  for (let i = 0; i < count; i++) {
    repeatedString += str;
  }

  document.getElementById("output").innerHTML =
    "<p>The repeated string:</p>" + repeatedString;
}
/* string to array conversion*/
function convertToArray() {
  let inputString = document.getElementById("stringInput").value;
  let stringArray = inputString.split(" ");

  document.getElementById("output").innerHTML =
    "<p>Resulting Array: " + JSON.stringify(stringArray) + "</p>";
}
/* remove spaces*/
function removeSpaces() {
  let textWithSpaces = document.getElementById("textWithSpaces").value;
  let textWithoutSpaces = textWithSpaces.replace(/\s/g, "");
  document.getElementById("output").innerHTML =
    "<p>Text without spaces: " + textWithoutSpaces + "</p>";
}
/*doubling array elements*/
function calculateMap() {
  let mapArrayInput = document.getElementById("mapArray").value;
  let numbersArray = mapArrayInput.split(",").map(Number);
  let doubledArray = numbersArray.map((number) => number * 2);
  document.getElementById("output").innerHTML =
    "<p>Doubled Array: " + doubledArray.join(", ") + "</p>";
}
/*Hero vs Dragon */
function fightDragons() {
  let heroPower = parseInt(document.getElementById("heroPower").value);
  let dragonCount = parseInt(document.getElementById("dragonCount").value);

  let totalDragonPower = dragonCount * 2;

  if (heroPower >= totalDragonPower) {
    document.getElementById("output").innerHTML =
      "<p>The hero defeats the dragons!</p>";
  } else {
    document.getElementById("output").innerHTML =
      "<p>The hero is defeated by the dragons!</p>";
  }
}
/*  Addition of two arrays*/
function addArray() {
  let arrayInput = document.getElementById("arrayInput").value;
  let array1 = arrayInput.split(",").map(Number);

  let arrayInput2 = document.getElementById("arrayInput2").value;
  let array2 = arrayInput2.split(",").map(Number);

  let sum1 = array1.reduce((acc, curr) => acc + curr, 0);
  let sum2 = array2.reduce((acc, curr) => acc + curr, 0);

  let totalSum = sum1 + sum2;

  document.getElementById("output").innerHTML =
    "<p>Sum of Array 1: " +
    sum1 +
    "</p>" +
    "<p>Sum of Array 2: " +
    sum2 +
    "</p>" +
    "<p>Total Sum: " +
    totalSum +
    "</p>";
}
/* century to year */
function calculateCentury() {
  let yearInput = parseInt(document.getElementById("yearInput").value);
  let century = Math.ceil(yearInput / 100);
  document.getElementById("output").innerHTML =
    "<p>Century from Year: " + century + "</p>";
}
/*cat and dog years */
function calculateCatAndDogYears() {
  let humanYears = parseInt(document.getElementById("humanYears").value);

  let catYears = 0;
  let dogYears = 0;

  if (humanYears >= 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  document.getElementById("output").innerHTML =
    "<p>Cat Years: " + catYears + "</p>" + "<p>Dog Years: " + dogYears + "</p>";
}
/*Total Points */
function calculateTotalPoints() {
  let wins = parseInt(document.getElementById("wins").value);
  let draws = parseInt(document.getElementById("draws").value);
  let losses = parseInt(document.getElementById("losses").value);

  let totalPoints = wins * 3 + draws * 1;

  document.getElementById("output").innerHTML =
    "<p>Total Points: " + totalPoints + "</p>";
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("problemSelect")
    .addEventListener("change", function () {
      var selectedProblem = this.value;
      var inputContainer = document.getElementById("inputContainer");
      var output = document.getElementById("output");
      inputContainer.innerHTML = "";
      output.innerHTML = "";

      if (selectedProblem === "getPlanetID") {
        inputContainer.innerHTML =
          "<h2>Enter a number (1-8):</h2>" +
          '<input type="number" id="numberInput" min="1" max="8">' +
          '<button onclick="getPlanet()">Get Planet</button>';
      } else if (selectedProblem === "multiplyNumber") {
        inputContainer.innerHTML =
          '<input type="number" id="multiply1" placeholder="enter number">' +
          '<input type="number" id="multiply2" placeholder="enter number">' +
          '<button onclick="multiply()">Multiply</button>';
      } else if (selectedProblem === "reverse") {
        inputContainer.innerHTML =
          '<input type="text" id="string" placeholder="enter string">' +
          '<button onclick="reverseString()">Reverse</button>';
      } else if (selectedProblem === "evenorodd") {
        inputContainer.innerHTML =
          '<input type="number" id="evn" placeholder="enter a number">' +
          '<button onclick="evenOrOdd()">Guess</button>';
      } else if (selectedProblem === "countVowel") {
        inputContainer.innerHTML =
          '<input type="text" id="vowel" placeholder="enter a string">' +
          '<button onclick="Vowel()">Count</button>';
      } else if (selectedProblem === "secretMessage") {
        inputContainer.innerHTML =
          '<input type="text" id="secretmessage" placeholder="enter a message">' +
          '<button onclick="secretMessage()">Convert</button>';
      } else if (selectedProblem === "Divisable") {
        inputContainer.innerHTML =
          '<input type="number" id="divident" placeholder=" Divident">' +
          '<input type="number" id="divisor1" placeholder=" Divisor1">' +
          '<input type="number" id="divisor2" placeholder=" Divisor2">' +
          '<button onclick="divisble()">Check</button>';
      } else if (selectedProblem === "negative") {
        inputContainer.innerHTML =
          '<input type="number" id="negativeNum" placeholder=" number">' +
          '<button onclick="negative()">Convert</button>';
      } else if (selectedProblem === "minArray") {
        inputContainer.innerHTML =
          '<input type="text" id="array" placeholder="comma seperated">' +
          '<button onclick="minArray()">minimum</button>';
      } else if (selectedProblem === "summation") {
        inputContainer.innerHTML =
          '<input type="number" id="sum" placeholder="enter number">' +
          '<button onclick="summation()">sum</button>';
      } else if (selectedProblem === "avgOfArray") {
        inputContainer.innerHTML =
          '<input type="text" id="average1" placeholder="enter number">' +
          '<button onclick="average()">Average</button>';
      } else if (selectedProblem === "stonepaper") {
        inputContainer.innerHTML =
          '<input type="text" id="sign1" placeholder="playe-1">' +
          '<input type="text" id="sign2" placeholder="player-2">' +
          '<button onclick="rockpaper()">play</button>';
      } else if (selectedProblem === "removestring") {
        inputContainer.innerHTML =
          '<input type="text" id="remove1" placeholder="enter string">' +
          '<button onclick="removeString()">Remove</button>';
      } else if (selectedProblem === "sumofpositive") {
        inputContainer.innerHTML =
          '<input type="text" id="sop" placeholder="enter number">' +
          '<button onclick="sumOfPositive()">sum</button>';
      } else if (selectedProblem === "operations") {
        inputContainer.innerHTML =
          '<select><option value="">Choose operator</option><option id="operator" value="+">+</option><option id="operator" value="-">-</option><option id="operator" value="*">x</option><option id="operator" value="/">%</option></select>' +
          '<input type="number" id="value1" placeholder="value-1">' +
          '<input type="number" id="value2" placeholder="value-2">' +
          '<button onclick="operation()">calculate</button>';
      } else if (selectedProblem === "repeat") {
        inputContainer.innerHTML =
          '<input type="text" id="str1" placeholder="string">' +
          '<input type="number" id="str2" placeholder="counts">' +
          '<button onclick="repeat()">repeat</button>';
      } else if (selectedProblem === "stringToArray") {
        inputContainer.innerHTML =
          '<input type="text" id="stringInput" placeholder="Enter a string">' +
          '<button onclick="convertToArray()">Convert</button>';
      } else if (selectedProblem === "removeSpaces") {
        inputContainer.innerHTML =
          '<input type="text" id="textWithSpaces" placeholder="Enter text with spaces">' +
          '<button onclick="removeSpaces()">Remove Spaces</button>';
      } else if (selectedProblem === "lostWithoutMap") {
        inputContainer.innerHTML =
          '<input type="text" id="mapArray" placeholder="Enter map array">' +
          '<button onclick="calculateMap()">Calculate</button>';
      } else if (selectedProblem === "heroVsDragons") {
        inputContainer.innerHTML =
          '<input type="number" id="heroPower" placeholder="Hero Power">' +
          '<input type="number" id="dragonCount" placeholder="Number of Dragons">' +
          '<button onclick="fightDragons()">Fight!</button>';
      } else if (selectedProblem === "arrayAddition") {
        inputContainer.innerHTML =
          '<input type="text" id="arrayInput" placeholder="Enter comma-separated numbers for array 1">' +
          '<input type="text" id="arrayInput2" placeholder="Enter comma-separated numbers for array 2">' +
          '<button onclick="addArray()">Calculate Sum</button>';
      } else if (selectedProblem === "centuryFromYear") {
        inputContainer.innerHTML =
          '<input type="number" id="yearInput" placeholder="Enter a year">' +
          '<button onclick="calculateCentury()">Calculate</button>';
      } else if (selectedProblem === "catAndDogYears") {
        inputContainer.innerHTML =
          '<input type="number" id="humanYears" placeholder="Enter human years">' +
          '<button onclick="calculateCatAndDogYears()">Calculate</button>';
      } else if (selectedProblem === "totalPoints") {
        inputContainer.innerHTML =
          '<input type="number" id="wins" placeholder="Wins">' +
          '<input type="number" id="draws" placeholder="Draws">' +
          '<input type="number" id="losses" placeholder="Losses">' +
          '<button onclick="calculateTotalPoints()">Calculate</button>';
      } else {
        inputContainer.innerHTML = "";
      }
    });
});
