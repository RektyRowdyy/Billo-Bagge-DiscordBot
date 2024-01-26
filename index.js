import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent] });

const keyWordsToCheck = ['billo', 'bagge'];

//for registering Messages
client.on('messageCreate', message => {
    
    console.log(message.content);

    if(!message.author.bot) {
        if( keyWordsToCheck.some( keyword => message.content.toLowerCase().includes(keyword) ) ) 
            message.reply({
                content: 'Ho! Ho! Ho! Kaale Je Libaas Di Shukeenan Kudi 😏',
            });
    }
    
});

//for registering Commands
client.on('interactionCreate', interaction => {
    console.log(interaction);
    if(interaction.commandName == 'billo')
        interaction.reply("hnji baage?");
});

client.login(process.env.DISCORD_TOKEN);