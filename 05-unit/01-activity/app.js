const studentList = [
    {
      name: 'Jaelyn',
      age: 44
    },
    {
      name: 'Tara',
      age: 20
    },
    {
      name: 'Bob',
      age: 32
    }
  ];
  
  const studentNameList = studentList.map(e => e.name);
  
  const over21List = studentList.filter(e => e.age > 20);
  
  console.log(studentNameList);
  
  console.log(over21List);

  for(let i = 0; i < studentList.length; i++){
    conf.innerHTML += `<div>${over21List[i].name}</div>` + `<div>${over21List[i].age}</div></br>`;
  }
  