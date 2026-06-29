// objects

const product = [
    {
        id: "1",
        name: "laptop",
        price: 70000
    },
    {
        id: "2",
        name: "Bonker",
        price: 500
    },
    {
        id: "3",
        name: "Watch",
        price: 10000
    }
]
console.log(product[0].id);

let sum =0;
product.forEach(i =>{
    sum = sum + i.price;
    console.log(i.name)
    

})
console.log(sum)


