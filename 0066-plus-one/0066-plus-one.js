const plusOne = (digits) =>{
    const number =BigInt(digits.join(''))
    const incrementNumber = number + 1n;
    return incrementNumber.toString().split('').map(Number)
}