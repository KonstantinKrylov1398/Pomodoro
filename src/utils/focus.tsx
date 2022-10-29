export const focus = ({ intervalWork, importTomate }: any) => {
  if (intervalWork > 0 && importTomate > 0) {
    return intervalWork / (importTomate * 25);
  } else {
    return 0;
  }
};
