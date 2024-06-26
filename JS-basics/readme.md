# JavaScript Practice Exercises

This `README.md` file contains a collection of JavaScript practice exercises with solutions.

## Variables and Data Types

1. Create a variable called `carName`, assign the value `"Volvo"` to it.
    ```javascript
    let carName = "Volvo";
    ```

2. Create a variable called `x`, assign the value `50` to it.
    ```javascript
    let x = 50;
    ```

3. Display the sum of `5 + 10`, using two variables: `x` and `y`.
    ```javascript
    let x = 5;
    let y = 10;
    document.getElementById("demo").innerHTML = x + y;
    ```

4. Create a variable called `z`, assign `x + y` to it, and display the result in an alert box.
    ```javascript
    let x = 5;
    let y = 10;
    let z = x + y;
    alert(z);
    ```

5. On one single line, declare three variables with the following names and values:
    ```javascript
    let firstName = "John", lastName = "Doe", age = 35;
    ```

6. Multiply `10` with `5`, and alert the result:
    ```javascript
    alert(10 * 5);
    ```

7. Divide `10` by `2`, and alert the result:
    ```javascript
    alert(10 / 2);
    ```

8. Alert the remainder when `15` is divided by `9`.
    ```javascript
    alert(15 % 9);
    ```

9. Use the correct assignment operator that will result in `x` being `15` (same as `x = x + y`).
    ```javascript
    let x = 5;
    let y = 10;
    x += y;
    ```

10. Use the correct assignment operator that will result in `x` being `50` (same as `x = x * y`).
    ```javascript
    let x = 5;
    let y = 10;
    x *= y;
    ```

11. Use comments to describe the correct data type of the following variables:
    ```javascript
    let length = 16;          // Integer data type
    let lastName = "Johnson"; // String data type
    const x = {               // Object data type
      firstName: "John",
      lastName: "Doe"
    };
    ```

## Functions and Objects

12. Execute the function named `myFunction`.
    ```javascript
    myFunction();
    ```

13. Create a function called `myFunction`.
    ```javascript
    function myFunction() {
      alert("Hello World!");
    }
    ```

14. Make the function return `"Hello"`.
    ```javascript
    function myFunction() {
      return "Hello";
    }
    document.getElementById("demo").innerHTML = myFunction();
    ```

15. Make the function display `"Hello"` in the inner HTML of an element with the ID `"demo"`.
    ```javascript
    function myFunction() {
      document.getElementById("demo").innerHTML = "Hello";
    }
    ```

16. Alert `"John"` by extracting information from the `person` object.
    ```javascript
    const person = {
      firstName: "John",
      lastName: "Doe"
    };
    alert(person.firstName);
    ```

17. Add the following property and value to the `person` object: `country: Norway`.
    ```javascript
    const person = {
      firstName: "John",
      lastName: "Doe",
      country: "Norway"
    };
    ```

18. Create an object called `person` with `name = John`, `age = 50`. Then, access the object to `alert("John is 50")`.
    ```javascript
    const person = {
      name: "John",
      age: 50
    };
    alert(person.name + " is " + person.age);
    ```

## Event Handling and DOM Manipulation

19. The `<button>` element should do something when someone clicks on it. Try to fix it!
    ```html
    <button onclick="alert('Hello')">Click me.</button>
    ```

20. When the button is clicked, the function `myFunction` should be executed.
    ```html
    <button onclick="myFunction()">Click me.</button>
    ```

21. The `<div>` element should turn red when someone moves the mouse over it.
    ```html
    <div onmouseover="this.style.backgroundColor='red'">myDIV.</div>
    ```

## Arrays and Date Methods

22. Use the correct Array method to sort the `fruits` array alphabetically.
    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.sort();
    ```

23. Create a Date object and alert the current date and time.
    ```javascript
    const d = new Date();
    alert(d);
    ```

24. Use the correct Date method to extract the year (four digits) out of a date object.
    ```javascript
    const d = new Date();
    year = d.getFullYear();
    ```

25. Use the correct Date method to get the month (0-11) out of a date object.
    ```javascript
    const d = new Date();
    month = d.getMonth();
    ```

26. Use the correct Date method to set the year of a date object to 2020.
    ```javascript
    const d = new Date();
    d.setFullYear(2020);
    ```

## Math Methods and String Manipulation

27. Use the correct Math method to create a random number.
    ```javascript
    let r = Math.random();
    ```

28. Use the correct Math method to return the largest number of `10` and `20`.
    ```javascript
    let x = Math.max(10, 20);
    ```

29. Use the correct Math method to round a number to the nearest integer.
    ```javascript
    let x = Math.round(5.3);
    ```

30. Use the correct Math method to get the square root of `9`.
    ```javascript
    let x = Math.sqrt(9);
    ```

## String Manipulation

31. Use the `length` property to alert the length of `txt`.
    ```javascript
    let txt = "Hello World!";
    let x = txt.length;
    alert(x);
    ```

32. Use escape characters to alert `We are "Vikings"`.
    ```javascript
    let txt = " We are \"Vikings\"";
    alert(txt);
    ```

33. Concatenate the two strings to alert `"Hello World!"`.
    ```javascript
    let str1 = "Hello ";
    let str2 = "World!";
    alert(str1 + str2);
    ```

34. Convert the text into an UPPERCASE text:
    ```javascript
    let txt = "Hello World!";
    txt = txt.toUpperCase();
    ```
35. Use the `slice` method to return the word `"bananas"`.
    ```javascript
    let txt = "I can eat bananas all day";
    let x = txt.slice(10,17);
    ```

36. Use the correct String method to replace the word `"Hello"` with the word `"Welcome"`.
    ```javascript
    let txt = "Hello World";
    txt = txt.replace("Hello", "Welcome");
    ```

37. Convert the value of `txt` to upper case.
    ```javascript
    let txt = "Hello World";
    txt = txt.toUpperCase();
    ```

38. Convert the value of `txt` to lower case.
    ```javascript
    let txt = "Hello World";
    txt = txt.toLowerCase();
    ```

## Arrays

39. Get the value `"Volvo"` from the `cars` array.
    ```javascript
    const cars = ["Saab", "Volvo", "BMW"];
    let x = cars[1];
    ```

40. Change the first item of `cars` to `"Ford"`.
    ```javascript
    const cars = ["Volvo", "Jeep", "Mercedes"];
    cars[0] = "Ford";
    ```

41. Alert the number of items in an array, using the correct Array property.
    ```javascript
    const cars = ["Volvo", "Jeep", "Mercedes"];
    alert(cars.length);
    ```

42. Use the correct Array method to remove the last item of the `fruits` array.
    ```javascript
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.pop();
    ```

43. Use the correct Array method to add `"Kiwi"` to the `fruits` array.
    ```javascript
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Kiwi");
    ```

44. Use the `splice()` method to remove `"Orange"` and `"Apple"` from `fruits`.
    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.splice(1,2);
    ```

## Comparison and Control Flow

45. Choose the correct comparison operator to alert `true`, when `x` is greater than `y`.
    ```javascript
    x = 10;
    y = 5;
    alert(x > y);
    ```

46. Choose the correct comparison operator to alert `true`, when `x` is equal to `y`.
    ```javascript
    x = 10;
    y = 10;
    alert(x == y);
    ```

47. Choose the correct comparison operator to alert `true`, when `x` is NOT equal to `y`.
    ```javascript
    x = 10;
    y = 10;
    alert(x != y);    
    ```

48. Choose the correct conditional (ternary) operator to alert `"Too young"` if `age` is less than `18`, otherwise alert `"Old enough"`.
    ```javascript
    var age = n;
    var voteable = (age < 18) ? "Too young"  :  "Old enough";
    alert(voteable);
    ```

49. Fix the if statement to alert `"Hello World"` if `x` is greater than `y`.
    ```javascript
    if (x > y) {
        alert("Hello World");
    }
    ```

50. Fix the if statement to alert `"Hello World"` if `x` is greater than `y`, otherwise alert `"Goodbye"`.
    ```javascript
    if (x > y) {
        alert("Hello World");
    } else {
        alert("Goodbye");
    }
    ```

## Switch Statement and Loops

51. Create a switch statement that will alert `"Hello"` if `fruits` is `"banana"`, and `"Welcome"` if `fruits` is `"apple"`.
    ```javascript
    switch (fruits) {
        case "Banana":
            alert("Hello");
            break;
        case "Apple":
            alert("Welcome");
            break;
    }
    ```

52. Add a section that will alert `"Neither"` if `fruits` is neither `"banana"` nor `"apple"`.
    ```javascript
    switch (fruits) {
        case "Banana":
            alert("Hello");
            break;
        case "Apple":
            alert("Welcome");
            break;
        default:
            alert("Neither");
    }
    ```

53. Create a loop that runs from `0` to `9`.
    ```javascript
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    ```

54. Create a loop that runs through each item in the `fruits` array.
    ```javascript
    const fruits = ["Apple", "Banana", "Orange"];
    for (const fruit of fruits) {
        console.log(fruit);
    }
    ```

55. Create a loop that runs as long as `i` is less than `10`.
    ```javascript
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
    ```

56. Create a loop that runs as long as `i` is less than `10`, but increase `i` with `2` each time.
    ```javascript
    let i = 0;
    while (i < 10) {
        console.log(i);
        i = i + 2;
    }
    ```

57. Make the loop stop when `i` is `5`.
    ```javascript
    for (i = 0; i < 10; i++) {
        console.log(i);
        if (i == 5) {
            break;
        }
    }
    ```
## Switch Statement and Loops

58. Make the loop jump to the next iteration when `i` is `5`.
    ```javascript
    for (let i = 0; i < 10; i++) {
        if (i == 5) {
            continue;
        }
        console.log(i);
    }
    ```

59. Use the `getElementById` method to find the `<p>` element, and change its text to "Hello".
    ```javascript
    document.getElementById("demo").innerHTML = "Hello";
    ```

60. Use the `getElementsByTagName` method to find the first `<p>` element, and change its text to "Hello".
    ```javascript
    document.getElementsByTagName("p")[0].innerHTML = "Hello";
    ```

61. Change the text of the first element that has the class name "test".
    ```javascript
    document.getElementsByClassName("test")[0].innerHTML = "Hello";
    ```

62. Use HTML DOM to change the value of the image's `src` attribute.
    ```javascript
    document.getElementById("image").src = "pic_mountain.jpg";
    ```

63. Use HTML DOM to change the value of the input field.
    ```javascript
    document.getElementById("myText").value = "Have a nice day!";
    ```

64. Change the text color of the `<p>` element to "red".
    ```javascript
    document.getElementById("demo").style.color = "red";
    ```

65. Change the font size of the `<p>` element to 40 pixels.
    ```javascript
    document.getElementById("demo").style.fontSize = "40px";
    ```

66. Use the CSS `display` property to hide the `<p>` element.
    ```javascript
    document.getElementById("demo").style.display = "none";
    ```

67. Use the `addEventListener` method to assign an `onclick` event to the `<button>` element.
    ```javascript
    document.getElementById("demo").addEventListener("click", myFunction);
    ```
