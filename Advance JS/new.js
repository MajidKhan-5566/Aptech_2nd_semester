class student {
    constructor(id, name,slot,cless) {
        this.id = id;
        this.name = name;
        this.slot = slot;
        this.cless = cless;
}
learn(){
    console.log(this.name + " Having Student ID " + this.id + " enrolled in slot " + this.slot + " and learning course " + this.cless)
}
exam(){ 
    console.log(this.name + " Having Student ID " + this.id + " examined in slot " + this.slot + " and examined course " + this.cless)
}
}
let learning = new student("1548144","Majid","9 to 11","DISM")
learning.learn();

let test = new student("1548144","Majid","9 to 11","CPISM with 95%")
test.exam();