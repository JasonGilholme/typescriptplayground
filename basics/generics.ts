

class Queue<T> {

    private _queue: Array<T>;

    constructor() {
        this._queue = [];
    }

    put(v: T) {
        this._queue.push(v)
    };

    get(): T | void {
        return this._queue.pop();
    };
}


// Some types to put in the queue
class Person {
    age: number;
    name: string;

    constructor (age: number, name: string) {
        this.age = age;
        this.name = name;
    };
}

interface Email {
    message: string;
    subject: string;
}


// An email queue
let queue = new Queue<Email>();
queue.put("asdf"); // error
queue.put({message: "message", subject: "subject"});
let queueValue: Email | void = queue.get();


// A person queue
let personQueue = new Queue<Person>();
personQueue.put({name: "jase", age: 4});
let personQueueValue = personQueue.get();
