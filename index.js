// =====================  CONFIG ====================== //

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!"

client.on("ready", () => {
    console.log("Je suis prêt");
    client.user.setActivity('!help');
    client.user.setStatus('online')
})

client.login('NzI3MDY4NDE1MTU5Njk3NDE5.XwIKvQ.W6ZmSkKc_aKLRUxI3myGyHYISbE')

// =====================  COMMANDE ====================== //

// welcome message



 // ======================COMMANDES======================== //
client.on('message', msg => {
      if (msg.content.startsWith(prefix + "say")) {
    
        let embed = new Discord.RichEmbed()
    
        .setColor('#E80C0C')
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
    
        if(!msg.member.hasPermission("ADMINISTRATOR")) {
        return msg.channel.send(embed)
        }
        var Say = msg.content.split(" ").slice(1)
        msg.delete()
        msg.channel.send(Say.join(" "))
      }

      if(msg.content.startsWith(prefix + "ping")){
        msg.channel.send('Pong! ' + Math.round(client.ping) + ' ms!')
      }
    
      if(msg.content.startsWith(prefix + "twitter")){
        msg.channel.send('https://twitter.com/WaKoTV1')
        msg.delete()
      }
    
    if(msg.content.startsWith(prefix + "twitch")){
        msg.channel.send('https://www.twitch.tv/wakotv_')
        msg.delete()
      }
    
      if(msg.content.startsWith(prefix + "sondage")) {
        let args = msg.content.split(" ").slice(1);
        let thingToEcho = args.join(" ");
        let embed = new Discord.RichEmbed()
            .setDescription("Sondage")
            .addField(thingToEcho, "Répondre avec :white_check_mark:(oui/choix) ou :x:(non/choix) ")
            .setColor("#07C070")
            .setTimestamp()
            .setFooter(`Sondage réalisé par ${msg.author.tag}`);
        msg.channel.send({embed})
        .then(function (message) {
            msg.react('✅');
            msg.react('❌');
        }).catch(function() {
        });

    }

    if(msg.content[0] === prefix) {
        if(msg.content === prefix + 'fortnite') {
            let role = msg.guild.roles.find('name', '🎮 Fortnite')

            if(msg.member.roles.find('name', '🎮 Fortnite')) {
                msg.member.removeRole(role)
                msg.reply(`Très bien je te retire le rôle!`)
                msg.delete()
            }
            else {
                msg.member.addRole(role)
                msg.reply('Tu as désormais le rôle **Fortnite**')
                msg.delete()
            }
        }
    }
    
    if(msg.content[0] === prefix) {
        if(msg.content === prefix + 'gta') {
            let role = msg.guild.roles.find('name', '🎮 GTA')

            if(msg.member.roles.find('name', '🎮 GTA')) {
                msg.member.removeRole(role)
                msg.reply(`Très bien je te retire le rôle!`)
                msg.delete()
            }
            else {
                msg.member.addRole(role)
                msg.reply('Tu as désormais le rôle **GTA**')
                msg.delete()
            }
        }
    }
    
    if(msg.content[0] === prefix) {
        if(msg.content === prefix + 'valorant') {
            let role = msg.guild.roles.find('name', '🎮 Valorant')

            if(msg.member.roles.find('name', '🎮 Valorant')) {
                msg.member.removeRole(role)
                msg.reply(`Très bien je te retire le rôle!`)
                msg.delete()
            }
            else {
                msg.member.addRole(role)
                msg.reply('tu as désormais le rôle **Valorant**')
                msg.delete()
            }
        }
    }
    
    if(msg.content[0] === prefix) {
        if(msg.content === prefix + 'RL') {
            let role = msg.guild.roles.find('name', '🎮 Rocket league')

            if(msg.member.roles.find('name', '🎮 Rocket league')) {
                msg.member.removeRole(role)
                msg.reply(`Très bien je te retire le rôle!`)
                msg.delete()
            }
            else {
                msg.member.addRole(role)
                msg.reply('Tu as désormais le rôle **Rocket league**')
                msg.delete()
            }
        }
    }

    if(msg.content[0] === prefix) {
      if(msg.content === prefix + 'streamer') {
          let role = msg.guild.roles.find('name', '🎥 Streamer')

          if(msg.member.roles.find('name', '🎥 Streamer')) {
              msg.member.removeRole(role)
              msg.reply(`Très bien je te retire le rôle!`)
              msg.delete()
          }
          else {
              msg.member.addRole(role)
              msg.reply('Tu as désormais le rôle **Streamer**')
              msg.delete()
          }
      }
    }

    if(msg.content === prefix + "help"){
      var help_embed = new Discord.RichEmbed()
      .setColor("#F6FE00")
      .setTitle("Voici les commandes d'aides !")
      .setDescription("Info: Vous devez crée un salon '👋bienvenue' pour voir les arrivées ou les départs des utilisateurs du serveur!")
      .addField("!help", "Affiche les commandes du bot")
      .addField("!ping", "Affiche le temps de réponse")
      .addField("!sondage", "faire un sondage")
      .addField("!pp", "affiche le lien de ta photo de profil")
      .addField("!twitter, !twitch", "Lien des réseaux sociaux")
      .addField("!valorant, !fortnite, !GTA, !RL, !streamer", "Attribue toi les jeux que tu possèdes !")
      .setFooter(`Message effectué par ${msg.author.tag} - Menu d'aide`)
      msg.channel.sendMessage(help_embed);
      console.log("Un utilisateur à effectué la commande d'aide")
      msg.delete();
  }
   
    if(msg.content === prefix + "mods") {
    var info_embed = new Discord.RichEmbed()
    .setColor("#FF0107")
    .setTitle("Avis aux modérateurs !⚠️Succeptible de changer⚠️")
    .setDescription("Merci de bien prendre en compte ces informations importantes")
    .addField("Insulte legère, discrimination légère", "Time Out 600s")
    .addField("Insulte Homophobe, religieuse ou autre", "Bannissement définitif")
    .addField("Insulte parental", "Ban Définitif")
    .addField("Insulte envers un modérateur", "Time Out 30m")
    .addField("Insulte envers un autre viewer", "Time Out 600s")
    .addField("Non respect d'un autre streamer", "Time Out 600s")
    .addField("Message inutile", "Suppression du message")
    .addField("Spam", "Time Out 600s")
    .addField("Pub", "Suppression du message et Ban 600s si récidive et Perm si encore récidive :)")
    .addField("Message en MAJUSCULE", "Suppression du message et Ban 600s si récidive")
    .setFooter(`Message effectué par ${msg.author.tag} - Informations modérateurs`)
    msg.channel.sendMessage(info_embed)
    .then(function (msg) {
        msg.react('✅')
    }).catch(function() {
    })
    console.log("commande mods appouvé !")
        msg.delete();
}
    
  if(msg.content === prefix + "rg") {
    var info_embed = new Discord.RichEmbed()
    .setColor("#FE013C")
    .setTitle("Voici le règlement du serveur :")
    .setDescription("Si une des règles n'est pas respectée par un membre, une sanction sera appliquée par un @•Modérateur• , Les @🔨 Modérateur Discord se réservent le droit d'outrepasser ces règles.")
    .addField("• Lien Obscène:", "Kick, Ban si récidive")
    .addField("• Spam auditif:", "Mute")
    .addField("• Pub sur le discord ou en mp:", "Ban")
    .addField("• Difflamation:", "Ban")
    .addField("• Flood ou spam :", "Ban")
    .addField("• Insultes", "Kick, Ban si récidive")
    .addField("• Pseudos Inappropriés", "Demande de changement")
    .addField("• Usurpation d'identité d'un staff", "Ban")
    .addField("• Provocation", "mute")
    .addField("• Utilisation de @everyone / @here :", "Ban")
    .addField("• Utilisation d'emotes/réactions inapropriées :", "Ban, puis Ban")
    .setFooter("Règles du serveur!")
    msg.channel.sendMessage(info_embed)
    .then(function (msg) {
        msg.react('✅')
    }).catch(function() {
    })
    console.log("un utilisateur à éffectué la commande des regles !")
    }

  if (msg.content === prefix + "pp") {
    msg.reply(msg.author.avatarURL);
  }




  //==================ADMIN==========================

  if(msg.content.startsWith(prefix + "mute")) {
    if(!msg.guild.member(msg.author).hasPermission("ADMINISTRATOR")) return msg.channel.send("Vous n'avez pas la permission !");

    if(msg.mentions.users.size === 0) {
        return msg.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = msg.guild.member(msg.mentions.users.first());
    if(!mute) {
        return msg.channel.send("Je n'ai pas trouvé l'utilisateur !");
    }

    if(!msg.guild.member(client.user).hasPermission("ADMINISTRATOR")) return msg.channel.send("Je n'ai pas la permission !");
    msg.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        msg.channel.send(`${mute.user.username} est mute !`);
    })
}

if(msg.content.startsWith(prefix + "unmute")) {
    if(!msg.guild.member(msg.author).hasPermission("ADMINISTRATOR")) return msg.channel.send("Vous n'avez pas la permission !");

    if(msg.mentions.users.size === 0) {
        return msg.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = msg.guild.member(msg.mentions.users.first());
    if(!mute) {
        return msg.channel.send("Je n'ai pas trouvé l'utilisateur !");
    }

    if(!msg.guild.member(client.user).hasPermission("ADMINISTRATOR")) return msg.channel.send("Je n'ai pas la permission !");
    msg.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        msg.channel.send(`${mute.user.username} n'est plus mute !`);
    })
}

if(msg.content.startsWith(prefix + "purge")) {
    let myrole = msg.guild.member(client.user).hasPermission("MANAGE_MESSAGES");
    let yourole = msg.guild.member(msg.author).hasPermission("MANAGE_MESSAGES");

    if (!myrole) {
        return msg.channel.send("Vous n'avez pas les permissions suffisantes pour éffectué cette action !");
    }

    if (!yourole) {
        return msg.channel.send("Vous n'avez pas les permissions suffisantes pour éffectué cette action!");
    }

    var suppression = msg.content.substr(6);
    if (suppression < 2 || suppression > 101) {
        return msg.reply("La valeur que vous avez entré est invalide, merci de choisir une valeur entre 2 et 100");
    }
    msg.channel.bulkDelete(suppression, true).then(ok => {
        msg.reply("**Suppression de " + "" + suppression + "" + " messages**")
        .then(message => setTimeout(function(){msg.delete}, 5000))
        .catch(err => console.log(err));
    })
}

});
