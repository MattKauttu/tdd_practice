import { StringUtils } from '@utils/string_utils';

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

describe('isPalindrome', () => {
    it('should return true for a palindrome', () => {
        const input = 'racecar';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
        const input = 'hello';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(false);
    });

    it('should return true for a palindrome with spaces', () => {
        const input = 'hello world dlrow olleh';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(true);
    });

    it('should return false for a non-palindrome with spaces', () => {
        const input = 'hello world';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(false);
    });

    it('should return true for a palindrome with numbers', () => {
        const input = '123456789987654321';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(true);
    });

    it('should return false for a non-palindrome with numbers', () => {
        const input = '123456789';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(false);
    });

    it('should return true for a palindrome with special characters', () => {
        const input = '/*&^%$#@!@#$%^&*/';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(true);
    });

    it('should return false for a non-palindrome with special characters', () => {
        const input = '/*&^%$#@!';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(false);
    });

    it('should return true for a palindrome with emojis', () => {

        const input = '🥕 ok 😀\u{1F4A9} \u{1F4A9}😀 ko 🥕';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(true);
    });

    it('should return false for a non-palindrome with emojis', () => {
        const input = '🥕 ok 😀\u{1F4A9}';
        const actual = StringUtils.isPalindrome(input);
        expect(actual).toBe(false);
    });
});
