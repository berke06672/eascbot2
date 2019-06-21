//i already changed the token
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = "xyz ";


const newUsers = [];



client.on("message", (message) => {
	  if (!message.content.startsWith(prefix)) return;


 
	  if (message.content.startsWith(prefix + "JNIUHWFEIUHWFEIUFHEWIUWGHIUEHIUHEGUGRHERGIHHJ")) {
const embed = new Discord.RichEmbed()
  .setTitle("📁 estoniahuman")
  .setAuthor("About estoniahuman", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x01AE86)
  .setDescription("Floor Manager of Earthvision Song Contest")
  .setFooter("by EASC", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setImage("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setThumbnail("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField(":bust_in_silhouette: About estoniahuman","?, :flag_ee: Estonian(*Do you have any doubt?*)")
  .addField("**EASC History**","First appearance :zero::one:")
  .addField("**Last appearance:** :zero::one:","**Apperances:** :one:")
  .addField("**Best Result:** :zero::one:","**Worst Result:** Na/N")
  .addField(":zero::one: : Urban Symphony - Rändajad ","**Points:** 0 **Points:** 0th ")
				   


  message.channel.send({embed});

  } else
	if (message.content.startsWith("hi")) {
    message.channel.send("Hello there!");
  }  
});

client.login(process.env.BOT_TOKEN);
