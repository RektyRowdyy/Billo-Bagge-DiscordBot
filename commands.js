import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

//List of commands
const commands = [
    {
      name: 'billo',
      description: 'Replies with bagge!',
    },
];

//Create a rest client
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

//Create the commands
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }