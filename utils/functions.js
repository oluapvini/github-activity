export function readCommand (args) {
    const username = args[0];

    if (!username) {
        console.log('Usage: github-activity <username>');
        return null;
    }

    return username;
}