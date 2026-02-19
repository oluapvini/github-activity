import { readCommand } from "../utils/functions.js";

const args = process.argv.slice(2);
const username = readCommand(args);

if (!username) process.exit(1);

console.log("Username:", username);