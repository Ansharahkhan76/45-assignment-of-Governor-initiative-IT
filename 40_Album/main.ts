function MakeAlbum(artist: string, title: string): {artist: string, title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}

let album = MakeAlbum("afsha", "light")
console.log(album)

 album = MakeAlbum("maheera", "red wave")
console.log(album)

 album = MakeAlbum("laiba", "seenbreeze")
console.log(album)