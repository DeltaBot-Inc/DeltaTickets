const Discord = require("discord.js");

exports.run = async (bot, message, args, functions) => {
        const member = message.member;
        const user = message.mentions.members.first();

let embed = new Discord.MessageEmbed()
.setTitle(`:tickets: DeltaTickets - Panel d'aide`)
.setColor("RANDOM")
.setImage("https://i.imgur.com/MDQHYtz.png")
.setDescription("● Hey salut **"+ member.user.username+"**, voici les commandes\n● Je suis actuellement sur `"+bot.guilds.cache.size+" serveurs`\n● **DeltaTickets** à été créé par **GalackQSM#7926**\n\n**__<a:fleche:750809388414926932> COMMANDES ADMINISTRATION__**\n• `t*setlogs` - Salon des logs des tickets\n• `t*ticket` - Crée le module pour les tickets\n• `t*close force` - Fermer le ticket en cours de force\n\n**__<a:fleche:750809388414926932> COMMANDES GÉNÉRALES__**\n• `t*help` - Affiche le panel d'aide\n• `t*close` - Fermer le ticket en cours\n• `t*liens` - Affiche les liens de DeltaTickets\n• `t*stats` - Voir les statistique de DeltaTickets\n• `t*createurs` - Voir les créateurs de DeltaTickets")
.setFooter(`DeltaTickets | Crée par DeltaBot Inc.`, bot.user.displayAvatarURL())
.setTimestamp();

message.channel.send(embed);
};

exports.help = {
    name: "help",
    aliases: ['aide', "aides"]
}