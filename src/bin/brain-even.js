#!/usr/bin/env node

import { nameAsk, answer, isEven, rand } from './index';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let name = nameAsk();
console.log('Hello, ' + name + '!');
let points = 0;

while (points < 3) {
let randNum = rand();
console.log('Question: ' + randNum);
let answer1 = answer();
console.log(answer1);
	    if (isEven(randNum)) {
      if (answer1 === 'yes') {
         console.log('Correct!');
         points += 1;
    } else {
         console.log(answer1 + ' is wrong answer ;(. Correct answer was \'yes\'.');
        points -= 1;
          }
          } else if (!isEven(randNum)) {
            if (answer1 === 'no') {
         console.log('Correct!');
         points += 1;
    } else {
         console.log(answer1 + ' is wrong answer ;(. Correct answer was \'no\'.');
        points -= 1;
          }
            
        }
}
console.log('Congratulations, ' + name);
