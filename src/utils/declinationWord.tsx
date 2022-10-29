export function declinationWord(importTomate: number) {
  if (String(importTomate).endsWith("1")) {
    return "помидор";
  }
  if (
    String(importTomate).endsWith("2") ||
    String(importTomate).endsWith("3") ||
    String(importTomate).endsWith("4")
  ) {
    return "помидора";
  }
  return "помидоров";
}
