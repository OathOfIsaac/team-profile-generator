const Employee = require("../lib/Employee");
const employee = new Employee("Isaac", "78228", "isaacfgnzlz@gmail.com" );

test("Test to get object values for the employee constructor", () => {
    expect(employee.name).toBe("Isaac");
    expect(employee.id).toBe("78228");
    expect(employee.email).toBe("isaacfgnzlz@gmail.com");
});

test('Test if we get name value from the getName() method', () => {
    expect(employee.getName()).toBe('Isaac');
});

test('Test if we get Id value from the getId() method', () => {
    expect(employee.getId()).toBe('78228');
});

test('Test if we get email value from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('isaacfgnzlz@gmail.com');
});

test('Test if we get role value from the getRole method', () => {
    expect(employee.getRole()).toBe('Employee');
});
