import { readCommand } from "../utils/functions.js";
import { fetchUserEvents } from "./github.js";
import { formatEvenet } from "./format.js";

const args = process.argv.slice(2);
const username = readCommand(args);

if (!username) process.exit(1);

try {
  const events = await fetchUserEvents(username);
  const recent = events.slice(0, 10);
  
  for (const event of recent) {
    console.log("- " + formatEvenet(event));
  }  
} catch (err) {
    console.log(err.message);
    process.exit(1);
}