export function startResumeAfterDoneFunction({
  setPauseAfterDone,
  setstartTimer,
  setPauseInterval,
  setStopStart,
  setStartResumeAfterDone,
  setDoneStart,
  setSkipStart,
}: any) {
  setPauseAfterDone(true);
  setstartTimer(true);
  setStopStart(true);
  setStartResumeAfterDone(false);
  setDoneStart(false);
  setSkipStart(false);
  setPauseInterval(false);
}
