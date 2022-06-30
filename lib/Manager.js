const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, branchName) {
        //calls Parent constructer:
        super(name, id, email);

        this.branchName = branchName; 
    } 
    getBranchName() {
        return this.branchName;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;