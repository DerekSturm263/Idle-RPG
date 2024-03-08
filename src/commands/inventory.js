import { SlashCommandBuilder } from "discord.js";
import { embed } from "../resources/embeds/inventory.js";

export const command = {
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('View, use, and manage the items in your inventory.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [ embed() ], ephemeral: true });
    }
};
