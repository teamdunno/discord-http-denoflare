import type {
  CommandConfig,
  CommandInteraction,
} from "@inbestigator/discord-http";
const kv = await Deno.openKv();

export const config: CommandConfig = {
  description: "Increments a counter",
};

export default async function counter(interaction: CommandInteraction) {
  await kv.atomic().sum(["runs"], 1n).commit();

  const count = await kv.get(["runs"]);

  await interaction.reply({
    content: `I've been run ${count.value} time${
      count.value === 1 ? "" : "s"
    }!`,
    ephemeral: true,
  });
}
