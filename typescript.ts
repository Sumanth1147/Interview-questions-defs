/*
================================================================================
# TypeScript: Complete Guide to TypeScript Concepts
================================================================================

DEFINITION:
TypeScript is a statically-typed superset of JavaScript that compiles to 
clean, readable JavaScript code. It adds optional static typing, interfaces, 
classes, and advanced OOP features while maintaining full JavaScript compatibility.

KEY BENEFITS:
- Catch errors at compile-time, not runtime
- Better IDE autocompletion and intellisense
- Self-documenting code through types
- Refactoring becomes safer and easier

COMPILATION:
TypeScript code (.ts) → TypeScript Compiler (tsc) → JavaScript code (.js)
================================================================================
*/

// ====================== 1. TypeScript BASICS ======================

/*
DEFINITION: Static Typing - Explicitly declaring the data type of a variable.
BENEFIT: Prevents type-related errors and provides IDE autocompletion.
*/

// A. Primitive Types (Basic Data Types)
// ──────────────────────────────────────

let name: string = "Alice";        // String: Text values
let age: number = 25;              // Number: Integers and decimals
let isActive: boolean = true;      // Boolean: true or false
let nothing: null = null;          // Null: Intentional absence of value
let notDefined: undefined;         // Undefined: Variable declared but no value assigned

// Example:
const greetUser = (userName: string, years: number): string => {
  return `${userName} is ${years} years old`;
};
console.log(greetUser("Alice", 25));  // ✓ Correct
// greetUser("Alice", "25");          // ✗ Error: "25" is string, not number

// B. Special Types
// ────────────────

/* 
DEFINITION: 'any' type - allows any value (defeats type safety)
USE CASE: Only when migrating from JavaScript
⚠️  WARNING: Avoid using 'any' in production code
*/
let anything: any = "text";
anything = 123;                    // ✓ Allowed, but risky
anything = true;                   // ✓ Allowed, but risky

/*
DEFINITION: 'unknown' type - safer alternative to 'any'
REQUIREMENT: Must check type before using the value
BENEFIT: Type-safe handling of unpredictable values
*/
let unknownVar: unknown = "hello";
if (typeof unknownVar === "string") {
  console.log(unknownVar.toUpperCase());  // ✓ Safe to use after type check
}

/*
DEFINITION: 'never' type - function never returns normally
USE CASES: 
  - Function throws an error
  - Function has infinite loop
  - Function never reaches end
*/
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Never returns
  }
}

// C. Type Inference (Auto-detection)
// ──────────────────────────────────

let city = "Paris";               // Inferred as 'string'
let score = 100;                  // Inferred as 'number'
let isValid = true;               // Inferred as 'boolean'

// TypeScript detects type from the assigned value
const calculateTotal = (a: number, b: number) => a + b;  // Return type inferred as 'number'

// D. Union Types
// ──────────────

/*
DEFINITION: Union Type - Variable can be one of multiple types
SYNTAX: type1 | type2 | type3
USE CASE: When a value could be different types
*/
let id: string | number = "ABC123";  // ✓ string
id = 456;                            // ✓ number
// id = true;                         // ✗ Error: boolean not allowed

function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(`ID is string: ${id.toUpperCase()}`);
  } else {
    console.log(`ID is number: ${id.toFixed(2)}`);
  }
}

// Example: API response could be data or error
type ApiResponse = { data: string } | { error: string };
const handleResponse = (response: ApiResponse): void => {
  if ("data" in response) {
    console.log("Success:", response.data);
  } else {
    console.log("Error:", response.error);
  }
};

// E. Intersection Types
// ─────────────────────

/*
DEFINITION: Intersection Type - Combines multiple types into one
SYNTAX: type1 & type2
RESULT: Object must have ALL properties from both types
*/
type Person = { name: string; age: number };
type Employee = { employeeId: number; salary: number };
type EmployeeRecord = Person & Employee;

const emp: EmployeeRecord = {
  name: "John",
  age: 30,
  employeeId: 101,
  salary: 50000
};

// F. Literal Types
// ────────────────

/*
DEFINITION: Literal Type - Restricts value to specific literal values
USE CASE: Enum-like behavior without creating full enum
*/
let direction: "up" | "down" | "left" | "right" = "up";
// direction = "diagonal";  // ✗ Error: not a valid literal

let status: "pending" | "completed" | "failed" = "pending";

// Example: Type-safe function with literal types
function handleRequest(method: "GET" | "POST" | "PUT" | "DELETE"): void {
  console.log(`Making ${method} request`);
}

// G. Arrays & Tuples
// ──────────────────

let numbers: number[] = [1, 2, 3];                   // Array of numbers
let strings: Array<string> = ["a", "b"];            // Alternative syntax
let mixed: (string | number)[] = ["hello", 42];     // Mixed types

/*
DEFINITION: Tuple - Fixed-length array with specific types at each position
SYNTAX: [type1, type2, type3, ...]
USE CASE: Functions returning multiple values, key-value pairs
*/
let user: [string, number] = ["Alice", 30];         // Fixed: [name, age]
let response: [number, string] = [200, "OK"];       // Fixed: [statusCode, message]

// Named tuple for clarity:
type Response = [statusCode: number, message: string, data?: object];
const apiResponse: Response = [200, "Success", { id: 1 }];

// Array with rest elements (at least 2 items, rest are strings):
type StringNumberBooleans = [string, number, ...boolean[]];
const arr: StringNumberBooleans = ["hello", 1, true, false];


// ====================== 2. Functions & Generics ======================

/*
DEFINITION: Function Type Annotation - Specifies parameter and return types
BENEFIT: Ensures function is called with correct arguments and return value is handled properly
*/

// A. Function Typing (Multiple Syntax Options)
// ────────────────────────────────────────────

// Traditional function declaration
function greet(name: string): string {
  return `Hello, ${name}`;
}

// Arrow function with types
const add = (a: number, b: number): number => a + b;

// Function with no return value
function printMessage(msg: string): void {
  console.log(msg);
}

// Example: Function that accepts callback
function processArray(arr: number[], callback: (value: number) => void): void {
  arr.forEach(callback);
}

// B. Optional & Default Parameters
// ────────────────────────────────

/*
DEFINITION: Optional Parameter - Can be omitted when calling function
SYNTAX: paramName?: type
*/
function logMessage(message: string, userId?: string): void {
  const id = userId || "Anonymous";
  console.log(`[${id}] ${message}`);
}

logMessage("Login successful");              // ✓ userId omitted
logMessage("User action", "user123");        // ✓ userId provided

/*
DEFINITION: Default Parameter - Has default value if not provided
*/
function createUser(name: string, age: number = 18): object {
  return { name, age };
}

createUser("Alice");                         // age = 18
createUser("Bob", 25);                       // age = 25

// C. Rest Parameters
// ──────────────────

/*
DEFINITION: Rest Parameter - Collects remaining arguments into array
SYNTAX: ...paramName: type[]
*/
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));            // ✓ Any number of arguments

// D. Function Overloading
// ───────────────────────

/*
DEFINITION: Function Overloading - Same function, different parameter types
USE CASE: Handle different input types in type-safe way
*/
function formatValue(value: number): string;
function formatValue(value: boolean): string;
function formatValue(value: number | boolean): string {
  if (typeof value === "number") {
    return `Number: ${value}`;
  }
  return `Boolean: ${value ? "true" : "false"}`;
}

console.log(formatValue(42));               // "Number: 42"
console.log(formatValue(true));             // "Boolean: true"


// ====================== 3. Interfaces & Types ======================

/*
DEFINITION: Interface - Contract defining object shape (properties and methods)
BENEFIT: Enforces structure consistency across codebase
*/

// A. Basic Interface
// ─────────────────

interface User {
  id: number;
  name: string;
  email?: string;                           // Optional property
}

const alice: User = {
  id: 1,
  name: "Alice"
  // email is optional, can be omitted
};

// B. Interface Methods
// ───────────────────

interface DatabaseConnection {
  connect(): void;
  query(sql: string): Promise<any>;
  disconnect(): void;
}

// C. Function Type Interface
// ──────────────────────────

interface MathOperation {
  (a: number, b: number): number;
}

const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => a / b;

// D. Extending Interfaces (Inheritance)
// ─────────────────────────────────────

interface TimestampedEntity {
  createdAt: Date;
  updatedAt: Date;
}

interface Post extends TimestampedEntity {
  id: number;
  title: string;
  content: string;
}

const post: Post = {
  id: 1,
  title: "TypeScript Guide",
  content: "...",
  createdAt: new Date(),
  updatedAt: new Date()
};

// E. Interface vs Type Alias
// ──────────────────────────

/*
DEFINITION: Type Alias - Creates named reference to any type
SIMILARITY: Both can define object structures
DIFFERENCE: 
- Interface: Object shapes, can be extended/merged
- Type: More flexible, can be union/intersection/primitives
*/

// Type - More flexible
type Point = { x: number; y: number };
type ID = string | number;
type Callback = (data: string) => void;

// Interface - Object focused
interface Circle {
  radius: number;
}

// F. Read-only Properties
// ──────────────────────

interface Config {
  readonly apiUrl: string;
  readonly apiKey: string;
  maxRetries: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  apiKey: "secret",
  maxRetries: 3
};

// config.apiUrl = "new-url";  // ✗ Error: Cannot assign to readonly


// ====================== 4. Generics (Reusable Type-Safe Code) ======================

/*
DEFINITION: Generics - Allow functions/classes/interfaces to work with multiple types
            while maintaining type safety
SYNTAX: <T>, <T, U>, etc.
BENEFIT: Write once, use with any type, catch errors at compile-time
*/

// A. Generic Functions
// ────────────────────

/*
DEFINITION: Type Parameter <T> - Placeholder for actual type
            Determined by how function is called
*/
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]);              // T inferred as 'number'
const firstStr = getFirst(["a", "b", "c"]);       // T inferred as 'string'

// Multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ a: 1 }, { b: "hello" });   // { a: 1, b: "hello" }

// B. Generic Constraints
// ──────────────────────

/*
DEFINITION: Constraint - Restricts what type T can be
SYNTAX: <T extends BaseType>
*/
function printLength<T extends { length: number }>(item: T): void {
  console.log(`Length: ${item.length}`);
}

printLength("hello");                              // ✓ String has length
printLength([1, 2, 3]);                            // ✓ Array has length
// printLength(123);                               // ✗ Number has no length

// Constraint to object with specific property:
function getValue<T extends { id: number }>(obj: T): number {
  return obj.id;
}

getValue({ id: 1, name: "Alice" });               // ✓ Has id property
// getValue({ name: "Alice" });                    // ✗ Missing id property

// C. Generic Classes
// ──────────────────

class Container<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  getAll(): T[] {
    return this.items;
  }
}

const numContainer = new Container<number>();
numContainer.add(10);
numContainer.add(20);
console.log(numContainer.getAll());                // [10, 20]

const strContainer = new Container<string>();
strContainer.add("hello");
strContainer.add("world");
console.log(strContainer.getAll());                // ["hello", "world"]

// D. Generic Interfaces
// ─────────────────────

interface Repository<T> {
  findById(id: number): T | undefined;
  findAll(): T[];
  save(item: T): void;
  delete(id: number): void;
}

class UserRepository implements Repository<User> {
  private users: User[] = [];

  findById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  findAll(): User[] {
    return this.users;
  }

  save(user: User): void {
    this.users.push(user);
  }

  delete(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }
}


// ====================== 5. Classes & OOP Principles ======================

/*
DEFINITION: Class - Blueprint for creating objects with properties and methods
BENEFIT: Organize code, promote reusability, implement inheritance
*/

// A. Basic Class Structure
// ────────────────────────

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  }
}

const person = new Person("Alice", 30);
console.log(person.introduce());                   // "Hi, I'm Alice and I'm 30 years old"

// B. Access Modifiers (Encapsulation)
// ──────────────────────────────────────

/*
DEFINITION: Access Modifiers - Control visibility/accessibility of class members
*/

class Employee {
  // PUBLIC (default) - Accessible everywhere
  public id: number;
  
  // PRIVATE - Accessible only within class
  private salary: number;
  
  // PROTECTED - Accessible within class and subclasses
  protected department: string;
  
  // READONLY - Cannot be changed after initialization
  readonly joinDate: Date;

  constructor(id: number, salary: number, dept: string) {
    this.id = id;
    this.salary = salary;
    this.department = dept;
    this.joinDate = new Date();
  }

  // Public method - can be called from anywhere
  getInfo(): string {
    return `ID: ${this.id}, Dept: ${this.department}`;
  }

  // Private method - only within this class
  private calculateBonus(): number {
    return this.salary * 0.1;
  }

  // Protected method - accessible in subclasses
  protected getBaseSalary(): number {
    return this.salary;
  }
}

// C. Constructor Shorthand
// ────────────────────────

class Product {
  constructor(
    public id: number,
    public name: string,
    private price: number
  ) {}
}

const prod = new Product(1, "Laptop", 999);
console.log(prod.name);                            // "Laptop"
// console.log(prod.price);                         // ✗ Error: private

// D. Inheritance
// ──────────────

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} is moving...`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);                                   // Call parent constructor
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} says: Woof!`);
  }

  // Override parent method
  move(): void {
    console.log(`${this.name} (${this.breed}) is running...`);
  }
}

const dog = new Dog("Rex", "Labrador");
dog.move();                                        // "Rex (Labrador) is running..."
dog.bark();                                        // "Rex says: Woof!"

// E. Abstract Classes
// ───────────────────

/*
DEFINITION: Abstract Class - Cannot be instantiated directly
            Must be extended by concrete classes
USE CASE: Define common interface for subclasses
*/

abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;

  printInfo(): void {
    console.log(`Area: ${this.getArea()}`);
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

// const shape = new Shape();  // ✗ Error: Cannot instantiate abstract class
const rect = new Rectangle(5, 10);
rect.printInfo();                                  // "Area: 50"

// F. Static Members
// ────────────────

/*
DEFINITION: Static - Belongs to class itself, not instances
USAGE: Constants, utility functions
*/

class Counter {
  static count: number = 0;

  constructor(public value: number) {
    Counter.count++;
  }

  static getInstanceCount(): number {
    return Counter.count;
  }
}

const c1 = new Counter(5);
const c2 = new Counter(10);
console.log(Counter.getInstanceCount());           // 2
console.log(Counter.count);                        // 2
// ====================== 6. Advanced Types (Utility & Manipulation) ======================

/*
DEFINITION: Utility Types - Built-in TypeScript types for common type transformations
BENEFIT: Reduce code duplication, maintain consistency
*/

// A. Partial<T>
// ─────────────

/*
DEFINITION: Partial<T> - Makes all properties optional
SYNTAX: Partial<Type>
USE CASE: Update operations where not all fields are required
*/

interface Config {
  apiUrl: string;
  apiKey: string;
  timeout: number;
}

function updateConfig(updates: Partial<Config>): void {
  // Only some properties need to be provided
}

updateConfig({ apiUrl: "new-url" });              // ✓ Only apiUrl

// B. Required<T>
// ──────────────

/*
DEFINITION: Required<T> - Makes all properties required
SYNTAX: Required<Type>
OPPOSITE: Partial<T>
*/

type OptionalUser = {
  name?: string;
  email?: string;
};

type MustHaveUser = Required<OptionalUser>;
// Now name and email are required

// C. Pick<T, K>
// ─────────────

/*
DEFINITION: Pick<T, K> - Select specific properties from type
SYNTAX: Pick<Type, "prop1" | "prop2">
USE CASE: Create type from subset of properties
*/

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserPreview = Pick<User, "id" | "name" | "email">;
// Result: { id: number; name: string; email: string }

const preview: UserPreview = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

// D. Omit<T, K>
// ──────────────

/*
DEFINITION: Omit<T, K> - Exclude specific properties from type
SYNTAX: Omit<Type, "prop1" | "prop2">
USE CASE: Type that has all properties EXCEPT certain ones
*/

type UserWithoutPassword = Omit<User, "password">;
// Result: { id: number; name: string; email: string }

// E. Record<K, T>
// ────────────────

/*
DEFINITION: Record<K, T> - Object with keys of type K and values of type T
SYNTAX: Record<KeyType, ValueType>
USE CASE: Map of categories, enums as keys
*/

type ColorCode = "red" | "green" | "blue";
type ColorHex = Record<ColorCode, string>;

const colors: ColorHex = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
};

// F. Exclude<T, U>
// ────────────────

/*
DEFINITION: Exclude<T, U> - Remove types from union
SYNTAX: Exclude<UnionType, TypeToRemove>
USE CASE: Filter union types
*/

type Status = "pending" | "completed" | "failed" | "cancelled";
type FinalStatus = Exclude<Status, "pending" | "cancelled">;
// Result: "completed" | "failed"

// G. Extract<T, U>
// ────────────────

/*
DEFINITION: Extract<T, U> - Select types that exist in both unions
SYNTAX: Extract<UnionType, TypeToMatch>
*/

type AllStatuses = "pending" | "completed" | "failed";
type SuccessStatuses = Extract<AllStatuses, "completed" | "cancelled">;
// Result: "completed"

// H. Readonly<T>
// ───────────────

/*
DEFINITION: Readonly<T> - Make all properties read-only
SYNTAX: Readonly<Type>
*/

interface Point {
  x: number;
  y: number;
}

const readonlyPoint: Readonly<Point> = { x: 10, y: 20 };
// readonlyPoint.x = 30;  // ✗ Error: Cannot assign to readonly


// ====================== 7. Type Guards & Narrowing ======================

/*
DEFINITION: Type Guard - Technique to narrow down variable type within code block
BENEFIT: Type-safe access to properties specific to narrowed type
*/

// A. typeof Guard
// ───────────────

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(`String: ${value.toUpperCase()}`);  // ✓ String methods available
  } else {
    console.log(`Number: ${value.toFixed(2)}`);     // ✓ Number methods available
  }
}

// B. instanceof Guard
// ──────────────────

class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();                                 // ✓ Dog methods available
  } else {
    animal.meow();                                 // ✓ Cat methods available
  }
}

// C. Property Check (in operator)
// ───────────────────────────────

type Dog_Type = { bark: () => void };
type Cat_Type = { meow: () => void };

function makeSound_v2(animal: Dog_Type | Cat_Type): void {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// D. Custom Type Guard Function
// ──────────────────────────────

/*
DEFINITION: Type Predicate - Function that returns `value is Type`
            Informs TypeScript about type narrowing
*/

function isUser(obj: any): obj is User {
  return obj && typeof obj.id === "number" && typeof obj.name === "string";
}

const data: unknown = { id: 1, name: "Alice" };

if (isUser(data)) {
  console.log(data.name);                          // ✓ TypeScript knows data is User
}

// E. Discriminated Unions
// ───────────────────────

/*
DEFINITION: Discriminated Union - Union type with common "tag" property
            Tag identifies which type it is
USE CASE: Type-safe handling of different response types
*/

type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  error: string;
};

type ApiResponse_v2 = SuccessResponse | ErrorResponse;

function handleResponse_v2(response: ApiResponse_v2): void {
  if (response.status === "success") {
    console.log("Data:", response.data);           // ✓ data is available
  } else {
    console.log("Error:", response.error);         // ✓ error is available
  }
}


// ====================== 8. Enums (Named Constants) ======================

/*
DEFINITION: Enum - Collection of named constants
BENEFIT: More readable than magic strings/numbers, prevents typos
*/

// A. Numeric Enum
// ───────────────

enum Direction {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3
}

const dir: Direction = Direction.Up;                // 0
console.log(Direction[0]);                          // "Up" (reverse mapping)

// Auto-increment:
enum HttpStatus {
  Ok = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404
}

// B. String Enum
// ───────────────

/*
DEFINITION: String Enum - Values are strings (preferred for debugging)
BENEFIT: No reverse mapping needed, clearer in logs
*/

enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

const role: UserRole = UserRole.Admin;
console.log(role);                                  // "ADMIN"

// C. Enum in Functions
// ────────────────────

enum LogLevel {
  Debug = 0,
  Info = 1,
  Warning = 2,
  Error = 3
}

function log(level: LogLevel, message: string): void {
  const levelName = LogLevel[level];
  console.log(`[${levelName}] ${message}`);
}

log(LogLevel.Info, "Application started");


// ====================== 9. Conditional & Mapped Types ======================

/*
DEFINITION: Conditional Type - Type that chooses between two types based on condition
SYNTAX: T extends U ? X : Y
*/

// A. Conditional Types
// ────────────────────

type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">;                        // true
type B = IsString<number>;                         // false

// Practical example: Extract return type
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Num = GetReturnType<() => number>;             // number
type Str = GetReturnType<() => string>;             // string

// B. Mapped Types
// ───────────────

/*
DEFINITION: Mapped Type - Creates new type by transforming properties
SYNTAX: { [K in KeyType]: ValueType }
USE CASE: Apply same transformation to all properties
*/

type Readonly_Type<T> = {
  readonly [K in keyof T]: T[K];
};

type User_Readonly = Readonly_Type<User>;
// All properties become readonly

// Make all properties nullable:
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type UserNullable = Nullable<User>;
// Result: { id: number | null; name: string | null; ... }

// Create getters for each property:
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
// Result: { getId: () => number; getName: () => string; ... }


// ====================== 10. Modules & Namespaces ======================

/*
DEFINITION: Module - External file exporting types/code for reuse
SYNTAX: import/export (ES6 modules)
BENEFIT: Code organization, reusability, encapsulation
*/

// A. Named Exports
// ────────────────

// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14159;

// B. Default Export
// ────────────────

// utils.ts
export default function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

// C. Importing Modules
// ────────────────────

// app.ts
import { add, subtract, PI } from "./math";         // Named imports
import formatDate from "./utils";                   // Default import
import * as Math from "./math";                     // Import as namespace

console.log(add(5, 3));
console.log(Math.PI);

// D. Re-exporting
// ───────────────

// index.ts - Re-export from multiple modules
export { add, subtract } from "./math";
export { default as formatDate } from "./utils";


// ====================== 11. Decorators (Advanced) ======================

/*
DEFINITION: Decorator - Function that modifies class, method, or property
SYNTAX: @DecoratorName
REQUIRES: Enable experimentalDecorators in tsconfig.json
USE CASE: Cross-cutting concerns (logging, validation, caching)
*/

// Enable in tsconfig.json:
// "experimentalDecorators": true

// A. Class Decorator
// ──────────────────

function Log(target: Function) {
  console.log(`Creating instance of ${target.name}`);
}

@Log
class Person_v2 {
  constructor(public name: string) {}
}

// B. Method Decorator
// ───────────────────

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with args:`, args);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

// C. Property Decorator
// ─────────────────────

function Validate(target: any, key: string) {
  let value: any;

  const getter = () => value;
  const setter = (newVal: any) => {
    if (newVal.length < 3) {
      throw new Error(`${key} must be at least 3 characters`);
    }
    value = newVal;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter
  });
}

class ValidatedUser {
  @Validate
  name: string = "";
}


// ====================== 12. TypeScript with DOM & Events ======================

/*
DEFINITION: DOM Manipulation - Working with HTML elements in TypeScript
REQUIREMENT: Proper type assertions for HTML elements
*/

// Type Assertion (as keyword)
const button = document.getElementById("btn") as HTMLButtonElement;
button.addEventListener("click", () => {
  console.log("Clicked!");
});

// Form handling
const form = document.querySelector("form") as HTMLFormElement;
const input = form.querySelector("input") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  console.log("Form value:", input.value);
});

// Working with events
const handleMouseEvent = (event: MouseEvent): void => {
  console.log(`Mouse position: ${event.clientX}, ${event.clientY}`);
};

document.addEventListener("mousemove", handleMouseEvent);


// ====================== 13. Advanced Function Types ======================

// A. Function with Context (this)
// ────────────────────────────────

interface User_v2 {
  id: number;
  name: string;
  isActive: boolean;
}

function activateUser(this: User_v2): string {
  return `User ${this.name} is now active`;
}

// B. Constructor Type
// ───────────────────

interface Constructor<T> {
  new (...args: any[]): T;
}

function create<T>(ctor: Constructor<T>): T {
  return new ctor();
}

// C. Call Signatures
// ──────────────────

interface CallableFunction {
  (a: number, b: number): number;
  property: string;
}

const myFunc: CallableFunction = ((a, b) => a + b) as CallableFunction;
myFunc.property = "example";


// ====================== 14. Error Handling & Never Type ======================

// A. Try-Catch with Typing
// ────────────────────────

try {
  // Code that might throw
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error");
  }
}

// B. Custom Error Class
// ──────────────────────

class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
  }
}

throw new ValidationError("email", "Invalid email format");

// C. Never Type for Exhaustiveness Check
// ───────────────────────────────────────

type Shape_v2 = "circle" | "square" | "triangle";

function getArea_v2(shape: Shape_v2): number {
  switch (shape) {
    case "circle":
      return 3.14;
    case "square":
      return 4;
    case "triangle":
      return 3;
    default:
      const exhaustiveCheck: never = shape;  // Error if case missing
      return exhaustiveCheck;
  }
}


// ====================== 15. Configuration & Compilation ======================

/*
DEFINITION: tsconfig.json - Configuration file for TypeScript compiler
PURPOSE: Control how TypeScript compiles to JavaScript
COMMAND: tsc --init (generates default tsconfig.json)
*/

/*
EXAMPLE tsconfig.json:

{
  "compilerOptions": {
    // Output
    "target": "ES2020",                    // JavaScript version to compile to
    "module": "ESNext",                    // Module system (CommonJS, ES6, etc)
    "outDir": "./dist",                    // Output directory
    "rootDir": "./src",                    // Input directory
    "declaration": true,                   // Generate .d.ts files
    
    // Checking
    "strict": true,                        // Enable all strict type checks
    "noImplicitAny": true,                 // Error on any without explicit type
    "noImplicitThis": true,                // Error on 'this' without type
    "strictNullChecks": true,              // Strict null/undefined handling
    "strictFunctionTypes": true,           // Strict function type checking
    "strictBindCallApply": true,           // Strict bind/call/apply
    "noImplicitReturns": true,             // Error if not all paths return
    "noUnusedLocals": true,                // Error on unused variables
    "noUnusedParameters": true,            // Error on unused parameters
    "noFallthroughCasesInSwitch": true,    // Error on fallthrough switch cases
    
    // Module Resolution
    "moduleResolution": "node",            // How modules are resolved
    "esModuleInterop": true,               // Compatibility with CommonJS
    "allowSyntheticDefaultImports": true,  // Allow default imports
    "resolveJsonModule": true,             // Allow JSON imports
    "skipLibCheck": true,                  // Skip type checking of declaration files
    "forceConsistentCasingInFileNames": true  // Consistent file name casing
  },
  "include": ["src/**/*"],                 // Files to include
  "exclude": ["node_modules", "dist"]     // Files to exclude
}
*/


// ====================== 16. Common TypeScript Patterns & Best Practices ======================

// A. Type-Safe Event Handlers
// ───────────────────────────

type EventHandler<T> = (event: T) => void;

const handleClick: EventHandler<MouseEvent> = (event) => {
  console.log("Clicked at:", event.clientX, event.clientY);
};

// B. Builder Pattern
// ──────────────────

class QueryBuilder<T> {
  private query: Partial<T> = {};

  where(condition: Partial<T>): this {
    this.query = { ...this.query, ...condition };
    return this;
  }

  select(...fields: (keyof T)[]): this {
    return this;
  }

  build(): T {
    return this.query as T;
  }
}

// C. Singleton Pattern with Type Safety
// ──────────────────────────────────────

class DatabaseService {
  private static instance: DatabaseService;

  private constructor() {}

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  connect(): void {
    console.log("Connected to database");
  }
}

const db = DatabaseService.getInstance();

// D. Mixin Pattern
// ────────────────

// Add functionality to existing class
function AddTimestamp<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

// E. Observable-like Pattern
// ───────────────────────────

type Listener<T> = (value: T) => void;

class Observable<T> {
  private listeners: Listener<T>[] = [];

  subscribe(listener: Listener<T>): () => void {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  emit(value: T): void {
    this.listeners.forEach(listener => listener(value));
  }
}

const userObservable = new Observable<User>();
const unsubscribe = userObservable.subscribe((user) => {
  console.log("User updated:", user);
});


// ====================== 17. Common Mistakes & How to Avoid ======================

// ❌ MISTAKE 1: Using 'any' type
// ✓ CORRECT: Use specific types or 'unknown'
let data: any = "string";                  // ❌ Don't do this
let data_correct: string = "string";       // ✓ Do this

// ❌ MISTAKE 2: Not handling null/undefined
// ✓ CORRECT: Use optional chaining and nullish coalescing
const user_unsafe = users[0];
// const name_unsafe = user_unsafe.name;  // ❌ Might crash if user_unsafe is null

const user_safe = users[0];
const name_safe = user_safe?.name ?? "Unknown";  // ✓ Safe

// ❌ MISTAKE 3: Forgetting to check union types
// ✓ CORRECT: Use type guards
function handleId_wrong(id: string | number) {
  // console.log(id.toUpperCase());         // ❌ Error: number has no toUpperCase
}

function handleId_correct(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());         // ✓ Safe
  }
}

// ❌ MISTAKE 4: Not using readonly for immutable data
// ✓ CORRECT: Use readonly arrays/properties
let mutableConfig = { apiUrl: "https://api.example.com" };  // ❌ Can be changed

const readonlyConfig = { apiUrl: "https://api.example.com" } as const;  // ✓ Truly readonly

// ❌ MISTAKE 5: Over-complicated types
// ✓ CORRECT: Keep types simple and readable
// type OverComplex = { [K in keyof User]: User[K] extends string ? string[] : User[K][] };

type Simple = Pick<User, "name" | "email">;  // ✓ Much clearer


// ====================== 18. TypeScript Best Practices ======================

/*
1. ENABLE STRICT MODE
   - Set "strict": true in tsconfig.json
   - Catches more errors at compile-time

2. USE INTERFACES FOR OBJECT SHAPES
   - Interfaces are optimized for objects
   - Support merging and extension

3. USE TYPES FOR UNIONS & PRIMITIVES
   - Types are more flexible
   - Better for union types and aliases

4. AVOID 'any' TYPE
   - Use 'unknown' if type is truly unknown
   - Use generics for reusable components
   - Use 'object' as last resort

5. USE TYPE GUARDS
   - Always narrow types before using
   - Makes code more type-safe

6. KEEP TYPES DRY
   - Use utility types (Partial, Pick, Omit)
   - Create reusable type definitions

7. DOCUMENT COMPLEX TYPES
   - Add JSDoc comments explaining purpose
   - Helps other developers understand code

8. USE ENUMS FOR FIXED VALUES
   - Better than magic strings/numbers
   - Self-documenting code

9. PREFER const OVER let
   - Less chance of accidental modification
   - Better for reasoning about code

10. USE TYPE ASSERTION SPARINGLY
    - Last resort when you know better than TypeScript
    - Consider using type guards instead
*/


// ====================== 19. Debugging TypeScript ======================

/*
COMPILATION ERRORS:
$ tsc --noEmit              // Check for errors without emitting JS

STRICT CHECKING:
$ tsc --strict              // Enable all strict checks

VERBOSE OUTPUT:
$ tsc --diagnostics         // Show detailed compiler diagnostics

DEBUGGING IN IDE:
- Use debugger with breakpoints
- Hover over variables to see inferred types
- Use "Go to Definition" to understand types
*/

// Checking inferred type:
const inferredType = { x: 10, y: 20 };  // Hover to see: { x: number; y: number }


// ====================== 20. TypeScript with Popular Frameworks ======================

/*
REACT + TYPESCRIPT:

interface Props {
  name: string;
  age: number;
}

function UserComponent({ name, age }: Props): JSX.Element {
  return <div>{name} - {age}</div>;
}

NODE.JS + TYPESCRIPT:

app.get("/users/:id", (req: Request, res: Response): void => {
  res.json({ success: true });
});

ANGULAR + TYPESCRIPT:

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`/users/${id}`);
  }
}

NEXT.JS + TYPESCRIPT:

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> {
  return { props: {} };
}
*/


// ====================== QUICK REFERENCE CHEAT SHEET ======================

/*
================================================================================
                     TYPESCRIPT QUICK REFERENCE
================================================================================

PRIMITIVE TYPES:
  string         - Text values: "hello"
  number         - Integers and decimals: 42, 3.14
  boolean        - true or false
  symbol         - Unique identifier: Symbol("id")
  bigint         - Large integers: 123n
  
SPECIAL TYPES:
  null           - No value (explicit)
  undefined      - No value (implicit)
  any            - Any type (avoid!)
  unknown        - Any type (type-safe)
  never          - Never returns
  void           - Function returns nothing

COLLECTIONS:
  T[]                    - Array of T: number[], string[]
  Array<T>               - Alternative array syntax
  [T, U]                 - Tuple: specific types in order
  [T, U, ...V[]]         - Rest tuple: at least 2, rest are V
  Record<K, V>           - Object with K keys and V values
  Map<K, V>              - Map with K keys and V values
  Set<T>                 - Set of unique T values
  
UNIONS & INTERSECTIONS:
  T | U                  - Union type (T or U)
  T & U                  - Intersection type (T and U)
  "a" | "b"              - Literal union
  1 | 2 | 3              - Numeric literals
  
NULLABILITY:
  T | null               - Can be null
  T | undefined          - Can be undefined
  T?                     - Optional (undefined)
  T | null | undefined   - Fully optional
  T??                    - NOT valid (use | operator)

TYPE MODIFIERS:
  readonly T             - Cannot be reassigned
  readonly T[]           - Readonly array
  Readonly<T>            - All properties readonly
  const                  - Block-scoped constant
  static                 - Class member (shared)
  
FUNCTION TYPES:
  (a: T, b: U) => V      - Function type
  (...args: T[]) => V    - Rest parameters
  (a?: T) => V           - Optional parameter
  (a: T = 0) => V        - Default parameter
  <T>(a: T) => T         - Generic function
  this: T                - Context type
  
ACCESS MODIFIERS:
  public                 - Accessible everywhere (default)
  private                - Only within class
  protected              - Within class and subclasses
  readonly               - Cannot be reassigned
  
CLASS MEMBERS:
  constructor            - Initializer
  static                 - Shared by class
  abstract               - Must be implemented
  get / set              - Property accessors
  
GENERICS:
  <T>                    - Type parameter
  <T, U>                 - Multiple parameters
  <T extends U>          - Constraint (T must be U-like)
  <T extends any[]>      - Constraint to array
  <K extends keyof T>    - Key constraint
  
CONDITIONAL TYPES:
  T extends U ? X : Y    - Conditional type
  infer R                - Extract type from pattern
  
MAPPED TYPES:
  { [K in Keys]: T }     - Loop over keys
  { [K in Keys]-?: T }   - Remove optional
  { [K in Keys]+: T }    - Make required
  { readonly [K in Keys]: T }  - Make readonly

UTILITY TYPES:
  Partial<T>             - All properties optional
  Required<T>            - All properties required
  Pick<T, K>             - Select specific properties
  Omit<T, K>             - Exclude specific properties
  Record<K, V>           - Object type with K keys
  Readonly<T>            - All properties readonly
  ReadonlyArray<T>       - Readonly array
  Extract<T, U>          - Get matching types from union
  Exclude<T, U>          - Remove types from union
  NonNullable<T>         - Remove null/undefined
  ReturnType<F>          - Get function return type
  Parameters<F>          - Get function parameters
  Awaited<T>             - Unwrap Promise
  
OPERATORS:
  T | U                  - Union (or)
  T & U                  - Intersection (and)
  keyof T                - Keys of object
  T[K]                   - Index access
  T extends U            - Assignable check
  
COMMON PATTERNS:
  const x as const       - Literal type inference
  const x: const         - NOT valid syntax
  x as T                 - Type assertion (casting)
  !x                     - Non-null assertion
  x?.y                   - Optional chaining
  x ?? y                 - Nullish coalescing
  x ?? y ?? z            - Chained nullish
  x as T as U            - Double assertion

JSX TYPES (React):
  JSX.Element            - React element
  React.FC<Props>        - Function component
  React.ReactNode        - Any renderable
  React.CSSProperties    - Style object type

MODULES:
  export                 - Export named
  export default         - Export default
  export { a, b }        - Re-export
  export * from "./x"    - Export all
  import { a } from "./x"    - Import named
  import x from "./x"        - Import default
  import * as x from "./x"   - Import namespace
  import "./x"               - Import for side effects

================================================================================
*/