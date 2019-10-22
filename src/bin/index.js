import * as readlineSync from 'readline-sync'

export const nameAsk = () => readlineSync.question('May I have your name? ');
export const answer = () => readlineSync.question('Your answer: ');
export const isEven = num => num % 2 === 0;
export const rand = () => Math.floor(Math.random() * 100);
export default nameAsk;
