# jokesnquotes

[![NPM VERSION](http://img.shields.io/npm/v/jokesnquotes.svg?style=flat&logo=npm)](https://www.npmjs.org/package/jokesnquotes) [![GitHub license](https://img.shields.io/github/license/ashwaniYDV/jokesnquotes.svg?style=flat&logo=github)](https://github.com/ashwaniYDV/jokesnquotes/blob/main/LICENSE)  [![npm collaborators](https://img.shields.io/npm/collaborators/jokesnquotes.svg?logo=npm)](https://www.npmjs.com/package/jokesnquotes) [![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/jokesnquotes.svg?color=9cf&logo=snyk)](https://www.npmjs.com/package/jokesnquotes) [![GitHub issues](https://img.shields.io/github/issues/ashwaniYDV/jokesnquotes.svg?logo=github)](https://www.npmjs.com/package/jokesnquotes)

#### A simple [NPM](https://www.npmjs.com/package/jokesnquotes) Package which returns random [jokesnquotes](https://github.com/ashwaniYDV/jokesnquotes). It provides awesome quotes to display in your application and if your mood is off, it provides jokes with categories. Get your daily quote and stay motivated along with a smile!

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ashwaniYDV/jokesnquotes.svg?logo=github&style=social)](https://www.npmjs.com/package/jokesnquotes) [![npm](https://img.shields.io/npm/dy/jokesnquotes.svg?logo=npm&style=social)](https://www.npmjs.com/package/jokesnquotes) [![GitHub last commit](https://img.shields.io/github/last-commit/ashwaniYDV/jokesnquotes.svg?logo=git&style=social)](https://ashwaniYDV.github.io/jokesnquotes/) [![GitHub top language](https://img.shields.io/github/languages/top/ashwaniYDV/jokesnquotes.svg?logo=javascript&logoColor=yellow&style=social)](https://ashwaniYDV.github.io/jokesnquotes/) [![Maintenance](https://img.shields.io/maintenance/yes/2020.svg?logo=npm&style=social)](https://ashwaniYDV.github.io/)

**Click [here](https://www.npmjs.com/package/jokesnquotes)** to view this package on **NPM** registry. Check the homepage **[here](https://ashwaniYDV.github.io/)**.

## Getting started

[![NPM](https://nodei.co/npm/jokesnquotes.png?compact=true)](https://nodei.co/npm/jokesnquotes/)

```
$ npm install --save jokesnquotes
```

## Installation

[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=flat&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) [![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=flat&logo=node.js)](https://nodejs.org/en/) [![jokesnquotes](http://img.shields.io/badge/npm-jokesnquotes-red.svg?style=flat&logo=npm)](https://www.npmjs.com/package/jokesnquotes)


This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
**[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command:

```bash
$ npm install jokesnquotes
```

## Usage

[![usage](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://github.com/ashwaniYDV/jokesnquotes/)

#### Quick review

```js
const jokesnquotes = require('jokesnquotes');

console.log(jokesnquotes.getRandomQuote());
```

```json
 {  
    "text":"My reputation grows with every failure.",
    "author":"George Shaw"
 }
 ```
 
 #### Full review
 
 ```
var jokesnquotes = require('jokesnquotes');

/*
The variable quote will contain a random quote with a format:
{
    "text":"My reputation grows with every failure.",
    "author":"George Shaw"
}
*/
var quote = jokesnquotes.getRandomQuote();
console.log(quote)

/*
The variable joke will contain a random joke with a format:
{
    "body":"Artificial intelligence is no match for natural stupidity.",
    "tags":["intelligence","stupid"]
}
*/
var joke = jokesnquotes.getRandomJoke();
console.log(joke)

/*
One can add exclusion filter for the jokes tags
default is ['sex', 'racist']
*/
var joke = jokesnquotes.getRandomJoke({
    'exclude_tags': ['stupid', 'racist', 'love']
  });
console.log(joke)


/*
The variable joke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var joke = jokesnquotes.getRandomJokeWithTag('stupid');
console.log(joke)

/*
One can add exclusion filter for the jokes tags
default is ['sex', 'racist']
*/
var joke = jokesnquotes.getRandomJokeWithTag('stupid', {
  'exclude_tags': ['attitude', 'sport', 'love']
});
console.log(joke)

```

## Examples

[![examples](https://forthebadge.com/images/badges/check-it-out.svg)](https://github.com/ashwaniYDV/jokesnquotes/)

To view the examples, clone the **jokesnquotes** repo:

```bash
$ git clone https://github.com/ashwaniYDV/jokesnquotes.git
$ cd jokesnquotes
```

Then run the **example/index.js**:

```bash
$ node example
```

## Let's **[get connected](https://www.linkedin.com/in/ashwaniydv/)** if we share the same views! 
Invite me to connect on **[LinkedIn](https://www.linkedin.com/in/ashwaniydv/)**.
 
[![Facebook](https://img.shields.io/static/v1.svg?label=follow&message=@ashwani.yadav9499&color=9cf&logo=facebook&style=flat&logoColor=white&colorA=informational)](https://www.facebook.com/ashwani.yadav9499)  [![Instagram](https://img.shields.io/static/v1.svg?label=follow&message=@ashwani_yadav04&color=grey&logo=instagram&style=flat&logoColor=white&colorA=critical)](https://www.instagram.com/ashwani_yadav04/) [![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@ashwaniydv&color=success&logo=linkedin&style=flat&logoColor=white&colorA=blue)](https://www.linkedin.com/in/ashwaniydv/)


> **One day your life will flash before your eyes. Make sure it is worth watching!**

[![Stay Motivated](https://img.shields.io/badge/Stay-Motivated-teal.svg?style=for-the-badge)](https://github.com/ashwaniYDV/jokesnquotes)
[![Think Big](https://img.shields.io/badge/Think-Big-orange.svg?style=for-the-badge)](https://ashwaniydv.github.io)
[![Work Hard](https://img.shields.io/badge/Work-Hard-blue.svg?style=for-the-badge)](https://github.com/ashwaniYDV/)
