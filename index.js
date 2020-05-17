const { Wechaty } = require('wechaty');
const { PuppetPadplus } = require('wechaty-puppet-padplus');

const { login, friendship, message, scan } = require('./src/index');

const { token, botName } = require('./config');

const puppet = new PuppetPadplus({
  token,
});

const bot = new Wechaty({
  puppet,
  name: botName, // generate xxxx.memory-card.json and save login data for the next login
});

bot
  .on('scan', scan)
  .on('login', login)
  .on('message', message(bot))
  .on('friendship', friendship)
  .start();
  