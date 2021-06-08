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
                dispatcher = connection.play('./sounds/hello_1.mp3', {
                    volume: 0.5,
                });
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
                    name: `${command.name} (${command.keyWords})`,
                    value: command.description
                });
            });
            const embed = new Discord.MessageEmbed()
                .setColor('#43B581')
                .setTitle('Daiji Warden')
                .setThumbnail('https://cdn.discordapp.com/attachments/792750741823291412/843968942342668308/jaketree_small.jpg')
                .addFields(commandFields)
                .setFooter(`v0.0.3`);
            message.channel.send(embed);
        }
    }
]