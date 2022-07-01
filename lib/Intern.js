const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, classOf){
        super(name, id, email);
        this.classOf = classOf;
    }
    getClassOf() {
        return this.classOf;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;