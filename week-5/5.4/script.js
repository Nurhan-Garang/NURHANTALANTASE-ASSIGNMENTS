
function calculate(a, b) {
  console.log("Addition:", a + b);        
  console.log("Subtraction:", a - b);      
  console.log("Multiplication:", a * b);  
  console.log("Division:", a / b);         
  console.log("Modulus:", a % b);          
  console.log("Exponentiation:", a ** b);  
}
calculate(10, 2);


let x = 5;
x += 3; console.log("x += 3:", x); // 8
x -= 2; console.log("x -= 2:", x); // 6
x *= 2; console.log("x *= 2:", x); // 12
x /= 4; console.log("x /= 4:", x); // 3
x %= 2; console.log("x %= 2:", x); // 1


function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log(checkAge(20)); 

console.log("Using == :", "18" == 18);   
console.log("Using === :", "18" === 18); 

rs
function login(username, password) {
  if (!username) {
    return "Username cannot be empty";
  }

  if ((username === "admin" && password === "1234") || username === "guest") {
    return "Login successful";
  } else {
    return "Login failed";
  }
}
console.log(login("admin", "1234"));l
console.log(login("", "1234"));      
console.log(login("guest", ""));    


let str1 = "Hello";
let str2 = "World";
let resultStr = str1 + " " + str2;
console.log(resultStr); 
let firstName = "John";
let greeting = "Hi, " + firstName + "!";
console.log(greeting); 


function checkNumber(num) {
  return (num % 2 === 0) ? "Even" : "Odd";
}
console.log(checkNumber(7));


console.log(typeof 42);         
console.log(typeof "hello");    
console.log(typeof true);       
console.log(typeof { name: "A" }); 
console.log(typeof function () {}); 

class Animal {}
let dog = new Animal();
console.log(dog instanceof Animal); 

// Part 8: 
let a = 5;  
let b = 3;  

console.log("a & b:", a & b); 
console.log("a | b:", a | b); 


let result = 10 + 5 * 2;
console.log(result); 

let corrected = (10 + 5) * 2;
console.log(corrected);
