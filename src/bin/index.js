import * as readlineSync from 'readline-sync'

export const nameAsk = () => readlineSync.question('May I have your name? ');
export default nameAsk;
