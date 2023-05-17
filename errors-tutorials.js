/*
  THE ANATOMY OF AN ERROR:
    An error is a type of object built into the JS language, consisting of a name/type and a message. 
*/

const a = "Hello";
const b = "World";

console.log(c);

/*
  This code will run, but it will throw an error. The first part of an error displays the type of error. This provides the first 
  clue as to what you’re dealing with. In this example, we have a ReferenceError.

  (X) Uncaught ReferenceError: c is not defined           script.js:4
          at script.js:4 

  A 'ReferenceError' is thrown when one refers to a variable that is not declared and/or initialized within the current scope. In our case, 
  the error message explains that the error has occurred because 'c is not defined'. Different errors of this type have different messages 
  based on what is causing the ReferenceError. For example, another message you may run into is ReferenceError: can't access lexical 
  declaration 'X' before initialization. The next part of an error gives us the name of the file in which you can find the error (in this case, 
  our script.js), and also the line number. Here, the error originates from the fourth line of script.js, which is displayed as a link under the 
  error message with the text at script.js:4. 

  Another important part of an error is the stack trace. This helps you understand when the error was thrown in your application, and what 
  functions were called that led up to the error. So, for example, if we have the following code:
*/

const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();

/*
  Our function print() should call on add(), which returns a variable named c, which currently has not been declared. The corresponding error is as follows:

  (X) > Uncaught ReferenceError: c is not defined           script.js:5
          at add (script.js:5)
          at print (script.js:9)
          at script.js:12  

  The stack trace tells us that:

  1.  c is not defined in scope of add(), which is declared on line 5
  2.  add() was called by print(), which was declared on line 9
  3.  print() itself was called on line 12.
  
  Thus the stack trace lets you trace the evolution of an error back to its origin, which here is the declaration of add().
*/


//  COMMON TYPE OF ERRORS:

/*    
    SYNTAX ERROR - The SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when 
    the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code. In 
    other words a syntax error occurs when the code you are trying to run is not written correctly, i.e., in accordance with the 
    grammatical rules of JavaScript. For example the code below will throw the following error, because we forgot the parentheses 
    for console.log()! 

    ****SyntaxError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage()****
    ->  https://developer.mozilla.org/en-US/docs/Glossary/Serializable_object
    ****SyntaxError is a subclass of Error.****
    ->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
*/

function helloWorld() {
  console.log "Hello World!"
}

// (X) Uncaught SyntaxError: Invalid or unexpected token



/*    
    REFERENCE ERROR - The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current 
    scope is referenced. in other words a reference error is thrown when one refers to a variable that is not declared and/or initialized (or it has 
    been spelled incorrectly) within the current scope.

    ****ReferenceError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().****
    ->  https://developer.mozilla.org/en-US/docs/Glossary/Serializable_object
    ****ReferenceError is a subclass of Error.****
    ->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
*/

const a = "Hello";
const b = "World";

console.log(c);

//  (X) Uncaught ReferenceError: c is not defined           script.js:4
//  at script.js:4 



/*    
    TYPE ERROR - The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not 
    of the expected type.

    - an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
    - when attempting to modify a value that cannot be changed; or
    - when attempting to use a value in an inappropriate way.



    ****TypeError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().****
    ->  https://developer.mozilla.org/en-US/docs/Glossary/Serializable_object
    ****TypeError is a subclass of Error.****
    ->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

    Say we have two strings that you would like to combine to create one message, such as below:
*/

const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);

//  (X) Uncaught TypeError: str1.push is not a function           script.js:3
//  at script.js:3:22

/*
  Here, we get a TypeError with a message stating that str1.push is not a function. - .push() is not a String method, it’s an Array method. 
  Hence, it is “not a function” that you can find as a String method. If we change .push() to .concat(), a proper String method, our code 
  runs as intended! A good note to keep in mind when faced with a TypeError is to consider the data type you are trying to run a method or 
  operation against. You’ll likely find that it is not what you think, or the operation or method is not compatible with that type.      
*/

/*  

  TIPS FOR RESOLVING ERRORS:
      
      1. Read the error carefully and try to understand it on your own.

      2. AI, Google, Stack Overflow

      3. Use the debugger! You can set breakpoints, view the value of any given variable at any point in your application’s execution, 
      step through code line by line, and more! It is an extremely valuable tool and every programmer should know how to use it. 

      4. Make use of the console! console.log() , using console.log() is great for getting immediate feedback without needing to step 
      through your functions. There are also other useful methods such as console.table(), console.trace(), and more!
*/


/*

  WINDOW CONSOLE OBJECT:
    
  "The Console Object"

      The console object provides access to the browser's debugging console.

      The console object is a property of the window object.

      The console object is accessed with: window.console or just console

  Examples

    window.console.error("You made a mistake");

    console.error("You made a mistake");

  Console Object Methods

    Method	    Description
    assert()	  Writes an error message to the console if a assertion is false
    clear()	    Clears the console
    count()	    Logs the number of times that this particular call to count() has been called
    error()	    Outputs an error message to the console
    group()	    Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
    groupCollapsed()	Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
    groupEnd()	Exits the current inline group in the console
    info()	    Outputs an informational message to the console
    log()	      Outputs a message to the console
    table()	    Displays tabular data as a table
    time()	    Starts a timer (can track how long an operation takes)
    timeEnd()	  Stops a timer that was previously started by console.time()
    trace()	    Outputs a stack trace to the console
    warn()	    Outputs a warning message to the cons

*/

/* 
  ERRORS VS WARNINGS:
      Warnings and errors serve different purposes. Errors halt program execution and prevent further action, while warnings provide insight 
      into potential issues without crashing the program. Address warnings as soon as possible, but remember they are less significant than 
      errors and are often informational. Warnings are usually shown in yellow, while errors are displayed in red, although visual differentiation 
      may vary across platforms.
*/


/*

OTHER COMMON ERRORS:
      
  SYNTAXERROR: MISSING ; BEFORE STATEMENT
    This error generally means that you have missed a semicolon at the end of one of your lines of code, but it can sometimes be more cryptic. 
    For example, if we change this line inside the checkGuess() function from:   
*/

const userGuess = Number(guessField.value);

// to

const userGuess2 === Number(guessField.value); // (X) INCORRECT

/*
  It throws this error because it thinks you are trying to do something different. You should make sure that you don't mix up the assignment 
  operator (=) — which sets a variable to be equal to a value — with the strict equality operator (===), which tests whether one value is equal 
  to another, and returns a true/false result.
*/


/*

  SYNTAXERROR: MISSING ) AFTER ARGUMENT LIST
    This one is pretty simple — it generally means that you've missed the closing parenthesis at the end of a function/method call.

*/


/*

  SYNTAXERROR: MISSING : AFTER PROPERTY ID
    This error usually relates to an incorrectly formed JavaScript object, but in this case we managed to get it by changing

    function checkGuess() {

    to

    function checkGuess( {

  This has caused the browser to think that we are trying to pass the contents of the function into the function as an argument. 
  Be careful with those parentheses!

*/
  

/*

  SYNTAXERROR: MISSING } AFTER FUNCTION BODY:
    This is easy — it generally means that you've missed one of your curly braces from a function or conditional structure. 

*/


/*

  SYNTAXERROR: EXPECTED EXPRESSION, GOT 'STRING' OR SYNTAXERROR: UNTERMINATED STRING LITERAL:
    These errors generally mean that you've left off a string value's opening or closing quote mark. In the first error above, 
    string would be replaced with the unexpected character(s) that the browser found instead of a quote mark at the start of a 
    string. The second error means that the string has not been ended with a quote mark.

*/



