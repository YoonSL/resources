let state = {
    teamList: teamData,
    confList: conferenceData,
    employeeList: teammateData, 

    //Create a series of functions to replace the console.log statements from below.
    //Call the functions below. The first one is done for you.
    printTeams: function(){
    	this.teamList.forEach(e => console.log(e));
  	}, 

  	printConf: function(){

  	},

  	printTeamLeads: function(){

  	},

  	printConfNames: function(){

  	},

  	printLevel: function(){

  	},

  	printJ: function(){

  	},

  	printInstructional: function(){

	}
}

//Call a function that will console.log each individual element from teams
state.printTeams();

//Call a function that will console.log each individual element from conferences
state.confList.forEach(e => console.log(e));

//Call a function that will console.log an array of the leaders of each team
console.log(state.teamList.map(e => e.leader));

//Call a function that will console.log an array of the names of each conference
console.log(state.confList.map(e => e.name));

//Call a function that will console.log an array of teammates with level 4 or higher
console.log(state.employeeList.filter(e => e.level > 4));

//Call a function that will console.log an array of teammates where the name starts with 'J'
console.log(state.employeeList.filter(e => e.name.startsWith('J')));

//CHALLENGE
//Call a function that will console.log an array of the name of each team in the Instructional department
console.log(state.teamList.filter(e => e.department === 'Instructional').map(e => e.name))