import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Styles
import * as styles from './StylesTimer.module.css';

// Utils
import secondsToTime from '../../utils/timer';

const Timer = ({ isVisible }) => {
  const [time, setTime] = useState({});
  const [seconds, setSeconds] = useState(960);

  useEffect(() => {
    if (isVisible) {
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
      setTime(secondsToTime(seconds));
    } else {
      setSeconds(960);
      setTime(secondsToTime(seconds));
    }
  }, [seconds, isVisible]);

  return (
    <div className={styles.timer}>
      <p>
        {time.h}:{time.m}:{time.s}
      </p>
    </div>
  );
};

Timer.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Timer;
