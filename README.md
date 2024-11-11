This is a simple example for a bot made with [Discord-http](https://jsr.io/@inbestigator/discord-http).

## Getting Started

First, run the development bot:

```bash
deno task dev
```

You can try editing your bot by modifying `src/commands/greet.ts`.

## Deploying

When you're ready, you can deploy the bot with Deno deploy:

```bash
deno task build
deployctl deploy --entrypoint=bot.gen.ts
```

You can check out
[the GitHub repository](https://github.com/inbestigator/discord-http) - your
feedback and contributions are welcome!
