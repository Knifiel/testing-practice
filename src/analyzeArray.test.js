import analyzeArray from "./analyzeArray";

test('works for array with one number', ()=>{
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    })
})

test('works with multiple numbers array', () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})