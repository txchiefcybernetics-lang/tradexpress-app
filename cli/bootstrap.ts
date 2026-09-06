import { COMMANDS } from "./registry";

const [, , command, ...args] = process.argv;


if (!command) {

  console.log("TradeXpress CLI");
  console.log("");

  console.log("Usage:");
  console.log("  tx <command> [args]");

  console.log("");

  console.log("Commands:");

  Object.keys(COMMANDS).forEach((name) => {
    console.log(`  ${name}`);
  });

  console.log("");

  console.log("Tips:");
  console.log("  tx help");
  console.log("  tx doctor");
  console.log("  tx status");

  process.exit(0);
}


type CommandName = keyof typeof COMMANDS;

const handler = COMMANDS[command as CommandName];


if (!handler) {

  console.log(`Unknown command: ${command}`);

  console.log("");

  console.log("Try:");
  console.log("  tx help");

  process.exit(1);

}


handler(...args);
