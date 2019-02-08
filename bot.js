const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "s!";
console.log("Scrpit By OUAIL");


client.on("ready", () => {
let channel =     client.channels.get("543470302156423172")
setInterval(function() {
channel.send(`سبام كريدت`);
}, 30)
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
//%say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "حول") {
let rank = message.guild.member(message.author).roles.find('name', 'OUAIL');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client.login(process.env.BOT_TOKEN);
