const c1 = 'aaabbcccccdeeeeeaaa';

let compressed = '';
let currentChar = c1[0];
let count = 1;

for (let i = 1; i < c1.length; i++) {
    if (c1[i] === currentChar) {
        count++;
    } else {
        compressed += currentChar + count;
        currentChar = c1[i];
        count = 1;
    }
}

compressed += currentChar + count;

console.log(currentChar)
console.log(count)

console.log(compressed);
