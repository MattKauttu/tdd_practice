import readline from 'readline';
import { StringUtils } from "@utils/string_utils";
import { CustomStack } from "@data_structures/custom_stack";

// Simple driver program to demonstrate the palindrome checker
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a word to check if it is a palindrome: ', (input: string) => {
    const stack = new CustomStack<string>();

    for (let i = 0; i < input.length; i++) {
        stack.push(input[i]);
    }

    let reversedString = "";

    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    const isPalindrome = StringUtils.isPalindrome(reversedString);

    if (isPalindrome) {
        console.log(`${input} is a palindrome`);
    } else {
        console.log(`${input} is not a palindrome`);
    }
    
    rl.close();
});
