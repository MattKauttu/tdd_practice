export class StringUtils {
    public static reverse(input: string): string {
        return [...input].reverse().join("");
    }

    public static isPalindrome(input: string): boolean {
        return input === StringUtils.reverse(input);
    }
}
