import { CustomStack } from "@data_structures/custom_stack";
import { EmptyStackError } from "@errors/emptyStackError";

describe("CustomStack", () => {
    it("should create an empty stack", () => {
        const stack = new CustomStack<number>();
        expect(stack).toBeDefined();
        expect(stack.getSize()).toBe(0);
        expect(stack.peek()).toBeNull();
    });

    it('should allow pushing and peeking elements of a specific type', () => {
        const numberStack = new CustomStack<number>();
        numberStack.push(1);
        expect(numberStack.peek()).toBe(1);

        const stringStack = new CustomStack<string>();
        stringStack.push('hello');
        expect(stringStack.peek()).toBe('hello');

        const nullNumberStack = new CustomStack<number>();
        expect(nullNumberStack.peek()).toBeNull();
    });

    it('should not allow pushing elements of a different type', () => {
        const numberStack = new CustomStack<number>();

        numberStack.push(1); // Works

        // @ts-expect-error
        numberStack.push('not a number'); // TypeScript error
    });

    it('should work with custom types', () => {
        type Person = { name: string; age: number };

        const personStack = new CustomStack<Person>();
        const person: Person = { name: 'John Doe', age: 30 };

        personStack.push(person);
        expect(personStack.peek()).toEqual(person);
    });

    it("should pop nodes off the stack", () => {
        const stack = new CustomStack<number>();
        stack.push(1);
        stack.push(2);
        expect(stack.getSize()).toBe(2);
        expect(stack.peek()).toBe(2);

        const poppedElement = stack.pop();
        expect(poppedElement).toBe(2);
        expect(stack.getSize()).toBe(1);
        expect(stack.peek()).toBe(1);

        const poppedElement2 = stack.pop();
        expect(poppedElement2).toBe(1);
        expect(stack.getSize()).toBe(0);
        expect(stack.peek()).toBeNull();
    });

    it('should throw an EmptyStackError when popping an empty stack', () => {
        const stack = new CustomStack<number>();
        expect(() => stack.pop()).toThrow(EmptyStackError);
    });

    it("should get the size of the stack", () => {
        const stack = new CustomStack<number>();
        expect(stack.getSize()).toBe(0);
    });

    it("should determine if the stack is empty", () => {
        const stack = new CustomStack<number>();
        expect(stack.isEmpty()).toBe(true);
    });

    it('should not be empty after pushing an element', () => {
        const stack = new CustomStack<number>();
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });

    it('should be empty after popping all elements', () => {
        const stack = new CustomStack<number>();
        stack.push(1);
        stack.push(2);
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    it("should clear the stack", () => {
        const stack = new CustomStack<number>();
        stack.push(1);
        stack.push(2);
        stack.clear();
        expect(stack.getSize()).toBe(0);
        expect(stack.peek()).toBeNull();
    });
});