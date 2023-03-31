import { CustomNode } from "./custom_node";

export class CustomStack {
    top: CustomNode | null;
    size: number;
    
    constructor(top: CustomNode | null = null, size: number = 0) {
        this.top = top;
        this.size = size;
    }
    
    push(data: any): void {}
    
    pop(): any {}
    
    peek(): any {}
    
    // Uncomment the following line when you are ready to implement the function.
    //isEmpty(): boolean {}
}