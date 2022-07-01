const Intern = require('../lib/Intern');
const intern = new Intern('Micheal Scott', '1234', 'Michael@dundermifflin.com', 'Scranton2022');

test("Test if we can get object values for the intern object via constructor", () =>{
    expect(intern.name).toBe('Micheal Scott');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('Michael@dundermifflin.com');
    expect(intern.classOf).toBe('Scranton2022');
});

test('test if we can get the name from the getName() method', ()=> {
    expect(intern.getName()).toBe('Micheal Scott');
});

test('test if we can get the id from the getId() method', ()=> {
    expect(intern.getId()).toBe('1234');
});


test('test if we can get the email from the getEmail() method', ()=> {
    expect(intern.getEmail()).toBe('Michael@dundermifflin.com');
});

test('test if we can get the classOf from the getClassOf() method', ()=> {
    expect(intern.getClassOf()).toBe('Scranton2022');
});

test('test if we can get the role from the getRole() method', ()=> {
    expect(intern.getRole()).toBe('Intern');
});