console.log("script loaded");

class MyClass {

}

const myClass = new MyClass();

console.log(typeof myClass); // object

const obj = {
    name: "name"
}

console.log(obj);
console.log(typeof obj);

// comparing 2 objects = comapring memory location 
// comparing 2 properties = comparing the value 


// EXERCISES

// Create a user class
//Create a class method


class User {
    typeofuser = "user";
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(middleName){
        return `${this.firstName} ${middleName} ${this.lastName}`;
    }
}

// const user1 = new User ("Islam", "Fausi");
// console.log(user1.firstName);
// console.log(user1.lastName);

// console.log(user1.getFullName("Hamed"));
// console.log(user1.typeofuser);
// user1.typeofuser = "smthelse";
// console.log(user1.typeofuser);


// Creating a CV class

class CV {
    constructor(email) {
      this.jobs = [];
      this.educations = [];
      this.email = email;
    }
  
    addJob(job) {
      this.jobs.push(job);
    }
  
    removeJob(job) {
        //this.jobs.pop(job);
        this.jobs = this.jobs.filter(arrayJob => job.id != arrayJob.id)
    }

    removeJobById(id){
    }
  
    addEducation(education) {
        this.educations.push(education);
    }
  
    removeEducation(education) {
        this.educations = this.educations.filter(arrayEducation => education.id != arrayEducation.id)
    }
  }


  class Job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
  
 
  }



  class Education {
    constructor(id, title, school, address, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.school = school;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
    }
  
  
  }
  
  
const myCV = new CV("myEmail");

const myJob = new Job(1, "job1", "some description", "2021-03-21", "2021-03-21");
const myJob2 = new Job(2, "job2", "some description", "2000-03-21", "2000-03-21");

const myEducation = new Education(1, "job1", "myschool", "myaddress", "2021-03-21", "2021-03-21");

myCV.addJob(myJob);
myCV.addJob(myJob2);
myCV.addEducation(myEducation);
console.log(JSON.stringify(myCV));


myCV.removeJob(myJob2);
myCV.removeEducation(myEducation);
//console.log(myCV);

// console log is async, so you will see a "delay" in info uodate on the array of jobs logged out 

// INHERITANCE
// Don't repeat yoursefl DRY
// Write everything twice WET
// composition overinheritance

class fourLeggedPet{
    legs = 4;
    name;

    constructor(name){
        this.name = name;
    }
}

class Cat extends fourLeggedPet{
    //legs = 4;
    catchingMice(){
        console.log("catching mice");
    }
}


class Dog extends fourLeggedPet{
    //legs = 4;
    protectingOwners(){
        console.log("protecting my owners");
    }
}

const doggie = new Dog ("Brian");
console.log(doggie);  // Dog {legs: 4, name: "Brian"}