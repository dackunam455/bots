const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Kayıt Komutları')
.setTimestamp()
.addField('p!kayıt','Mevcut Kanal Kayıtını Gösterir.')
.addField('p!kayıt-rol','Kayıt Rolünü Belirlersiniz.')
.addField('p!kayıt-log','Kayıt Log Kanalını Belirlersiniz.')
.addField('p!kayıt-kanal','Kayıt Kanalını Belirlersiniz.')
.setFooter('Public Online Kayıt Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};