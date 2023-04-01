import { EmptyStackError } from "@errors/emptyStackError";

export class CustomStack<T> {

    private elements: T[];
    private top: T | null;
    private size: number;

    constructor() {
        this.elements = [];
        this.top = null;
        this.size = 0;
    }

    public push(element: T): void {
        this.elements.push(element);
        this.top = element;
        this.size++;
    }

    public pop(): T {
        if (this.isEmpty()) {
            throw new EmptyStackError();
        }

        const poppedElement = this.elements.pop();
        this.size--;
        if (this.isEmpty()) {
            this.top = null;
        } else {
            this.top = this.elements[this.elements.length - 1];
        }

        // Ignoring error ts(2322) because we know that poppedElement is not undefined after checking if the stack is empty
        // @ts-ignore
        return poppedElement;
    }

    public peek(): T | null {
        return this.top;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public clear(): void {
        this.elements = [];
        this.size = 0;
        this.top = null;
    }
}