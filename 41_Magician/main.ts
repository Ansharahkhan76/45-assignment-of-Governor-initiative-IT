function show_magician(magician: string[]): void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["afsha", "laiba", "naheed"];
show_magician(magician)