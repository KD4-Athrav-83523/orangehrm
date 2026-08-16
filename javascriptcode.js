// Employee Management Demo

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    displayInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: ₹${this.salary}`);
        console.log("----------------------");
    }

    getAnnualSalary() {
        return this.salary * 12;
    }
}

const employees = [
    new Employee(101, "Atharva", "Testing", 45000),
    new Employee(102, "Rahul", "Development", 55000),
    new Employee(103, "Sneha", "HR", 40000),
    new Employee(104, "Amit", "Testing", 48000)
];

employees.forEach(employee => {
    employee.displayInfo();
    console.log(`Annual Salary: ₹${employee.getAnnualSalary()}`);
    console.log("======================");
});

const testingEmployees = employees.filter(
    employee => employee.department === "Testing"
);

console.log("Testing Department Employees:");

testingEmployees.forEach(employee => {
    console.log(employee.name);
});