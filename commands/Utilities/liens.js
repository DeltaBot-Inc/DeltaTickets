const Discord = require("discord.js");

exports.run = async (bot, message, args, functions) => {

let embed = new Discord.MessageEmbed()
.setTitle(`:tickets: DeltaTickets - Les liens`)
.setColor("RANDOM")
.setDescription("**__Voici les liens de support de DeltaTickets:__**\n\n<a:fleche:750809388414926932> Ajoute moi sur ton serveur: [Clique ici](https://discord.com/oauth2/authorize?client_id=748868808697053205&scope=bot&permissions=2146958847)\n<a:fleche:750809388414926932> Serveur support: [Clique ici](https://discord.gg/cAmtjYj)\n<a:fleche:750809388414926932> Twitter: [Clique ici](https://twitter.com/DeltaBotDiscord)\n<a:fleche:750809388414926932> Facebook: [Clique ici](https://www.facebook.com/DeltaBotDiscord)")
.setFooter(`DeltaTickets | Crée par DeltaBot Inc.`, bot.user.displayAvatarURL())
.setTimestamp();

message.channel.send(embed);
};

exports.help = {
    name: "liens",
    aliases: ['supp']
}