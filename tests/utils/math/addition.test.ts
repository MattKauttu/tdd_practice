import { addNumbers } from "../../../src/utils/math/addition";

describe("addNumbers", () => {
    test('adds two numbers correctly', () => {
        expect(addNumbers(5, 10)).toBe(15);
    });
});