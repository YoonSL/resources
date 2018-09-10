const studentList = [
  {
    name: 'Jaelyn',
    age: 44,
    classes: ['science', 'math', 'study hall']
  },
  {
    name: 'Tara',
    age: 20,
    classes: ['science', 'math', 'english', 'spanish']
  },
  {
    name: 'Bob',
    age: 32,
    classes: ['science', 'english', 'art']
  }
];
  
  console.log(studentList.some(e => e.age > 21));
  
  console.log(studentList.every(e => e.age > 21));

  console.log(studentList.find(e => e.name === 'Tara'));

  console.log(studentList.filter(e => e.classes.includes('science')).map(e => e.name));

