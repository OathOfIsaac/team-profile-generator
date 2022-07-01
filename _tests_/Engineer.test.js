const Engineer = require("../lib/Engineer");
const engineer = new Engineer('Isaac','78228','Isaacfgnzlz@gmail.com','OathOfIsaac');

test('Test if we can get object values from the constructor', () =>{
    expect(engineer.name).toBe("Isaac");
    expect(engineer.id).toBe('78228');
    expect(engineer.email).toBe('Isaacfgnzlz@gmail.com');
    expect(engineer.gitHubUser).toBe('OathOfIsaac');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Isaac');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('78228');

});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('Isaacfgnzlz@gmail.com');
});

test('test if we can get the Github Username from the getGitUser() method', () => {
    expect(engineer.getGitUser()).toBe('OathOfIsaac');
});



