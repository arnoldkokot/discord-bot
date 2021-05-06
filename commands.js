let connection;
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
            connection.play('./sounds/magik.mp3', {
                volume: 0.1,
            });
        }
    },
    {
        name: 'help',
        description: 'Wyświetla listę komend',
        keyWords: ['?', 'pomoc'],
        execute: function(message) {
            message.channel.send(`### Daiji Warden v0.0.2 ###`);
            commands.forEach(command => {
                message.channel.send(`${command.name}: ${command.description} [${command.keyWords}]`);
            });
        }
    }
]