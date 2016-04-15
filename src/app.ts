import {Todo, ScheduledTodo} from './todo';

let simpleTodo = new Todo('sample todo');
simpleTodo.finish();

let yesterday = new Date(new Date().getTime() - ScheduledTodo.DAY_IN_MS);
let buyMilk = new ScheduledTodo('Buy milk.', yesterday);
console.log(`days left: ${buyMilk.daysLeft()}`);
buyMilk.finish();
