// 1
const price = [1000,2000,3000]
const discount= price.map(i => (i-i*10/100))
console.log(discount)

// 2
const users = [
    {id:1,
        name: "Sameer"
    },
    {id:2,
    name: "Akhil"
    },
    {id:3,
    name: "Mehul"
    }
]

const names = users.map(i => (i.name))
console.log(names)

// 3
const products = [
    {   name: "laptop",
        price: 50000
    },
    {
        name: "Phone",
        price: 30000
    }
]
const item = products.map(i => i.name + - i.price)
console.log(item)

// 4
const products = [
    {   name: "laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Phone",
        price: 30000
    }
]
const high_products = products.filter(i => i.price>20000)
console.log(high_products)

// 5
const users = [
    {name:"Sameer", active:"true"},
    {name:"Rahul", active:"False"},
    {name:"Mehul", active:"true"}

]
const active_user = users.filter(i => i.active=="true")
console.log(active_user)

// 6
