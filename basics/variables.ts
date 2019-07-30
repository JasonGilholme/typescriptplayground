// TODO: Test the type checking on the scope behavior differences between 'var' and 'let'

// Variables

// Inferred types
let foo = "bar";
let bar = 400;

// Provided types
let fooString: string = "fooString";
let fooNumber: number = "foonumber"; // error

// Typed forward dec
let anotherUser: string;
anotherUser = "John";
anotherUser = 5;  // error

// Implicit cast during addition
// I don't like this behavior in js, I wouldn't mind finding
// a flag to make the type checking stricter.
let stringValue = "person";
let numberValue = 5;
let randomType = numberValue + stringValue;
