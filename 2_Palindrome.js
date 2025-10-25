function palindrome(string){
    let cleaned = string.split('').reverse().join('');
    return cleaned === string;
}

let string = prompt('enter the string for check palindrome: ')
console.log(`entered num ${string} is ${palindrome(string) ? 'palindrome': 'not_palindrome'}`)
