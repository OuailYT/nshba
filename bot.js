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


client.on('message',function(message) {
    let prefix = "s!";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "حول")) {
if(!args) return;
message.channel.send(`#credit <@476577762396864512> ${args}`);
}
});

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

client.login(process.env.BOT_TOKEN);
