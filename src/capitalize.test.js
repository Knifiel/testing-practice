import capitalize from "./capitalize"

test('"test" returns "Test"', () =>{
    expect(capitalize('test')).toBe('Test')
})

test('"long test string, with punctuation"', () =>{
    expect(capitalize('long, test, string...')).toBe('Long, test, string...')
})
