var jokes = require('./data/jokes.json');
var quotes = require('./data/quotes.json');

var jokesCount = jokes.length;
var quotesCount = quotes.length;

exclude_tags_default = ['sex', 'racist'];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomQuote = () => { 
    var index = randomInt(0, quotesCount - 1);
    return quotes[index];
};

const getRandomJoke = (options = { 'exclude_tags': exclude_tags_default }) => {
    const exclude_tags = options['exclude_tags'];
    while(true){
        const idx = randomInt(0, jokesCount - 1);
        let joke = jokes[idx];
        let flagged = 0;
        for(let i = 0; i < exclude_tags.length; i++){
            if(joke.tags.indexOf(exclude_tags[i]) > 0){
                flagged = 1;
            }
        }

        if(flagged === 0){
            return joke;
        }
    }
}

const getAllJokesWithTag = (tag) => {
    var jokesWithTag = [];
    jokes.forEach((joke) => {
        if(joke.tags.indexOf(tag) != -1){
            jokesWithTag.push(joke);
        }
    });
    
    return jokesWithTag;
}

const getRandomJokeWithTag =(tag, options = { 'exclude_tags': exclude_tags_default }) => {
    var jokesWithTag = getAllJokesWithTag(tag);
    const exclude_tags = options['exclude_tags'];
    
    if(jokesWithTag.length == 0){
        return {'body' : '', 'tags' : []};
    }

    while(true){
        const idx = randomInt(0, getAllJokesWithTag.length - 1);
        let joke = jokesWithTag[idx];
        let flagged = 0;
        for(let i = 0; i < exclude_tags.length; i++){
            if(joke.tags.indexOf(exclude_tags[i]) > 0){
                flagged = 1;
            }
        }

        if(flagged === 0){
            return joke;
        }
    }
}

module.exports = {
    getRandomJoke,
    getRandomQuote,
    getAllJokesWithTag,
    getRandomJokeWithTag
};