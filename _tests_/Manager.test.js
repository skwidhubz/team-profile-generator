// Import engineer class
const Manager = require('../lib/Manager');

// test the class works 
test('a new employee object can be created from the class', () => {
    const manager = new Manager();
    expect(typeof manager).toBe('object')
})

// test we can add a name
test('a name can be added', () => {
    const name = 'Tom';
    const manager = new Manager(name)
    expect(manager.name).toBe('Tom')
})

// test we can add id 
test('an idd can be added', () => {
    const name = 'Tom';
    const id = '555';
    const manager = new Manager(name, id)
    expect(manager.id).toBe(id)
})

// test we can add email
test('an email can be added', () => {
    const name = 'Tom';
    const id = '555';
    const email = 'tom@tom'
    const manager = new Manager(name, id, email)
    expect(manager.email).toBe(email)
})

// test we can add office number
test('office number can be added', () => {
    const name = 'Tom';
    const id = '555';
    const email = 'tom@tom'
    const officeNumber = '7'
    const manager = new Manager(name, id, email, officeNumber)
    expect(manager.officeNumber).toBe(officeNumber)
})

// test name method
test('name method gets getName', () => {
    const test = 'Tom';
    const manager = new Manager(test)

    expect(manager.getName()).toBe(test)
})

// test id method
test('id method gets getId', () => {
    const test = 'Tom';
    const id = '55';
    const manager = new Manager(test, id)

    expect(manager.getId()).toBe(id)
})

// test email method
test('email method gets getEmail', () => {
    const test = 'Tom';
    const id = '55';
    const email = 'tom@tom.com'
    const manager = new Manager(test, id, email)

    expect(manager.getEmail()).toBe(email)
})

// test office number method
test('office number method gets getOfficeNumber', () => {
    const test = 'Tom';
    const id = '55';
    const email = 'tom@tom.com'
    const officeNumber = '7'
    const manager = new Manager(test, id, email, officeNumber)

    expect(manager.getOfficeNumber()).toBe(officeNumber)
})