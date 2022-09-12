import reverseString from "./reverseString";

test('reverse one word', ()=>{
    expect(reverseString("abc")).toBe('cba')
})

test('Reverses multiple word string', ()=>{
    expect(reverseString('abc 123')).toBe('321 cba')
})