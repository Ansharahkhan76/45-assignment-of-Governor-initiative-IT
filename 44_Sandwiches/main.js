function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwiches order: ");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("Enjoy your Sandwiches Anshrah Khan");
sandwiches('Capcicum', 'tomato', 'chicken');
sandwiches('beef', 'cheese');
sandwiches('garlic chicken', 'soya souce');
