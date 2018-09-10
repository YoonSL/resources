const fullJobList = [
    'ER Nurse',
    'Clown'
];
const activeList = [

];
const render = function(whichList){
    // if(activeList.length < 0){
    //     whichList = fullJobList;
    for(let i = 0; i < whichList.length;i++){
        $('#job-board').empty();
        $('#job-board').append(`<div>${whichList}</div>`);
    }
}




const addJob = function(event){
    event.preventDefault(); 
    const newJob = $('#add-input').val(); //brings the add-input text field's value
    fullJobList.push(newJob); //adds the input to fulljoblist
    render(fullJobList);
}


//const addingJob = $('#add'); //this is button add //did not need this

$('#add').on('click',addJob); //when add buttom clicked, run addJob function

const searchJob = function(event){
    event.preventDefault();
    const input = $('#search-input'); //brings the search-input text field's value
    const searchInput = input.val();
    input.val('');
    for(i=0;i<fullJobList.length;i++){
        if(fullJobList[i].includes(searchInput)){ //when the user input string is in fulljoblist
            activeList.push(fullJobList[i]); //add the job with true condition to the list 
        }
    }
   
    render(activeList);
}

$('#search').on('click',searchJob); //when the button is clicked execute searchJob function