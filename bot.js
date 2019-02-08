const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "%";
console.log("Scrpit By OUAIL");


client.on("ready", () => {
let channel =     client.channels.get("543470302156423172")
setInterval(function() {
channel.send(`سبام كريدت`);
}, 30)
})

client.on('message', msg => {
    if (msg.content === 'كم معي') {
      msg.reply('#credit');
    }
});

client.on('message',function(message) {
    let prefix = "%";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "حول")) {
if(!args) return;
message.channel.send(`#credit <@476577762396864512> ${args}`);
}
});

client.login(process.env.BOT_TOKEN);
