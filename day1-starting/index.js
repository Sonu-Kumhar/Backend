const lolcatjs = require('lolcatjs')
const catMe = require('cat-me')
const figlet = require('figlet')

lolcatjs.options.seed = Math.floor(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString(catMe());

async function doStuff() {
  const text = await figlet.text("Meow");
  console.log(text);
}

doStuff();