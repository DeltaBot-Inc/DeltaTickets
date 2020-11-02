const Discord = require("discord.js");

exports.run = async (bot, message, args, functions) => {
        const member = message.member;
        const user = message.mentions.members.first();

let embed = new Discord.MessageEmbed()
.setTitle(`:tickets: DeltaTickets - Les créateurs`)
.setColor("RANDOM")
.setImage("https://i.imgur.com/MDQHYtz.png")
.setDescription("● Hey salut **"+ member.user.username+"**, voici les créateurs de DeltaTickets\n● DeltaTickets créé par la société de DeltaBot Inc\n\n<a:fleche:750809388414926932> **Date de création:** Crée le 28 août 2020\n<a:fleche:750809388414926932> **Créateur:** GalackQSM#0895 & DeltaBot Inc.\n<a:fleche:750809388414926932> **SiteWeb:** https://delta-bot.com\n<a:fleche:750809388414926932> **Numéro de siret:** 888 124 484 00013")
.setFooter(`DeltaTickets | Crée par DeltaBot Inc.`, bot.user.displayAvatarURL())
.setTimestamp();

message.channel.send(embed);
};

exports.help = {
    name: "createurs",
    aliases: ['crea', "fonda"]
}