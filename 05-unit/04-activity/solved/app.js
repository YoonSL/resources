//console.log the first team object with a leader named Jess 
console.log(teams.find(e => e.leader === 'Jess'));

//console.log an array of teams where some team members have a level of 5
console.log(teams.filter(e => e.members.some(member => member.level === 5)));

//console.log an array of teams where every team member has a level 2 or higher
console.log(teams.filter(e => e.members.every(member => member.level > 1)));

//console.log an array of the names of teams where every team member has a level 2 or higher
console.log(teams.filter(e => e.members.every(member => member.level > 1)).map(e => e.name));

//console.log an array of conferences that the 'Operations' department can attend
console.log(conferences.filter(e => e.depts.includes('Operations')))

//CHALLENGE

//console.log an array of conferences that Field Ops can attend
//Assume you do not know Field Ops department and cannot hard code in 'Operations' 
const dept = teams.find(e => e.name === 'Field Ops').department;
console.log(conferences.filter(e => e.depts.includes(dept)))

//console.log an array of teamleaders on the teams eligible for the Py Day conference
const pyDayDepts = conferences.find(e => e.name === "Py Day").depts;
console.log(teams.filter(e => pyDayDepts.includes(e.department)).map(e => e.name));

