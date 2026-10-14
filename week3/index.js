 //**** Exercise:1 ****
 function EmployeeInfo(name, Salary) 
{ 
 console.log("Welcome " + name+" Your monthly Salary is " + Salary); 
 } 
  
 // Display current date and time 
const currentDateTime = new Date(); 
console.log("This is my first program"); 
console.log("Programe run on : " +  currentDateTime.toLocaleString()); 
   
var EmpName = "Bibek"; 
var EmpSalary = 50000; 
  
// Calling the function 
EmployeeInfo(EmpName, EmpSalary);

// *** Exercise:2  ***
function EmployeeInfo(name, Salary)
{
    console.log("Welcome"+name +"your monthly salary is "+ Salary);
}
// Display current date and time 

console.log("this is my first program");
console.log("programe run on :"+ currentDateTime.toLocaleString);

var EmpName = "Bibek Kumar Mahato";
var EmpSalary = "6000";

// calling the function 
EmployeeInfo(EmpName,EmpSalary);
// Add this for second exercise
const EmpSkills = (skills,Name,LAbGrp) => {
    console.log("student ID"+ "Expert in" + skills);
    console.log("Lab Group Name:", LAbGrp);
}
EmpSkills("java","3010901 ","Group 7");

// *** Exercise : 3**
const student = require('./StudentInfo');
const person = require('./Person');
// because getName is the function so we use ()

console.log("Student Name:" +student.getName());
console.log(student.Location());
console.log(student.dob);

// because dob is a variable so we do not use
console.log(student.Studentgrade());
console.log("grade is "+student.Studentgrade(55));
const person1 = new person("bibek","22","emailme@gmail.com");

console.log("using Person Module",person1.getPersonInfo());
console.log("programe ended");