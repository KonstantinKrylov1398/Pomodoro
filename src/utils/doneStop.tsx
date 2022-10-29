export function doneStop({
  setStartResume,
  setStopStart,
  setStartRender,
  setPauseInterval,
  setDoneStart,
  setIntervalState,
  setStyle,
  setstartTimer,
  setSkipStart,
  setPauseAfterDone,
}: any) {
  setStartResume(false);
  setStopStart(false);
  setStartRender(false);
  setPauseInterval(false);
  setDoneStart(false);
  setIntervalState(5 * 60);
  setStyle("stop");
  setstartTimer(true);
  setSkipStart(true);
  setPauseAfterDone(true);
}
