import { SlashCommandBuilder } from "discord.js";
import { build_help } from "../resources/embeds/help.js";

export const command = {
    data: new SlashCommandBuilder()
        .setName('party')
        .setDescription('View information about your party. The admin of the party can take administrative actions.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [ build_help() ], ephemeral: true });
    }
};