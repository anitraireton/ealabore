function shuffle(array) {
    let m = array.length, i, t;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.random() * m-- | 0;

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}
