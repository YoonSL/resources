let state = {
    teamList: teamData,
    confList: conferenceData,
    employeeList: teammateData,

    printTeams: function(){
    	this.teamList.forEach(e => console.log(e));
  	},

  	printConf: function(){
		this.confList.forEach(e => console.log(e));
  	},

  	printTeamLeads: function(){
		console.log(this.teamList.map(e => e.leader));
  	},

  	printConfNames: function(){
		console.log(this.confList.map(e => e.name));
  	},

  	printLevel: function(){
		console.log(this.employeeList.filter(e => e.level > 4));
  	},

  	printJ: function(){
		console.log(this.employeeList.filter(e => e.name.startsWith('J')));
  	},

  	printInstructional: function(){
		console.log(this.teamList.filter(e => e.department === 'Instructional').map(e => e.name))  	
	}
}

//Call a function that will console.log each individual element from teams
state.printTeams();

//Call a function that will console.log each individual element from conferences
state.printConf();

//Call a function that will console.log an array of the leaders of each team
state.printTeamLeads();

//Call a function that will console.log an array of the names of each conference
state.printConfNames();

//Call a function that will console.log an array of teammates with level 4 or higher
state.printLevel();

//Call a function that will console.log an array of teammates where the name starts with 'J'
state.printJ();

//CHALLENGE
//Call a function that will console.log an array of the name of each team in the Instructional department
state.printInstructional();