import { CustomStack } from "../../src/data_structures/custom_stack";

describe("CustomStack", () => {
    it("should create an empty stack", () => {
        const stack = new CustomStack();
        expect(stack).toBeDefined();
        expect(stack.size).toBe(0);
        expect(stack.top).toBeNull();
    });

    it("should push a node onto the stack", () => {});

    it("should pop a node off the stack", () => {});

    it("should peek at the top of the stack", () => {});

    it("should determine if the stack is empty", () => {});
});