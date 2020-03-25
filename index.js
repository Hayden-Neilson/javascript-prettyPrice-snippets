function prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension
}


console.log(prettyPrice(3.20, 99));
console.log(prettyPrice(3.99, 0.20));
console.log(prettyPrice(3.20, .95));
console.log(prettyPrice(3, 95));
console.log(prettyPrice(3, 2))
