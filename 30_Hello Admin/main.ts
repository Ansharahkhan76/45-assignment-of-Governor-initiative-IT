let users = ["Afsha", "Laiba", "Ayesha", "Bisma", "fatima"];

for(let user of users) {
    if (user == "Admin") {
        console.log("Hello Admin, would you like to see a status report?")
    } else {
        console.log(`Hello ${user}, Thank You for logging in again.`)
    }
}