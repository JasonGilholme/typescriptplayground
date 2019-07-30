// Arrays
// Homogoneous types

// Infered type, arbitrary length
let stringArray = ["asdf", "zxcv'"];
let stringArrayValue: string = stringArray[6];

// Provided type, arbitrary length
let numberArray: Array<number> = [5, 3, 4, 6, 7];


// Hetrogenous types

// Infered type, arbitrary length - equivalent to List[Union[str, int]]
let inferredArrayValues = [1, "foo"];
let arrayValueNumber: number = inferredArrayValues[0]; // Error - expects a union of number | string

// Provided types, fixed length - equivalent to Tuple[int, str]
let explicitArrayValue: [number, string] = [5, "bar"];

let anotherArrayValueNumber: number = explicitArrayValue[0];
let notANumber: number = explicitArrayValue[1]; // error - understands the per element types
