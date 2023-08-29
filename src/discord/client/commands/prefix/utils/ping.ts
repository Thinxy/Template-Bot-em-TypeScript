import { MessageCommand } from "@/discord/structure/types/Commands";

export default new MessageCommand({
	name: "ping",
	description: "View my latency.",
	aliases: ["pong"],
	async run({ client, message, args }) {
		await message.reply({
			content: `Olá ${message.author}, meu ping está em \`${client.ws.ping}ms\`!`,
		});
	},
});
