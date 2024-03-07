import { readdirSync } from 'node:fs';
import { Collection, REST, Routes    } from 'discord.js';

const commandDatas = [];

export async function init_commands(client, token, clientID) {
    console.log(`Command Manager: Started loading slash commands...`);
    
    client.commands = new Collection();
    for (const file of readdirSync('./src/commands')) {
        await import(`../commands/${file}`)
            .then(obj => {
                const command = Object.values(obj)[0];
                commandDatas.push(command.data.toJSON());
                client.commands.set(command.data.name, command);

                console.log(`Command Manager: '${command.data.name}' loaded successfully.`);
            })
            .catch(err => console.error(`Command Manager: There was an error while loading a slash command. See message for details:\n${err}`));
    }
    
    const rest = new REST({ version: '10' }).setToken(token);
    const data = await rest.put(
        Routes.applicationCommands(clientID),
        { body: commandDatas }
    );

    console.log(`Command Manager: Successfully loaded ${data.count} slash commands.`);
}
