export function handleStop({
  interval,
  setIntervalState,
  setStartRender,
  setStartPause,
  setstartTimer,
  setStopStart,
  setStyle,
  setPauseInterval,
  setQuantityStopInterval,
  quantityStopInterval,
  setPauseAfterDone,
}: any) {
  if (interval === 25 * 60) {
    return;
  }
  setIntervalState(25 * 60);
  setStartRender(true);
  setStartPause(false);
  setstartTimer(false);
  setStopStart(true);
  setStyle("afterSkip");
  setPauseInterval(false);
  setQuantityStopInterval(quantityStopInterval + 1);
  setPauseAfterDone(false);
}
