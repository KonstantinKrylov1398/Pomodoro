export function minusOne({
  setStateCounter,
  setTomate,
  setTime,
  tomate,
  intervalWork,
}: any) {
  setStateCounter((number: number) => (number > 0 ? number - 1 : 0));
  setTomate(tomate - 1);
  setTime(intervalWork);
}
