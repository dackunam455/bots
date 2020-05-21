const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
    return message.channel.send(
      "☥"
    );
  message.guild.members.forEach(u => {
    u.addRole(rol);
  });
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tag"],
  permLevel: 0
};

exports.help = {
  name: "tag",
  description: "tag atar ",
  usage: "tag"
};