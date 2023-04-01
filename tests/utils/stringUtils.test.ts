import { StringUtils } from '@utils/stringUtils';

describe('reverse', () => {

    it('should reverse a string', () => {
        const input = 'hello';
        const expected = 'olleh';
        const actual = StringUtils.reverse(input);
        expect(actual).toEqual(expected);
    });

    it('should reverse a string with spaces', () => {
        const input = 'hello world';
        const expected = 'dlrow olleh';
        const actual = StringUtils.reverse(input);
        expect(actual).toEqual(expected);
    });

    it('should reverse a string with numbers', () => {
        const input = '123456789';
        const expected = '987654321';
        const actual = StringUtils.reverse(input);
        expect(actual).toEqual(expected);
    });

    it('should reverse a string with special characters', () => {
        const input = '/*&^%$#@!';
        const expected = '!@#$%^&*/';
        const actual = StringUtils.reverse(input);
        expect(actual).toEqual(expected);
    });

    it('should reverse a string with emojis', () => {
        const input = '🥕 ok 😀\u{1F4A9}';
        const expected = '\u{1F4A9}😀 ko 🥕';
        const actual = StringUtils.reverse(input);
        expect(actual).toEqual(expected);
    });
});
