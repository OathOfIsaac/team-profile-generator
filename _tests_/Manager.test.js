const Manager = require('../lib/Manager');
const manager = new Manager('Micheal Scott', '1234', 'Michael@dundermifflin.com', 'Scranton');

test("Test if we can get object values for the manager object via constructor", () =>{
    expect(manager.name).toBe('Micheal Scott');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('Michael@dundermifflin.com');
    expect(manager.branchName).toBe('Scranton');
});

test('test if we can get the name from the getName() method', ()=> {
    expect(manager.getName()).toBe('Micheal Scott');
});

test('test if we can get the id from the getId() method', ()=> {
    expect(manager.getId()).toBe('1234');
});


test('test if we can get the email from the getEmail() method', ()=> {
    expect(manager.getEmail()).toBe('Michael@dundermifflin.com');
});

test('test if we can get the branchName from the getBranchName() method', ()=> {
    expect(manager.getBranchName()).toBe('Scranton');
});

test('test if we can get the role from the getRole() method', ()=> {
    expect(manager.getRole()).toBe('Manager');
});