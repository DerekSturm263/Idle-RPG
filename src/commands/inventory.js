import { SlashCommandBuilder } from "discord.js";
import { build_help } from "../resources/embeds/help.js";

export const command = {
    data: new SlashCommandBuilder()
        .setName('inventory')
        .setDescription('View, use, and manage the items in your inventory.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [ build_help() ], ephemeral: true });
    }
};
