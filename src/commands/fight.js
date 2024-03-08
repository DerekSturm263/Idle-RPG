import { SlashCommandBuilder } from "discord.js";
import { embed } from "../resources/embeds/help.js";

export const command = {
    data: new SlashCommandBuilder()
        .setName('fight')
        .setDescription('Pick a fight with another party! The winning team can steal from the losing team.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [ embed() ], ephemeral: true });
    }
};
