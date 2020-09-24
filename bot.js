const discord = require('discord.js');
const fs = require('fs');
const _ = require('lodash');
const TOKEN = process.env.TOKEN;
const file = '/home/spacey/Desktop/parsedfacts.txt';
const quotes = []; 
const readline = require('readline')
const bot = new discord.Client();
require('dotenv').config();
// this will help us read the file in a performant way
// that would still be good practice even if this file
// were much larger
const readInterface = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    console: false
});

const getQuotes = (quoteFile) => {
  readInterface.on('line', function(line) {
    quotes.push(line);
  });
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async message => {
  if (message.startsWith("!fact")) {
    let randomQuote = _.sample(quotes);
    await message.channel.send(randomQuote);
  }
  // telling the bot not to reply to other bots
  if (message.author.bot) {
    return;
  }
  if (message.startsWith("!moarfacts")) {
    let factCount = _.split(message, " ");
    for (let i = 0; i < factCount; i++) {
      await message.channel.send(_.sample(quotes));
    }
  } 
});
bot.login('TOKEN');
