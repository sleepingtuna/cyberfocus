import { useEffect, useState } from "react";

function PomodoroTimer() {
  const FOCUS_TIME = 25 * 60;

  const [secondsLeft, setSecondsLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((previousSeconds) => {
        if (previousSeconds <= 1) {
          setIsRunning(false);
          return 0;
        }

        return previousSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  function startTimer() {
    if (secondsLeft > 0) {
      setIsRunning(true);
    }
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setSecondsLeft(FOCUS_TIME);
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <section className="timer-panel">
      <p className="timer-label">
        NEURAL FOCUS // CYCLE 01
      </p>

      <h2 className="timer-display">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h2>

      <p className="timer-status">
        {isRunning ? "NEURAL LINK ACTIVE" : "SYSTEM READY"}
      </p>

      <div className="timer-controls">
        <button onClick={startTimer}>
          INITIATE
        </button>

        <button onClick={pauseTimer}>
          SUSPEND
        </button>

        <button onClick={resetTimer}>
          RESET
        </button>
      </div>
    </section>
  );
}

export default PomodoroTimer;