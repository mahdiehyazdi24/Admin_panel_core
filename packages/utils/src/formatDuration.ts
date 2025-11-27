export function formatDuration(seconds: number | null | undefined): string {
  if (!seconds) return "-";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const parts: string[] = [];

  if (hours > 0) parts.push(`${hours} ساعت`);
  if (minutes > 0) parts.push(`${minutes} دقیقه`);
  if (remainingSeconds > 0 || parts.length === 0)
    parts.push(`${remainingSeconds} ثانیه`);

  return parts.join(" و ");
}
