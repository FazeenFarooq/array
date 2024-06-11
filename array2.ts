
// Array Assignment Part(1)

// question#1
// 1. Define a type alias named Product to represent a product with the following
// properties:
// • name (string): The name of the product.
// • price (number): The price of the product.
// • inventory (object): An object containing inventory details including:
// • stock (number): The number of products available.
// • colorOptions (string[ ]): An array listing available colors.
// 2. Create an array named products containing at least three product objects. Each
// product object should include a name, price, and inventory details.

type Product = {
    name: string;
    price: number;
    inventory: {
      stock: number;
      colorOptions: string[];
    };
  };
  
  const products: Product[] = [
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

  function changeColor(product: Product, newColor: string): void {
    if (newColor === 'red') {
      product.price *= 1.1; // increase by 10%
    } else if (newColor === 'blue') {
      product.price *= 0.95; // decrease by 5%
    }
    product.inventory.colorOptions.push(newColor);
  }
  
  for (const product of products) {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Stock: ${product.inventory.stock}`);
    console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
  };
  
  
  // question#2
//   1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.
// 2. Create an array named students containing at least three student objects. Each student
// object should include a name and an array of grades.

  type Student = {
    name: string,
    grades: number[],
  }
  
  const students: Student[] = [
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

function calculateTheAverageGrade(grades: number[]): number {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
      sum += grades[i];
  }
  return sum / grades.length;
}
  
  for (const student of students) {
    const averageGrade = calculateTheAverageGrade(student.grades);
    console.log(`Name: ${student.name}`);
    console.log(`Average Grades: ${averageGrade.toFixed(2)}`);
  }
  
   // question#3
//   Part 3: Array with Types and Indexing - Employee Salaries

// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee
// object should include a name, hoursWorked, hourlyRate, and salary.

  type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
  };
  
  const employees: Employee[] = [
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

  function calculateSalary(employee: Employee): number {
    let totalSalary = employee.salary;
    const hoursBonus = employee.hoursWorked >= 20 ? 0.1 : 0;
    totalSalary += employee.hoursWorked * employee.hourlyRate * (1 + hoursBonus);
    return totalSalary;
  }
  
  for (const employee of employees) {
    const calculatedSalary = calculateSalary(employee);
    console.log(`Name: ${employee.name}`);
    console.log(`Calculated Salary: ${calculatedSalary.toFixed(2)}`);
  }
  
  
  


