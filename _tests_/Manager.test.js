const MANAGER = require('../lib/Manager');

// test the class works

it("should be a manager class", () => {
    
    var testVar = "Manager Test"
    const managerTest = new Manager(testVar);

    expect(managerTest.value).toEqual("Manager Test")
})

// test to check info from Employee

// test to add office

