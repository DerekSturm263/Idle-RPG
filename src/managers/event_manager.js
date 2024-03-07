import { readdirSync } from 'node:fs';

export async function init_events(client) {
    console.log(`Event Manager: Started loading events...`);

    let count = 0;
    for (const file of readdirSync('./src/events')) {
        await import(`../events/${file}`)
            .then(obj => {
                const event = Object.values(obj)[0];
                event.once ? client.once(event.name, (...args) => event.execute(...args))
                           : client.on  (event.name, (...args) => event.execute(...args));
            
                console.log(`Event Manager: '${event.name}' loaded successfully.`);
                ++count;
            })
            .catch(err => console.error(`Event Manager: There was an error while loading an event. See message for details:\n${err}`));
    }

    console.log(`Event Manager: Successfully loaded ${count} events.`);
};
