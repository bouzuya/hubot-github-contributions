# hubot-github-contributions

A Hubot script that returns GitHub contributions

## Installation

    $ npm install https://github.com/bouzuya/hubot-github-contributions/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-github-contributions/archive/{VERSION}.tar.gz

## Example

    bouzuya> hubot github-contributions bouzuya
      Hubot> bouzuya contributions
             Year of contributions: 2,482 total
             Longest streak: 46 days
             Current streak: 8 days

## Configuration

See [`src/scripts/github-contributions.coffee`](src/scripts/github-contributions.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-github-contributions
[travis-badge]: https://travis-ci.org/bouzuya/hubot-github-contributions.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-github-contributions
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-github-contributions.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-github-contributions
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-github-contributions.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
