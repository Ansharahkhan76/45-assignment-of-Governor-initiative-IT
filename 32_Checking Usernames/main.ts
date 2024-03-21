// Checking Usernames

let Current_users = ["eric", "Bisma", "Fatima", "afsha", "Admin"];
let New_Users = ["Afsha", "John", "eric", "Noor", "Fatima"];


let Current_user_lower = Current_users.map(user => user.toLowerCase());

for(let New_user of New_Users) {
    if(Current_user_lower.includes(New_user.toLowerCase())) {
        console.log(`Sorry ${New_user}, that name is taken`)
    } else {
        console.log(`Yes ${New_user}, is still in available list.`)
    }
}

