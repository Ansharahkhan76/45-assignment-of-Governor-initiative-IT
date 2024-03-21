function sandwiches(...items:string[]):void {
    console.log("Sandwiches order: ")

    for(let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("Enjoy your Sandwiches Anshrah Khan")

sandwiches('Capcicum', 'tomato', 'chicken')
sandwiches('beef', 'cheese')
sandwiches('garlic chicken', 'soya souce' )