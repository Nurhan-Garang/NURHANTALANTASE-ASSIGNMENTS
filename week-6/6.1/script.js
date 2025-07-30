function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return [...str].filter(char => vowels.includes(char)).length;
}

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === [...clean].reverse().join('');
}

function reverseWords(str) {
  return str.split(' ').map(word => [...word].reverse().join('')).join(' ');
}
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function generateFibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
function gradeCalculator(marks) {
  if (marks >= 80) return "A";
  if (marks >= 60) return "B";
  if (marks >= 40) return "C";
  return "F";
}

function daysUntilWeekend(day) {
  const daysMap = {
    Monday: 5,
    Tuesday: 4,
    Wednesday: 3,
    Thursday: 2,
    Friday: 1,
    Saturday: 0,
    Sunday: 6
  };
  return daysMap[day] ?? "Invalid day";
}
function createGreeting(time) {
  return function(name) {
    return `Good ${time}, ${name}`;
  };
}

// Example:
// const eveningGreet = createGreeting("evening");
// console.log(eveningGreet("Nooraya")); → "Good evening, Nooraya"

function calculator(operation) {
  return function(a, b) {
    switch (operation) {
      case "add": return a + b;
      case "subtract": return a - b;
      case "multiply": return a * b;
      case "divide": return b !== 0 ? a / b : "Cannot divide by zero";
      default: return "Invalid operation";
    }
  };
}
