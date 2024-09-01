export default function formatDate(date) {
  return new Intl.DateTimeFormat("ur-PK", { weekday: "long" }).format(date);
}
