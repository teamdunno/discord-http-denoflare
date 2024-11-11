import type {
  CommandConfig,
  CommandInteraction,
} from "@inbestigator/discord-http";

export const config: CommandConfig = {
  description: "Returns a greeting",
};

export default async function greet(interaction: CommandInteraction) {
  if ("member" in interaction && interaction.member) {
    await interaction.reply({
      content:
        `Hey there, ${interaction.member.user.global_name}! Cool server!`,
      ephemeral: true,
    });
  } else if ("user" in interaction && interaction.user) {
    await interaction.reply({
      content: `Hey there, ${interaction.user.global_name}! Nice DMs!`,
      ephemeral: true,
    });
  }
}
