import calculator from "./calculator";

test('check add', ()=>{
    expect(calculator.add(1,2)).toBe(3)
})
test('check subtraction', () =>{
    expect(calculator.subtract(3,2)).toBe(1)
})
test('check multiplication', ()=>{
    expect(calculator.multiply(4,5)).toBe(20)
})
test('check division', () =>{
    expect(calculator.divide(55,5)).toBe(11)
})