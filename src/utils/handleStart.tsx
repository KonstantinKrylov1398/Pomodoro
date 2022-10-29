export function handleStart({
  setStartRender,
  setStartPause,
  setStyle,
  setstartTimer,
  setPauseInterval,
}: any) {
  setStartRender(false);
  setStartPause(true);
  setStyle("start");
  setstartTimer(true);
  setPauseInterval(false);
}
