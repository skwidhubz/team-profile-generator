// Import employee class
const Employee = require('../lib/Employee');

// test the class works 
test('a new employee object can be created from the class', () => {
    const employee = new Employee();
    expect(typeof employee).toBe('object')
})

// test we can add a name
test('a name can be added', () => {
    const name = 'Sisko';
    const employee = new Employee(name)
    expect(employee.name).toBe('Sisko')
})

// test we can add id 
test('an idd can be added', () => {
    const name = 'Sisko';
    const id = '69';
    const employee = new Employee(name, id)
    expect(employee.id).toBe(id)
})
// test we can add email
test('an email can be added', () => {
    const name = 'Sisko';
    const id = '69';
    const email = 'sisko@ds9.com'
    const employee = new Employee(name, id, email)
    expect(employee.email).toBe(email)
})

// test name method
test('name method gets getName', () => {
    const test = 'Sisko';
    const employee = new Employee(test)

    expect(employee.getName()).toBe(test)
})

// test id method
test('id method gets getId', () => {
    const test = 'Sisko';
    const id = '69';
    const employee = new Employee(test, id)

    expect(employee.getId()).toBe(id)
})

// test email method
test('email method gets getEmail', () => {
    const test = 'Sisko';
    const id = '69';
    const email = 'sisko@ds9.com'
    const employee = new Employee(test, id, email)

    expect(employee.getEmail()).toBe(email)
})