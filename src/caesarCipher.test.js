import caesarCipher from "./caesarCipher";

test('works for one word with shift 1', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
}) 

test('work for multi-word strings', ()=>{
    expect(caesarCipher('multiple words it is', 2)).toBe('ownvkrng yqtfu kv ku')
})

test('Respects capital characters', ()=>{
    expect(caesarCipher('ABC', 1)).toBe('BCD')
})

test('works with negative shifts', () => {
    expect(caesarCipher('abc', -20)).toBe('ghi')
})

test('works with shifts that cause wraps', ()=>{
    expect(caesarCipher('abc', 25)).toBe('zab')
})