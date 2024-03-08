import { SlashCommandBuilder } from "discord.js";
import { embed } from "../resources/embeds/help.js";

export const command = {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('View and purchase from the shop set up by the server owner.'),

    async execute(interaction) {
        await interaction.reply({ embeds: [ embed() ], ephemeral: true });
    }
};
