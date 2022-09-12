export default function analyzeArray(array){
    const copy = [...array]
    const avg = copy.reduce((prev, cur) => prev = prev+cur, 0)/array.length
    const max = Math.max(...array)
    const min = Math.min(...array)
    return {'average':avg, 'length': array.length, 'min':min, 'max':max}
}