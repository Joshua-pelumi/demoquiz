// creating an array and pushing the nuber, questions, options, and answers

let questions = [
    {
        numb: 1,
        question: "What is the correct way to declare a JavaScript variable?",
        answer: "var myVar",
        options: [
            "var myVar",
            "myVar = 'value'; ",
            "variable myVar",
            "let myVar = 'value' "
        ]
    },

    {
        numb: 2,
        question: "What is the output of typeof null in JavaScript?",
        answer: "object",
        options: [
            "object",
            "null",
            "undefined",
            "string"
        ]
    },

    {
        numb: 3,
        question: "Which method converts a JavaScript object to a JSON string?",
        answer: "JSON.stringify()",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toObject()",
            "JSON.toString()"
        ]
    },

    {
        numb: 4,
        question: "Which of the following is not a valid JavaScript data type?",
        answer: "character",
        options: [
            "String",
            "Boolean",
            "Undefined",
            "Character"
        ]
    },

    {
        numb: 5,
        question: "What is the purpose of the Array.prototype.map() method?",
        answer: "To transform each element in an array into a new array",
        options: [
            "To modify an array in place",
            "To filter elements in an array",
            "To transform each element in an array into a new array",
            "To join multiple arrays"
        ]
    },

    {
        numb: 6,
        question: "How can you add a new element at the end of an array?",
        answer: "array.push(element);",
        options: [
            "array.push(element);",
            "array.append(element);",
            "array.insert(element);",
            "array.add(element);"
        ]
    },

    {
        numb: 7,
        question: "What is the correct syntax for a for loop in JavaScript?",
        answer: "for (i = 0; i < 5; i++) { }",
        options: [
            "for (i = 0; i < 5; i++) { }",
            "for (i = 0; i++) { }",
            "for (i <= 5; i++) { }",
            "for (i = 1 to 5) { }"
        ]
    },

    {
        numb: 8,
        question: "How do you declare a function in JavaScript?",
        answer: "function myFunction() { }",
        options: [
            "function myFunction() { }",
            "function: myFunction() { }",
            "def myFunction() { }",
            "function = myFunction() { }"
        ]
    },

    {
        numb: 9,
        question: "What will console.log(2 + '2') output?",
        answer: "22",
        options: [
            "22",
            "4",
            "NaN",
            "undefined"
        ]
    },

    {
        numb: 10,
        question: "Which of the following is used to check if a property exists in an object?",
        answer: "in",
        options: [
            "in",
            "exists",
            "has",
            "typeof"
        ]
    },

    {
        numb: 11,
        question: "Which method is used to remove the last element from an array?",
        answer: "pop()",
        options: [
            "removeLast()",
            "pop()",
            "deleteLast()",
            "splice()"
        ]
    },

    {
        numb: 12,
        question: "What does the this keyword refer to in a method?",
        answer: "The current object",
        options: [
            "The global object",
            "The current object",
            "The function itself",
            "The parent object"
        ]
    },

    {
        numb: 13,
        question: "How do you create a new promise in JavaScript?",
        answer: "new Promise();",
        options: [
            "new Promise();",
            "Promise.new();",
            "create Promise();",
            "Promise();"
        ]
    },

    {
        numb: 14,
        question: "Which of these is a selfinvoking function?",
        answer: "(function() { })();",
        options: [
            "(function() { })()",
            "function() { }()",
            "function selfInvoke() { }()",
            "()function() { }();"
        ]
    },

    {
        numb: 15,
        question: "What is the output of console.log(2 == '2')?",
        answer: "true",
        options: [
            "true",
            "false",
            "NaN",
            "undefined"
        ]
    },

    {
        numb: 16,
        question: "How do you convert a string to a number in JavaScript?",
        answer: "Number()",
        options: [
            "Number.parse()",
            " Number()",
            "parseNumber()",
            "String.toNumber()"
        ]
    },

    {
        numb: 17,
        question: "Which method is used to merge two or more arrays?",
        answer: "concat()",
        options: [
            "concat()",
            "join()",
            "merge()",
            "add()"
        ]
    },

    {
        numb: 18,
        question: "How do you prevent a form from submitting in JavaScript?",
        answer: "event.preventDefault();",
        options: [
            "return false;",
            "event.preventDefault();",
            "event.stop();",
            "form.prevent();"
        ]
    },

    {
        numb: 19,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "...",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    
    {
        numb: 20,
        question: "What does JSON.parse() do?",
        answer: "Converts a JSON string to a JavaScript object",
        options: [
            "Converts a JSON string to a JavaScript object",
            "Converts a JavaScript object to a JSON string",
            " Parses an XML document",
            "Parses a string into an integer"
        ]
    },

    {
        numb: 21,
        question: "How do you access the first element in an array?",
        answer: "array[0]",
        options: [
            "array.first()",
            "array[0]",
            "array(0)",
            "array[1]"
        ]
    },

    {
        numb: 22,
        question: " What is the correct way to create an object in JavaScript?",
        answer: "let obj = {};",
        options: [
            "let obj = {};",
            " let obj = [];",
            "let obj = ();",
            "let obj = new();"
        ]
    },

    {
        numb: 23,
        question: "Which keyword is used to define a constant in JavaScript?",
        answer: "const",
        options: [
            "const",
            "let",
            "var",
            "constant"
        ]
    },

    {
        numb: 24,
        question: "How do you remove a specific element from an array by value?",
        answer: "array.splice(array.indexOf(value), 1);",
        options: [
            "array.delete(value);",
            "array.remove(value);",
            "array.splice(array.indexOf(value), 1);",
            "array.cut(value);"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },

    {
        numb: 25,
        question: "Which operator is used to spread an array into individual elements?",
        answer: "array.push(element);",
        options: [
            "...",
            " []",
            " {}",
            " @"
        ]
    },
];