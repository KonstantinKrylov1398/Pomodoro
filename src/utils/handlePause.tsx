export function handlePause({
  setStartPause,
  setstartTimer,
  setStartResume,
  setStyle,
  setStopStart,
  setDoneStart,
  setSkipStart,
  setPause,
  pause,
  setPauseInterval,
}: any) {
  setStartPause(false);
  setstartTimer(false);
  setStartResume(true);
  setStyle("pause");
  setStopStart(false);
  setDoneStart(true);
  setSkipStart(false);
  setPause(pause + 1);
  setPauseInterval(true);
}
