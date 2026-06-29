function movie_ticket(name) {
    return new Promise((res, rej) => {
        console.log("Select your movie")
        setTimeout(() => {
            console.log(name, " is selected successfully")
            res()
        }, 1000)
    })

}

function select_seat(seat) {
    return new Promise((res, rej) => {
        console.log("Select your seats")
        setTimeout(() => {
            console.log(seat, "seats are booked successfully")
            res()
        }, 2000)
    })

}

function payment() {
    return new Promise((res, rej) => {
        console.log("payment in processing")
        setTimeout(() => {
            console.log("payment processed successfully")
            res()
        }, 3000)
    })

}

function generate_ticket() {
    return new Promise((res, rej) => {
        console.log("generating your ticket")
        setTimeout(() => {
            console.log("your tickets are generated successfully")
            res()
        }, 4000)
    })

}

movie_ticket("avengers")
    .then((select_seat) =>{
        return select_seat
    })
    .then(payment)
    .then(generate_ticket)
    .catch((err) => {
        console.log("404 error occured")
    })
