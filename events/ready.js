const Discord = require("discord.js");

module.exports = async (bot) => {

  function V () {
    bot.user.setActivity("Je gère tes tickets support", {type: "LISTENING"});
  }
  function Suga () {
    bot.user.setActivity("t*help - https://graphshop.org", {type: "LISTENING"});
  }
  setTimeout(V,10000);
  setTimeout(Suga,10000);

    console.log(`${bot.user.username} est prêt !`);

} 
