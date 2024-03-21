// Creating a Guest List Array

let Guest_List = ["Afsha", "Laiba", "Ayesha", "Bisma"]

// Making variable for those guest who can't come

let Dontcome = Guest_List[1] // Achi bat Hy Mat Ao

// Print the name of guest who can,t come

console.log(Dontcome, "is Not coming."); // Shukr Ek Plate Biryani Bach Gai.

// Add or remove values from Guest List Array

Guest_List.splice(1, 2, "Fatima");

// Message Print for Bigger Table

console.log("Good News ! We have Found a Bigger Table For Dinner");

// Adding a new value at starting index of array

Guest_List.unshift("Anshu");

// Adding a new value at ending index of array

Guest_List.push("Amna");

// Get a middle index of our guest list array

let middleIndex = Math.floor(Guest_List.length / 2);

// Adding a new guest to middle index of array

Guest_List.splice(middleIndex, 0, "Malaika");

// Print message of Updated list

console.log("Updated list of our Guests");

// Sending a invitation message to our Guests one by one with thier names.

Guest_List.forEach(OneGuest => console.log(`Asslamualaikum ${OneGuest}, would you like to dinner with me?`));


//Start 17 Question of 45 Assigments
// Inform that only two Guest can be invited for dinner

console.log("Unfortunately , the new dinner table won't arrive on time, so I can only invite two Guests to dinner with me.");


// Using while loop to remove Guest from the array until only two names remain

while(Guest_List.length > 2) {
    let RemoveGuest = Guest_List.pop();
    console.log(`Sorry, ${RemoveGuest} I can't invite you to dinner.`);
}

//Sending an invitation to the last two Guests on the list

console.log("Invitation to the last 2 Guests");
Guest_List.forEach(LastTwo => console.log(`luckly, ${LastTwo} You are still invited to dinner`));

// Removing the last Guest from the list

Guest_List.pop();
Guest_List.pop();



console.log("Empty list: ", Guest_List);


// Guest list empty hogai "PROGRAM TOUUUUU WARRRR GAYA".
