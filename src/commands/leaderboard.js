import { SlashCommandBuilder } from "discord.js";
import { embed } from "../resources/embeds/help.js";

export const command = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('View the server\'s leaderboard to see who\'s on top!'),

    async execute(interaction) {
        await interaction.reply({ embeds: [ embed() ], ephemeral: true });
    }
};
