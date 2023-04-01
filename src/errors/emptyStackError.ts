export class EmptyStackError extends Error {
    constructor() {
        super("The stack is empty");
        this.name = "EmptyStackError";
    }
}