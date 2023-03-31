
/**
 * CustomNode is a node that can be used in a graph.

 * It has a value and a reference to the next node
 * @class CustomNode
 */
export class CustomNode {

    private value: any;
    private next: CustomNode | null;


    /**
     * Create a new CustomNode with the provided value.
     * @param value The value to be stored in the node.
     */
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }

    /**
     * Get the value stored in the node.
     * @returns The value stored in the node.
     */
    getValue() {
        return this.value;
    }

    /**
     * Set the value stored in the node.
     * @param value The value to be stored in the node.
     */
    setValue(value: any) {
        this.value = value;
    }

    /**
     * Get the next node.
     * @returns The next node, or null if there is no next node.
     */
    getNext() {
        return this.next;
    }

    /**
     * Set the next node.
     * @param node The next node.
     */
    setNext(node: CustomNode) {
        this.next = node;
    }

    /**
     * Check if the node has a next node.
     * @returns True if the node has a next node, false otherwise.
     */
    hasNext() {
        return this.next != null;
    }

    /**
     * Convert the node's value to a string and return it.
     * @returns The string representation of the node's value.
     */
    toString() {
        return this.value.toString();
    }

    /**
     * Compare the node's value to another node's value.
     * @param node The node to compare with.
     * @returns True if the nodes are equal, false otherwise.
     */
    equals(node: CustomNode) {
        return this.value === node.getValue();
    }

    /**
     * Create a shallow copy of the node with the same value.
     * @returns A new CustomNode with the same value.
     */
    clone(): CustomNode {
        return new CustomNode(this.value);
    }

}
