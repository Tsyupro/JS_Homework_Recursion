function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); 

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

console.log(gcd(48, 18)); 

function maxDigit(num) {
    if (num < 10) {
        return num;
    }
    const lastDigit = num % 10;
    const restMax = maxDigit(Math.floor(num / 10));
    return Math.max(lastDigit, restMax);
}

console.log(maxDigit(753912)); 

function isPrime(num, divisor = 2) {
    if (num <= 2) {
        return num === 2;
    }
    if (num % divisor === 0) {
        return false;
    }
    if (divisor * divisor > num) {
        return true;
    }
    return isPrime(num, divisor + 1);
}

console.log(isPrime(17)); 

function primeFactors(num, divisor = 2, factors = []) {
    if (num <= 1) {
        return factors;
    }
    if (num % divisor === 0) {
        factors.push(divisor);
        return primeFactors(num / divisor, divisor, factors);
    }
    return primeFactors(num, divisor + 1, factors);
}

console.log(primeFactors(18)); 

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); 
