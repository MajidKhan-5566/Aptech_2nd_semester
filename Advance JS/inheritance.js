class Employee {
    constructor(id, name, slot, salary) {
    this.id = id;
    this.name = name;
    this.slot = slot;
    this.salary = salary;
}

JobTittle(tittle){
    console.log(this.name + " is a " + this.skills + " working is a " + this.slot + " and salary is a " + this.salary);
}

}
class Developer extends Employee {
    constructor(id, name, skills, slot, salary, ){
    super(id, name, slot, salary);
    this.skills = skills;
    // this.programmingLanguage = programmingLanguage;
    }
}

let a = new Developer (" 1548144 " ," Majid ", " Frontend developer ", " 10am to 12pm ", " 30000 to 10000 ");
a.JobTittle();