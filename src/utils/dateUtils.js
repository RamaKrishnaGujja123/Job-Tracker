// Format date as "Apr 15, 2025"
export function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

// Format time as "3:45 PM"
export function formatTime(dateStr) {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return new Date(dateStr).toLocaleTimeString(undefined, options);
}

// Format full date and time as "Apr 15, 2025, 3:45 PM"
export function formatDateTime(dateStr) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  return new Date(dateStr).toLocaleString(undefined, options);
}

// Get relative time like "2 days ago"
export function getRelativeTime(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.round((now - date) / 1000); // seconds

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return formatDate(dateStr);
}

// Check if a date is in the past
export function isPastDate(dateStr) {
  return new Date(dateStr) < new Date();
}

// Check if two dates are the same day
export function isSameDay(dateStr1, dateStr2) {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
