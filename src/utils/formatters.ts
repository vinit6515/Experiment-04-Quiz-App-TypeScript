/**
 * @description covert numbers to letters, 1=A, 2=B, 3=C....
 * @param number
 * @returns String
 */

export const numberToLetter = (number: number): string => {
    const baseChar = 'A'.charCodeAt(0);
    let letters = '';
    do {
        number -= 1;
        letters = String.fromCharCode(baseChar + (number % 26)) + letters;
        number = (number / 26) >> 0; // quick `floor`
    } while (number > 0);

    return letters;
};
