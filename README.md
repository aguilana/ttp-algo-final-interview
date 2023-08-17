# ttp-algo-final-interview

## FORK AND CLONE

- cd into the directory you saved it to
- npm install
  /_ --- get comfortable with branching and git commit commands in your local branch --- _/
- git checkout -b <your-branch-name>

### CODE AND TEST

/_ --- to run the tests --- _/

- npm run test

```
The goal of this exercise is to test for competent development skills, logical though process, and ability to follow instructions to deduce a solution to a unique solution. In doing so, you can write your code in your preferred language (this is JS) and spend no more than 2hrs on the test. While legibility will be considered, I am not evaluating for syntatic sugar but the ability to evaluate JSON and then use and manipulate data structures in function to solve a puzzle.
You are provided with a JSON below, inside known are 5 words with a value. The goal is to write code to deduce the value of the unknown word and output it by following some basic rules of the puzzle. You can put the JSON into a variable at the top of your code for simplicity.

{
  "known" : {
    "e" : 4,
    "gee" : 16,
    "dad" : 24,
    "baba" : 18,
    "chad" : 23
  },
  "unknown" : "figged"
}

Letters "a" through "i" alphabetically represent while integers 1 to 9, they are unique and the letter alphabetically next to it cannot numerically next to it.
For example, of "e" is equal to 4, no other letter can be equal to 4, both "d" and "f" cannot be equal to 3 or 5.
A word's value is equal to the sum of all it's letter so "ee" is equal to 8 in this case.
Use these rules along with the provided known words and values to then deduce the values of each letter to help solve the puzzle.

While your code should be able to solve the given problem,
it's methodology and algorithm should be dynamic enough to be able to solve other problems with similar parameters,
but different values. (Letters "a" through "i", each representing a whole integer from 1 to 9, etc).
The end result should be a class or a group of functions that can keep track of possible values and eliminate possibilities using dynamic logic to reach its conclusion.

After you have finished commit your code to your local repo. npm run tests to test the cases and analyze your results.
```
