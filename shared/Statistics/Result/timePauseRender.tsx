export function timeRenderPause(intervalWork: number) {
  if (intervalWork < 60) {
    return `${intervalWork} с `;
  }
  if (intervalWork > 60) {
    const minute = Math.floor(intervalWork / 60);
    return `${minute} м `;
  }
  if (intervalWork > 3600) {
    const hours = Math.floor(intervalWork / 3600);
    return `${hours} ч `;
  }
}
