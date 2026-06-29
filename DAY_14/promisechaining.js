function login(email, password){
    return new Promise((res,rej) =>{
        console.log("Aapke credential verify ho rhe hai thoda wait kariye");

        setTimeout(() => {
            if (email=="test@gmail.com" && password == "123"){
                res({
                    id:1,
                    name:"Mehul"
                })
            } 
            else {
                rej("Invalid credential")
            }
        }, 3000);
    })
}

login("test@gmail.com", "123")
.then((userData) =>{
    return userData
})
.then((data) =>{
    console.log(data)
    return data.id
})
.then((info) =>{
    console.log(info)
})
.catch((err) =>{
    console.log(err)
})