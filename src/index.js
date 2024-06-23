import {dreamTeam} from "./App/app";

console.log('=======TASK_1========');

console.log("Let's iterate dreamteam!");

// неявный перебор итератора
for (let item of dreamTeam) {
    console.log(item);
}

// явный перебор итератора
const iteration = dreamTeam[Symbol.iterator]();
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());

console.log('=======TASK_2========');
