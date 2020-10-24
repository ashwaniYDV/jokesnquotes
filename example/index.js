const { getRandomJoke, getRandomQuote, getAllJokesWithTag, getRandomJokeWithTag } = require('../index');

console.log('\n***********************************\n');

console.log('RANDOM QUOTE\n');

// console.log(getRandomQuote());

// console.log(getRandomJoke());

// console.log(getRandomJoke({
//     'exclude_tags': ['dirty', 'racist', 'marriage']
// }));

console.log(getAllJokesWithTag('stupid'));

// console.log(getRandomJokeWithTag('stupid', {
//     'exclude_tags': ['dirty', 'racist', 'marriage']
// }));