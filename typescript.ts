/*
# TypeScript Basic Concepts (Comprehensive Guide)
TypeScript is a typed superset of JavaScript that compiles to plain JS. 
It adds static typing, interfaces, classes, and OOP features.
*/

// ====================== 1. TypeScript Basics ======================

// A. Static Typing - Primitive Types
let name: string = "Alice";      // String type
let age: number = 25;            // Number type
let isActive: boolean = true;    // Boolean type
let nothing: null = null;        // Null type
let notDefined: undefined;       // Undefined type

// Special Types
let anything: any = "Can be anything";  // Avoid where possible
let unknownVar: unknown;                // Safer alternative to 'any'
let neverVar: never;                    // For functions that never return

// B. Type Inference (Auto-detection)
let city = "Paris";   // Inferred as string
let score = 100;      // Inferred as number

// C. Union & Intersection Types
let id: string | number = "ABC123";  // Union type (multiple possible types)

type Person = { name: string };
type Employee = { id: number };
type EmployeeRecord = Person & Employee;  // Intersection type (combines types)

// D. Arrays & Tuples
let numbers: number[] = [1, 2, 3];                   // Number array
let mixed: (string | number)[] = ["A", 1];           // Mixed array
let user: [string, number] = ["Alice", 30];          // Tuple (fixed-length)

// ====================== 2. Functions & Interfaces ======================

// A. Function Typing
function greet(name: string): string {
  return `Hello, ${name}`;
}

const add = (a: number, b: number): number => a + b;  // Arrow function

// B. Optional & Default Parameters
function logMessage(message: string, userId?: string) {
  console.log(message, userId || "Anonymous");
}

function createUser(name: string, age: number = 18) {  // Default parameter
  return { name, age };
}

// C. Interfaces (Object Shapes)
interface User {
  id: number;
  name: string;
  email?: string;  // Optional property
}

const alice: User = { id: 1, name: "Alice" };

// D. Function Interfaces
interface MathOperation {
  (a: number, b: number): number;  // Function signature
}

const multiply: MathOperation = (a, b) => a * b;

// ====================== 3. Classes & OOP ======================

// A. Basic Class
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

// B. Access Modifiers
class Employee {
  public id: number;          // Default (accessible anywhere)
  private salary: number;     // Only within class
  protected department: string; // Within class and subclasses
  readonly joinDate: Date;    // Immutable after init

  constructor(id: number) {
    this.id = id;
    this.joinDate = new Date();
  }
}

// C. Inheritance
class Animal {
  move() { console.log("Moving..."); }
}

class Dog extends Animal {
  bark() { console.log("Woof!"); }
}

const dog = new Dog();
dog.move();  // Inherited method
dog.bark();  // Own method

// ====================== 4. Advanced Types ======================

// A. Generics (Reusable Components)
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]);  // T = number
const firstStr = getFirst(["A", "B"]); // T = string

// B. Utility Types
interface User {
  id: number;
  name: string;
  email?: string;
}

type PartialUser = Partial<User>;   // All properties optional
type NameOnly = Pick<User, "name">; // Only 'name' property
type NoEmail = Omit<User, "email">; // Exclude 'email'

// ====================== 5. Modules & Namespaces ======================

// A. ES Modules (Preferred)
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from "./math";
console.log(add(2, 3));

// B. Namespaces (Legacy)
namespace MathUtils {
  export function add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtils.add(1, 2));

// ====================== 6. TypeScript with DOM ======================
const button = document.getElementById("btn") as HTMLButtonElement;
button.addEventListener("click", () => {
  console.log("Clicked!");
});

// ====================== 7. tsconfig.json ======================
/*
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist"
  }
}
*/

// ====================== Summary ======================
/*
| Category         | Key Features                          |
|------------------|---------------------------------------|
| Types            | string, number, boolean, any, unknown |
| Functions        | Parameter/return types, arrow funcs   |
| Interfaces       | Object shapes, optional properties    |
| Classes          | OOP, access modifiers, inheritance   |
| Generics         | Reusable type-safe components         |
| Utility Types    | Partial, Pick, Omit                   |
| Modules          | ES6 import/export                     |
*/

// Tip: Use `tsc --init` to generate tsconfig.json