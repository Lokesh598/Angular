"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_empId;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(empId, employeeName, address) {
        _Employee_empId.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_empId, empId, "f");
        this.employeeName = employeeName;
        this.address = address;
    }
    getEmployeeIdandName() {
        return `${__classPrivateFieldGet(this, _Employee_empId, "f")} and ${this.employeeName}`;
    }
    Login() {
        return { name: 'lokesh', id: 100, email: '' };
    }
}
_Employee_empId = new WeakMap();
let emp = new Employee(100, 'lokesh', {
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India'
});
// emp.empId = 100;
// emp.employeeName = 'lokesh';
console.log(emp.getEmployeeIdandName());
console.log(emp.Login());
class Manager extends Employee {
    constructor(empId, employeeName, address) {
        super(empId, employeeName, address);
    }
}
