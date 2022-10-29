export function pauseAfterDoneFunction({
  setstartTimer,
  setStyle,
  setDoneStart,
  setStartResumeAfterDone,
  setSkipStart,
  setPauseAfterDone,
  setStopStart,
  setPauseInterval,
}: any) {
  setstartTimer(false);
  setStyle("stop");
  setDoneStart(false);
  setStartResumeAfterDone(true);
  setSkipStart(true);
  setPauseAfterDone(false);
  setStopStart(false);
  setPauseInterval(true);
}
