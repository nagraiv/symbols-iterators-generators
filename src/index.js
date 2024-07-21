import {dreamTeam} from "./App/app";
import canIterate from "./App/canIterate";

console.log('=======TASK_1========');

console.log("Let's iterate dreamteam!");

// неявный перебор итератора
for (let item of dreamTeam) {
    console.log(item);
}

// явный перебор итератора
const iterator = dreamTeam[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log('=======TASK_2========');
console.log(Object.getOwnPropertySymbols(dreamTeam));
const generator = dreamTeam[Symbol.iterator]();
console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

console.log('=======TASK_3========');
console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate("Netology")); // true