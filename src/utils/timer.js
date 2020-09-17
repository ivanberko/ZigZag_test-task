const pad = (val) => {
  return String(val).padStart(2, '0');
};

const secondsToTime = (secs) => {
  const hours = Math.floor(secs / (60 * 60));
  const divisorForMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);
  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisorForSeconds);

  const obj = {
    h: pad(hours),
    m: pad(minutes),
    s: pad(seconds),
  };
  return obj;
};

export default secondsToTime;
