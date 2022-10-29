export function handleResume({
  setStartPause,
  setstartTimer,
  setPauseInterval,
  setStopStart,
  setStartResume,
  setDoneStart,
  setSkipStart,
}: any) {
  setStartPause(true);
  setstartTimer(true);
  setPauseInterval(false);
  setStopStart(true);
  setStartResume(false);
  setDoneStart(false);
  setSkipStart(false);
}
