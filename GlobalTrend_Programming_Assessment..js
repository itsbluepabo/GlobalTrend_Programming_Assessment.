/*
Task 1: Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
*/
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
}

// Example usage
fizzBuzz();


/*
Task 2: Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.
*/
function evaluateExpression(expression) {
    return expression.split(/(?=[-+])/)
        .reduce((acc, curr) => acc + Number(curr), 0);
}

// Example usage
console.log(evaluateExpression("3+5-2+8")); // Outputs: 14


/*
Task 3: Write a function that takes a nested array and returns a flattened array.
*/
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

// Example usage
console.log(flattenArray([1, [2, [3, [4, 5]]]])); // Outputs: [1, 2, 3, 4, 5]


/*
Task 4: Write a function that checks if two given strings are anagrams of each other.
*/
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// Example usage
console.log(areAnagrams('listen', 'silent')); // Outputs: true


/*
Task 5: Write a function that takes an array and returns a new array with duplicates removed.
*/
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Outputs: [1, 2, 3, 4, 5]


/*
Task 6: Write a function that takes a string and capitalizes the first letter of each word in the string.
*/
function capitalizeFirstLetter(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

// Example usage
console.log(capitalizeFirstLetter('hello world')); // Outputs: Hello World


/*
Task 7: Write a function that generates the first n numbers of the Fibonacci sequence.
*/
function generateFibonacci(n) {
    if (n <= 0) return [];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

// Example usage
console.log(generateFibonacci(10)); // Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


/*
Task 8: Implement a simple HashMap class with put, get, and remove methods.
*/
class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}

// Example usage
const hashMap = new HashMap();
hashMap.put('key1', 'value1');
console.log(hashMap.get('key1')); // Outputs: value1
hashMap.remove('key1');
console.log(hashMap.get('key1')); // Outputs: undefined


/*
Task 9: Write a function that filters out even numbers from an array.
*/
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Example usage
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Outputs: [1, 3, 5]


/*
Task 10: Write a function that converts a given string to title case (capitalizing the first letter of each word).
*/
function toTitleCase(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

// Example usage
console.log(toTitleCase('hello world from javascript')); // Outputs: Hello World From Javascript



