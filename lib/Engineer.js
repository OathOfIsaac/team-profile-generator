const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
        //call parent constructor here:
        super(name, id, email);

        this.gitHubUser = gitHubUser;
    }

    getGitUser() {
        return this.gitHubUser;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;