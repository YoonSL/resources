let state = {
    teamList: teamData,
    confList: conferenceData,
    employeeList: teammateData
}

//console.log each individual element from teams
state.teamList.forEach(e => console.log(e));

//console.log each individual element from conferences
state.confList.forEach(e => console.log(e));

//console.log an array of the leaders of each team
console.log(state.teamList.map(e => e.leader));

//console.log an array of the names of each conference
console.log(state.confList.map(e => e.name));

//console.log an array of teammates with level 4 or higher
console.log(state.employeeList.filter(e => e.level > 4));

//console.log an array of teammates where the name starts with 'J'
console.log(state.employeeList.filter(e => e.name.startsWith('J')));

//CHALLENGE
//console.log an array of the name of each team in the Instructional department
console.log(state.teamList.filter(e => e.department === 'Instructional').map(e => e.name))