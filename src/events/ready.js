export const event = {
    name: 'ready',
    execute(client) {
        console.log(`${client.user.tag} is online.`);
    }
};
