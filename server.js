const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

app.use(cors());

const filmography = {
    'the thing':{
        'year': 1982,
        'mpaaRating': 'R',
        'runtime': '109 mins',
        'genre':['Horror', 'Mystery', 'Sci-Fi'],
        'taglines':'Anytime. Anywhere. Anyone',
        'budget': '$15 million',
        'boxOffice': '$20.6 million'
    },
    'they live':{
        'year': 1988,
        'mpaaRating': 'R',
        'runtime': '104 mins',
        'genre':['Action', 'Horror', 'Sci-Fi'],
        'taglines':"I have come here to chew bubblegum and kick ass...and I'm all out of bubblegum.",
        'budget': '$4 million',
        'boxOffice': '$13.4 million'
    },
    'unknown': {
        'name': 'Sorry, not a John Carpenter film.'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const filmName = req.params.name.toLowerCase();
    if (filmography[filmName]) {
        res.json(filmography[filmName])
    }
    res.json(filmography['unknown'])
})

app.listen(port, () => {
    console.log(`Server runnning on port: ${port}`)
})