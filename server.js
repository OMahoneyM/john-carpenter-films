const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

app.use(cors());

const filmography = {
    'dark star':{
        'title': 'Dark Star',
        'year': 1974,
        'mpaaRating': 'G',
        'runtime': '83 mins',
        'genre':['Comedy','Sci-Fi'],
        'stars':["Dan O'Bannon", "Dre Pahich", "Brian Narelle"],
        'poster':'http://www.impawards.com/1974/posters/dark_star_ver2.jpg',
        'taglines':'What Do You Say To A Talking Bomb? All Systems Snafu!!!',
        'budget': '$60,000',
        'boxOffice': null
    },
    'assault on precinct 13':{
        'title':'Assault on Precinct 13',
        'year': 1976,
        'mpaaRating': 'R',
        'runtime': '91 mins',
        'genre':['Action', 'Crime', 'Thriller'],
        'stars':['Austin Stoker', 'Darwin Joston', 'Laurie Zimmer'],
        'poster':'http://www.impawards.com/1976/posters/assault_on_precinct_thirteen_xlg.jpg',
        'taglines':'The gang that swore a blood oath to destroy Precinct 13... and every cop in it!',
        'budget': '$150,000',
        'boxOffice': null
    },
    'halloween':{
        'title':'Halloween',
        'year': 1978,
        'mpaaRating': 'R',
        'runtime': '91 mins',
        'genre':['Horror', 'Thriller'],
        'stars':['Donald Pleasence', 'Jamie Lee Curtis', 'Debra Hill'],
        'poster':'http://www.impawards.com/1978/halloween.html',
        'taglines':'The trick was to stay alive.',
        'budget': '$325,000',
        'boxOffice': '$47 million'
    },
    'the fog':{
        'title':'The Fog',
        'year': 1980,
        'mpaaRating': 'R',
        'runtime': '89 mins',
        'genre':['Horror', 'Thriller'],
        'stars':['Adrienne Barbeau', 'Jamie Lee Curtis', 'Janet Leigh'],
        'poster':'http://www.impawards.com/1980/posters/fog_ver2_xlg.jpg',
        'taglines':"John Carpenter's tale of vengeance beyond the grave...",
        'budget': '$1 million',
        'boxOffice': '$21.4 million'
    },
    'escape from new york':{
        'title':'Escape from New York',
        'year': 1981,
        'mpaaRating': 'R',
        'runtime': '99 mins',
        'genre':['Action', 'Adventure', 'Sci-Fi'],
        'stars':['Kurt Russell', 'Lee Van Cleef', 'Ernest Borgnine'],
        'poster':'http://www.impawards.com/1981/posters/escape_from_new_york_ver2_xlg.jpg',
        'taglines':"The world's greatest leader is a hostage in the most dangerous place on Earth. Now only the deadliest man alive can save him.",
        'budget': '$6 million',
        'boxOffice': '$25.2 million'
    },
    'the thing':{
        'title': 'The Thing',
        'year': 1982,
        'mpaaRating': 'R',
        'runtime': '109 mins',
        'genre':['Horror', 'Mystery', 'Sci-Fi'],
        'stars':['Kurt Russell', 'Wilford Brimley', 'Keith David'],
        'poster':'http://www.impawards.com/1982/posters/thing_xlg.jpg',
        'taglines':'Anytime. Anywhere. Anyone',
        'budget': '$15 million',
        'boxOffice': '$20.6 million'
    },
    'christine':{
        'title':'Christine',
        'year': 1983,
        'mpaaRating': 'R',
        'runtime': '110 mins',
        'genre':['Horror', 'Thriller'],
        'stars':['Keith Gordon', 'John Stockwell', 'Alexandra Paul'],
        'poster':'http://www.impawards.com/1983/posters/christine_xlg.jpg',
        'taglines':"She'll possess you. Then destroy you. She's death on wheels. She's...",
        'budget': '$9.7 million',
        'boxOffice': '$21 million'
    },
    'starman':{
        'title':'Starman',
        'year': 1984,
        'mpaaRating': 'PG',
        'runtime': '115 mins',
        'genre':['Romance', 'Sci-Fi'],
        'stars':['Jeff Bridges', 'Karen Allen', 'Charles Martin Smith'],
        'poster':'http://www.impawards.com/1984/starman_ver1.html',
        'taglines':"In 1977 Voyager II was launched into space, inviting all lifeforms in the universe to visit our planet. Get ready. Company's coming.",
        'budget': '$22 million',
        'boxOffice': '$28.7 million'
    },
    'big trouble in little china':{
        'title':'Big Trouble in Little China',
        'year': 1986,
        'mpaaRating': 'PG-13',
        'runtime': '99 mins',
        'genre':['Action', 'Adventure', 'Comedy'],
        'stars':['Kurt Russell', 'Kim Cattrall', 'Dennis Dun'],
        'poster':'http://www.impawards.com/1986/big_trouble_in_little_china.html',
        'taglines':"Adventure doesn't come any bigger!",
        'budget': '$25 million',
        'boxOffice': '$11 million'
    },
    'prince of darkness':{
        'title':'Prince of Darkness',
        'year': 1987,
        'mpaaRating': 'R',
        'runtime': '102 mins',
        'genre':['Horror'],
        'stars':['Donald Pleasence', 'Lisa Blount', 'Jameson Parker'],
        'poster':'http://www.impawards.com/1987/posters/prince_of_darkness_xlg.jpg',
        'taglines':'Where are you...? Christ?',
        'budget': '$3 million',
        'boxOffice': '$14 million'
    },
    'they live':{
        'title':'They Live',
        'year': 1988,
        'mpaaRating': 'R',
        'runtime': '104 mins',
        'genre':['Action', 'Horror', 'Sci-Fi'],
        'stars':['Roddy Piper', 'Keith David', 'Meg Foster'],
        'poster':'http://www.impawards.com/1988/posters/they_live_xlg.jpg',
        'taglines':"I have come here to chew bubblegum and kick ass...and I'm all out of bubblegum.",
        'budget': '$4 million',
        'boxOffice': '$13.4 million'
    },
    'memoirs of an invisible man':{
        'title':'Memoirs of an Invisible Man',
        'year': 1992,
        'mpaaRating': 'PG-13',
        'runtime': '99 mins',
        'genre':['Comedy', 'Romance', 'Sci-Fi'],
        'stars':['Chevy Chase', 'Daryl Hannah', 'Sam Neill'],
        'poster':'http://www.impawards.com/1992/posters/memoirs_of_an_invisible_man.jpg',
        'taglines':"Women want him for his wit. The C.I.A. wants him for his body. All Nick wants is his molecules back.",
        'budget': '$40 million',
        'boxOffice': '$14 million'
    },
    'in the mouth of madness':{
        'title':'In the Mouth of Madness',
        'year': 1994,
        'mpaaRating': 'R',
        'runtime': '95 mins',
        'genre':['Drama', 'Fantasy', 'Horror'],
        'stars':['Sam Neill', 'Jurgen Prochnow', 'Julie Carmen'],
        'poster':'http://www.impawards.com/1995/in_the_mouth_of_madness.html',
        'taglines':"There are no words to describe Sutter Cane's latest and greatest novel. There are no words to describe Sutter Cane.",
        'budget': '$8 million',
        'boxOffice': '$8.9 million'
    },
    'village of the damned':{
        'title':'Village of the Damned',
        'year': 1995,
        'mpaaRating': 'R',
        'runtime': '98 mins',
        'genre':['Horror', 'Sci-Fi', 'Thriller'],
        'stars':['Christopher Reeve', 'Kirstie Alley', 'Linda Kozlowski'],
        'poster':'http://www.impawards.com/1995/posters/village_of_the_damned.jpg',
        'taglines':"Beware the Children",
        'budget': '$22 million',
        'boxOffice': '$9.4 million'
    },
    'escape from l.a.':{
        'title':'Escape from L.A.',
        'year': 1996,
        'mpaaRating': 'R',
        'runtime': '101 mins',
        'genre':['Action', 'Adventure', 'Sci-Fi'],
        'stars':['Kurt Russell', 'Nick Castle', 'Stacy Keach'],
        'poster':'http://www.impawards.com/1996/posters/john_carpenters_escape_from_la_ver1_xlg.jpg',
        'taglines':"Plan your escape this Summer",
        'budget': '$50 million',
        'boxOffice': '$25.4 million'
    },
    'vampires':{
        'title':'Vampires',
        'year': 1998,
        'mpaaRating': 'R',
        'runtime': '108 mins',
        'genre':['Action', 'Horror', 'Thriller'],
        'stars':['James Woods', 'Daniel Baldwin', 'Sheryl Lee'],
        'poster':'http://www.impawards.com/1998/posters/john_carpenters_vampires_xlg.jpg',
        'taglines':"The blood confrontation of the ages is about to begin.",
        'budget': '$20 million',
        'boxOffice': '$20.3 million'
    },
    'ghosts of mars':{
        'title':'Ghosts of Mars',
        'year': 2001,
        'mpaaRating': 'R',
        'runtime': '98 mins',
        'genre':['Action', 'Horror', 'Sci-Fi'],
        'stars':['Natasha Henstridge', 'Ice Cube', 'Pam Grier'],
        'poster':'http://www.impawards.com/2001/posters/john_carpenters_ghosts_of_mars_ver1_xlg.jpg',
        'taglines':"You Don't Stand A Ghost Of A Chance",
        'budget': '$28 million',
        'boxOffice': '$14 million'
    },
    'the ward':{
        'title':'The Ward',
        'year': 2010,
        'mpaaRating': 'R',
        'runtime': '89 mins',
        'genre':['Horror', 'Mystery', 'Thriller'],
        'stars':['Amber Heard', 'Mamie Gummer', 'Danielle Panabaker'],
        'poster':'http://www.impawards.com/2011/posters/ward_ver4_xlg.jpg',
        'taglines':"Only Sanity Can Keep You Alive",
        'budget': '$10 million',
        'boxOffice': '$5 million'
    },
    'unknown': {
        'name': 'Sorry, not a John Carpenter directed film.'
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