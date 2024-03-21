// Making a array of contries in orignal order.

let countries_To_Visit  = ["China", "Denmark", "Brazil", "Austerelia"];

// Print orignal Array

console.log("Orignal array: ",countries_To_Visit);

// Print the array in Alphabetical Order without modifying the actuall array list 

console.log("Alphabetical Order : ",[...countries_To_Visit].sort());

// Show that the array is still in its orignal order.

console.log("Still in Orignal order :", countries_To_Visit);

// Print the array in reversed order without modifying the actuall array list

console.log("Reverse Order :", [...countries_To_Visit].reverse());

// Again print orignal array

console.log("Orignal array: ",countries_To_Visit);

// Change the orignal order now

console.log("Orignal array reversed :", countries_To_Visit.reverse());

// Print the array to show that it's back to its order 

console.log("Back to orignal Order :", countries_To_Visit.reverse());

// Print the array to show that its ordered has been change to alphabetical order now

console.log("Sorted in alphabetical order :", countries_To_Visit.sort());

// we have changed again the orignal array order now its reversed order

console.log("Orignal array reversed again :", countries_To_Visit.reverse());