export function skipStop({
  setPauseInterval,
  setIntervalState,
  setstartTimer,
  setStartPause,
  setStartResume,
  setStartRender,
  setSkipStart,
  setStopStart,
  setStyle,
  setStartResumeAfterDone,
  setPauseAfterDone,
}: any) {
  setPauseInterval(false);
  setIntervalState(25 * 60);
  setstartTimer(false);
  setStartPause(false);
  setStartResume(false);
  setStartRender(true);
  setSkipStart(false);
  setStopStart(true);
  setStyle("afterSkip");
  setStartResumeAfterDone(false);
  setPauseAfterDone(false);
}
