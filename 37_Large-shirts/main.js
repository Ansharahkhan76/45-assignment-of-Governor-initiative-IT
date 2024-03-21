function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love TypeScript'; }
    console.log("You have order a ".concat(size, ", shirt that says ").concat(text));
}
make_shirt();
make_shirt('medium');
