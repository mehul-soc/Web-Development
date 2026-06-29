// map, reduce, filter methods

const nums = [-1, 3, 5, 6, 2, 4]
console.log(nums)
const ans = nums.map( sum => {
    return sum + 2
})
console.log(ans)
const ans1 = ans.filter(positive => {
    return positive%2==0
})
console.log(ans1)
const ans2 = ans1.reduce((item,ans1)=>{
    return item + ans1

}, 0)
console.log(ans2)