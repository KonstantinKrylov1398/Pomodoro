export function plusOne({
  setStateCounter,
  setTomate,
  setTime,
  tomate,
  intervalWork,
}: any) {
  setStateCounter((number: number) => number + 1);
  setTomate(tomate + 1);
  setTime(intervalWork);
}
