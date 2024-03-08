import { EmbedBuilder } from 'discord.js'

export function embed() {
    return new EmbedBuilder()
        .setColor(0xFFFFFF)
        .setTitle('Welcome to Idle RPG!')
        .setDescription(
`
### This bot brings an RPG experience into your Discord server, transforming it into an engaging roleplaying experience that you and your friends can enjoy together. Here are some useful commands you'll need to know:

### /party
Lets you view you and the other members in your party. If you are the party leader, you can take administrative actions.

### /fight
Lets you pick a fight with another party.

### /inventory
Lets you view, manage, and use your items.

### /challenges
Lets you view the challenges the server owner has currently set up.

### /leaderboard
Lets you view the server's leaderboard to see which party is at the top.

### /shop
Lets you view the server's shop that the server owner has set up.
`
        );
};
