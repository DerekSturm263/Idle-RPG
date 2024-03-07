import { config                     }   from 'dotenv';
import { Client, GatewayIntentBits  }   from 'discord.js'
import { init_events                }   from './managers/event_manager.js';
import { init_commands              }   from './managers/command_manager.js';

// Create a new client.
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
]});

// Config dotenv, all events, and all commands.
config();
await init_events(client);
await init_commands(client, process.env.TOKEN, process.env.CLIENT_ID);

// Initialize the bot.
client.login(process.env.TOKEN);
