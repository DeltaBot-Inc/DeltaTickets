const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const bot = new Discord.Client({fetchAllMembers: true})

exports.run = async (bot, message, args, functions) => {
  const duration = moment.duration(bot.uptime).format(" D [jrs], H [hrs], M [mins], S [secs]");
  const embed = new Discord.MessageEmbed()
    .setAuthor(`DeltaTickets v1.0`, bot.avatarURL)
    .setColor(0x00AE86)
    .setThumbnail(bot.avatarURL)
    .setTimestamp()
    .setFooter(`DeltaTickets | Crée par DeltaBot Inc.`, bot.user.displayAvatarURL())
    .setDescription(`● **DeltaTickets** à été créé par **GalackQSM#7926**`)
    .addField("<:delta_stats:736376612832149517> • Statistique", "`Serveurs: "+bot.guilds.cache.size+"`\n`Salons: "+bot.channels.cache.size+"`\n`Membres: "+bot.users.cache.size+"`", true)
    .addField("<:delta_version:736376612370776076> • Versions", "`Discord.js: "+Discord.version+"`\n`Nodejs : "+process.version+"`", true)
    .addField(":green_circle: • En ligne", "`"+(Math.round(bot.uptime / (1000 * 60 * 60))) + " heures`\n`" + (Math.round(bot.uptime / (1000 * 60)) % 60) + " minutes`\n`" + (Math.round(bot.uptime / 1000) % 60) + " secondes`", true)
    .addField("<:delta_ram:736376612605657091> • RAM", "`"+(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+"` MB");
  message.channel.send({embed});
};

exports.help = {
  name: "stats",
  aliases: ['info', "botinfo"]
};
