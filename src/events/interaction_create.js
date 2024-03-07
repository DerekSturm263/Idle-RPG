export const event = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (!interaction.isChatInputCommand())
            return;

        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
            console.log(`${interaction.member.user.tag} used /${interaction.commandName}.`);

            await command.execute(interaction)
                .catch(err => console.error(err));
        } catch (err) {
            console.error(err);
            await interaction.reply({ content: 'The command could not be executed. Please try again later.', ephemeral: true });
        }
    }
};
