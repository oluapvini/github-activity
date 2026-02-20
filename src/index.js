import { readCommand } from "../utils/functions.js";
import { fetchUserEvents } from "./github.js";

const args = process.argv.slice(2);
const username = readCommand(args);

if (!username) process.exit(1);

try {
  const events = await fetchUserEvents(username);
  console.log(`Fetched ${events.length} events for ${username}.`);
} catch (err) {
    console.log(err.message);
    process.exit(1);
}