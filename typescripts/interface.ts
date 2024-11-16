export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user : User = {name: 'lokesh', id: 100, email: 'xyz@gmail.com'};

interface Employees extends User {
    salary: number;
    designation: string;
}

let employee: Employees = {name: 'lokesh', id: 100, email: '', salary: 10000, designation: 'Software Engineer'};


export interface Login {
    Login() : User;
}