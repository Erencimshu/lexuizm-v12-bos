const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
module.exports.execute = async (client, message, args) => {
 message.channel.send(`${client.ws.ping}Pingimmm\n${new Date().getTime() - message.createdTimestamp} Mesaj Pingimm`)
}

module.exports.configuration = {
    name: "ping",
    aliases: ['ms'],
    usage: "ping",
    description: "Bot ping"
  };