Calculator
Let's again create a calculator. This time the calculator will support 4 features:

Addition
Subtraction
Multiplication
Division
All the numbers that should be inputted should be gotten from the query parameters: calculator?firstParam=1&secondParam=2...

This exercise is made to show that you can receive data from the request in multiple ways!

Getting data through query parameters using GET
Going to /calculator/multiply?firstParam=1&secondParam=2 should respond with 2.
Going to /calculator/multiply?firstParam=1&secondParam=2&secondParam=4 should respond with 8.
Going to /calculator/add?firstParam=1&secondParam=2&secondParam=4 should respond with 7.
There can be an infinite number of query parameters!

Getting data through the request body using POST

Going to /calculator/multiply with the following key values: firstParam=1, secondParam=2. Should respond with 2.
Going to /calculator/division with the following key values: firstParam=1, secondParam=2. Should respond with 0.5.
