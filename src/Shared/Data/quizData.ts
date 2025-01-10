export interface Category {
  id: string;
  name: string;
  description: string;
  questions: {
    id: string;
    question: string;
    choices: string[];
    correctAnswer: string;
  }[];
}

export const quizData: Category[] = [
  {
    id: "1",
    name: "Programming",
    description: "Test your knowledge of core programming concepts.",
    questions: [
      {
        id: "1",
        question: "What is the difference between a stack and a queue?",
        choices: [
          "Stack is FIFO, Queue is LIFO",
          "Stack is LIFO, Queue is FIFO",
          "Both are FIFO",
          "Both are LIFO",
        ],
        correctAnswer: "Stack is LIFO, Queue is FIFO",
      },
      {
        id: "2",
        question:
          "What is the time complexity of accessing an element in an array by index?",
        choices: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctAnswer: "O(1)",
      },
      {
        id: "3",
        question:
          "Which of the following is not a valid data type in JavaScript?",
        choices: ["undefined", "number", "float", "object"],
        correctAnswer: "float",
      },
      {
        id: "4",
        question: "What does the 'this' keyword refer to in JavaScript?",
        choices: [
          "The current object",
          "The previous function",
          "Global scope",
          "Function arguments",
        ],
        correctAnswer: "The current object",
      },
      {
        id: "5",
        question:
          "Which sorting algorithm has the best time complexity in the average case?",
        choices: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort"],
        correctAnswer: "Merge Sort",
      },
      {
        id: "6",
        question:
          "Which of the following is an example of a statically-typed language?",
        choices: ["JavaScript", "Python", "Java", "Ruby"],
        correctAnswer: "Java",
      },
      {
        id: "7",
        question: "What is the purpose of the 'final' keyword in Java?",
        choices: [
          "To make a variable constant",
          "To declare a method as abstract",
          "To define a static class",
          "To restrict inheritance",
        ],
        correctAnswer: "To restrict inheritance",
      },
      {
        id: "8",
        question: "What is a deadlock in a multithreaded program?",
        choices: [
          "A thread is blocked indefinitely",
          "A thread runs faster than expected",
          "A thread cannot be paused",
          "A thread consumes too much memory",
        ],
        correctAnswer: "A thread is blocked indefinitely",
      },
      {
        id: "9",
        question:
          "Which of the following algorithms is used to find the shortest path in a graph?",
        choices: [
          "Dijkstra's Algorithm",
          "Kruskal's Algorithm",
          "Prim's Algorithm",
          "Breadth-First Search",
        ],
        correctAnswer: "Dijkstra's Algorithm",
      },
      {
        id: "10",
        question: "What is the time complexity of a binary search algorithm?",
        choices: ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
        correctAnswer: "O(log n)",
      },
      {
        id: "11",
        question:
          "Which data structure is best for implementing a priority queue?",
        choices: ["Stack", "Queue", "Heap", "Linked List"],
        correctAnswer: "Heap",
      },
      {
        id: "12",
        question:
          "What is the difference between '==' and '===' in JavaScript?",
        choices: [
          "'==' compares values, '===' compares type and value",
          "'==' compares type and value, '===' compares only values",
          "'==' is used for comparison, '===' is used for assignment",
          "'==' and '===' are identical",
        ],
        correctAnswer: "'==' compares values, '===' compares type and value",
      },
      {
        id: "13",
        question:
          "In object-oriented programming, what does inheritance allow?",
        choices: [
          "It allows methods to be overridden",
          "It allows classes to inherit properties and methods from other classes",
          "It allows multiple classes to be combined into one",
          "It allows objects to communicate with each other",
        ],
        correctAnswer:
          "It allows classes to inherit properties and methods from other classes",
      },
      {
        id: "14",
        question:
          "Which of the following is a feature of functional programming?",
        choices: [
          "Mutability",
          "Side effects",
          "First-class functions",
          "Inheritance",
        ],
        correctAnswer: "First-class functions",
      },
      {
        id: "15",
        question: "What is the purpose of the 'try-catch' block in JavaScript?",
        choices: [
          "To define a function",
          "To handle exceptions",
          "To define loops",
          "To import modules",
        ],
        correctAnswer: "To handle exceptions",
      },
      {
        id: "16",
        question:
          "What is the difference between a shallow copy and a deep copy?",
        choices: [
          "Shallow copy copies references, deep copy copies actual values",
          "Shallow copy is used in arrays, deep copy is used in objects",
          "There is no difference",
          "Shallow copy copies all properties, deep copy does not",
        ],
        correctAnswer:
          "Shallow copy copies references, deep copy copies actual values",
      },
      {
        id: "17",
        question:
          "Which of the following is an example of a non-primitive data type in JavaScript?",
        choices: ["String", "Number", "Boolean", "Object"],
        correctAnswer: "Object",
      },
      {
        id: "18",
        question:
          "What is the purpose of a constructor in object-oriented programming?",
        choices: [
          "To initialize object properties",
          "To define object methods",
          "To access object properties",
          "To handle exceptions",
        ],
        correctAnswer: "To initialize object properties",
      },
      {
        id: "19",
        question:
          "Which of the following is the correct syntax to define a function in JavaScript?",
        choices: [
          "function myFunction() {}",
          "def myFunction() {}",
          "func myFunction() {}",
          "create function myFunction() {}",
        ],
        correctAnswer: "function myFunction() {}",
      },
      {
        id: "20",
        question: "What is the time complexity of the bubble sort algorithm?",
        choices: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        correctAnswer: "O(n^2)",
      },
      {
        id: "21",
        question: "Which of the following is not a type of join in SQL?",
        choices: ["Inner Join", "Outer Join", "Left Join", "Top Join"],
        correctAnswer: "Top Join",
      },
      {
        id: "22",
        question: "What is a closure in JavaScript?",
        choices: [
          "A function inside another function that can access the outer function's variables",
          "A variable that is passed into a function",
          "A type of object",
          "A method to escape scope",
        ],
        correctAnswer:
          "A function inside another function that can access the outer function's variables",
      },
      {
        id: "23",
        question: "Which of the following is not a valid HTTP status code?",
        choices: [
          "200 OK",
          "404 Not Found",
          "500 Internal Server Error",
          "600 Bad Request",
        ],
        correctAnswer: "600 Bad Request",
      },
      {
        id: "24",
        question:
          "Which sorting algorithm has the best average time complexity?",
        choices: ["Bubble Sort", "Merge Sort", "Selection Sort", "Quick Sort"],
        correctAnswer: "Merge Sort",
      },
      {
        id: "25",
        question: "Which of the following is a feature of a NoSQL database?",
        choices: [
          "Structured data",
          "SQL queries",
          "Schema-less design",
          "Relational tables",
        ],
        correctAnswer: "Schema-less design",
      },
      {
        id: "26",
        question:
          "What is the primary benefit of using version control systems like Git?",
        choices: [
          "To track code changes and collaborate with others",
          "To create backups of code",
          "To increase code execution speed",
          "To encrypt code",
        ],
        correctAnswer: "To track code changes and collaborate with others",
      },
      {
        id: "27",
        question:
          "What is the purpose of an interface in object-oriented programming?",
        choices: [
          "To define abstract methods that can be implemented by classes",
          "To define the properties of an object",
          "To restrict the access of classes",
          "To inherit methods from other classes",
        ],
        correctAnswer:
          "To define abstract methods that can be implemented by classes",
      },
      {
        id: "28",
        question: "Which of the following is not a common data structure?",
        choices: ["Array", "Tree", "Queue", "Function"],
        correctAnswer: "Function",
      },
      {
        id: "29",
        question:
          "What is the time complexity of accessing a value in a hash map?",
        choices: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctAnswer: "O(1)",
      },
      {
        id: "30",
        question:
          "What does the 'finally' block in JavaScript do in a try-catch statement?",
        choices: [
          "It executes code regardless of whether an exception is thrown",
          "It handles the error",
          "It returns the value",
          "It executes code when no error occurs",
        ],
        correctAnswer:
          "It executes code regardless of whether an exception is thrown",
      },
      {
        id: "31",
        question:
          "Which of the following is used to define an anonymous function in JavaScript?",
        choices: [
          "function() {}",
          "const x = () => {}",
          "def() {}",
          "func() {}",
        ],
        correctAnswer: "const x = () => {}",
      },
      {
        id: "32",
        question: "What is the primary difference between JavaScript and Java?",
        choices: [
          "JavaScript is a programming language, Java is a markup language",
          "JavaScript is interpreted, Java is compiled",
          "Java is a client-side language, JavaScript is server-side",
          "JavaScript is used for system programming, Java for web development",
        ],
        correctAnswer: "JavaScript is interpreted, Java is compiled",
      },
      {
        id: "33",
        question:
          "Which of the following is a way to prevent memory leaks in JavaScript?",
        choices: [
          "Avoid using global variables",
          "Use the garbage collector frequently",
          "Avoid using JavaScript",
          "Only use local variables",
        ],
        correctAnswer: "Avoid using global variables",
      },
      {
        id: "34",
        question: "What is the use of the 'super' keyword in JavaScript?",
        choices: [
          "It calls a parent class's constructor or method",
          "It defines a class method",
          "It initializes a variable",
          "It extends a class",
        ],
        correctAnswer: "It calls a parent class's constructor or method",
      },
      {
        id: "35",
        question:
          "Which of the following is the correct way to create an object in JavaScript?",
        choices: [
          "const obj = {}",
          "const obj = new Object()",
          "const obj = object{}",
          "Both A and B",
        ],
        correctAnswer: "Both A and B",
      },
      {
        id: "36",
        question: "What is the purpose of the 'map' function in JavaScript?",
        choices: [
          "To iterate over an array and return a new array",
          "To filter out elements from an array",
          "To sort the elements of an array",
          "To find the maximum element in an array",
        ],
        correctAnswer: "To iterate over an array and return a new array",
      },
      {
        id: "37",
        question: "What is an example of a mutable data type in JavaScript?",
        choices: ["String", "Array", "Number", "Boolean"],
        correctAnswer: "Array",
      },
      {
        id: "38",
        question:
          "Which method can be used to add an element to the beginning of an array in JavaScript?",
        choices: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "unshift()",
      },
      {
        id: "39",
        question: "What is the purpose of a 'promise' in JavaScript?",
        choices: [
          "To execute a function asynchronously",
          "To handle asynchronous operations",
          "To define a function",
          "To return a value from a function",
        ],
        correctAnswer: "To handle asynchronous operations",
      },
      {
        id: "40",
        question: "Which of the following is true about recursion?",
        choices: [
          "It is the process of calling a function within itself",
          "It always runs indefinitely",
          "It cannot be used with functions",
          "It is an iterative process",
        ],
        correctAnswer: "It is the process of calling a function within itself",
      },
      {
        id: "41",
        question:
          "What is the default value of a variable declared with 'let' in JavaScript?",
        choices: ["null", "undefined", "0", "false"],
        correctAnswer: "undefined",
      },
      {
        id: "42",
        question: "What is the purpose of the 'filter' function in JavaScript?",
        choices: [
          "To remove elements from an array",
          "To create a new array with elements that meet a condition",
          "To merge arrays",
          "To find the sum of elements in an array",
        ],
        correctAnswer:
          "To create a new array with elements that meet a condition",
      },
      {
        id: "43",
        question: "What is the purpose of the 'splice' method in JavaScript?",
        choices: [
          "To add or remove elements from an array",
          "To sort elements of an array",
          "To join two arrays",
          "To find the index of an element",
        ],
        correctAnswer: "To add or remove elements from an array",
      },
      {
        id: "44",
        question:
          "What is the main difference between a class and an interface in TypeScript?",
        choices: [
          "A class can implement an interface, but an interface cannot implement a class",
          "An interface is used for inheritance",
          "A class cannot have methods",
          "An interface can contain implementations",
        ],
        correctAnswer:
          "A class can implement an interface, but an interface cannot implement a class",
      },
      {
        id: "45",
        question: "What does the 'map' function in JavaScript return?",
        choices: [
          "A new array",
          "A single value",
          "A Boolean value",
          "A string",
        ],
        correctAnswer: "A new array",
      },
      {
        id: "46",
        question: "What is the use of the 'static' keyword in Java?",
        choices: [
          "To define a method that can be invoked without creating an instance of the class",
          "To define a class",
          "To declare a constant",
          "To create a private method",
        ],
        correctAnswer:
          "To define a method that can be invoked without creating an instance of the class",
      },
      {
        id: "47",
        question:
          "Which of the following is true about arrow functions in JavaScript?",
        choices: [
          "They inherit 'this' from the surrounding context",
          "They create a new 'this' context",
          "They are always asynchronous",
          "They cannot be used with 'new' keyword",
        ],
        correctAnswer: "They inherit 'this' from the surrounding context",
      },
      {
        id: "48",
        question:
          "Which of the following is not a basic concept of object-oriented programming?",
        choices: ["Inheritance", "Encapsulation", "Abstraction", "Iteration"],
        correctAnswer: "Iteration",
      },
      {
        id: "49",
        question: "What is the purpose of the 'await' keyword in JavaScript?",
        choices: [
          "To pause the execution of an asynchronous function until the promise is resolved",
          "To declare an asynchronous function",
          "To wait for a user input",
          "To handle errors",
        ],
        correctAnswer:
          "To pause the execution of an asynchronous function until the promise is resolved",
      },
      {
        id: "50",
        question:
          "Which of the following is true about closures in JavaScript?",
        choices: [
          "Closures have access to variables in their own scope and the outer scope",
          "Closures can only access global variables",
          "Closures cannot be used inside functions",
          "Closures cannot store values",
        ],
        correctAnswer:
          "Closures have access to variables in their own scope and the outer scope",
      },
    ],
  },
  {
    id: "2",
    name: "Frontend",
    description: "Assess your understanding of HTML, CSS, JavaScript,",
    questions: [
      {
        id: "1",
        question:
          "What is the difference between block-level and inline elements in HTML?",
        choices: [
          "Block-level elements take up the full width, inline elements take up only as much width as necessary",
          "Block-level elements are visible, inline elements are invisible",
          "Block-level elements can't contain other elements, inline elements can",
          "Inline elements cannot have padding or margins",
        ],
        correctAnswer:
          "Block-level elements take up the full width, inline elements take up only as much width as necessary",
      },
      {
        id: "2",
        question: "What does the 'box-sizing' CSS property do?",
        choices: [
          "It specifies the layout model used by the browser",
          "It changes the content of a box",
          "It adjusts how the width and height of an element are calculated",
          "It changes the color of the box",
        ],
        correctAnswer:
          "It adjusts how the width and height of an element are calculated",
      },
      {
        id: "3",
        question:
          "What is the purpose of the 'alt' attribute in the <img> tag in HTML?",
        choices: [
          "It provides an alternative text for users with visual impairments",
          "It changes the source of the image",
          "It adds a title to the image",
          "It displays a caption under the image",
        ],
        correctAnswer:
          "It provides an alternative text for users with visual impairments",
      },
      {
        id: "4",
        question: "What is the difference between 'id' and 'class' in HTML?",
        choices: [
          "'id' is used for unique elements, while 'class' can be applied to multiple elements",
          "'id' can be reused, while 'class' cannot",
          "'class' is for styling, and 'id' is for scripting only",
          "'id' is used for form elements, and 'class' is for images",
        ],
        correctAnswer:
          "'id' is used for unique elements, while 'class' can be applied to multiple elements",
      },
      {
        id: "5",
        question: "How can you make a webpage responsive?",
        choices: [
          "By using relative units like %, em, or vw",
          "By using a fixed width for elements",
          "By using a large resolution image",
          "By using JavaScript to change layout dynamically",
        ],
        correctAnswer: "By using relative units like %, em, or vw",
      },
      {
        id: "6",
        question: "What is the 'z-index' CSS property used for?",
        choices: [
          "It controls the stacking order of elements",
          "It controls the font size",
          "It controls the padding of an element",
          "It changes the background color of elements",
        ],
        correctAnswer: "It controls the stacking order of elements",
      },
      {
        id: "7",
        question: "How do you apply a CSS class to an HTML element?",
        choices: [
          "<element class='class-name'>",
          "<element style='class-name'>",
          "<element name='class-name'>",
          "<element id='class-name'>",
        ],
        correctAnswer: "<element class='class-name'>",
      },
      {
        id: "8",
        question: "What is the purpose of the 'flexbox' layout model in CSS?",
        choices: [
          "It is used to align elements within a container",
          "It defines how elements should be positioned inside an iframe",
          "It is used to create animations",
          "It is used to create grid-based layouts",
        ],
        correctAnswer: "It is used to align elements within a container",
      },
      {
        id: "9",
        question: "What is the 'display: none' CSS property?",
        choices: [
          "It hides an element and removes it from the document flow",
          "It hides an element but keeps it in the document flow",
          "It adds an element to the document",
          "It makes an element visible",
        ],
        correctAnswer:
          "It hides an element and removes it from the document flow",
      },
      {
        id: "10",
        question:
          "What is the difference between 'visibility: hidden' and 'display: none'?",
        choices: [
          "'visibility: hidden' hides the element but retains space, 'display: none' hides the element and removes its space",
          "'visibility: hidden' hides the element and removes its space, 'display: none' keeps it visible",
          "There is no difference",
          "'display: none' is used for layout, 'visibility: hidden' is for animation",
        ],
        correctAnswer:
          "'visibility: hidden' hides the element but retains space, 'display: none' hides the element and removes its space",
      },
      {
        id: "11",
        question: "What is the 'position: absolute' CSS property?",
        choices: [
          "It positions an element relative to its nearest positioned ancestor",
          "It positions an element relative to the page's top-left corner",
          "It positions an element within a grid",
          "It makes an element visible on scroll",
        ],
        correctAnswer:
          "It positions an element relative to its nearest positioned ancestor",
      },
      {
        id: "12",
        question: "What does the 'localStorage' API do in JavaScript?",
        choices: [
          "It stores data for the duration of the page session",
          "It stores data permanently in the user's browser",
          "It stores data in a remote server",
          "It stores large data temporarily",
        ],
        correctAnswer: "It stores data permanently in the user's browser",
      },
      {
        id: "13",
        question:
          "What is the difference between 'let' and 'const' in JavaScript?",
        choices: [
          "'let' allows reassignment, 'const' does not",
          "'const' allows reassignment, 'let' does not",
          "'let' and 'const' are identical",
          "'const' is used for variables that need to be redeclared",
        ],
        correctAnswer: "'let' allows reassignment, 'const' does not",
      },
      {
        id: "14",
        question:
          "How can you check if an element exists in the DOM using JavaScript?",
        choices: [
          "Using 'document.getElementById()'",
          "Using 'document.getElementsByClassName()'",
          "Using 'document.querySelector()'",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        id: "15",
        question: "What does 'event.preventDefault()' do in JavaScript?",
        choices: [
          "It stops the default behavior of an event",
          "It stops the event from being propagated",
          "It stops the event from being fired",
          "It stops the event handler from executing",
        ],
        correctAnswer: "It stops the default behavior of an event",
      },
      {
        id: "16",
        question: "What is the purpose of 'async' and 'await' in JavaScript?",
        choices: [
          "To handle asynchronous code in a more readable way",
          "To create synchronous functions",
          "To make a function return a promise",
          "To execute a function after a delay",
        ],
        correctAnswer: "To handle asynchronous code in a more readable way",
      },
      {
        id: "17",
        question: "What is the 'box model' in CSS?",
        choices: [
          "The box model defines the structure of an element's padding, border, margin, and content",
          "The box model is used to create CSS animations",
          "The box model is a method to add content to an element",
          "The box model defines the width and height of an element",
        ],
        correctAnswer:
          "The box model defines the structure of an element's padding, border, margin, and content",
      },
      {
        id: "18",
        question: "How do you create a responsive layout in CSS?",
        choices: [
          "By using media queries",
          "By using the 'position' property",
          "By using a fixed width",
          "By using JavaScript to adjust layout dynamically",
        ],
        correctAnswer: "By using media queries",
      },
      {
        id: "19",
        question: "What is the purpose of the 'data-*' attribute in HTML?",
        choices: [
          "To store custom data on elements",
          "To style elements",
          "To store element IDs",
          "To store event listeners",
        ],
        correctAnswer: "To store custom data on elements",
      },
      {
        id: "20",
        question: "What is the 'DOMContentLoaded' event in JavaScript?",
        choices: [
          "It is fired when the document's initial HTML is completely loaded and parsed",
          "It is fired when the document is fully loaded including all images and styles",
          "It is fired when a button is clicked",
          "It is fired when an error occurs in the DOM",
        ],
        correctAnswer:
          "It is fired when the document's initial HTML is completely loaded and parsed",
      },
      {
        id: "21",
        question: "What is the 'use strict' directive in JavaScript?",
        choices: [
          "It enforces stricter parsing and error handling in JavaScript",
          "It allows using undeclared variables",
          "It enables legacy JavaScript features",
          "It is used to declare constants",
        ],
        correctAnswer:
          "It enforces stricter parsing and error handling in JavaScript",
      },
      {
        id: "22",
        question: "What is the purpose of the 'transform' property in CSS?",
        choices: [
          "It applies transformations such as rotate, scale, and translate",
          "It changes the font of an element",
          "It defines the layout of an element",
          "It animates elements",
        ],
        correctAnswer:
          "It applies transformations such as rotate, scale, and translate",
      },
      {
        id: "23",
        question: "What is 'AJAX' in JavaScript?",
        choices: [
          "Asynchronous JavaScript and XML, used for making asynchronous requests to a server",
          "A JavaScript library",
          "A JavaScript function to modify DOM elements",
          "A data format used in JavaScript",
        ],
        correctAnswer:
          "Asynchronous JavaScript and XML, used for making asynchronous requests to a server",
      },
      {
        id: "24",
        question: "What does the 'this' keyword refer to in JavaScript?",
        choices: [
          "It refers to the current object",
          "It refers to the window object",
          "It refers to the parent function",
          "It refers to the document object",
        ],
        correctAnswer: "It refers to the current object",
      },
      {
        id: "25",
        question: "What is 'Event Bubbling' in JavaScript?",
        choices: [
          "It is the process where events propagate from child elements to the parent elements",
          "It is a form of event delegation",
          "It is a method to cancel events",
          "It is the process of stopping event propagation",
        ],
        correctAnswer:
          "It is the process where events propagate from child elements to the parent elements",
      },
      {
        id: "26",
        question: "What is the purpose of 'CSS Grid'?",
        choices: [
          "It is a 2D layout system for creating complex grid-based layouts",
          "It is a layout system for organizing elements in rows",
          "It is used for responsive web design",
          "It is used for controlling font sizes",
        ],
        correctAnswer:
          "It is a 2D layout system for creating complex grid-based layouts",
      },
      {
        id: "27",
        question: "How do you center a div in CSS?",
        choices: [
          "By using 'margin: auto'",
          "By using 'text-align: center'",
          "By using 'position: absolute'",
          "By using 'float: center'",
        ],
        correctAnswer: "By using 'margin: auto'",
      },
      {
        id: "28",
        question: "What is the purpose of 'console.log()' in JavaScript?",
        choices: [
          "It logs information to the console for debugging purposes",
          "It creates an alert box",
          "It triggers an event listener",
          "It outputs a prompt message to the user",
        ],
        correctAnswer:
          "It logs information to the console for debugging purposes",
      },
      {
        id: "29",
        question: "What is 'defer' in the <script> tag?",
        choices: [
          "It defers the execution of the script until the HTML document is fully loaded",
          "It loads the script asynchronously",
          "It loads the script synchronously",
          "It makes the script execute immediately",
        ],
        correctAnswer:
          "It defers the execution of the script until the HTML document is fully loaded",
      },
      {
        id: "30",
        question: "What is 'localStorage' used for in JavaScript?",
        choices: [
          "It stores data in the browser with no expiration time",
          "It stores data on the server",
          "It stores data temporarily",
          "It stores data in a database",
        ],
        correctAnswer: "It stores data in the browser with no expiration time",
      },
      {
        id: "31",
        question: "How do you make a form element in HTML required?",
        choices: [
          "By adding the 'required' attribute",
          "By adding the 'validate' attribute",
          "By adding the 'mandatory' attribute",
          "By using JavaScript validation",
        ],
        correctAnswer: "By adding the 'required' attribute",
      },
      {
        id: "32",
        question: "What is the purpose of the 'href' attribute in an <a> tag?",
        choices: [
          "It specifies the destination URL of the link",
          "It specifies the text of the link",
          "It defines the icon for the link",
          "It creates a tooltip for the link",
        ],
        correctAnswer: "It specifies the destination URL of the link",
      },
      {
        id: "33",
        question: "How do you add a comment in JavaScript?",
        choices: [
          "// Comment text",
          "/* Comment text */",
          "<!-- Comment text -->",
          "/* */",
        ],
        correctAnswer: "// Comment text",
      },
      {
        id: "34",
        question: "What is the purpose of the 'meta' tag in HTML?",
        choices: [
          "It provides metadata such as character encoding and author information",
          "It defines the layout of the page",
          "It adds a title to the page",
          "It adds a favicon to the page",
        ],
        correctAnswer:
          "It provides metadata such as character encoding and author information",
      },
      {
        id: "35",
        question: "What is the 'box-shadow' property in CSS?",
        choices: [
          "It adds a shadow effect around an element's box",
          "It changes the background of an element",
          "It adds a border to an element",
          "It defines the space inside an element",
        ],
        correctAnswer: "It adds a shadow effect around an element's box",
      },
      {
        id: "36",
        question: "What is the 'Math.random()' function in JavaScript?",
        choices: [
          "It generates a random number between 0 and 1",
          "It generates a random number between 0 and 100",
          "It generates a random string",
          "It generates a random boolean",
        ],
        correctAnswer: "It generates a random number between 0 and 1",
      },
      {
        id: "37",
        question: "What is 'ES6' in JavaScript?",
        choices: [
          "It is a version of JavaScript that introduced new features like arrow functions and template literals",
          "It is the name for JavaScript in modern browsers",
          "It is a JavaScript library",
          "It is a CSS framework for JavaScript",
        ],
        correctAnswer:
          "It is a version of JavaScript that introduced new features like arrow functions and template literals",
      },
      {
        id: "38",
        question: "What is the 'clear' property in CSS?",
        choices: [
          "It controls the flow of elements around floated elements",
          "It clears an element's content",
          "It sets the background color",
          "It defines the height of an element",
        ],
        correctAnswer:
          "It controls the flow of elements around floated elements",
      },
      {
        id: "39",
        question: "What is the 'inline-block' display property in CSS?",
        choices: [
          "It allows elements to be aligned horizontally while respecting their own dimensions",
          "It displays elements on a new line",
          "It positions elements inside a container",
          "It sets the width of an element to fit its content",
        ],
        correctAnswer:
          "It allows elements to be aligned horizontally while respecting their own dimensions",
      },
      {
        id: "40",
        question: "What is the 'contenteditable' attribute in HTML?",
        choices: [
          "It makes an element editable by the user",
          "It defines the alignment of text",
          "It adds content to an element",
          "It makes an element non-editable",
        ],
        correctAnswer: "It makes an element editable by the user",
      },
      {
        id: "41",
        question: "How do you create a dropdown menu in HTML?",
        choices: [
          "By using the <select> element",
          "By using the <menu> element",
          "By using the <form> element",
          "By using the <nav> element",
        ],
        correctAnswer: "By using the <select> element",
      },
      {
        id: "42",
        question: "What is the 'float' property in CSS?",
        choices: [
          "It positions elements to the left or right of their container",
          "It defines the order of elements in a grid",
          "It defines the background color of an element",
          "It hides elements from view",
        ],
        correctAnswer:
          "It positions elements to the left or right of their container",
      },
      {
        id: "43",
        question: "What is the purpose of the 'clear' property in CSS?",
        choices: [
          "It clears the float property of an element",
          "It defines the height of an element",
          "It controls the margin of an element",
          "It sets the background color of an element",
        ],
        correctAnswer: "It clears the float property of an element",
      },
      {
        id: "44",
        question: "What is the 'transform: scale()' property in CSS?",
        choices: [
          "It scales the element in size",
          "It rotates the element",
          "It defines the background size",
          "It sets the padding of an element",
        ],
        correctAnswer: "It scales the element in size",
      },
      {
        id: "45",
        question: "What is the 'visibility: visible' property in CSS?",
        choices: [
          "It makes an element visible",
          "It hides an element",
          "It defines the width of an element",
          "It defines the alignment of text",
        ],
        correctAnswer: "It makes an element visible",
      },
      {
        id: "46",
        question: "What is the 'window.onload' event in JavaScript?",
        choices: [
          "It is fired when the window and all its resources (like images) are fully loaded",
          "It is fired when a user clicks a button",
          "It is fired when a form is submitted",
          "It is fired when the page is loaded",
        ],
        correctAnswer:
          "It is fired when the window and all its resources (like images) are fully loaded",
      },
      {
        id: "47",
        question:
          "What is the difference between '==' and '===' in JavaScript?",
        choices: [
          "'==' compares values, '===' compares values and types",
          "'==' compares values and types, '===' compares only values",
          "'==' compares only types, '===' compares values",
          "There is no difference",
        ],
        correctAnswer: "'==' compares values, '===' compares values and types",
      },
      {
        id: "48",
        question: "What is the 'onchange' event in HTML?",
        choices: [
          "It is fired when an input field loses focus",
          "It is fired when the value of an input element changes",
          "It is fired when a user clicks a button",
          "It is fired when the form is submitted",
        ],
        correctAnswer: "It is fired when the value of an input element changes",
      },
      {
        id: "49",
        question: "How can you load an external script asynchronously?",
        choices: [
          "By using the 'async' attribute in the <script> tag",
          "By using 'defer' in the <script> tag",
          "By using the 'src' attribute in the <script> tag",
          "By using JavaScript's 'load()' function",
        ],
        correctAnswer: "By using the 'async' attribute in the <script> tag",
      },
      {
        id: "50",
        question:
          "What is the purpose of 'event.stopPropagation()' in JavaScript?",
        choices: [
          "It stops an event from propagating up or down the DOM",
          "It prevents the default behavior of an event",
          "It pauses the event handler",
          "It stops the event from being fired",
        ],
        correctAnswer: "It stops an event from propagating up or down the DOM",
      },
    ],
  },
  {
    id: "3",
    name: "Backend",
    description: "Evaluate your expertise in node, databases, and servers",
    questions: [
      {
        id: "1",
        question: "What is Node.js?",
        choices: [
          "A JavaScript runtime built on Chrome's V8 engine",
          "A JavaScript framework for building front-end applications",
          "A CSS preprocessor",
          "A database management system",
        ],
        correctAnswer: "A JavaScript runtime built on Chrome's V8 engine",
      },
      {
        id: "2",
        question: "What is the purpose of the 'require()' function in Node.js?",
        choices: [
          "It imports modules into a file",
          "It defines a new module",
          "It exports functions from a module",
          "It initializes the runtime environment",
        ],
        correctAnswer: "It imports modules into a file",
      },
      {
        id: "3",
        question: "What is a callback function in Node.js?",
        choices: [
          "A function passed as an argument to another function that gets called when an operation is complete",
          "A function executed immediately after another function",
          "A function that logs errors",
          "A function that handles server requests",
        ],
        correctAnswer:
          "A function passed as an argument to another function that gets called when an operation is complete",
      },
      {
        id: "4",
        question:
          "What is the difference between synchronous and asynchronous code in JavaScript?",
        choices: [
          "Synchronous code executes one step at a time, while asynchronous code can execute multiple steps concurrently",
          "Synchronous code executes in parallel, while asynchronous code is sequential",
          "There is no difference",
          "Asynchronous code requires callbacks, synchronous code does not",
        ],
        correctAnswer:
          "Synchronous code executes one step at a time, while asynchronous code can execute multiple steps concurrently",
      },
      {
        id: "5",
        question: "What is the Event Loop in Node.js?",
        choices: [
          "A mechanism that handles asynchronous operations",
          "A tool for debugging code",
          "A way to manage memory",
          "A feature that executes synchronous operations in parallel",
        ],
        correctAnswer: "A mechanism that handles asynchronous operations",
      },
      {
        id: "6",
        question: "What is a promise in JavaScript?",
        choices: [
          "An object representing the eventual completion or failure of an asynchronous operation",
          "A function that handles synchronous operations",
          "A callback function",
          "A data structure for handling errors",
        ],
        correctAnswer:
          "An object representing the eventual completion or failure of an asynchronous operation",
      },
      {
        id: "7",
        question: "What does 'npm' stand for?",
        choices: [
          "Node Package Manager",
          "New Package Manager",
          "Node Process Manager",
          "Non-blocking Package Manager",
        ],
        correctAnswer: "Node Package Manager",
      },
      {
        id: "8",
        question: "How do you install a package globally using npm?",
        choices: [
          "npm install -g <package-name>",
          "npm install <package-name> -g",
          "npm install --global <package-name>",
          "npm global install <package-name>",
        ],
        correctAnswer: "npm install -g <package-name>",
      },
      {
        id: "9",
        question: "What is the purpose of 'package.json' in Node.js?",
        choices: [
          "It stores metadata about the project and its dependencies",
          "It stores the project’s build configuration",
          "It holds database configuration",
          "It contains version control settings",
        ],
        correctAnswer:
          "It stores metadata about the project and its dependencies",
      },
      {
        id: "10",
        question: "What is Express.js?",
        choices: [
          "A web framework for Node.js",
          "A package manager for Node.js",
          "A templating engine for JavaScript",
          "A version control system",
        ],
        correctAnswer: "A web framework for Node.js",
      },
      {
        id: "11",
        question: "How do you handle errors in Express.js?",
        choices: [
          "Using middleware functions",
          "Using try-catch blocks",
          "Using promises",
          "By logging to the console",
        ],
        correctAnswer: "Using middleware functions",
      },
      {
        id: "12",
        question: "What is the purpose of 'res.send()' in Express.js?",
        choices: [
          "It sends a response to the client",
          "It initializes the server",
          "It handles an error",
          "It logs the request",
        ],
        correctAnswer: "It sends a response to the client",
      },
      {
        id: "13",
        question: "What is middleware in Express.js?",
        choices: [
          "Functions that execute during the request-response cycle",
          "Functions that connect to databases",
          "Functions that handle errors",
          "Functions that initialize the server",
        ],
        correctAnswer:
          "Functions that execute during the request-response cycle",
      },
      {
        id: "14",
        question:
          "What is the difference between 'app.use()' and 'app.get()' in Express.js?",
        choices: [
          "'app.use()' is for middleware, 'app.get()' is for handling GET requests",
          "'app.use()' is for GET requests, 'app.get()' is for middleware",
          "'app.use()' handles POST requests, 'app.get()' handles PUT requests",
          "Both are used for handling GET requests",
        ],
        correctAnswer:
          "'app.use()' is for middleware, 'app.get()' is for handling GET requests",
      },
      {
        id: "15",
        question: "What is the 'next()' function used for in Express.js?",
        choices: [
          "It passes control to the next middleware function",
          "It sends a response to the client",
          "It stops the request-response cycle",
          "It handles errors",
        ],
        correctAnswer: "It passes control to the next middleware function",
      },
      {
        id: "16",
        question: "What is a RESTful API?",
        choices: [
          "A set of conventions for building web APIs based on HTTP methods",
          "A set of functions for database access",
          "A new protocol for web communication",
          "A design pattern for front-end development",
        ],
        correctAnswer:
          "A set of conventions for building web APIs based on HTTP methods",
      },
      {
        id: "17",
        question: "What are the common HTTP methods used in REST APIs?",
        choices: [
          "GET, POST, PUT, DELETE",
          "GET, SET, UPDATE, REMOVE",
          "READ, CREATE, DELETE, UPDATE",
          "POST, DELETE, PATCH, PUT",
        ],
        correctAnswer: "GET, POST, PUT, DELETE",
      },
      {
        id: "18",
        question: "What is CORS and how do you handle it in a Node.js app?",
        choices: [
          "Cross-Origin Resource Sharing, managed using middleware",
          "Cross-Origin Request Security, handled by setting headers manually",
          "Content-Only Resource Sharing, handled in the request headers",
          "Content Optimization for Request Security, managed by server configuration",
        ],
        correctAnswer:
          "Cross-Origin Resource Sharing, managed using middleware",
      },
      {
        id: "19",
        question: "What is 'dotenv' used for in Node.js?",
        choices: [
          "It loads environment variables from a .env file into the process",
          "It logs error messages to the console",
          "It compiles JavaScript code",
          "It creates a temporary directory for storing data",
        ],
        correctAnswer:
          "It loads environment variables from a .env file into the process",
      },
      {
        id: "20",
        question: "How do you handle file uploads in Node.js?",
        choices: [
          "Using the 'multer' middleware",
          "Using the 'fs' module",
          "Using the 'path' module",
          "Using 'formidable'",
        ],
        correctAnswer: "Using the 'multer' middleware",
      },
      {
        id: "21",
        question: "What is 'mongoose' in Node.js?",
        choices: [
          "A MongoDB object modeling tool",
          "A MySQL query builder",
          "A templating engine for Node.js",
          "A tool for managing environment variables",
        ],
        correctAnswer: "A MongoDB object modeling tool",
      },
      {
        id: "22",
        question: "What does the 'mongoose.Schema' object do?",
        choices: [
          "It defines the structure of a document in MongoDB",
          "It connects to the MongoDB database",
          "It compiles data into JavaScript objects",
          "It defines the routes for an API",
        ],
        correctAnswer: "It defines the structure of a document in MongoDB",
      },
      {
        id: "23",
        question: "What is the purpose of 'res.json()' in Express.js?",
        choices: [
          "It sends a JSON response to the client",
          "It converts the request body to JSON",
          "It logs a response to the console",
          "It initiates the response cycle",
        ],
        correctAnswer: "It sends a JSON response to the client",
      },
      {
        id: "24",
        question:
          "What is the purpose of the 'body-parser' middleware in Express.js?",
        choices: [
          "It parses incoming request bodies",
          "It parses URL parameters",
          "It handles file uploads",
          "It sanitizes input data",
        ],
        correctAnswer: "It parses incoming request bodies",
      },
      {
        id: "25",
        question:
          "What is the difference between a GET and a POST request in HTTP?",
        choices: [
          "GET retrieves data, POST sends data to the server",
          "GET sends data, POST retrieves data",
          "GET is used for logging in, POST is used for logging out",
          "There is no difference",
        ],
        correctAnswer: "GET retrieves data, POST sends data to the server",
      },
      {
        id: "26",
        question: "What is 'cluster' in Node.js?",
        choices: [
          "A module used to create multiple processes for handling requests",
          "A tool for managing environment variables",
          "A tool for processing streams",
          "A tool for monitoring Node.js performance",
        ],
        correctAnswer:
          "A module used to create multiple processes for handling requests",
      },
      {
        id: "27",
        question: "What is the 'stream' module in Node.js?",
        choices: [
          "A module for handling streaming data",
          "A module for handling HTTP requests",
          "A module for handling file uploads",
          "A module for managing authentication tokens",
        ],
        correctAnswer: "A module for handling streaming data",
      },
      {
        id: "28",
        question:
          "What is 'JWT' (JSON Web Token) and how is it used in Node.js?",
        choices: [
          "A compact, URL-safe means of representing claims between two parties, often used for authentication",
          "A method of sending real-time messages",
          "A method of encrypting request data",
          "A method of storing server-side session data",
        ],
        correctAnswer:
          "A compact, URL-safe means of representing claims between two parties, often used for authentication",
      },
      {
        id: "29",
        question: "What is the 'cors' package used for in Node.js?",
        choices: [
          "It enables Cross-Origin Resource Sharing for handling cross-origin requests",
          "It handles errors during HTTP requests",
          "It optimizes server performance",
          "It handles file uploads securely",
        ],
        correctAnswer:
          "It enables Cross-Origin Resource Sharing for handling cross-origin requests",
      },
      {
        id: "30",
        question:
          "How do you manage database connections in a Node.js application?",
        choices: [
          "Using a connection pool or a library like mongoose",
          "By manually managing the connections",
          "By writing raw SQL queries",
          "By storing database configurations in files",
        ],
        correctAnswer: "Using a connection pool or a library like mongoose",
      },
      {
        id: "31",
        question: "What is the purpose of the 'async/await' syntax in Node.js?",
        choices: [
          "It allows handling asynchronous operations in a more readable way",
          "It handles synchronous operations",
          "It synchronizes multiple processes",
          "It handles background tasks",
        ],
        correctAnswer:
          "It allows handling asynchronous operations in a more readable way",
      },
      {
        id: "32",
        question: "What is 'socket.io' used for in Node.js?",
        choices: [
          "It enables real-time bidirectional communication between clients and servers",
          "It handles file uploads",
          "It handles HTTP requests",
          "It compiles JavaScript code",
        ],
        correctAnswer:
          "It enables real-time bidirectional communication between clients and servers",
      },
      {
        id: "33",
        question: "How do you implement session management in Node.js?",
        choices: [
          "By using a session management library like 'express-session'",
          "By storing session data in files",
          "By using JWT tokens",
          "By storing sessions in environment variables",
        ],
        correctAnswer:
          "By using a session management library like 'express-session'",
      },
      {
        id: "34",
        question: "What is the 'url' module used for in Node.js?",
        choices: [
          "It provides utilities for URL resolution and parsing",
          "It manages file system operations",
          "It parses JSON data",
          "It handles HTTP requests",
        ],
        correctAnswer: "It provides utilities for URL resolution and parsing",
      },
      {
        id: "35",
        question: "What is the purpose of the 'fs' module in Node.js?",
        choices: [
          "It provides functionality for file system operations",
          "It handles database operations",
          "It sends HTTP requests",
          "It processes streams of data",
        ],
        correctAnswer: "It provides functionality for file system operations",
      },
      {
        id: "36",
        question: "What is 'npm run start' used for in Node.js?",
        choices: [
          "It runs a defined script, usually for starting a Node.js application",
          "It installs packages",
          "It initializes the server",
          "It compiles TypeScript into JavaScript",
        ],
        correctAnswer:
          "It runs a defined script, usually for starting a Node.js application",
      },
      {
        id: "37",
        question: "How can you prevent a Node.js process from crashing?",
        choices: [
          "By using try-catch blocks or handling uncaughtException",
          "By using a task queue",
          "By using process.exit()",
          "By running Node.js in the background",
        ],
        correctAnswer:
          "By using try-catch blocks or handling uncaughtException",
      },
      {
        id: "38",
        question: "What is the purpose of 'eventEmitter' in Node.js?",
        choices: [
          "It allows you to handle events and listeners",
          "It allows you to manage files",
          "It allows you to handle errors",
          "It is used for logging data",
        ],
        correctAnswer: "It allows you to handle events and listeners",
      },
      {
        id: "39",
        question: "How do you secure an Express.js application?",
        choices: [
          "By using middleware like helmet.js and setting up HTTPS",
          "By using a reverse proxy server",
          "By using a CDN",
          "By implementing JWT tokens",
        ],
        correctAnswer:
          "By using middleware like helmet.js and setting up HTTPS",
      },
      {
        id: "40",
        question: "What is the role of 'passport.js' in Node.js?",
        choices: [
          "It is a middleware for handling user authentication",
          "It is used for session management",
          "It is used for request routing",
          "It handles API rate limiting",
        ],
        correctAnswer: "It is a middleware for handling user authentication",
      },
      {
        id: "41",
        question: "What is 'pm2' used for in Node.js?",
        choices: [
          "A process manager for Node.js applications",
          "A database connection tool",
          "A package manager",
          "A debugging tool",
        ],
        correctAnswer: "A process manager for Node.js applications",
      },
      {
        id: "42",
        question:
          "How can you prevent an application from crashing in case of an error in Node.js?",
        choices: [
          "By using a process manager like PM2 or handling uncaught exceptions",
          "By logging errors to a file",
          "By stopping the server periodically",
          "By restarting the server every minute",
        ],
        correctAnswer:
          "By using a process manager like PM2 or handling uncaught exceptions",
      },
      {
        id: "43",
        question: "What is the purpose of 'res.status()' in Express.js?",
        choices: [
          "It sets the status code of the response",
          "It sets the content type of the response",
          "It ends the response cycle",
          "It sets a cookie for the response",
        ],
        correctAnswer: "It sets the status code of the response",
      },
      {
        id: "44",
        question: "What is a Node.js stream?",
        choices: [
          "A continuous flow of data that is being processed",
          "A data format",
          "A module for handling errors",
          "A function for managing multiple processes",
        ],
        correctAnswer: "A continuous flow of data that is being processed",
      },
      {
        id: "45",
        question: "How do you manage user authentication in a Node.js app?",
        choices: [
          "By using passport.js or JWT tokens",
          "By using sessions",
          "By using the bcrypt library",
          "By using cookie-based authentication",
        ],
        correctAnswer: "By using passport.js or JWT tokens",
      },
      {
        id: "46",
        question: "What does 'process.env' allow you to do in Node.js?",
        choices: [
          "It allows you to access environment variables",
          "It allows you to manage processes",
          "It manages HTTP requests",
          "It tracks errors in the app",
        ],
        correctAnswer: "It allows you to access environment variables",
      },
      {
        id: "47",
        question: "What is 'graceful shutdown' in Node.js?",
        choices: [
          "A method for ensuring an application closes properly by finishing any pending requests",
          "A process for restarting the server",
          "A method of optimizing code for performance",
          "A way of handling background tasks",
        ],
        correctAnswer:
          "A method for ensuring an application closes properly by finishing any pending requests",
      },
      {
        id: "48",
        question:
          "How can you optimize the performance of a Node.js application?",
        choices: [
          "By using clustering, load balancing, and caching strategies",
          "By writing less code",
          "By avoiding asynchronous code",
          "By using a different language",
        ],
        correctAnswer:
          "By using clustering, load balancing, and caching strategies",
      },
      {
        id: "49",
        question: "What does the 'npm audit' command do?",
        choices: [
          "It checks for security vulnerabilities in your dependencies",
          "It installs packages",
          "It runs unit tests",
          "It deploys the app to production",
        ],
        correctAnswer:
          "It checks for security vulnerabilities in your dependencies",
      },
      {
        id: "50",
        question: "What is the purpose of 'res.redirect()' in Express.js?",
        choices: [
          "It redirects the client to another URL",
          "It sends a response to the client",
          "It initializes the server",
          "It triggers middleware functions",
        ],
        correctAnswer: "It redirects the client to another URL",
      },
    ],
  },
  {
    id: "4",
    name: "React",
    description: " powerful JavaScript library for building user interfaces",
    questions: [
      {
        id: "1",
        question: "What is JSX?",
        choices: [
          "A syntax extension for JavaScript that allows HTML to be written in JS",
          "A type of JavaScript function",
          "A JavaScript framework",
          "A method for styling components",
        ],
        correctAnswer:
          "A syntax extension for JavaScript that allows HTML to be written in JS",
      },
      {
        id: "2",
        question:
          "Which of the following is used to create a new component in React?",
        choices: [
          "React.createComponent",
          "React.Component",
          "React.createElement",
          "React.useState",
        ],
        correctAnswer: "React.Component",
      },
      {
        id: "3",
        question: "What hook is used for managing side effects in React?",
        choices: ["useEffect", "useState", "useReducer", "useRef"],
        correctAnswer: "useEffect",
      },
      {
        id: "4",
        question: "What is the purpose of 'useState' hook?",
        choices: [
          "It manages side effects",
          "It manages state within functional components",
          "It keeps track of component references",
          "It allows for context management",
        ],
        correctAnswer: "It manages state within functional components",
      },
      {
        id: "5",
        question: "How does React handle event binding?",
        choices: [
          "By automatically binding events to the component",
          "Using the 'bind()' method in the constructor",
          "By calling the 'addEventListener' method",
          "By defining event listeners in a separate file",
        ],
        correctAnswer: "Using the 'bind()' method in the constructor",
      },
      {
        id: "6",
        question: "What is the purpose of 'React.memo'?",
        choices: [
          "It prevents unnecessary re-renders of functional components",
          "It manages context for multiple components",
          "It stores data in a Redux store",
          "It allows components to be lazy-loaded",
        ],
        correctAnswer:
          "It prevents unnecessary re-renders of functional components",
      },
      {
        id: "7",
        question: "What is a virtual DOM in React?",
        choices: [
          "A lightweight copy of the actual DOM, used for efficient updates",
          "A tool for managing state across components",
          "A method for rendering React components to the browser",
          "A type of event handler",
        ],
        correctAnswer:
          "A lightweight copy of the actual DOM, used for efficient updates",
      },
      {
        id: "8",
        question: "Which of the following is NOT a feature of Redux?",
        choices: [
          "Centralized state management",
          "Unidirectional data flow",
          "Middleware support",
          "Automatic DOM updates",
        ],
        correctAnswer: "Automatic DOM updates",
      },
      {
        id: "9",
        question: "What is the purpose of 'dispatch' in Redux?",
        choices: [
          "It triggers actions to modify the store state",
          "It reads the state from the Redux store",
          "It subscribes to state changes",
          "It logs actions to the console",
        ],
        correctAnswer: "It triggers actions to modify the store state",
      },
      {
        id: "10",
        question: "In Redux, what is an action?",
        choices: [
          "A plain object describing what happened in the app",
          "A function used to update the store",
          "A component that interacts with the state",
          "A method for handling user input",
        ],
        correctAnswer: "A plain object describing what happened in the app",
      },
      {
        id: "11",
        question: "What does the 'connect' function do in Redux?",
        choices: [
          "It maps state and dispatch to props in a component",
          "It dispatches actions to the Redux store",
          "It subscribes a component to the Redux store",
          "It creates a new Redux store",
        ],
        correctAnswer: "It maps state and dispatch to props in a component",
      },
      {
        id: "12",
        question: "How do you access the Redux store from a React component?",
        choices: [
          "Using the 'useStore' hook",
          "Using 'connect' or 'useSelector' hook",
          "By importing the store directly",
          "By passing it as a prop to the component",
        ],
        correctAnswer: "Using 'connect' or 'useSelector' hook",
      },
      {
        id: "13",
        question:
          "Which middleware is commonly used with Redux for handling asynchronous actions?",
        choices: [
          "redux-thunk",
          "redux-saga",
          "redux-promise",
          "all of the above",
        ],
        correctAnswer: "all of the above",
      },
      {
        id: "14",
        question: "What is 'useReducer' used for in React?",
        choices: [
          "To manage state with more complex logic than 'useState'",
          "To handle side effects",
          "To fetch data from an API",
          "To bind events to components",
        ],
        correctAnswer:
          "To manage state with more complex logic than 'useState'",
      },
      {
        id: "15",
        question: "What is the purpose of 'React.createElement'?",
        choices: [
          "It creates a new element to be rendered to the DOM",
          "It adds event listeners to the DOM",
          "It creates a new component",
          "It updates the state of a component",
        ],
        correctAnswer: "It creates a new element to be rendered to the DOM",
      },
      {
        id: "16",
        question: "What is 'Provider' used for in Redux?",
        choices: [
          "It provides the Redux store to the app's components",
          "It dispatches actions",
          "It stores the state of the app",
          "It connects components to the store",
        ],
        correctAnswer: "It provides the Redux store to the app's components",
      },
      {
        id: "17",
        question: "What is the 'reducer' in Redux?",
        choices: [
          "A function that returns a new state based on actions",
          "A function that dispatches actions to the store",
          "A method for handling side effects",
          "A component that listens for store changes",
        ],
        correctAnswer: "A function that returns a new state based on actions",
      },
      {
        id: "18",
        question:
          "Which of the following is a way to trigger a side effect in React?",
        choices: [
          "By using 'useEffect' hook",
          "By using 'useState' hook",
          "By using Redux middleware",
          "By creating a custom component",
        ],
        correctAnswer: "By using 'useEffect' hook",
      },
      {
        id: "19",
        question: "What is the primary purpose of 'Redux DevTools'?",
        choices: [
          "To allow developers to inspect and debug Redux state changes",
          "To optimize the performance of Redux",
          "To automatically update the state",
          "To perform unit tests on Redux actions",
        ],
        correctAnswer:
          "To allow developers to inspect and debug Redux state changes",
      },
      {
        id: "20",
        question: "What does 'React.StrictMode' do?",
        choices: [
          "It highlights potential problems in the app by running checks during development",
          "It increases the performance of the app",
          "It makes the app work in dark mode",
          "It handles state management automatically",
        ],
        correctAnswer:
          "It highlights potential problems in the app by running checks during development",
      },
      {
        id: "21",
        question:
          "What is the difference between 'state' and 'props' in React?",
        choices: [
          "State is mutable, while props are immutable",
          "Props are mutable, while state is immutable",
          "State and props are the same",
          "State is used for rendering, props are for event handling",
        ],
        correctAnswer: "State is mutable, while props are immutable",
      },
      {
        id: "22",
        question: "What is the purpose of 'React Router'?",
        choices: [
          "It allows navigation between different components without reloading the page",
          "It manages the Redux state",
          "It helps with debugging React apps",
          "It handles API calls",
        ],
        correctAnswer:
          "It allows navigation between different components without reloading the page",
      },
      {
        id: "23",
        question: "What does 'useRef' hook do in React?",
        choices: [
          "It stores a mutable value that does not trigger re-render",
          "It manages state in functional components",
          "It allows tracking of previous state",
          "It stores values that trigger a re-render",
        ],
        correctAnswer:
          "It stores a mutable value that does not trigger re-render",
      },
      {
        id: "24",
        question: "What are controlled components in React?",
        choices: [
          "Components whose state is controlled by React",
          "Components whose state is managed by Redux",
          "Components that are not rendered to the DOM",
          "Components that manage their own state independently",
        ],
        correctAnswer: "Components whose state is controlled by React",
      },
      {
        id: "25",
        question: "What is the use of 'React.lazy'?",
        choices: [
          "It allows components to be loaded lazily, improving performance",
          "It handles state management for functional components",
          "It optimizes Redux store updates",
          "It is used for creating higher-order components",
        ],
        correctAnswer:
          "It allows components to be loaded lazily, improving performance",
      },
      {
        id: "26",
        question: "What is 'useContext' used for in React?",
        choices: [
          "It allows components to share values without explicitly passing them through props",
          "It manages state in functional components",
          "It binds events to components",
          "It handles side effects",
        ],
        correctAnswer:
          "It allows components to share values without explicitly passing them through props",
      },
      {
        id: "27",
        question: "How do you optimize performance in React?",
        choices: [
          "By using React.memo and lazy loading components",
          "By avoiding hooks in components",
          "By keeping components as large as possible",
          "By passing functions as props",
        ],
        correctAnswer: "By using React.memo and lazy loading components",
      },
      {
        id: "28",
        question: "What is 'reconciliation' in React?",
        choices: [
          "The process of comparing the current and previous state of the virtual DOM",
          "The process of fetching data from an API",
          "The method of managing user inputs",
          "The process of handling state in components",
        ],
        correctAnswer:
          "The process of comparing the current and previous state of the virtual DOM",
      },
      {
        id: "29",
        question: "What is 'useCallback' used for?",
        choices: [
          "It memoizes a callback function to prevent unnecessary re-renders",
          "It creates a new state in functional components",
          "It triggers a re-render in React",
          "It manages context in React components",
        ],
        correctAnswer:
          "It memoizes a callback function to prevent unnecessary re-renders",
      },
      {
        id: "30",
        question: "What does the 'key' prop do in React lists?",
        choices: [
          "It helps React identify which items have changed, are added, or removed",
          "It uniquely identifies a component",
          "It stores the state of a component",
          "It makes components rerender when state changes",
        ],
        correctAnswer:
          "It helps React identify which items have changed, are added, or removed",
      },
      {
        id: "31",
        question:
          "Which of the following is a proper way to define a functional component in React?",
        choices: [
          "const MyComponent = () => { return <div>My Component</div> }",
          "function MyComponent() { return <div>My Component</div> }",
          "Both are correct",
          "None of the above",
        ],
        correctAnswer: "Both are correct",
      },
      {
        id: "32",
        question:
          "What does 'useEffect' do when an empty dependency array is passed?",
        choices: [
          "It runs the effect only once, after the first render",
          "It runs the effect whenever the component is updated",
          "It runs the effect whenever the component unmounts",
          "It prevents the effect from running at all",
        ],
        correctAnswer: "It runs the effect only once, after the first render",
      },
      {
        id: "33",
        question: "What does 'Provider' do in React Redux?",
        choices: [
          "It makes the Redux store available to all components in the app",
          "It binds components to Redux actions",
          "It allows for server-side rendering",
          "It connects components to the Redux state",
        ],
        correctAnswer:
          "It makes the Redux store available to all components in the app",
      },
      {
        id: "34",
        question: "What is 'getDerivedStateFromProps'?",
        choices: [
          "A static method used to update state in response to prop changes",
          "A method for performing side effects in functional components",
          "A hook that allows state to be derived from props",
          "A lifecycle method for componentDidMount",
        ],
        correctAnswer:
          "A static method used to update state in response to prop changes",
      },
      {
        id: "35",
        question:
          "Which of the following React features helps in handling side effects in a component?",
        choices: ["useEffect", "useState", "componentDidMount", "React.memo"],
        correctAnswer: "useEffect",
      },
      {
        id: "36",
        question:
          "Which of the following is used to modify the state of a React component?",
        choices: [
          "this.setState()",
          "this.state()",
          "useState()",
          "setState()",
        ],
        correctAnswer: "this.setState()",
      },
      {
        id: "37",
        question: "What is the purpose of 'useLayoutEffect' in React?",
        choices: [
          "It runs synchronously after all DOM mutations",
          "It triggers a re-render when state changes",
          "It manages context in React components",
          "It is used to fetch data from an API",
        ],
        correctAnswer: "It runs synchronously after all DOM mutations",
      },
      {
        id: "38",
        question: "What is the default value of the 'context' in React?",
        choices: ["null", "undefined", "empty object", "empty array"],
        correctAnswer: "undefined",
      },
      {
        id: "39",
        question:
          "What are the best practices for optimizing React performance?",
        choices: [
          "Use React.memo, React.lazy, and code splitting",
          "Avoid using hooks",
          "Avoid conditional rendering",
          "Use class components instead of functional components",
        ],
        correctAnswer: "Use React.memo, React.lazy, and code splitting",
      },
      {
        id: "40",
        question: "How do you handle API calls in React?",
        choices: [
          "By using useEffect with fetch or axios",
          "By using useContext with Redux",
          "By using componentDidMount",
          "By using React Router",
        ],
        correctAnswer: "By using useEffect with fetch or axios",
      },
      {
        id: "41",
        question: "What is 'combineReducers' in Redux?",
        choices: [
          "It combines multiple reducers into a single reducer",
          "It combines multiple actions into a single action",
          "It combines state and props",
          "It combines actions with components",
        ],
        correctAnswer: "It combines multiple reducers into a single reducer",
      },
      {
        id: "42",
        question:
          "What is the primary benefit of using 'useReducer' over 'useState'?",
        choices: [
          "It handles more complex state logic that involves multiple sub-values",
          "It triggers more re-renders",
          "It can only be used in class components",
          "It stores global state",
        ],
        correctAnswer:
          "It handles more complex state logic that involves multiple sub-values",
      },
      {
        id: "43",
        question: "How do you reset a form in React?",
        choices: [
          "By using the 'reset()' method",
          "By setting the form state back to its initial value",
          "By re-rendering the component",
          "By using 'useState' hook",
        ],
        correctAnswer: "By setting the form state back to its initial value",
      },
      {
        id: "44",
        question: "What is the purpose of 'useImperativeHandle'?",
        choices: [
          "To expose values and methods to parent components using refs",
          "To manage state in functional components",
          "To trigger side effects after renders",
          "To handle events in React",
        ],
        correctAnswer:
          "To expose values and methods to parent components using refs",
      },
      {
        id: "45",
        question: "What does 'React.forwardRef' do?",
        choices: [
          "It forwards refs to a component wrapped in 'forwardRef' for functional components",
          "It is used to pass state through props",
          "It passes events from parent to child components",
          "It handles side effects in React components",
        ],
        correctAnswer:
          "It forwards refs to a component wrapped in 'forwardRef' for functional components",
      },
      {
        id: "46",
        question:
          "What is the function of 'useEffect' when an array of dependencies is passed?",
        choices: [
          "The effect runs every time one of the dependencies changes",
          "The effect runs once when the component mounts",
          "The effect does not run at all",
          "The effect runs only after the first render",
        ],
        correctAnswer:
          "The effect runs every time one of the dependencies changes",
      },
      {
        id: "47",
        question:
          "Which of the following is used for lazy loading components in React?",
        choices: [
          "React.lazy()",
          "React.useEffect()",
          "React.createElement()",
          "React.forwardRef()",
        ],
        correctAnswer: "React.lazy()",
      },
      {
        id: "48",
        question: "What is the purpose of 'PropTypes' in React?",
        choices: [
          "To check the types of props passed to components",
          "To handle side effects in components",
          "To manage context in components",
          "To optimize component re-renders",
        ],
        correctAnswer: "To check the types of props passed to components",
      },
      {
        id: "49",
        question: "How do you prevent a component from re-rendering in React?",
        choices: [
          "By using React.memo() or PureComponent",
          "By removing the component from the virtual DOM",
          "By setting the component state to 'null'",
          "By avoiding the use of state",
        ],
        correctAnswer: "By using React.memo() or PureComponent",
      },
      {
        id: "50",
        question: "What is the purpose of 'shouldComponentUpdate' in React?",
        choices: [
          "To optimize re-rendering by preventing unnecessary updates",
          "To handle side effects",
          "To initialize state for a component",
          "To bind event listeners",
        ],
        correctAnswer:
          "To optimize re-rendering by preventing unnecessary updates",
      },
    ],
  },
  {
    id: "5",
    name: "Typescript",
    description: "Master the statically typed superset of JavaScript",
    questions: [
      {
        id: "1",
        question: "What is TypeScript?",
        choices: [
          "A JavaScript framework",
          "A superset of JavaScript that adds static typing",
          "A package manager",
          "A new version of JavaScript",
        ],
        correctAnswer: "A superset of JavaScript that adds static typing",
      },
      {
        id: "2",
        question: "Which of the following is a key feature of TypeScript?",
        choices: [
          "Object-oriented programming",
          "Compilation to JavaScript",
          "Static typing",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        id: "3",
        question:
          "How do you define a variable with a specific type in TypeScript?",
        choices: [
          "let variableName = 'Hello';",
          "let variableName: string = 'Hello';",
          "var variableName: string = 'Hello';",
          "const variableName: 'Hello';",
        ],
        correctAnswer: "let variableName: string = 'Hello';",
      },
      {
        id: "4",
        question: "What is the type for a number in TypeScript?",
        choices: ["decimal", "int", "number", "float"],
        correctAnswer: "number",
      },
      {
        id: "5",
        question:
          "Which of the following keywords is used to define an interface in TypeScript?",
        choices: ["type", "interface", "abstract", "module"],
        correctAnswer: "interface",
      },
      {
        id: "6",
        question:
          "Which of the following types is used for objects with unknown properties in TypeScript?",
        choices: ["unknown", "Record<string, any>", "any", "Object"],
        correctAnswer: "Record<string, any>",
      },
      {
        id: "7",
        question: "What is a tuple in TypeScript?",
        choices: [
          "An object with properties",
          "A collection of elements of the same type",
          "An array of objects",
          "A collection of elements of different types",
        ],
        correctAnswer: "A collection of elements of different types",
      },
      {
        id: "8",
        question:
          "How do you define a function that returns a promise in TypeScript?",
        choices: [
          "async function example() {}",
          "promise example() {}",
          "function example(): Promise<any> {}",
          "function example() {}",
        ],
        correctAnswer: "function example(): Promise<any> {}",
      },
      {
        id: "9",
        question: "What does the 'any' type represent in TypeScript?",
        choices: [
          "A variable that can hold any type of value",
          "A variable that cannot be assigned a value",
          "A variable that can only hold a string",
          "A variable that can only hold numbers",
        ],
        correctAnswer: "A variable that can hold any type of value",
      },
      {
        id: "10",
        question: "How do you define a type alias in TypeScript?",
        choices: [
          "let aliasName: type;",
          "type aliasName = type;",
          "interface aliasName = type;",
          "function aliasName(): type {}",
        ],
        correctAnswer: "type aliasName = type;",
      },
      {
        id: "11",
        question:
          "What is the purpose of the 'readonly' modifier in TypeScript?",
        choices: [
          "Makes the type immutable",
          "Makes the property immutable",
          "Makes the variable immutable",
          "Makes the function immutable",
        ],
        correctAnswer: "Makes the property immutable",
      },
      {
        id: "12",
        question:
          "Which of the following is used to make an object property optional in TypeScript?",
        choices: [
          "property: type?",
          "property!: type",
          "property = type",
          "property?: type",
        ],
        correctAnswer: "property?: type",
      },
      {
        id: "13",
        question: "What is a union type in TypeScript?",
        choices: [
          "A type that combines two or more interfaces",
          "A type that is assigned to an object",
          "A type that allows multiple types for a value",
          "A type that is an array of elements",
        ],
        correctAnswer: "A type that allows multiple types for a value",
      },
      {
        id: "14",
        question: "How do you define an enum in TypeScript?",
        choices: [
          "const Color = {Red, Green, Blue}",
          "enum Color = {Red, Green, Blue}",
          "enum Color {Red, Green, Blue}",
          "type Color = [Red, Green, Blue]",
        ],
        correctAnswer: "enum Color {Red, Green, Blue}",
      },
      {
        id: "15",
        question:
          "Which of the following is used to explicitly define a type for a function parameter in TypeScript?",
        choices: [
          "function myFunc(param: any) {}",
          "function myFunc(param) {}",
          "function myFunc(param: type) {}",
          "function myFunc(param: type?) {}",
        ],
        correctAnswer: "function myFunc(param: type) {}",
      },
      {
        id: "16",
        question: "What is the 'unknown' type in TypeScript?",
        choices: [
          "A type that can hold any value like 'any'",
          "A type that represents any value but requires type checking before use",
          "A type used for objects",
          "A type that represents the absence of a value",
        ],
        correctAnswer:
          "A type that represents any value but requires type checking before use",
      },
      {
        id: "17",
        question: "How do you define a class in TypeScript?",
        choices: [
          "class MyClass extends SuperClass {}",
          "class MyClass {}",
          "function MyClass() {}",
          "class MyClass: {}",
        ],
        correctAnswer: "class MyClass {}",
      },
      {
        id: "18",
        question: "What does the 'extends' keyword do in TypeScript?",
        choices: [
          "It adds methods to a class",
          "It modifies a class property",
          "It allows a class to inherit from another class",
          "It allows a function to inherit properties",
        ],
        correctAnswer: "It allows a class to inherit from another class",
      },
      {
        id: "19",
        question: "What is the purpose of TypeScript's 'never' type?",
        choices: [
          "To define an empty object",
          "To indicate a variable cannot be assigned a value",
          "To indicate a function will never return a value",
          "To indicate that a variable can never be used",
        ],
        correctAnswer: "To indicate a function will never return a value",
      },
      {
        id: "20",
        question: "What does the 'as' keyword do in TypeScript?",
        choices: [
          "It is used for type checking",
          "It is used for defining enums",
          "It is used for type assertion",
          "It is used to create a new type",
        ],
        correctAnswer: "It is used for type assertion",
      },
      {
        id: "21",
        question:
          "How do you ensure that a variable has a specific type in TypeScript?",
        choices: [
          "By using type annotation",
          "By using a constructor",
          "By using type assertions",
          "By using default values",
        ],
        correctAnswer: "By using type annotation",
      },
      {
        id: "22",
        question: "What does the 'void' type represent in TypeScript?",
        choices: [
          "An empty object",
          "A function that does not return a value",
          "A variable that has no assigned value",
          "A type that holds any value",
        ],
        correctAnswer: "A function that does not return a value",
      },
      {
        id: "23",
        question: "Which of the following is true about TypeScript interfaces?",
        choices: [
          "Interfaces can define properties but not methods",
          "Interfaces can extend other interfaces",
          "Interfaces cannot be used to define method implementations",
          "Interfaces can be used to define classes",
        ],
        correctAnswer: "Interfaces can extend other interfaces",
      },
      {
        id: "24",
        question: "How do you make a method in a TypeScript class static?",
        choices: [
          "static function methodName() {}",
          "function static methodName() {}",
          "static methodName() {}",
          "methodName static() {}",
        ],
        correctAnswer: "static methodName() {}",
      },
      {
        id: "25",
        question:
          "What is the default type for function return values in TypeScript?",
        choices: ["void", "undefined", "any", "null"],
        correctAnswer: "any",
      },
      {
        id: "26",
        question:
          "How do you explicitly declare a variable to be of type 'number' in TypeScript?",
        choices: [
          "let num: any;",
          "let num = 10;",
          "let num: number;",
          "let num: string = '10';",
        ],
        correctAnswer: "let num: number;",
      },
      {
        id: "27",
        question:
          "Which operator is used to check if a variable is of a specific type in TypeScript?",
        choices: ["is", "typeof", "instanceof", "check"],
        correctAnswer: "typeof",
      },
      {
        id: "28",
        question: "What does the 'default' keyword do in TypeScript?",
        choices: [
          "It marks a function as optional",
          "It specifies a default export",
          "It initializes a class property",
          "It specifies the return type of a function",
        ],
        correctAnswer: "It specifies a default export",
      },
      {
        id: "29",
        question: "How do you define a constant in TypeScript?",
        choices: [
          "const CONSTANT_NAME;",
          "let CONSTANT_NAME;",
          "const CONSTANT_NAME = value;",
          "var CONSTANT_NAME;",
        ],
        correctAnswer: "const CONSTANT_NAME = value;",
      },
      {
        id: "30",
        question: "What is a namespace in TypeScript?",
        choices: [
          "A global variable",
          "A function for modularization",
          "A way to group related types and functions",
          "A way to define constants globally",
        ],
        correctAnswer: "A way to group related types and functions",
      },
      {
        id: "31",
        question:
          "Which of the following is the correct way to define a generic type in TypeScript?",
        choices: [
          "function example<T>(arg: T): T {}",
          "function example<T>(arg: type): type {}",
          "function example(arg: T): T {}",
          "function example(arg: type): type {}",
        ],
        correctAnswer: "function example<T>(arg: T): T {}",
      },
      {
        id: "32",
        question: "How do you import a module in TypeScript?",
        choices: [
          "import module from 'module';",
          "import 'module';",
          "require('module');",
          "from 'module' import",
        ],
        correctAnswer: "import module from 'module';",
      },
      {
        id: "33",
        question:
          "What is the correct way to define a tuple with a string and a number in TypeScript?",
        choices: [
          "let tuple: [string, number] = ['Hello', 42];",
          "let tuple: [number, string] = [42, 'Hello'];",
          "let tuple: [any, any] = ['Hello', 42];",
          "let tuple = ['Hello', 42];",
        ],
        correctAnswer: "let tuple: [string, number] = ['Hello', 42];",
      },
      {
        id: "34",
        question:
          "What is the correct way to use the 'as' keyword for type assertion?",
        choices: [
          "let myVar = 'Hello' as string;",
          "let myVar = 'Hello' -> string;",
          "let myVar = <string>'Hello';",
          "let myVar: string = 'Hello';",
        ],
        correctAnswer: "let myVar = 'Hello' as string;",
      },
      {
        id: "35",
        question:
          "How can you define an interface for an object with optional properties in TypeScript?",
        choices: [
          "interface MyObject { name?: string; age?: number; }",
          "interface MyObject { name: string?; age: number?; }",
          "interface MyObject { name: string; age: number }",
          "interface MyObject { name: string?; age: number; }",
        ],
        correctAnswer: "interface MyObject { name?: string; age?: number; }",
      },
      {
        id: "36",
        question: "How do you declare a function type in TypeScript?",
        choices: [
          "let func: (arg: number) => string;",
          "let func = (arg: number): string => {};",
          "function func(arg: number): string {}",
          "let func: string => (number)",
        ],
        correctAnswer: "let func: (arg: number) => string;",
      },
      {
        id: "37",
        question:
          "Which of the following types can be assigned to a variable with type 'null' in TypeScript?",
        choices: ["any", "undefined", "void", "never"],
        correctAnswer: "any",
      },
      {
        id: "38",
        question: "What does the 'override' keyword do in TypeScript?",
        choices: [
          "Marks a method as overriding a base class method",
          "Marks a method as deprecated",
          "Marks a property as immutable",
          "Marks a variable to be reassigned",
        ],
        correctAnswer: "Marks a method as overriding a base class method",
      },
      {
        id: "39",
        question: "What is the 'async' keyword used for in TypeScript?",
        choices: [
          "It defines a method as non-blocking",
          "It defines a method to return a promise",
          "It is used to define a generator function",
          "It makes a function asynchronous and returns void",
        ],
        correctAnswer: "It defines a method to return a promise",
      },
      {
        id: "40",
        question: "How do you define a default parameter in TypeScript?",
        choices: [
          "function example(arg = 'default') {}",
          "function example(arg?: 'default') {}",
          "function example(arg: string = 'default') {}",
          "function example(arg: string?) {}",
        ],
        correctAnswer: "function example(arg: string = 'default') {}",
      },
      {
        id: "41",
        question: "Which of the following statements about TypeScript is true?",
        choices: [
          "TypeScript is a strict superset of JavaScript",
          "TypeScript adds dynamic typing to JavaScript",
          "TypeScript is a compiled language",
          "TypeScript does not require a build step",
        ],
        correctAnswer: "TypeScript is a strict superset of JavaScript",
      },
      {
        id: "42",
        question:
          "Which TypeScript feature allows you to define variables with multiple possible types?",
        choices: [
          "Union types",
          "Tuple types",
          "Literal types",
          "Interface types",
        ],
        correctAnswer: "Union types",
      },
      {
        id: "43",
        question:
          "How do you explicitly declare a function return type in TypeScript?",
        choices: [
          "function myFunc(): void {}",
          "function myFunc(): type {}",
          "function myFunc(): any {}",
          "function myFunc(): type { return value; }",
        ],
        correctAnswer: "function myFunc(): type { return value; }",
      },
      {
        id: "44",
        question: "What is the syntax for a getter method in TypeScript?",
        choices: [
          "get property() {}",
          "getter property() {}",
          "function property() { return this._property; }",
          "get: property() { return this._property; }",
        ],
        correctAnswer: "get property() {}",
      },
      {
        id: "45",
        question:
          "Which keyword is used to define a class constructor in TypeScript?",
        choices: ["function", "constructor", "class", "method"],
        correctAnswer: "constructor",
      },
      {
        id: "46",
        question: "How do you make a property read-only in TypeScript?",
        choices: [
          "readonly property;",
          "const property;",
          "static property;",
          "public property;",
        ],
        correctAnswer: "readonly property;",
      },
      {
        id: "47",
        question: "What does the 'infer' keyword do in TypeScript?",
        choices: [
          "Defines a default type for a function",
          "Automatically infers the type of a variable",
          "Defines a function type",
          "Allows for more specific typing in a generic",
        ],
        correctAnswer: "Automatically infers the type of a variable",
      },
      {
        id: "48",
        question: "How do you define an index signature in TypeScript?",
        choices: [
          "interface MyObj { [key: string]: any; }",
          "interface MyObj { key: string[]; }",
          "interface MyObj { [key: string]: string; }",
          "type MyObj = { [key: string]: any }",
        ],
        correctAnswer: "interface MyObj { [key: string]: any; }",
      },
      {
        id: "49",
        question:
          "Which of the following can be a type for a variable in TypeScript?",
        choices: ["string", "boolean", "number", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        id: "50",
        question:
          "How do you define a method in TypeScript that accepts a callback function as an argument?",
        choices: [
          "function example(callback: (arg: number) => void) {}",
          "function example(callback: (arg: number) => string) {}",
          "function example(callback: (arg: number) => boolean) {}",
          "function example(callback: (arg: string) => any) {}",
        ],
        correctAnswer: "function example(callback: (arg: number) => void) {}",
      },
    ],
  },
  {
    id: "6",
    name: "Django",
    description: "Get ready to dive into the robust python framework",
    questions: [
      {
        id: "1",
        question: "What is Django?",
        choices: [
          "A web framework for building web applications using Python",
          "A database management system",
          "A templating engine",
          "A testing framework for Python",
        ],
        correctAnswer:
          "A web framework for building web applications using Python",
      },
      {
        id: "2",
        question: "Which of the following is used to define models in Django?",
        choices: [
          "Django models are defined using classes",
          "Django models are defined using JSON objects",
          "Django models are defined using dictionaries",
          "Django models are defined in separate Python files",
        ],
        correctAnswer: "Django models are defined using classes",
      },
      {
        id: "3",
        question:
          "Which of the following is used to configure the database in Django?",
        choices: ["settings.py", "urls.py", "views.py", "models.py"],
        correctAnswer: "settings.py",
      },
      {
        id: "4",
        question: "What does the 'migrate' command in Django do?",
        choices: [
          "Applies database schema changes based on the defined models",
          "Creates a backup of the database",
          "Restores the database from a backup",
          "Deploys the Django application",
        ],
        correctAnswer:
          "Applies database schema changes based on the defined models",
      },
      {
        id: "5",
        question:
          "What is the purpose of Django's ORM (Object-Relational Mapping)?",
        choices: [
          "To map Python classes to database tables",
          "To optimize SQL queries",
          "To connect Django with external APIs",
          "To manage user sessions",
        ],
        correctAnswer: "To map Python classes to database tables",
      },
      {
        id: "6",
        question:
          "Which of the following is used to display dynamic content in Django templates?",
        choices: [
          "Template tags",
          "Template filters",
          "Template variables",
          "Template expressions",
        ],
        correctAnswer: "Template tags",
      },
      {
        id: "7",
        question: "Which command is used to create a new Django project?",
        choices: [
          "django-admin startproject project_name",
          "django-admin createproject project_name",
          "python manage.py createproject project_name",
          "django-admin newproject project_name",
        ],
        correctAnswer: "django-admin startproject project_name",
      },
      {
        id: "8",
        question: "What does the 'runserver' command do in Django?",
        choices: [
          "Starts the development server",
          "Deploys the Django app to a production server",
          "Generates a database schema",
          "Migrate the models to the database",
        ],
        correctAnswer: "Starts the development server",
      },
      {
        id: "9",
        question:
          "Which Django component is responsible for handling HTTP requests and responses?",
        choices: ["Views", "Models", "Templates", "Middleware"],
        correctAnswer: "Views",
      },
      {
        id: "10",
        question: "What is a 'view' in Django?",
        choices: [
          "A function that receives a web request and returns a web response",
          "A template that renders content on the web page",
          "A class that defines the structure of data",
          "A database table",
        ],
        correctAnswer:
          "A function that receives a web request and returns a web response",
      },
      {
        id: "11",
        question: "How do you define a URL pattern in Django?",
        choices: [
          "In urls.py file using the 'url()' function or path()",
          "In views.py file using a dictionary",
          "In models.py file using class definitions",
          "In settings.py file",
        ],
        correctAnswer: "In urls.py file using the 'url()' function or path()",
      },
      {
        id: "12",
        question: "What is Django's 'admin' interface used for?",
        choices: [
          "To manage the content and data of the application",
          "To configure server settings",
          "To manage user authentication",
          "To manage logs and errors",
        ],
        correctAnswer: "To manage the content and data of the application",
      },
      {
        id: "13",
        question:
          "How does Django handle static files like CSS and JavaScript?",
        choices: [
          "Static files are stored in the 'static/' directory",
          "Django does not handle static files, they are managed externally",
          "Static files are served directly from the 'media/' directory",
          "Static files are embedded into Django templates",
        ],
        correctAnswer: "Static files are stored in the 'static/' directory",
      },
      {
        id: "14",
        question: "Which Django component is used for user authentication?",
        choices: [
          "django.contrib.auth",
          "django.contrib.user",
          "django.contrib.authentication",
          "django.contrib.admin",
        ],
        correctAnswer: "django.contrib.auth",
      },
      {
        id: "15",
        question: "What is a Django 'middleware'?",
        choices: [
          "A layer that processes requests globally before passing them to views",
          "A template rendering engine",
          "A helper function for handling form validation",
          "A tool for managing database transactions",
        ],
        correctAnswer:
          "A layer that processes requests globally before passing them to views",
      },
      {
        id: "16",
        question: "What is Django's 'settings.py' file used for?",
        choices: [
          "To configure application settings and parameters",
          "To define URL patterns for the project",
          "To define database models",
          "To manage templates and views",
        ],
        correctAnswer: "To configure application settings and parameters",
      },
      {
        id: "17",
        question: "How can you create a form in Django?",
        choices: [
          "By using Django's Form class in forms.py",
          "By defining the form in models.py",
          "By using HTML5 form elements directly",
          "By using the 'form' tag in templates",
        ],
        correctAnswer: "By using Django's Form class in forms.py",
      },
      {
        id: "18",
        question:
          "Which Django method is used to redirect a user to a different URL?",
        choices: ["redirect()", "redirect_user()", "forward()", "response()"],
        correctAnswer: "redirect()",
      },
      {
        id: "19",
        question:
          "What is the purpose of Django's 'get_object_or_404()' function?",
        choices: [
          "It fetches an object from the database or raises a 404 error if not found",
          "It creates a new object if it does not exist",
          "It fetches all objects from the database",
          "It filters the query results",
        ],
        correctAnswer:
          "It fetches an object from the database or raises a 404 error if not found",
      },
      {
        id: "20",
        question:
          "Which of the following is used to add a new record to a Django model?",
        choices: [
          "model.save()",
          "model.add()",
          "model.insert()",
          "model.update()",
        ],
        correctAnswer: "model.save()",
      },
      {
        id: "21",
        question: "What does 'queryset' refer to in Django?",
        choices: [
          "A collection of database objects",
          "A single database object",
          "A view function",
          "A URL pattern",
        ],
        correctAnswer: "A collection of database objects",
      },
      {
        id: "22",
        question: "Which command is used to create a new Django app?",
        choices: [
          "django-admin startapp app_name",
          "python manage.py startapp app_name",
          "django-admin createapp app_name",
          "python manage.py createapp app_name",
        ],
        correctAnswer: "django-admin startapp app_name",
      },
      {
        id: "23",
        question: "What is the role of the 'render()' function in Django?",
        choices: [
          "It renders an HTML response from a template and context data",
          "It compiles Python code",
          "It serves static files",
          "It redirects to another URL",
        ],
        correctAnswer:
          "It renders an HTML response from a template and context data",
      },
      {
        id: "24",
        question:
          "Which of the following is the correct way to filter records in Django ORM?",
        choices: [
          "Model.objects.filter(field=value)",
          "Model.filter(field=value)",
          "Model.objects.query(field=value)",
          "Model.objects.find(field=value)",
        ],
        correctAnswer: "Model.objects.filter(field=value)",
      },
      {
        id: "25",
        question: "What is a Django 'template'?",
        choices: [
          "A file that combines static content and dynamic content",
          "A CSS file",
          "A form handler",
          "A middleware component",
        ],
        correctAnswer:
          "A file that combines static content and dynamic content",
      },
      {
        id: "26",
        question: "How can you handle file uploads in Django?",
        choices: [
          "By using FileField or ImageField in a model",
          "By using form fields in the template",
          "By using external libraries",
          "By creating a custom view function",
        ],
        correctAnswer: "By using FileField or ImageField in a model",
      },
      {
        id: "27",
        question:
          "Which of the following is used to define custom database fields in Django?",
        choices: [
          "Custom model fields",
          "Model forms",
          "Model queries",
          "Model views",
        ],
        correctAnswer: "Custom model fields",
      },
      {
        id: "28",
        question: "What is Django's default database backend?",
        choices: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
        correctAnswer: "SQLite",
      },
      {
        id: "29",
        question:
          "Which of the following is used to add custom management commands in Django?",
        choices: [
          "By creating a management/commands directory inside an app",
          "By using the command-line interface directly",
          "By editing the settings.py file",
          "By using the model's save() method",
        ],
        correctAnswer:
          "By creating a management/commands directory inside an app",
      },
      {
        id: "30",
        question: "Which is the correct way to import models in Django?",
        choices: [
          "from app_name.models import ModelName",
          "import app_name.models.ModelName",
          "include app_name.models.ModelName",
          "import ModelName from app_name.models",
        ],
        correctAnswer: "from app_name.models import ModelName",
      },
      {
        id: "31",
        question:
          "Which of the following is a method for querying a related object in Django?",
        choices: [
          "related_model_name.all()",
          "related_model_name.query()",
          "related_model_name.get()",
          "related_model_name.filter()",
        ],
        correctAnswer: "related_model_name.all()",
      },
      {
        id: "32",
        question:
          "What is the correct way to add a custom error page in Django?",
        choices: [
          "By defining a view and creating a template for error handling",
          "By using the error_page() function",
          "By setting the error template in settings.py",
          "By defining a middleware for error handling",
        ],
        correctAnswer:
          "By defining a view and creating a template for error handling",
      },
      {
        id: "33",
        question:
          "Which of the following command is used to create a superuser in Django?",
        choices: [
          "python manage.py createsuperuser",
          "django-admin createuser",
          "python manage.py createsystemuser",
          "django-admin createsuperuser",
        ],
        correctAnswer: "python manage.py createsuperuser",
      },
      {
        id: "34",
        question:
          "In Django, which of the following defines the relationship between models?",
        choices: [
          "ForeignKey, OneToOneField, ManyToManyField",
          "PrimaryKey, ForeignKey, ManyToManyField",
          "OneToManyField, ManyToOneField, ForeignKey",
          "HasMany, BelongsTo, HasOne",
        ],
        correctAnswer: "ForeignKey, OneToOneField, ManyToManyField",
      },
      {
        id: "35",
        question:
          "Which of the following is used to perform database migrations in Django?",
        choices: [
          "python manage.py migrate",
          "python manage.py applymigrations",
          "python manage.py syncdb",
          "python manage.py makemigrations",
        ],
        correctAnswer: "python manage.py migrate",
      },
      {
        id: "36",
        question: "What is Django’s template language?",
        choices: [
          "A Python-based templating system",
          "HTML with embedded JavaScript",
          "HTML with embedded Python",
          "Jinja2",
        ],
        correctAnswer: "A Python-based templating system",
      },
      {
        id: "37",
        question:
          "Which of the following Django models methods returns a string representation of an object?",
        choices: [
          "def __str__(self):",
          "def __repr__(self):",
          "def __unicode__(self):",
          "def __object__(self):",
        ],
        correctAnswer: "def __str__(self):",
      },
      {
        id: "38",
        question:
          "Which of the following Django features allows you to create reusable components?",
        choices: [
          "Django apps",
          "Django middleware",
          "Django views",
          "Django forms",
        ],
        correctAnswer: "Django apps",
      },
      {
        id: "39",
        question:
          "Which of the following is the correct syntax to include a URL pattern in Django?",
        choices: [
          "url(r'^pattern/$', views.view_name)",
          "path('pattern/', views.view_name)",
          "pattern('pattern/', views.view_name)",
          "include('pattern/', views.view_name)",
        ],
        correctAnswer: "path('pattern/', views.view_name)",
      },
      {
        id: "40",
        question: "What is Django's default user authentication model?",
        choices: [
          "django.contrib.auth.models.User",
          "django.contrib.auth.User",
          "django.auth.User",
          "django.users.User",
        ],
        correctAnswer: "django.contrib.auth.models.User",
      },
      {
        id: "41",
        question:
          "Which of the following can be used to prevent SQL injection in Django?",
        choices: [
          "Using parameterized queries and Django's ORM",
          "Sanitizing inputs manually",
          "Using raw SQL queries",
          "Disabling database queries in production",
        ],
        correctAnswer: "Using parameterized queries and Django's ORM",
      },
      {
        id: "42",
        question:
          "Which of the following is the correct way to access the primary key of a Django model?",
        choices: ["object.pk", "object.id", "object.primary_key", "object.key"],
        correctAnswer: "object.pk",
      },
      {
        id: "43",
        question:
          "What is the purpose of Django's 'get_context_data()' method?",
        choices: [
          "To provide context data to a template",
          "To fetch data from a model",
          "To handle form submissions",
          "To process URL parameters",
        ],
        correctAnswer: "To provide context data to a template",
      },
      {
        id: "44",
        question:
          "Which of the following is the correct way to include static files in a Django template?",
        choices: [
          "{% load static %} <img src=\"{% static 'image.jpg' %}\" />",
          "{% static 'image.jpg' %}",
          "<img src='static/image.jpg' />",
          "<img src='/static/image.jpg' />",
        ],
        correctAnswer:
          "{% load static %} <img src=\"{% static 'image.jpg' %}\" />",
      },
      {
        id: "45",
        question: "How can you create a custom template tag in Django?",
        choices: [
          "By defining a Python function and registering it in a custom tags module",
          "By editing the settings.py file",
          "By using the template tag syntax in the template",
          "By creating a new template file",
        ],
        correctAnswer:
          "By defining a Python function and registering it in a custom tags module",
      },
      {
        id: "46",
        question: "How can you enforce field validation in Django models?",
        choices: [
          "By using Django model field validators",
          "By manually validating inputs in views",
          "By using forms.py to validate fields",
          "By using custom middleware",
        ],
        correctAnswer: "By using Django model field validators",
      },
      {
        id: "47",
        question:
          "Which of the following can be used for database relationships in Django?",
        choices: [
          "ForeignKey, OneToOneField, ManyToManyField",
          "ManyToOne, ManyToMany, OneToOne",
          "DatabaseKeys, ForeignKey, ForeignId",
          "LinkedModel, ParentModel, ChildModel",
        ],
        correctAnswer: "ForeignKey, OneToOneField, ManyToManyField",
      },
      {
        id: "48",
        question: "What is Django’s default view function?",
        choices: [
          "def index(request):",
          "def home(request):",
          "def render(request):",
          "def view(request):",
        ],
        correctAnswer: "def index(request):",
      },
      {
        id: "49",
        question:
          "What is the correct syntax to include a model instance in a Django template?",
        choices: [
          "{{ object.field_name }}",
          "<%= object.field_name %>",
          "{% object.field_name %}",
          "[object].field_name",
        ],
        correctAnswer: "{{ object.field_name }}",
      },
      {
        id: "50",
        question:
          "How do you prevent Django from showing detailed error messages in production?",
        choices: [
          "Set DEBUG = False in settings.py",
          "Set DEBUG = True in settings.py",
          "Use custom error templates",
          "Disable the 'debug' middleware",
        ],
        correctAnswer: "Set DEBUG = False in settings.py",
      },
    ],
  },
  {
    id: "7",
    name: "Kotlin",
    description: "Explore the Kotlin programming language",
    questions: [
      {
        id: "1",
        question:
          "Which of the following is the correct way to declare a variable in Kotlin?",
        choices: ["var x: Int = 10", "let x = 10", "int x = 10", "x: Int = 10"],
        correctAnswer: "var x: Int = 10",
      },
      {
        id: "2",
        question: "What is the purpose of the 'lateinit' keyword in Kotlin?",
        choices: [
          "To initialize a variable later",
          "To declare an uninitialized variable",
          "To define a read-only property",
          "To define a nullable variable",
        ],
        correctAnswer: "To initialize a variable later",
      },
      {
        id: "3",
        question:
          "Which of the following is used to define a singleton in Kotlin?",
        choices: [
          "object Singleton",
          "class Singleton",
          "singleton Singleton",
          "companion object Singleton",
        ],
        correctAnswer: "object Singleton",
      },
      {
        id: "4",
        question:
          "In Kotlin, which function is used to read a line of input from the user?",
        choices: ["readLine()", "scanner.nextLine()", "input()", "getLine()"],
        correctAnswer: "readLine()",
      },
      {
        id: "5",
        question: "What does the '!!' operator do in Kotlin?",
        choices: [
          "Throws an exception if the value is null",
          "Checks for null and returns a default value",
          "Converts a value to a non-null type",
          "Generates a warning if the value is null",
        ],
        correctAnswer: "Throws an exception if the value is null",
      },
      {
        id: "6",
        question:
          "Which of the following Android components is used to store data in an app?",
        choices: [
          "SharedPreferences",
          "BroadcastReceiver",
          "Activity",
          "Fragment",
        ],
        correctAnswer: "SharedPreferences",
      },
      {
        id: "7",
        question:
          "In Android, which lifecycle method is called when an Activity is first created?",
        choices: ["onCreate()", "onStart()", "onResume()", "onPause()"],
        correctAnswer: "onCreate()",
      },
      {
        id: "8",
        question:
          "Which of the following is the correct method to start a new activity in Android?",
        choices: [
          "startActivity(intent)",
          "openActivity(intent)",
          "launchActivity(intent)",
          "newActivity(intent)",
        ],
        correctAnswer: "startActivity(intent)",
      },
      {
        id: "9",
        question:
          "Which Android component handles the user interface in an app?",
        choices: [
          "Activity",
          "Service",
          "ContentProvider",
          "BroadcastReceiver",
        ],
        correctAnswer: "Activity",
      },
      {
        id: "10",
        question:
          "What is the purpose of the 'Manifest' file in an Android app?",
        choices: [
          "Defines app components and permissions",
          "Stores user preferences",
          "Contains app data",
          "Handles UI layout",
        ],
        correctAnswer: "Defines app components and permissions",
      },
      {
        id: "11",
        question:
          "In Android, which method is used to handle clicks on a button?",
        choices: [
          "setOnClickListener()",
          "onClickListener()",
          "handleClick()",
          "onClick()",
        ],
        correctAnswer: "setOnClickListener()",
      },
      {
        id: "12",
        question:
          "Which of the following Android components can be used to send and receive messages between apps?",
        choices: [
          "BroadcastReceiver",
          "Service",
          "Activity",
          "ContentProvider",
        ],
        correctAnswer: "BroadcastReceiver",
      },
      {
        id: "13",
        question:
          "What is the function of the 'RecyclerView' widget in Android?",
        choices: [
          "Displays a large set of data in a list format",
          "Handles user input",
          "Manages app settings",
          "Shows images in a grid layout",
        ],
        correctAnswer: "Displays a large set of data in a list format",
      },
      {
        id: "14",
        question: "Which method is used to stop an Android activity?",
        choices: ["finish()", "close()", "stopActivity()", "end()"],
        correctAnswer: "finish()",
      },
      {
        id: "15",
        question:
          "Which of the following is used to define layouts in Android?",
        choices: ["XML files", "JSON files", "Java files", "Kotlin files"],
        correctAnswer: "XML files",
      },
      {
        id: "16",
        question:
          "In Kotlin, which keyword is used to define an extension function?",
        choices: ["fun", "extension", "define", "override"],
        correctAnswer: "fun",
      },
      {
        id: "17",
        question:
          "Which of the following is used to store persistent data in Android?",
        choices: [
          "SharedPreferences",
          "SQLiteDatabase",
          "File System",
          "ContentProvider",
        ],
        correctAnswer: "SQLiteDatabase",
      },
      {
        id: "18",
        question:
          "In Kotlin, which function is used to check if a collection is empty?",
        choices: [
          "isEmpty()",
          "isNullOrEmpty()",
          "checkEmpty()",
          "containsNone()",
        ],
        correctAnswer: "isEmpty()",
      },
      {
        id: "19",
        question:
          "In Android, which of the following is used to create a background thread for network requests?",
        choices: ["AsyncTask", "Thread", "Handler", "Service"],
        correctAnswer: "AsyncTask",
      },
      {
        id: "20",
        question:
          "Which of the following keywords is used to define a class in Kotlin?",
        choices: ["class", "data", "interface", "object"],
        correctAnswer: "class",
      },
      {
        id: "21",
        question:
          "Which of the following is used to handle Android app permissions?",
        choices: [
          "AndroidManifest.xml",
          "PermissionsManager",
          "PermissionHandler",
          "Permissions.xml",
        ],
        correctAnswer: "AndroidManifest.xml",
      },
      {
        id: "22",
        question:
          "Which of the following is used to create a notification in Android?",
        choices: [
          "NotificationCompat.Builder",
          "Notification.Builder",
          "NotificationManager",
          "NotificationHandler",
        ],
        correctAnswer: "NotificationCompat.Builder",
      },
      {
        id: "23",
        question: "In Kotlin, what is the default visibility modifier?",
        choices: ["public", "private", "protected", "internal"],
        correctAnswer: "public",
      },
      {
        id: "24",
        question: "What is the purpose of 'companion objects' in Kotlin?",
        choices: [
          "Define static members for a class",
          "Define properties with multiple accessors",
          "Define nested classes",
          "Define methods that belong to a class",
        ],
        correctAnswer: "Define static members for a class",
      },
      {
        id: "25",
        question: "What is the main purpose of the 'Handler' class in Android?",
        choices: [
          "Managing threads and executing tasks",
          "Handling user input",
          "Managing app resources",
          "Handling HTTP requests",
        ],
        correctAnswer: "Managing threads and executing tasks",
      },
      {
        id: "26",
        question:
          "Which of the following Android components is used to interact with content providers?",
        choices: [
          "ContentResolver",
          "ContentManager",
          "DatabaseHelper",
          "ContentProviderHelper",
        ],
        correctAnswer: "ContentResolver",
      },
      {
        id: "27",
        question:
          "In Kotlin, which of the following is used to define an immutable variable?",
        choices: ["val", "var", "const", "let"],
        correctAnswer: "val",
      },
      {
        id: "28",
        question:
          "Which of the following is the correct way to add a button click listener in Kotlin?",
        choices: [
          "button.setOnClickListener { }",
          "button.onClick { }",
          "button.clickListener { }",
          "button.onClickListener { }",
        ],
        correctAnswer: "button.setOnClickListener { }",
      },
      {
        id: "29",
        question:
          "In Kotlin, which of the following is used to perform null safety checks?",
        choices: ["?. operator", "null operator", "checkNull()", "isNull()"],
        correctAnswer: "?. operator",
      },
      {
        id: "30",
        question: "What is the purpose of 'sealed classes' in Kotlin?",
        choices: [
          "To represent restricted class hierarchies",
          "To prevent inheritance",
          "To define data containers",
          "To provide default implementations",
        ],
        correctAnswer: "To represent restricted class hierarchies",
      },
      {
        id: "31",
        question:
          "In Android, which of the following is the recommended way to manage background tasks?",
        choices: ["WorkManager", "AsyncTask", "Thread", "Service"],
        correctAnswer: "WorkManager",
      },
      {
        id: "32",
        question: "In Kotlin, which function is used to compare two strings?",
        choices: ["equals()", "compare()", "compareTo()", "isEqualTo()"],
        correctAnswer: "compareTo()",
      },
      {
        id: "33",
        question:
          "What is the purpose of the 'runBlocking' function in Kotlin?",
        choices: [
          "To block the current thread until the coroutine is complete",
          "To launch a coroutine",
          "To delay a coroutine",
          "To cancel a coroutine",
        ],
        correctAnswer:
          "To block the current thread until the coroutine is complete",
      },
      {
        id: "34",
        question:
          "Which of the following is used to make an Android app responsive in Kotlin?",
        choices: ["Coroutines", "Thread.sleep()", "AsyncTask", "Handler"],
        correctAnswer: "Coroutines",
      },
      {
        id: "35",
        question:
          "In Android, which method is used to get the current activity context?",
        choices: [
          "getApplicationContext()",
          "getContext()",
          "getActivityContext()",
          "getContextActivity()",
        ],
        correctAnswer: "getApplicationContext()",
      },
      {
        id: "36",
        question: "Which Android method is used to inflate a layout?",
        choices: [
          "LayoutInflater.inflate()",
          "inflate()",
          "findViewById()",
          "inflateLayout()",
        ],
        correctAnswer: "LayoutInflater.inflate()",
      },
      {
        id: "37",
        question:
          "Which of the following is used to handle user interactions in Android?",
        choices: [
          "View.OnClickListener",
          "UserInteractionListener",
          "ActivityListener",
          "InputEventListener",
        ],
        correctAnswer: "View.OnClickListener",
      },
      {
        id: "38",
        question:
          "In Kotlin, which of the following is used to define a function?",
        choices: ["fun", "def", "function", "func"],
        correctAnswer: "fun",
      },
      {
        id: "39",
        question:
          "Which of the following is used for background data syncing in Android?",
        choices: ["SyncAdapter", "ContentProvider", "Service", "IntentService"],
        correctAnswer: "SyncAdapter",
      },
      {
        id: "40",
        question:
          "Which Android class is responsible for managing the app's resources?",
        choices: [
          "Resources",
          "ResourceManager",
          "AssetManager",
          "ResourceHelper",
        ],
        correctAnswer: "Resources",
      },
      {
        id: "41",
        question: "What is the Android equivalent of an iOS storyboard?",
        choices: ["XML layouts", "Fragments", "Activities", "Services"],
        correctAnswer: "XML layouts",
      },
      {
        id: "42",
        question:
          "In Kotlin, which of the following is used for exception handling?",
        choices: ["try-catch", "throws-catch", "throw-try", "try-except"],
        correctAnswer: "try-catch",
      },
      {
        id: "43",
        question: "What is the purpose of a 'Context' in Android?",
        choices: [
          "Provides access to system services",
          "Manages app UI",
          "Stores app data",
          "Handles network requests",
        ],
        correctAnswer: "Provides access to system services",
      },
      {
        id: "44",
        question: "In Kotlin, how do you declare a constant value?",
        choices: ["const val", "final var", "val const", "let const"],
        correctAnswer: "const val",
      },
      {
        id: "45",
        question: "What is the correct way to create a data class in Kotlin?",
        choices: [
          "data class MyClass()",
          "class MyClass()",
          "data MyClass()",
          "class data MyClass()",
        ],
        correctAnswer: "data class MyClass()",
      },
      {
        id: "46",
        question: "What is the role of 'BroadcastReceiver' in Android?",
        choices: [
          "Listen for system-wide events",
          "Handle user input",
          "Handle app settings",
          "Manage background tasks",
        ],
        correctAnswer: "Listen for system-wide events",
      },
      {
        id: "47",
        question: "Which of the following is used for Android app testing?",
        choices: ["JUnit", "Mockito", "Espresso", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        id: "48",
        question: "In Kotlin, what does the 'is' keyword check?",
        choices: [
          "Type of a variable",
          "Null safety",
          "Variable assignment",
          "List inclusion",
        ],
        correctAnswer: "Type of a variable",
      },
      {
        id: "49",
        question:
          "Which Android method is used to retrieve the current activity instance?",
        choices: [
          "getActivity()",
          "getContext()",
          "getApplication()",
          "getCurrentActivity()",
        ],
        correctAnswer: "getActivity()",
      },
      {
        id: "50",
        question:
          "Which of the following is used to add a fragment to an activity?",
        choices: [
          "FragmentTransaction.add()",
          "Fragment.add()",
          "FragmentTransaction.replace()",
          "addFragment()",
        ],
        correctAnswer: "FragmentTransaction.add()",
      },
    ],
  },
  {
    id: "8",
    name: "Geography",
    description: "Explore the world's most challenging geographical facts.",
    questions: [
      {
        id: "1",
        question: "Which country has the most natural lakes in the world?",
        choices: ["Russia", "Canada", "Brazil", "United States"],
        correctAnswer: "Canada",
      },
      {
        id: "2",
        question:
          "Which city is the only one in the world located on two continents?",
        choices: ["Istanbul", "Moscow", "Cairo", "Athens"],
        correctAnswer: "Istanbul",
      },
      {
        id: "3",
        question: "Which is the largest island in the Mediterranean Sea?",
        choices: ["Sicily", "Crete", "Cyprus", "Corsica"],
        correctAnswer: "Sicily",
      },
      {
        id: "4",
        question: "What is the longest river in Europe?",
        choices: ["Danube", "Volga", "Rhine", "Dnieper"],
        correctAnswer: "Volga",
      },
      {
        id: "5",
        question:
          "Which country has the highest number of UNESCO World Heritage Sites?",
        choices: ["Italy", "China", "Spain", "India"],
        correctAnswer: "Italy",
      },
      {
        id: "6",
        question:
          "Which is the smallest independent country in the world by area?",
        choices: ["Monaco", "Nauru", "San Marino", "Vatican City"],
        correctAnswer: "Vatican City",
      },
      {
        id: "7",
        question:
          "Mount Chimborazo in Ecuador is the farthest point from the Earth's center. Why?",
        choices: [
          "Its latitude",
          "Its height",
          "Earth's equatorial bulge",
          "Volcanic activity",
        ],
        correctAnswer: "Earth's equatorial bulge",
      },
      {
        id: "8",
        question:
          "Which African lake is known as the world's second deepest freshwater lake?",
        choices: [
          "Lake Victoria",
          "Lake Tanganyika",
          "Lake Malawi",
          "Lake Chad",
        ],
        correctAnswer: "Lake Tanganyika",
      },
      {
        id: "9",
        question: "Which country does not share a border with the Caspian Sea?",
        choices: ["Kazakhstan", "Azerbaijan", "Turkmenistan", "Uzbekistan"],
        correctAnswer: "Uzbekistan",
      },
      {
        id: "10",
        question: "Which desert is the largest hot desert in the world?",
        choices: ["Kalahari", "Gobi", "Sahara", "Arabian"],
        correctAnswer: "Sahara",
      },
      {
        id: "11",
        question: "What is the capital city of Bhutan?",
        choices: ["Thimphu", "Kathmandu", "Paro", "Guwahati"],
        correctAnswer: "Thimphu",
      },
      {
        id: "12",
        question:
          "Which mountain range forms the natural border between Spain and France?",
        choices: ["Alps", "Pyrenees", "Carpathians", "Apennines"],
        correctAnswer: "Pyrenees",
      },
      {
        id: "13",
        question: "What is the official language of Suriname?",
        choices: ["English", "Dutch", "Spanish", "Portuguese"],
        correctAnswer: "Dutch",
      },
      {
        id: "14",
        question: "Which country has the longest coastline in the world?",
        choices: ["Australia", "Russia", "Canada", "Indonesia"],
        correctAnswer: "Canada",
      },
      {
        id: "15",
        question: "What is the deepest oceanic trench in the world?",
        choices: [
          "Tonga Trench",
          "Java Trench",
          "Mariana Trench",
          "Philippine Trench",
        ],
        correctAnswer: "Mariana Trench",
      },
      {
        id: "16",
        question: "Which U.S. state has the most active volcanoes?",
        choices: ["California", "Hawaii", "Alaska", "Washington"],
        correctAnswer: "Alaska",
      },
      {
        id: "17",
        question: "Which capital city is the highest above sea level?",
        choices: ["La Paz", "Quito", "Kathmandu", "Thimphu"],
        correctAnswer: "La Paz",
      },
      {
        id: "18",
        question:
          "Which European city is known as 'The City of a Hundred Spires'?",
        choices: ["Vienna", "Prague", "Budapest", "Warsaw"],
        correctAnswer: "Prague",
      },
      {
        id: "19",
        question:
          "Which country is home to Lake Baikal, the deepest lake in the world?",
        choices: ["Russia", "Mongolia", "China", "Kazakhstan"],
        correctAnswer: "Russia",
      },
      {
        id: "20",
        question: "Which is the highest waterfall in the world?",
        choices: [
          "Victoria Falls",
          "Niagara Falls",
          "Angel Falls",
          "Iguazu Falls",
        ],
        correctAnswer: "Angel Falls",
      },
      {
        id: "21",
        question:
          "Which is the only country through which both the Equator and the Tropic of Capricorn pass?",
        choices: ["Brazil", "Indonesia", "Kenya", "Colombia"],
        correctAnswer: "Brazil",
      },
      {
        id: "22",
        question: "What is the largest landlocked country in the world?",
        choices: ["Mongolia", "Kazakhstan", "Chad", "Uzbekistan"],
        correctAnswer: "Kazakhstan",
      },
      {
        id: "23",
        question:
          "Which mountain is considered the most isolated peak on Earth?",
        choices: [
          "Mount Everest",
          "Mount McKinley",
          "Mount Kilimanjaro",
          "Mauna Kea",
        ],
        correctAnswer: "Mauna Kea",
      },
      {
        id: "24",
        question: "Which city is known as the 'Venice of the North'?",
        choices: ["Amsterdam", "Bruges", "Stockholm", "Copenhagen"],
        correctAnswer: "Amsterdam",
      },
      {
        id: "25",
        question: "Which strait separates Asia from North America?",
        choices: [
          "Bosporus Strait",
          "Bering Strait",
          "Dardanelles",
          "Malacca Strait",
        ],
        correctAnswer: "Bering Strait",
      },
      {
        id: "26",
        question: "Which European river passes through the most countries?",
        choices: ["Danube", "Rhine", "Volga", "Seine"],
        correctAnswer: "Danube",
      },
      {
        id: "27",
        question: "What is the tallest active volcano in Europe?",
        choices: [
          "Mount Vesuvius",
          "Mount Etna",
          "Mount Teide",
          "Mount Stromboli",
        ],
        correctAnswer: "Mount Etna",
      },
      {
        id: "28",
        question:
          "Which African country has Portuguese as its official language?",
        choices: ["Ghana", "Angola", "Kenya", "Senegal"],
        correctAnswer: "Angola",
      },
      {
        id: "29",
        question: "Which desert covers most of Mongolia?",
        choices: [
          "Thar Desert",
          "Gobi Desert",
          "Karakum Desert",
          "Kyzylkum Desert",
        ],
        correctAnswer: "Gobi Desert",
      },
      {
        id: "30",
        question: "Which country is home to the world’s largest delta?",
        choices: ["Bangladesh", "India", "China", "Pakistan"],
        correctAnswer: "Bangladesh",
      },
      {
        id: "31",
        question: "Which river flows through the Grand Canyon?",
        choices: [
          "Colorado River",
          "Mississippi River",
          "Rio Grande",
          "Columbia River",
        ],
        correctAnswer: "Colorado River",
      },
      {
        id: "32",
        question:
          "Which mountain range contains Mount Elbrus, the highest peak in Europe?",
        choices: ["Alps", "Carpathians", "Caucasus", "Pyrenees"],
        correctAnswer: "Caucasus",
      },
      {
        id: "33",
        question: "What is the smallest continent by land area?",
        choices: ["Europe", "Australia", "Antarctica", "South America"],
        correctAnswer: "Australia",
      },
      {
        id: "34",
        question: "Which lake is known as the 'Jewel of the Italian Lakes'?",
        choices: ["Lake Como", "Lake Garda", "Lake Maggiore", "Lake Lugano"],
        correctAnswer: "Lake Como",
      },
      {
        id: "35",
        question: "Which desert is the driest place on Earth?",
        choices: [
          "Sahara Desert",
          "Atacama Desert",
          "Gobi Desert",
          "Kalahari Desert",
        ],
        correctAnswer: "Atacama Desert",
      },
      {
        id: "36",
        question: "Which capital city is the westernmost in mainland Africa?",
        choices: ["Dakar", "Banjul", "Conakry", "Monrovia"],
        correctAnswer: "Dakar",
      },
      {
        id: "37",
        question:
          "Which African country is known as the 'Land of a Thousand Hills'?",
        choices: ["Uganda", "Rwanda", "Kenya", "Ethiopia"],
        correctAnswer: "Rwanda",
      },
      {
        id: "38",
        question: "Which country has the most volcanoes in the world?",
        choices: ["Indonesia", "Japan", "Iceland", "Philippines"],
        correctAnswer: "Indonesia",
      },
      {
        id: "39",
        question: "Which European country is home to the Julian Alps?",
        choices: ["Austria", "Italy", "Slovenia", "Switzerland"],
        correctAnswer: "Slovenia",
      },
      {
        id: "40",
        question: "Which is the world's largest archipelago by area?",
        choices: ["Philippines", "Indonesia", "Japan", "Maldives"],
        correctAnswer: "Indonesia",
      },
      {
        id: "41",
        question:
          "Which river is sacred to Hindus and is considered the most polluted in the world?",
        choices: ["Ganges", "Brahmaputra", "Yamuna", "Indus"],
        correctAnswer: "Ganges",
      },
      {
        id: "42",
        question:
          "What is the capital of the Canadian province of Nova Scotia?",
        choices: ["Halifax", "Quebec City", "St. John's", "Fredericton"],
        correctAnswer: "Halifax",
      },
      {
        id: "43",
        question: "Which is the largest salt flat in the world?",
        choices: [
          "Salar de Uyuni",
          "Bonneville Salt Flats",
          "Etosha Pan",
          "Makgadikgadi Pan",
        ],
        correctAnswer: "Salar de Uyuni",
      },
      {
        id: "44",
        question: "Which city is known as the 'Gateway to the Arctic'?",
        choices: ["Murmansk", "Anchorage", "Reykjavik", "Tromsø"],
        correctAnswer: "Murmansk",
      },
      {
        id: "45",
        question: "What is the largest inland body of water by surface area?",
        choices: [
          "Lake Superior",
          "Caspian Sea",
          "Lake Victoria",
          "Lake Baikal",
        ],
        correctAnswer: "Caspian Sea",
      },
      {
        id: "46",
        question: "Which country owns Easter Island?",
        choices: ["Chile", "Peru", "Argentina", "Ecuador"],
        correctAnswer: "Chile",
      },
      {
        id: "47",
        question: "Which Asian country has the most glaciers?",
        choices: ["China", "Pakistan", "Nepal", "India"],
        correctAnswer: "Pakistan",
      },
      {
        id: "48",
        question:
          "Which mountain peak is closest to the moon due to Earth's equatorial bulge?",
        choices: [
          "Mount Everest",
          "Mount Kilimanjaro",
          "Mount Chimborazo",
          "Mauna Kea",
        ],
        correctAnswer: "Mount Chimborazo",
      },
      {
        id: "49",
        question: "Which country has the most official languages?",
        choices: ["Switzerland", "South Africa", "India", "Bolivia"],
        correctAnswer: "Bolivia",
      },
      {
        id: "50",
        question:
          "Which city is home to the tallest building in the Southern Hemisphere?",
        choices: ["Sydney", "Auckland", "Melbourne", "Jakarta"],
        correctAnswer: "Melbourne",
      },
      {
        id: "51",
        question: "Which is the deepest lake in Africa by depth?",
        choices: [
          "Lake Tanganyika",
          "Lake Malawi",
          "Lake Victoria",
          "Lake Baikal",
        ],
        correctAnswer: "Lake Tanganyika",
      },
      {
        id: "52",
        question: "Which is the largest island in the Caribbean Sea?",
        choices: ["Cuba", "Hispaniola", "Jamaica", "Puerto Rico"],
        correctAnswer: "Cuba",
      },
      {
        id: "53",
        question:
          "Which mountain range forms the natural border between Chile and Argentina?",
        choices: [
          "Andes",
          "Sierra Madre",
          "Rocky Mountains",
          "Cascade Mountains",
        ],
        correctAnswer: "Andes",
      },
      {
        id: "54",
        question:
          "Which is the only country to border both the Mediterranean Sea and the Atlantic Ocean?",
        choices: ["Morocco", "Spain", "France", "Portugal"],
        correctAnswer: "Spain",
      },
      {
        id: "55",
        question: "Which African country has the longest coastline?",
        choices: ["Egypt", "South Africa", "Somalia", "Nigeria"],
        correctAnswer: "Somalia",
      },
      {
        id: "56",
        question: "What is the largest bay in the world by area?",
        choices: [
          "Bay of Bengal",
          "Gulf of Mexico",
          "Hudson Bay",
          "Gulf of Alaska",
        ],
        correctAnswer: "Hudson Bay",
      },
      {
        id: "57",
        question: "Which is the largest desert in the world by area?",
        choices: [
          "Sahara Desert",
          "Karakum Desert",
          "Gobi Desert",
          "Antarctic Desert",
        ],
        correctAnswer: "Antarctic Desert",
      },
      {
        id: "58",
        question: "Which is the highest capital city in the world?",
        choices: ["La Paz", "Quito", "Kathmandu", "Bogotá"],
        correctAnswer: "La Paz",
      },
      {
        id: "59",
        question: "Which river is the longest in China?",
        choices: [
          "Yangtze River",
          "Yellow River",
          "Mekong River",
          "Lancang River",
        ],
        correctAnswer: "Yangtze River",
      },
      {
        id: "60",
        question:
          "Which country is home to the world's largest artificial port?",
        choices: ["China", "India", "UAE", "Singapore"],
        correctAnswer: "China",
      },
      {
        id: "61",
        question: "Which is the highest mountain in North America?",
        choices: [
          "Mount McKinley",
          "Mount Logan",
          "Mount Whitney",
          "Mount Rainier",
        ],
        correctAnswer: "Mount McKinley",
      },
      {
        id: "62",
        question: "Which country has the most islands in the world?",
        choices: ["Sweden", "Norway", "Finland", "Canada"],
        correctAnswer: "Sweden",
      },
      {
        id: "63",
        question:
          "Which capital city is the highest above sea level in Europe?",
        choices: ["Vienna", "Paris", "Andorra la Vella", "Monaco"],
        correctAnswer: "Andorra la Vella",
      },
      {
        id: "64",
        question: "Which lake has the greatest volume of water in the world?",
        choices: [
          "Lake Baikal",
          "Lake Tanganyika",
          "Caspian Sea",
          "Lake Superior",
        ],
        correctAnswer: "Lake Baikal",
      },
      {
        id: "65",
        question: "Which is the longest river in South America?",
        choices: [
          "Amazon River",
          "Orinoco River",
          "Paraná River",
          "São Francisco River",
        ],
        correctAnswer: "Amazon River",
      },
      {
        id: "66",
        question:
          "Which city is located at the intersection of the Prime Meridian and the Equator?",
        choices: ["Quito", "London", "Kigali", "Malabo"],
        correctAnswer: "Malabo",
      },
      {
        id: "67",
        question: "Which is the world's largest volcanic eruption by volume?",
        choices: [
          "Mount St. Helens",
          "Mount Pinatubo",
          "Mount Tambora",
          "Krakatoa",
        ],
        correctAnswer: "Mount Tambora",
      },
      {
        id: "68",
        question: "Which island is the largest in the Mediterranean Sea?",
        choices: ["Crete", "Cyprus", "Sicily", "Corsica"],
        correctAnswer: "Sicily",
      },
      {
        id: "69",
        question: "Which country has the longest border with Russia?",
        choices: ["Kazakhstan", "China", "Ukraine", "Finland"],
        correctAnswer: "Kazakhstan",
      },
      {
        id: "70",
        question:
          "Which city is the second-largest by population in the United States?",
        choices: ["Los Angeles", "Chicago", "New York", "Houston"],
        correctAnswer: "Los Angeles",
      },
      {
        id: "71",
        question:
          "What is the largest freshwater lake by surface area in the world?",
        choices: [
          "Lake Superior",
          "Lake Victoria",
          "Lake Ontario",
          "Lake Baikal",
        ],
        correctAnswer: "Lake Superior",
      },
      {
        id: "72",
        question: "What is the longest mountain range in the world?",
        choices: ["Himalayas", "Andes", "Rocky Mountains", "Ural Mountains"],
        correctAnswer: "Andes",
      },
      {
        id: "73",
        question:
          "Which desert is home to the largest sand dunes in the world?",
        choices: [
          "Atacama Desert",
          "Kalahari Desert",
          "Sahara Desert",
          "Namib Desert",
        ],
        correctAnswer: "Namib Desert",
      },
      {
        id: "74",
        question: "Which is the most populous city in Africa?",
        choices: ["Cairo", "Lagos", "Kinshasa", "Nairobi"],
        correctAnswer: "Lagos",
      },
      {
        id: "75",
        question:
          "Which country is home to the world's largest desert that isn't sandy?",
        choices: ["Chile", "Argentina", "Australia", "China"],
        correctAnswer: "Chile",
      },
      {
        id: "76",
        question:
          "Which is the largest island in the world that is part of a country other than the United States or Canada?",
        choices: ["Greenland", "Borneo", "New Guinea", "Madagascar"],
        correctAnswer: "Greenland",
      },
      {
        id: "77",
        question: "Which mountain is the highest in Africa?",
        choices: [
          "Mount Kilimanjaro",
          "Mount Kenya",
          "Mount Etna",
          "Mount Toubkal",
        ],
        correctAnswer: "Mount Kilimanjaro",
      },
      {
        id: "78",
        question:
          "Which European country is known as the 'Land of a Thousand Lakes'?",
        choices: ["Finland", "Sweden", "Norway", "Estonia"],
        correctAnswer: "Finland",
      },
      {
        id: "79",
        question: "Which is the longest river in Australia?",
        choices: [
          "Murray River",
          "Darling River",
          "Lachlan River",
          "Murrumbidgee River",
        ],
        correctAnswer: "Murray River",
      },
      {
        id: "80",
        question: "Which country has the largest economy in South America?",
        choices: ["Brazil", "Argentina", "Chile", "Colombia"],
        correctAnswer: "Brazil",
      },
      {
        id: "81",
        question:
          "Which is the only country in the world to have a flag with just one color?",
        choices: ["Monaco", "Nepal", "Libya", "Switzerland"],
        correctAnswer: "Libya",
      },
      {
        id: "82",
        question:
          "Which is the southernmost capital city of any sovereign state?",
        choices: ["Wellington", "Buenos Aires", "Canberra", "Montevideo"],
        correctAnswer: "Wellington",
      },
      {
        id: "83",
        question: "Which U.S. state has the most active volcanoes?",
        choices: ["Hawaii", "Alaska", "California", "Washington"],
        correctAnswer: "Alaska",
      },
      {
        id: "84",
        question: "Which river is the longest in Asia?",
        choices: [
          "Yangtze River",
          "Mekong River",
          "Ganges River",
          "Indus River",
        ],
        correctAnswer: "Yangtze River",
      },
      {
        id: "85",
        question: "Which city is located at the mouth of the River Thames?",
        choices: ["London", "Paris", "Copenhagen", "Barcelona"],
        correctAnswer: "London",
      },
      {
        id: "86",
        question:
          "Which desert spans parts of seven countries in Northern Africa?",
        choices: [
          "Sahara Desert",
          "Kalahari Desert",
          "Gobi Desert",
          "Chihuahuan Desert",
        ],
        correctAnswer: "Sahara Desert",
      },
      {
        id: "87",
        question:
          "Which country has the highest number of UNESCO World Heritage Sites?",
        choices: ["Italy", "China", "Germany", "Spain"],
        correctAnswer: "Italy",
      },
      {
        id: "88",
        question:
          "Which mountain range separates the Indian subcontinent from the rest of Asia?",
        choices: ["Himalayas", "Alps", "Andes", "Caucasus"],
        correctAnswer: "Himalayas",
      },
      {
        id: "89",
        question:
          "Which country is home to the largest freshwater island in the world?",
        choices: ["Canada", "Argentina", "Brazil", "Russia"],
        correctAnswer: "Canada",
      },
      {
        id: "90",
        question: "Which city is known as the 'Gateway to the Pacific'?",
        choices: ["Los Angeles", "San Francisco", "Seattle", "Vancouver"],
        correctAnswer: "San Francisco",
      },
      {
        id: "91",
        question:
          "Which is the only country that borders both the Atlantic Ocean and the Mediterranean Sea?",
        choices: ["Spain", "Morocco", "Turkey", "Portugal"],
        correctAnswer: "Morocco",
      },
      {
        id: "92",
        question:
          "Which river forms part of the natural border between the United States and Mexico?",
        choices: [
          "Colorado River",
          "Missouri River",
          "Rio Grande",
          "Amazon River",
        ],
        correctAnswer: "Rio Grande",
      },
      {
        id: "93",
        question: "Which is the longest mountain chain underwater?",
        choices: [
          "Mid-Atlantic Ridge",
          "Great Barrier Reef",
          "Philippine Trench",
          "Mariana Trench",
        ],
        correctAnswer: "Mid-Atlantic Ridge",
      },
      {
        id: "94",
        question: "Which country is known as the 'Land of the Rising Sun'?",
        choices: ["Japan", "South Korea", "China", "Thailand"],
        correctAnswer: "Japan",
      },
      {
        id: "95",
        question:
          "Which desert is home to the Atacama Giant, the largest prehistoric anthropomorphic figure in the world?",
        choices: [
          "Karakum Desert",
          "Gobi Desert",
          "Atacama Desert",
          "Sonoran Desert",
        ],
        correctAnswer: "Atacama Desert",
      },
      {
        id: "96",
        question:
          "Which island country in the Indian Ocean is closest to the equator?",
        choices: ["Maldives", "Mauritius", "Sri Lanka", "Madagascar"],
        correctAnswer: "Maldives",
      },
      {
        id: "97",
        question:
          "What is the name of the sea that is located between Saudi Arabia and Africa?",
        choices: ["Red Sea", "Dead Sea", "Persian Gulf", "Arabian Sea"],
        correctAnswer: "Red Sea",
      },
      {
        id: "98",
        question: "Which is the highest capital city in the world?",
        choices: ["La Paz", "Quito", "Lima", "Sucre"],
        correctAnswer: "La Paz",
      },
      {
        id: "99",
        question:
          "What is the deepest point on Earth's surface, located in the Pacific Ocean?",
        choices: [
          "Mariana Trench",
          "Challenger Deep",
          "Puerto Rico Trench",
          "Tonga Trench",
        ],
        correctAnswer: "Challenger Deep",
      },
      {
        id: "100",
        question: "Which country has the longest coastline in the world?",
        choices: ["Canada", "Russia", "United States", "Australia"],
        correctAnswer: "Canada",
      },
    ],
  },
];
