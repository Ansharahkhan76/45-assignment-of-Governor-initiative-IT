function make_shirt(size = 'large', text = 'I love TypeScript'): void {
    console.log(`You have order a ${size}, shirt that says ${text}`)
}

make_shirt();
make_shirt('medium');

// diffrent message
make_shirt('small', 'I need a big shirt to wear');