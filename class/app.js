let state = {
  registrantList:[
  'cj@example.com',
  'hannah@example.com',
  'john@example.com',
  'tatiana@example.com',
  'arturo@example.com',
  'jameson@example.com',
  'meguel@example.com'
  ]
}

/*
Create a new array with the current registrant list plus the new 
input value and update the state with this new array.
*/
const addRegistrant = function () {
  const newList = [...state.registrantList, $('input').val()];
  setState({registrantList: newList});
  $('input').val('');
}

/*
Update the state and re-render the page
*/
const setState = function (newVal){
  state = {...state, ...newVal}
  render();
}

/*
Create a string of the html to render and render it
*/
const render = function () {
  let htmlContent = '<h1> Registrant List </h1>';
  state.registrantList.forEach(e => htmlContent += `<p> ${e} </p>`);
  $('.root').html(htmlContent);
}

$('#add').on('click', addRegistrant);
render();