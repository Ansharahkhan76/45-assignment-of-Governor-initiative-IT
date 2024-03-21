let Person_Name = "Anshrah khan";
console.log(Person_Name.toLowerCase()) // Lower Case
console.log(Person_Name.toUpperCase()) // Upper Case
console.log(Person_Name.replace(/\b\w/g, (char) => char.toUpperCase())); // Title Case