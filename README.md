This is a simple example for a bot made with
[Discord-http](https://jsr.io/@inbestigator/discord-http).

## Getting Started

First, run the development bot:

```bash
deno task dev
```

In order to obtain a public url to use as the interactions endpoint for Discord,
you need to forward a port, personally, I use VSCode's public port forward
system

If you aren't using VSCode, Cloudflared is a good cli option.

```bash
deno run -A npm:cloudflared tunnel --url=localhost:8000
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
