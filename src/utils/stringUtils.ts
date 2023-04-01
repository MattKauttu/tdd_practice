export class StringUtils {
    public static reverse(input: string): string {
        return [...input].reverse().join("");
    }
}
