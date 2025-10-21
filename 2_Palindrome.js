function palindrome(string){
    const reverse = string.split('').reverse().join('');
    return reverse === string;
}
console.log(palindrome('madam'));