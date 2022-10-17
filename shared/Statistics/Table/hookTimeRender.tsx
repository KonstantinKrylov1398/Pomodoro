export function timeRender(intervalWork: number) {
  if (intervalWork < 60) {
    return `${intervalWork} секунд `;
  }
  if (intervalWork > 60) {
    const minute = Math.floor(intervalWork / 60);
    return `${minute} минут `;
  }
  if (intervalWork > 3600) {
    const hours = Math.floor(intervalWork / 3600);
    return `${hours} часов `;
  }
}
