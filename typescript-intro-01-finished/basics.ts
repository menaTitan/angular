// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

// person = {
//   isEmployee: true
// };

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & types

function addNumbers(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
// student.listCourses(); => Angular, React

// student.courses => Angular, React

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hello!');
  },
};

class Instructor implements Human {
  firstName: string;
  age: number;
  greet() {
    console.log('Hello!!!!');
  }
}


const anExampleVariable = "Hello World"
console.log(anExampleVariable)

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  
/*
  function insertAtBeginning(array: number[], value : any){
      const newArray = [value,...array];
      return newArray;
  }
*/

//Generics 
/*
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}
  const demoArray = [1, 2, 3];

  var updatedArray = insertAtBeginning(demoArray, -1);
  console.log(updatedArray);
  updatedArray = insertAtBeginning(demoArray, 3);
  console.log(updatedArray);

  const stringArray = insertAtBeginning(['q', 'b', 'b'], 'd');
  console.log(stringArray[0].split(''));
*/
  //class 

  //class Student{

    /*
      firstName: string;
      lastName: string;
      age: number;
     private courses: string[];

       constructor(first: string, last: string, age: number, courses: string[]){
           this.firstName = first;
           this.lastName = last;
           this.age = age;
           this.courses = courses;
       }
       */
/*
      constructor(public firstName: string, public lastName:string, public age: number, private courses:string[]){}
       
       enrol(coursename: string){
        this.courses.push(coursename);
       }

       listCourses(){
           return this.courses.slice();
       }
  }

*/
/*
const student = new Student("mena", "sergeyous", 28, ['computer science']);
student.enrol("computer science 2")
console.log(student.listCourses())
//console.log(student);

interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}

let max: Human;
max = {
    firstName: 'Max',
    age: 26,
    greet(){
        console.log("hello my name is ", this.firstName);
    }

}
console.log(max.greet());

class Instructor implements  Human{
firstName = "max";
age =  26;
greet(){
    console.log("hello world");
}

}
*/