import { EmbedBuilder } from 'discord.js'

export function embed() {
    return new EmbedBuilder()
        .setColor(0xFFFFFF)
        .setTitle('Inventory')
        .setDescription(
`
Here is your inventory.
`
        );
};
