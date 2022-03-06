class Developer {
    constructor(username) {
        this.username = username
    }
}

let a="implementation"
class Tester {
    constructor(username) {
        this.username = username
    }
}


class EmployeeFactory {
   static map = {
        "developer": Developer,
        "tester":Tester,
    }

    static create(username,type) {
        return new this.map[type](username)
    }
}


const employees = [];

employees.push(EmployeeFactory.create("mahnaz", "developer"))
employees.push(EmployeeFactory.create("reihaneh", "developer"))
employees.push(EmployeeFactory.create("ali", "developer"))

employees.push(EmployeeFactory.create("sara", "tester"))
employees.push(EmployeeFactory.create("niloufar", "tester"))


employees.forEach((employee) => {
    console.log(employee);
});
