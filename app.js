// Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

// Listener Event: Message Received (This will run every time a message is received)
bot.on('message' , message => {

    // Variables
    var sender = message.author; // The person who send the message
    var msg = message.content;
    var prefix = '+' // The text before commands

    // Commands
    if (msg === prefix + 'help') {
        var embed = new Discord.RichEmbed()
        .setColor(0x00008B)
        .setTitle('Command List')
        .addField('+ping', 'Tells you your ping')
        .addField('+rules', 'Tells you the rules of the server')
        message.channel.send({embed})
    }
    if (msg === prefix + 'rules') {
      message.channel.send('')
    }
    if (msg === prefix + 'ping') {
        message.channel.send('Pong! Your ping is ' + `${Date.now() - message.createdTimestamp}` + 'ms')
    }
    
});

// Listner Event: Run on start
bot.on('ready', () => {
    console.log('Bot Launched...');
    // Status
    bot.user.setStatus('Online');
    //"Playing"
    bot.user.setPresence({ game: { name: '+help', type: 0 } });
});

// Listner Event: User joining server
bot.on('guildMemberAdd', member => {
    client.channels.get(428001739971493888).send(member.username + ' has joined the server!');

    var role = member.guild.roles.find('name', 'Jashers!')

    member.addRole(role)
})

// Login
bot.login('NTE3ODQ5MTIxMzg2NzkwOTEy.DuIQZA.NzMEYi_tPJlYfMGcjNOeUdFxQxI')
