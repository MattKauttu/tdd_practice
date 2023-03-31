import { CustomNode } from "../../src/data_structures/custom_node";

describe("CustomNode", () => {
    it("should create a node with a value", () => {
        const node = new CustomNode(1);
        expect(node).toBeDefined();
    });

    it("should be able to get its value", () => {
        const node = new CustomNode(1);
        expect(node.getValue()).toBe(1);
    });

    it("should be able to set its value", () => {
        const node = new CustomNode(1);
        node.setValue(2);
        expect(node.getValue()).toBe(2);
    });

    it("should be able to get and set its next node", () => {
        const node = new CustomNode(1);
        const nextNode = new CustomNode(2);
        node.setNext(nextNode);
        expect(node.getNext()).toBe(nextNode);
    });

    it('should be able to determine if it has a next node', () => {
        const node = new CustomNode(1);
        const nextNode = new CustomNode(2);
        node.setNext(nextNode);
        expect(node.hasNext()).toBe(true);
    });

    it('should be able to determine if it does not have a next node', () => {
        const node = new CustomNode(1);
        expect(node.hasNext()).toBe(false);
    });

    it('should be able to convert itself to a string', () => {
        const node = new CustomNode(1);
        expect(node.toString()).toBe('1');
    });

    it('should be able to compare itself to another node', () => {
        const node = new CustomNode(1);
        const otherNode = new CustomNode(1);
        expect(node.equals(otherNode)).toBe(true);
    });

    it('should be able to clone itself', () => {
        const node = new CustomNode(1);
        const clonedNode = node.clone();
        expect(clonedNode).toBeDefined();
        expect(clonedNode.getValue()).toBe(1);
    });
});
