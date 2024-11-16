
// import { Login, User } from './interface';

import * as LoginUser from './interface';

interface Address {
    city: string;
    state: string;
    country: string;
}

class Employee implements LoginUser.Login {
    #empId : number;
    employeeName : string;
    address : Address;

    constructor(empId: number, employeeName: string, address: Address) {
        this.#empId = empId;
        this.employeeName = employeeName;
        this.address = address;
    }

    getEmployeeIdandName() : string {
        return `${this.#empId} and ${this.employeeName}`;
    }

    Login(): LoginUser.User {
        return {name: 'lokesh', id: 100, email: ''};
    }
}

let emp = new Employee(100, 'lokesh' , {
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India'
});

// emp.empId = 100;
// emp.employeeName = 'lokesh';

console.log(emp.getEmployeeIdandName());

console.log(emp.Login());

class Manager extends Employee {
    constructor(empId: number, employeeName: string, address: Address) {
        super(empId, employeeName, address);
    }
}