const discord = require('discord.js')
const db = require('croxydb');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kız rol sıfırlama komutu.`)
.setColor("#f6ff00")
.setDescription(`<a:siren:778777832976416778> Sunucu için ayarladığınız kız rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Cowboy`)
message.channel.send(sıfırlandı)
db.delete(`kızrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kız rol ayarlama komutu.`)
.setColor("#f6ff00")
.setDescription(`<a:siren:778777832976416778> Ayarlayacağınız kız rolünü belirtiniz!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Cowboy`)
message.channel.send(ayarlanmadı)
}
db.set(`kızrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kız rol ayarlama komutu.`)
.setColor("#f6ff00")
.setDescription(`<a:tmdir:778774341357797378> Kız rolü başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Cowboy`)

message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kızrol', 'krol', 'k-rol'],
  permlevel: 0
}
exports.help = {
  name: 'kız-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}