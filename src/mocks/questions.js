const games = [{
    type: 'artist',
    game: {
        song: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
        answer: 'Бабушка'
    },
    asnwers: [
        { artist: 'Пелагея', picture: 'https://http.cat/404'},
        { artist: 'Бабушка', picture: 'https://http.cat/200'},
        { artist: 'Lorde', picture: 'https://http.cat/500'},
    ]
}, {
    type: 'genre',
    style: 'rock',
    game: [
        {
            song: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
            style: 'rock'
        },
        {
            song: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
            style: 'pop'
        },
        {
            song: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
            style: 'classical'
        },
        {
            song: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg',
            style: 'heavy metal'
        },
    ]
}];