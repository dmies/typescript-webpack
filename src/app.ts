import {Todo, ScheduledTodo} from './todo';

const simpleTodo = new Todo('sample todo');
simpleTodo.finish();

const yesterday = new Date(new Date().getTime() - ScheduledTodo.DAY_IN_MS);
const buyMilk = new ScheduledTodo('Buy milk.', yesterday);
console.log(`days left: ${buyMilk.daysLeft()}`);
buyMilk.finish();

console.log('done');
