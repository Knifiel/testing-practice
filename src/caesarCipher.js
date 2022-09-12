export default function caesarCipher(string, shift){
    shift = (26+shift)%26
    const stringArr = string.split('')
    const newString = stringArr.map(letter => {
        if(!!letter.match(/\W/)){
            return letter
        } else {
            return shiftLetters(letter, shift)
        }
    });
    return newString.join('')
}

function shiftLetters(letter, shift){
    let letterCode = letter.charCodeAt(0)
    let first, last
    if(!!letter.match(/[a-z]/)){
        first = 'a'.charCodeAt(0)
        last = 'z'.charCodeAt(0)}
    else{
        first = 'A'.charCodeAt(0)
        last = 'Z'.charCodeAt(0)
    }
    if(letterCode+shift > last){
        letterCode = first + letterCode+shift-last-1
    } else {
        letterCode = letterCode+shift
    }
    return String.fromCharCode(letterCode)
}