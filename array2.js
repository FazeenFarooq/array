// Array Assignment Part(1)
var products = [
    {
        name: 'Product 1',
        price: 100,
        inventory: {
            stock: 10,
            colorOptions: ['red', 'blue', 'green'],
        },
    },
    {
        name: 'Product 2',
        price: 200,
        inventory: {
            stock: 20,
            colorOptions: ['red', 'blue'],
        },
    },
    {
        name: 'Product 3',
        price: 300,
        inventory: {
            stock: 30,
            colorOptions: ['green', 'blue'],
        },
    },
];
// 3. Implement a function named changeColor that takes a product object and a new
// color as input. This function should update the color property of the product and
// adjust the price based on the new color (implement your own logic, e.g., increase by
// 10% for red, decrease by 5% for blue).
// 4. Display each product's name, price, stock, and available colors. Iterate through the
// products array and print each product's details.
function changeColor(product, newColor) {
    if (newColor === 'red') {
        product.price *= 1.1; // increase by 10%
    }
    else if (newColor === 'blue') {
        product.price *= 0.95; // decrease by 5%
    }
    product.inventory.colorOptions.push(newColor);
}
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    console.log("Name: ".concat(product.name));
    console.log("Price: ".concat(product.price));
    console.log("Stock: ".concat(product.inventory.stock));
    console.log("Available Colors: ".concat(product.inventory.colorOptions.join(', ')));
}
;
var students = [
    {
        name: "Fazeen Farooq",
        grades: [95, 85, 89]
    },
    {
        name: "Anila ",
        grades: [90, 89, 80]
    },
    {
        name: "Shifa Siddique",
        grades: [92, 85, 86]
    },
];
// 3. Implement a function named calculateAverageGrade that takes a student's grades as
// input and returns the average grade for that student.
// 4. Display each student's name and average grade. Iterate through the students array,
// calculate the average grade for each student using the calculateAverageGrade
// function, and print their name and average grade.
function calculateTheAverageGrade(grades) {
    var sum = 0;
    for (var i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}
for (var _a = 0, students_1 = students; _a < students_1.length; _a++) {
    var student = students_1[_a];
    var averageGrade = calculateTheAverageGrade(student.grades);
    console.log("Name: ".concat(student.name));
    console.log("Average Grades: ".concat(averageGrade.toFixed(2)));
}
var employees = [
    {
        name: 'Anila',
        hoursWorked: 20,
        hourlyRate: 25,
        salary: 5500,
    },
    {
        name: 'Fazeen',
        hoursWorked: 30,
        hourlyRate: 30,
        salary: 6500,
    },
    {
        name: 'Shifa',
        hoursWorked: 15,
        hourlyRate: 35,
        salary: 8000,
    },
];
// 3. Implement a function named calculateSalary that calculates the salary for each
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
function calculateSalary(employee) {
    var totalSalary = employee.salary;
    var hoursBonus = employee.hoursWorked >= 20 ? 0.1 : 0;
    totalSalary += employee.hoursWorked * employee.hourlyRate * (1 + hoursBonus);
    return totalSalary;
}
for (var _b = 0, employees_1 = employees; _b < employees_1.length; _b++) {
    var employee = employees_1[_b];
    var calculatedSalary = calculateSalary(employee);
    console.log("Name: ".concat(employee.name));
    console.log("Calculated Salary: ".concat(calculatedSalary.toFixed(2)));
}
