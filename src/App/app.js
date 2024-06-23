import * as Characters from "./Characters";
import Team from "./Team/Team";

const bowman = new Characters.Bowman('Легалас');
const daemon = new Characters.Daemon('Люцифер');
const magician = new Characters.Magician('Гендальф');
const swordsman = new Characters.Swordsman('Арагорн');
const undead = new Characters.Undead('Дракула');
const zombie = new Characters.Zombie('Sean');
console.log('Characters are created!\n', bowman, daemon, magician, swordsman, undead, zombie);

console.log('Creating a dream team with a magician and a bowman');
const dreamTeam = new Team(magician, bowman);
console.log(dreamTeam.toArray());

console.log('A swordsman join the team: ');
dreamTeam.add(swordsman);
console.log(dreamTeam.toArray());

console.log('Adding every one to the team: ');
dreamTeam.addAll(bowman, daemon, magician, swordsman, undead, zombie);
console.log(dreamTeam);

export {
    dreamTeam
}