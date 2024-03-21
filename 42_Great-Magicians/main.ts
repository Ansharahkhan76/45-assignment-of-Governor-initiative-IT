function make_great(magician: string[]): void{
    const greatMagician: string[] = [];
    for(let i = 0; 1 < magician.length; i++)/* i stand for index string*/ {
        magician[i] = magician[i] + 'The great'
    }   
    return greatMagician;
}

const magician3: string[] = ["afsha", "laiba", "mahnoor"];
const greatMagician2: string[] = make_great2(magician3);
show_magician(magician3);
show_magician(greatMagician2); /*Calling the show_