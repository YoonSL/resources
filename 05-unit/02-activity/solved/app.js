//console.log each individual element from teams
teams.forEach(e => console.log(e));

//console.log each individual element from conferences
conferences.forEach(e => console.log(e));

//console.log an array of the leaders of each team
console.log(teams.map(e => e.leader));

//console.log an array of the names of each conference
console.log(conferences.map(e => e.name));

//console.log an array of teammates with level 4 or higher
console.log(teammates.filter(e => e.level > 4));

//console.log an array of teammates where the name starts with 'J'
console.log(teammates.filter(e => e.name.startsWith('J')));

//CHALLENGE
//console.log an array of the name of each team in the instructional department
console.log(teams.filter(e => e.department === 'Instructional').map(e=>e.name))