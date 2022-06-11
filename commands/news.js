exports.run = (client, message, args, member) => {
  var Discord = require("discord.js");
	if (message.member.roles.cache.some(role => role.name === 'annonce')) {
		let reason = args.slice(0).join(" ");
		if(!reason) return message.channel.send('Tu dois mettre une annonce mec ;;-;;');
		console.log(`${message.author.tag} a fait une annonce !`);
		const embed = new Discord.MessageEmbed()
		  .setTitle('Annonce')
		  .setDescription(reason)
		  .setColor("RANDOM")
		  .setFooter('Annonce faite par '+message.author.tag);
		client.channels.cache.get(`985101537544134666`).send({ embeds: [embed] })
	}else{
		message.reply('Désolé, tu n\'as pas la permission de faire une annonce !')
		console.log(`${message.author.tag} a essayé de faire une annonce, mais il n'avait pas la permission !`)
	};
};
