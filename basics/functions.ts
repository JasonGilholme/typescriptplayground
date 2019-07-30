
//
// Functions
//

// Implicit return
function implicitReturn(person: string) {
    return "Hello, " + person;
}

let ir = implicitReturn("user");

function explicitReturn(person: string): string {
    return "Hello, " + person;
}

let er = explicitReturn("person");
let anotherReturn: number = explicitReturn("asdf"); // error
