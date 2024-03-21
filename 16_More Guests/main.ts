// Creating a Guest List Array

let Guest_List = ["Afsha", "Laiba", "Ayesha", "Bisma"]

// Making variable for those guest who can't come

let Dontcome = Guest_List[1] // Achi bat Hy Mat Ao

// Print the name of guest who can,t come

console.log(Dontcome, "is Not coming."); // Shukr Ek Plate Biryani Bach Gai.

// Add or remove values from Guest List Array

Guest_List.splice(1, 2, "Babu");

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

