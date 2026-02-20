export async function fetchUserEvents(username) {
    const url = `https://api.github.com/users/${username}/events`;

    const res = await fetch(url, {
        headers: {
            "User-Agent": "github-activity-cli",
            "Accept": "application/vnd.github+json",
        },
    });

    if (res.status === 404) {
        throw new Error("User not found.");
    }
    if (res.status === 303) {
        throw new Error("API rate limit exceeded or access forbidden. Try again later.");
    }
    if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
}