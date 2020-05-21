const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
.addField('p!seviye','Seviyenizi atar.')
.addField('p!seviye-ayarlar','seviye komutlarının sunucudaki ayarlarını atar.')
.addField('p!seviye-aç','Seviye Sistemini açarsınız.')
.addField('p!seviye-kapat','Seviye sistemini kapatırsınız.')
.addField('p!seviye-log','Level atlayan kullanıcıları bu kanala atar.')
.addField('p!seviye-rol','Seviye ödülünü ayarlarsınız.')
.addField('p!seviye-xp','mesaj başına gelecek puanı ayarlarsınız.')
.setFooter('Public Online | Seviye Sistemi.')
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
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};