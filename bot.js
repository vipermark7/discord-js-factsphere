const discord = require('discord.js');
const fs = require('fs');
const {split, sample} = require('lodash');
const lineReader = require('line-reader');

require('dotenv').config();

const TOKEN = process.env.TOKEN;
const file = '/home/spacey/Desktop/parsedfacts.txt';
const bot = new discord.Client();

// putting each line into its own element of our array 
let text = fs.readFileSync(file, "utf-8");
let quotes = text.split("\n");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (message) => {
  if (message.content.startsWith("!fact")) {
    let randomQuote = sample(quotes);
    message.channel.send(randomQuote);
  }
  // telling the bot not to reply to other bots
  if (message.author.bot) {
    return;
  }
  if (message.content.startsWith("!moarfacts")) {
    let factCount = split(message.content, " ")[1];
    factCount = parseInt(factCount);
    
    for (let i = 0; i < factCount; i++) {
      message.channel.send(sample(quotes));
    }
  } 
});
bot.login(TOKEN);
