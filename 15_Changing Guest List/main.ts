let Guest_List = ["Afsha", "Laiba", "Ayesha", "Bisma"]

let Dontcome = Guest_List[1] // Achi bat Hy Mat Ao

console.log(Dontcome, "is Not coming."); // Shukr Ek Plate Biryani Bach Gai.

Guest_List.splice(1, 1, "Babu");

Guest_List.forEach(guest => console.log(`Asslamualaikum ${guest}, would you like to dinner with me?`))

