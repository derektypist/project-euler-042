# Project Euler 042 - Coded Triangle Numbers

The nth term of sequence of triangle numbers is given by, t<sub>n</sub> = (1/2)n(n+1), so the first ten triangle numbers are:

    1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value.  For example, the word value for SKY is 19 + 11 + 25 = 55 = t<sub>10</sub>.  If the word value is a triangle number then we shall call the word a triangle word.

Using words array of n-length, how many are triangle words?

A [PDF File](pdf/words.pdf) containing the words is supplied.

Information at [Project Euler 042](https://projecteuler.net/problem=42)

## UX

**Getting Started**

Enter a whole number between 1 and 1786, without leading zeros such as 01 and click on the Submit Button.  You will see the number of triangle words unless you have made an invalid input.  Click on the Reset Button to clear the information or to start again.  You can also view the PDF File containing the words (in alphabetical order).  Each word is in upper case (e.g. SKY).  Viewing the PDF File is not part of submitting the form, so you can view the PDF File before or after submitting your input.

**User Stories**

As a user, I can view the PDF File containing a list of words.

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 1 or greater than 1786
- Including leading zeros (e.g. 01)
- Entering a number, but it is not an integer

As a user, I expect the function `codedTriangleNumbers(1400)` to return a number.

As a user, I expect the function `codedTriangleNumbers(1400)` to return 129.

As a user, I expect the function `codedTriangleNumbers(1500)` to return 137.

As a user, I expect the function `codedTriangleNumbers(1600)` to return 141.

As a user, I expect the function `codedTriangleNumbers(1786)` to return 162.

User Stories on function `codedTriangleNumbers(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 042](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-42-coded-triangle-numbers)

**Information Architecture**

The function `codedTriangleNumbers(n)` returns a number, where n is a number.

## Features

Allows the user to input a number in order to find the number of triangle words in the array supplied.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.  Also allows the user to view the PDF File of words, which are listed in alphabetical order.  Each word is in upper case (e.g. SKY).

