const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 

let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Cowboy Kayıt Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setColor('#f6ff00')
.addField(`<:sagok:778774307253518366> __Kayıt Alınacak Rol__`,` \`.alınacak-rol\` Kayıt Edince Alınacak Rol`,true)
.addField(`<:sagok:778774307253518366> __Erkek Rol__`,` \`.erkek-rol\` Erkek Rolü Belirtirsiniz.`,true)
.addField(`<:sagok:778774307253518366> __Erkek Kayıt__`,` \`.erkek @etiket <isim> <yaş>\`Erkek Kayıt Edersiniz.`,true)
.addField(`<:sagok:778774307253518366> __Kayıt Kanal__`,` \`.kayıt-kanal\` Kayıtın Yapılacağı Kanalı Ayarlarsınız. `,true)
.addField(`<:sagok:778774307253518366> __Kayıtçı Rol__`,` \`.kayıtçı-rol\`  Sadece Kimler Kayıt Edebilir.`,true)
.addField(`<:sagok:778774307253518366> __Kız Rol__`,` \`.kız-rol\` Kız Rolü Belirtirsiniz.`,true)
.addField(`<:sagok:778774307253518366> __Kız Kayıt__`,` \`.kız @etiket <isim> <yaş>\`Kız Kayıt Edersiniz.`,true)
.addField(`<:sagok:778774307253518366> __Kayıt Sayacı__`,` \`.toplam-kayıt\` Kaç Adet Kayıt Yaptığınızı Görürsünüz.`,true)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'kayıt'
  }; 
  