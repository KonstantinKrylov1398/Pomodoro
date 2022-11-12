export function timeRender(intervalWork: number) {
  console.log(String(intervalWork).endsWith("1"));
  if (intervalWork < 60 && String(intervalWork).endsWith("1")) {
    return `${intervalWork} секунды `;
  }
  if (intervalWork > 60 && String(intervalWork).endsWith("1")) {
    return `${intervalWork} минуты `;
  }
  if (intervalWork > 3600 && String(intervalWork).endsWith("1")) {
    return `${intervalWork} часа `;
  }
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
