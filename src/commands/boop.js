import { SlashCommandBuilder } from "discord.js";
import { embed } from "../resources/embeds/help.js";

export const command = {
    data: new SlashCommandBuilder()
        .setName('boop')
        .setDescription('View the current challenges set up by the server owner.')
        .setNSFW(true),

    async execute(interaction) {
        await interaction.reply({ embeds: [ embed() ], ephemeral: true });
    }
};
