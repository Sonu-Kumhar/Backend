const lolcatjs = require('lolcatjs')
const catMe = require('cat-me')

lolcatjs.options.seed = Math.floor(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString(catMe());