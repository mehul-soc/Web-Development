function loginUser() {
    return new Promise((res,rej) => {
        console.log("Aap login  ho rhe....")

    setTimeout(() => {
        console.log("aap login ho chuke hai ")
        res();
    },3000)
    })
    

}
function getProfile() {
    return new Promise((res,rej) =>{
        console.log("profile is fetching")

    setTimeout(() => {
        console.log("aprofile has been fetched ")
        res();
    },3000)

    })
    
}
function getOrder() {
    return new Promise((res,rej) =>{
        console.log("aapka order ready ho rha hain ")

    setTimeout(() => {
        console.log("aapka order ready ho chuka hain")
        res();
    },3000)

    })
    
    
}
function payment() {
    return new Promise((res,rej) =>{
        console.log("payment pending ")

    setTimeout(() => {
        console.log("payment processed")
        res();
    },3000)

    })
    
}

loginUser()
.then(getProfile)
.then(getOrder)
.then(payment)
.catch((err) =>{
    console.log("Error detected")
})