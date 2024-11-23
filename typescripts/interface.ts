export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: User = { name: 'lokesh', id: 100, email: 'xyz@gmail.com' };

//object destructuring
let { name: userName, email: userLogin }: User = { name: "Lokesh", id: 100, email: "" };

interface Employees extends User {
    salary: number;
    designation: string;
}

let employee: Employees = { name: 'lokesh', id: 100, email: '', salary: 10000, designation: 'Software Engineer' };


//Array destructuring
let [user1, user2, ...rest]: User[] = [
    { name: "Lokesh", id: 100, email: "" },
    { name: "Lokesh1", id: 101, email: "" },
    { name: "Lokesh2", id: 102, email: "" }
];

console.log(user1);
console.log(user2);
console.log(rest);

let result = rest.filter((user) => user.id === 102);

console.log(result);

export interface Login {
    Login(): User;
}

