// today we will continue practicing functions based on feedback
// from friday's retro #agile

var classroom = {
  name: "Aloha Spark Lab",
  location: "Pearl Harbor-Hickam AF Base",
  maxNumberOfStudents: 6,
  numberOfInstructors: 2,
  students: [
    {firstName: "Tom", lastName: "Schaum"},
    {firstName: "Carol", lastName: "Grande"},
    {firstName: "David", lastName: "Allshouse"},
    {firstName: "Micah", lastName: "Johns"},
    {firstName: "Mitchell", lastName: "Elias"},
    {firstName: "Marissa", lastName: "Sulon"},
  ]
}

var studentsInClass = classroom.students;

// object.attribute = value;

// write a function to encapsulate the functionality above
function addHobbies(){
  for(var i = 0; i < studentsInClass.length; i++) {
    // write the code to add a 'hobbies' attribute to each student
     studentsInClass[i].hobbies = "";
  }
}

// write a function that allows someone to add any attribute to the model student (Hint: use parameters)
function addAtribute(attribute){
  for(var i = 0; i < studentsInClass.length; i++) {
    var student = studentsInClass[i]
    student[attribute] = "";
  }
}

addAtribute('skills');
addAtribute('pet');
addAtribute('hobbies');

console.log(studentsInClass);