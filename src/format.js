export function formatEvenet(event) {
  const repo = event.repo?.name ?? "unknown repo";

  if (event.type === "PushEvent") {
    const commitsCount =
    event.payload?.commits?.length ??
    event.payload?.size ?? 
    0;
    return `Pushed ${commitsCount} commits to ${repo}`;
  }

  if (event.type === "WatchEvent") {
    return `Starred ${repo}`;
  }

  if (event.type === "IssuesEvent" && event.payload?.action === "opened") {
    return `Opened a new issue in ${repo}`;
  }

  return `${event.type} in ${repo}`;
}