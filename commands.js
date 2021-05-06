import Discord from 'discord.js';
let connection, dispatcher;
export const commands = [
    {
        name: 'ping',
        description: 'Testowa komenda',
        keyWords: [],
        execute: function(message) {
            message.channel.send('Pong.');
        }
    },
    {
        name: 'come',
        description: 'Przyzywa bota na kanał',
        keyWords: ['chodź', 'przyjdź', ''],
        execute: async function(message) {
            if (message.member.voice.channel) {
                connection = await message.member.voice.channel.join();
            } else {
                message.reply('Nie wiem gdzie dołączyć');
            }
        }
    },
    {
        name: 'play',
        description: 'Odtwarza muzykę',
        keyWords: ['graj', 'magik'],
        execute: function(message) {
            dispatcher = connection.play('./sounds/magik.mp3', {
                volume: 0.1,
            });
        }
    },
    {
        name: 'stop',
        description: 'Wstrzymuje odtwarzanie muzyki',
        keyWords: [],
        execute: function(message) {
            dispatcher.pause();
        }
    },
    {
        name: 'help',
        description: 'Wyświetla listę komend',
        keyWords: ['?', 'pomoc'],
        execute: function(message) {
            let commandFields = [];
            commands.forEach(command => {
                commandFields.push({
                    name: command.name + `, ${command.keyWords}`,
                    value: command.description
                });
            });
            let embed = new Discord.MessageEmbed()
                .setColor('#43B581')
                .setTitle('Daiji bot')
                //.setURL('https://discord.js.org/')
                //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
                //.setDescription('Some description here')
                //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
                .addFields(commandFields)
                //.addField('Inline field title', 'Some value here', true)
                //.setImage('https://i.imgur.com/wSTFkRM.png')
                .setFooter('v0.0.2');
                //.setFooter('v0.0.2', 'https://i.imgur.com/wSTFkRM.png');
            message.channel.send(embed);
        }
    }
]