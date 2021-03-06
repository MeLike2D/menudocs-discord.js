import { Command } from "@lib";

export default class extends Command {

  constructor(...args) {
    super(...args, {
      aliases: ["hallo"],
      ratelimit: {
        bucket: 2,
        // seven seconds
        reset: 7 * 1000,
        stack: false
      }
    });
  }

  async run(message) {
    message.channel.send("Hello!");
  }

}
