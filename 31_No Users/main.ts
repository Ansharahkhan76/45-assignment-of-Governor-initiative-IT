// No Users

let users = ["Afsha", "Laiba", "Ayesha", "Bisma", "fatima"];

if (users.length == 0) {
    console.log("We need to find Some Users")
} else {
    for(let user of users) {
        if(user === "admin") {
            console.log("Hello admin, Would you like to see a status report?")
        } else {
            console.log(`Hello ${user}, Thank You for logging in again.`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log("We need to fine somes users.")
}