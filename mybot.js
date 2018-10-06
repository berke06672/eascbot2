const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});
const prefix = "?";

const newUsers = [];
client.on('guildMemberAdd', member => {
    member.guild.channels.get('488363423978225664').send('**' + member.user.username + '**, has joined the server!');
	const embed = new Discord.RichEmbed()
  .setTitle("Welcome")
  .setAuthor("Welcome new user!", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x01AE86)
  .setDescription("Welcome:")
  .setFooter("Earthvision Song Contest", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setImage("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setThumbnail("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Say ?help to get information","Don't forget to check the rules!")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
 
  /*
   * Blank field, useful to create some space.
   */


   member.guild.channels.get('488363423978225664').send({embed});
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('488363423978225664').send('**' + member.user.username + '**, has left the server');
    //
});



client.on("message", (message) => {
	  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "rules")) {
const embed = new Discord.RichEmbed()
  .setTitle("Rules")
  .setAuthor("Rules", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x01AE86)
  .setDescription("Here is the all rules:")
  .setFooter("by DoodlayRed12", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setImage("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setThumbnail("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("RULES STARTING FROM THE 14 OF SEPTEMBER 2018",
    "1. No sexual or nsfw content outside #🔞-nsfw ",
	)
 .addField( "2. No disrespect against any member of the group",	"3. Do not disrespect, mock or bully any person cause of their race, religion or sexuality")
 .addField( "4. Do not tag everyone or someone who doesn’t want to be tagged",	"5. Do not advertise your group without permission from Doodlay or Berke")
   .addField( "6. Do not tag a staff member for no reason",	"7. Do not share your or any other persons private information")
      .addField( "8. Do not private message anyone any scam or illegal content",	"9. No illegal content in the server")
	        .addField( "10. Be respectful to everyone!",	"Follow the rules!")
			  .addField( "RULES FOR THE CONTEST ITSELF",	"1. Do not bloc / friend vote! Vote on the song not the person.")
			  			  .addField( "2. Not voting till the deadline will ban you from the next edition",	"3. Songs must be under 500 million views")
		 .addField( "4. Overly sexual songs aren’t allowed",	"5. Do not judge the country that is sending a song")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
 
  /*
   * Blank field, useful to create some space.
   */


  message.channel.send({embed});

  } else

  if (message.content.startsWith(prefix + "help")) {
const embed = new Discord.RichEmbed()
  .setTitle("Help")
  .setAuthor("Helping Server", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x01AE86)
  .setDescription("All commands that you can use:")
  .setFooter("by Berke234443", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setImage("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setThumbnail("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("?robloxgroup","?twitter",	)
   .addField("?arena","?broadcaster",	)
     .addField("?avatar","?logo",	)
	   .addField("?vikia","?web",	)
	     .addField("?invitelink","?runningorder",	)
		     .addField("?hq","?rules",	)
			   .addField("?sponsoredby","?fanclub",	)
			     .addField("?c","Cardboard messages are gives information about participating user. Say !c then put the roblox username.",	)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
 
  /*
   * Blank field, useful to create some space.
   */


  message.channel.send({embed});

  } else
	  if (message.content.startsWith(prefix + "runningorder")) {
const embed = new Discord.RichEmbed()
  .setTitle("Running Order")
  .setAuthor("Helping Server", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x01AE86)
  .setDescription("Running orders of two semi final:")
  .setFooter("by Berke234443", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setImage("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setThumbnail("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("Semi Final 1","1.Palau",	)
     .addField("2.Cyprus","3.Denmark",	)
	   .addField("4.Turkey","5.Azerbaijan",	)
	     .addField("6.Latvia","7.France",	)
		   .addField("8.Sweden","9.Romania",	)
		   		   .addField("10.Ukraine ","11.Finland ",	)
				     .addBlankField(true)
				  .addField("Semi Final 2","1.Thailand",	)
     .addField("2.Estonia","3.Poland",	)
	   .addField("4.Japan","5.Belarus",	)
	     .addField("6.Vatican","7.USA",	)
		   .addField("8.Greece","9.Netherlands",	)
		   		   .addField("10.China ","11.Lithuania ",	)	 
				   



  message.channel.send({embed});

  } else
	  	  if (message.content.startsWith(prefix + "cberke")) {
const embed = new Discord.RichEmbed()
  .setTitle("Berke234443")
  .setAuthor("About Berke234443", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x01AE86)
  .setDescription("Founder of Earthvision Song Contest")
  .setFooter("by EASC", "https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setImage("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  .setThumbnail("https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("First appearance :zero::one:","Last appearance :zero::one:"	)

  
				   


  message.channel.send({embed});

  } else
	if (message.content.startsWith(prefix + "bot")) {
    message.channel.send("thanks for helping me");
  }  else
	  	if (message.content.startsWith(prefix + "robloxgroup")) {
    message.channel.send("https://www.roblox.com/My/Groups.aspx?gid=3115905");
  }  else
	 if (message.content.startsWith(prefix + "broadcaster")) {
    message.channel.send("Broadcasting by CCTV https://media.discordapp.net/attachments/488307727005646858/496289994118529024/latest.png?width=401&height=92");
} else
if (message.content.startsWith(prefix + "twitter")) {
    message.channel.send("https://twitter.com/eascroblox");
} else
	if (message.content.startsWith(prefix + "die")) {
    message.channel.send("Die!");
} else
if (message.content.startsWith(prefix + "arena")) {
     message.channel.send("The Beijing Olympic Arena https://media.discordapp.net/attachments/488307727005646858/496289607831257100/image0.png");
} else
if (message.content.startsWith(prefix + "avatar")) {
  message.channel.send(" Express Yourself https://cdn.discordapp.com/attachments/488307727005646858/497834744592072715/express_urself_final11_-_Kopya.jpg");
} else
if (message.content.startsWith(prefix + "logo")) {
  message.channel.send("Express Yourself https://media.discordapp.net/attachments/488307727005646858/496286658958721034/express_urself_final11_-_Kopya_2.jpg?width=295&height=300");
}else
if (message.content.startsWith(prefix + "vikia")) {
     message.channel.send("https://earthivision-song-contest-roblox.wikia.com/wiki/Earthivision_Song_Contest_(ROBLOX)_Wiki?action=edit&section=2");
} else
if (message.content.startsWith(prefix + "web")) {
  message.channel.send("https://escroblox.jimdosite.com/");
	
} else
if (message.content.startsWith(prefix + "invitelink")) {
  message.channel.send("https://discord.gg/737bWd8");

} else

if (message.content.startsWith(prefix + "sponsoredby")) {
  message.channel.send("Huawei Manufacturing");

} else
if (message.content.startsWith(prefix + "hq")) {
  message.channel.send("https://www.roblox.com/games/2360537652/EarthVision-Song-Contest-The-Headquarter");

} else
if (message.content.startsWith(prefix + "fanclub")) {
     message.channel.send("https://discord.gg/pUKPDsb");

}
});

client.login(process.env.BOT_TOKEN);
