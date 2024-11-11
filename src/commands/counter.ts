import type {
  CommandConfig,
  CommandInteraction,
} from "@inbestigator/discord-http";

export const config: CommandConfig = {
  description: "Increments a counter",
};

let num = 0;

export default async function counter(interaction: CommandInteraction) {
  num++;

  await interaction.reply({
    content: `I've been run ${num} time${num === 1 ? "" : "s"}!`,
    ephemeral: true,
  });
}
