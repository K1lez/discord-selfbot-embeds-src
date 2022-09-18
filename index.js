const { Client } = require("discord.js-selfbot-v13");
const settings = require('./settings.json');
const prefix = '.';
const client = new Client({checkUpdate: false});

client.once('ready', () => {
    console.log(`Logged into ${client.user.username}`)
});

client.on('messageCreate', (msg) => {
    if(msg.author.id !== client.user.id || !msg.content.startsWith(prefix)) return;

    switch(msg.content.replace(prefix, '').split(' ')[0]){
        case 'hello':
            msg.reply(convertToEmbed('This is my title', 'subscribe!!'));
        break;
    }
});

function hideURL() {
    return '||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||'
}

function convertToEmbed(title, description) {
    return `${hideURL()}https://rauf.wtf/embed/?title=${title.replaceAll(' ', '%2520')}&description=${description.replaceAll(' ', '%2520')}&color=bdcefb&redirect=https%253A%252F%252Fyoutube.com`
}

client.login(settings.token);