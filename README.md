# Project Euler 042 - Coded Triangle Numbers

The nth term of sequence of triangle numbers is given by, t<sub>n</sub> = (1/2)n(n+1), so the first ten triangle numbers are:

    1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value.  For example, the word value for SKY is 19 + 11 + 25 = 55 = t<sub>10</sub>.  If the word value is a triangle number then we shall call the word a triangle word.

Using words array of n-length, how many are triangle words?

A [PDF File](pdf/words.pdf) containing the words is supplied.

Information at [Project Euler 042](https://projecteuler.net/problem=42)

## UX

**User Stories**

As a user, I expect the function `codedTriangleNumbers(1400)` to return a number.

As a user, I expect the function `codedTriangleNumbers(1400)` to return 129.

As a user, I expect the function `codedTriangleNumbers(1500)` to return 137.

As a user, I expect the function `codedTriangleNumbers(1600)` to return 141.

As a user, I expect the function `codedTriangleNumbers(1786)` to return 162.

**Information Architecture**

The function `codedTriangleNumbers(n)` returns a number, where n is a number.