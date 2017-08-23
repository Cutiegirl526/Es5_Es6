//non ingeritance / no oop

class Employee{
  constructor(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  }

  getFullName(){
    return '${this.firstName} ${this.lastName}';
  }
}
/*
let bob = new Employee('Bob', 'Thorn');
console.log(bob);

class Manager {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.managesEmployee = [];
  }

  getFullName (){
  return '${this.firstName} ${this.lastName}';
  }
  addEmployee(employee){
    this.managesEmployee.push(employee);
  }
}
*/
//Clean^^^ with oop Es6

class Manager extends Employee{
  constructor(firstName, lastName){
    super(firstName, lastName);
    this.managesEmployee = [];
  }

  addEmployee(employee){
    this.managesEmployee.push(employee);
  }
}

let bob = new Manager('Bob', 'Thorn');
//console.log(bob.getFullName());
bob.addEmployee('Cindy', 'Zak', 'Tyler');
console.log(bob.managesEmployee);