const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Zeelk, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NTk3NzU0OTQzMjA5OTk2Mjkw.XSMuzw.rHt0knkSRl-HiY5AdCMYLEXgUVQ");
