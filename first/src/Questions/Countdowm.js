import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

  useEffect(() => {
    if (secondsRemaining <= 0) return;

    const timerId = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [secondsRemaining]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={styles.timerContainer}>
      <h2 style={styles.timerLabel}>Countdown Timer</h2>
      <div style={styles.timeDisplay}>{formatTime(secondsRemaining)}</div>
      {secondsRemaining <= 0 && <div style={styles.finishedMessage}>Time's up!</div>}
    </div>
  );
};

const styles = {
  timerContainer: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '200px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  },
  timerLabel: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  timeDisplay: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#007BFF',
  },
  finishedMessage: {
    marginTop: '10px',
    fontSize: '16px',
    color: 'red',
  },
};

export default CountdownTimer;
