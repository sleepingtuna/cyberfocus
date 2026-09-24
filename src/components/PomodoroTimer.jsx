import { useEffect, useRef, useState } from "react";

const FOCUS_TIME = 25 * 60;
const SHORT_BREAK_TIME = 5 * 60;
const LONG_BREAK_TIME = 15 * 60;

function getModeDuration(mode) {
  if (mode === "focus") {
    return FOCUS_TIME;
  }

  if (mode === "shortBreak") {
    return SHORT_BREAK_TIME;
  }

  return LONG_BREAK_TIME;
}

function PomodoroTimer() {
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);

  const [mode, setMode] = useState("focus");

  const [completedFocusSessions, setCompletedFocusSessions] =
    useState(0);

  const completionSound = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((previousSeconds) => {
        return Math.max(previousSeconds - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (secondsLeft !== 0 || !isRunning) {
      return;
    }

    if (completionSound.current) {
      completionSound.current.currentTime = 0;

      completionSound.current.play().catch((error) => {
        console.log("Unable to play sound:", error);
      });
    }

    if (mode === "focus") {
      const newCompletedSessions =
        completedFocusSessions + 1;

      setCompletedFocusSessions(newCompletedSessions);
      if (newCompletedSessions % 4 === 0) {
        setMode("longBreak");
        setSecondsLeft(LONG_BREAK_TIME);
      } else {
        setMode("shortBreak");
        setSecondsLeft(SHORT_BREAK_TIME);
      }

      return;
    }

    if (mode === "longBreak") {
      setCompletedFocusSessions(0);
    }

    setMode("focus");
    setSecondsLeft(FOCUS_TIME);
  }, [
    secondsLeft,
    isRunning,
    mode,
    completedFocusSessions,
  ]);

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
    setSecondsLeft(getModeDuration(mode));
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  let timerLabel;
  let timerStatus;

  if (mode === "focus") {
    const currentCycle = completedFocusSessions + 1;

    timerLabel =
      `NEURAL FOCUS // CYCLE ${String(currentCycle).padStart(2, "0")}`;

    timerStatus = isRunning
      ? "NEURAL LINK ACTIVE"
      : "SYSTEM READY";
  } else if (mode === "shortBreak") {
    timerLabel =
      `COOL-DOWN // CYCLE ${String(completedFocusSessions).padStart(2, "0")} COMPLETE`;

    timerStatus = isRunning
      ? "RECOVERY ACTIVE"
      : "RECOVERY READY";
  } else {
    timerLabel = "DEEP RECOVERY // 04 CYCLES COMPLETE";

    timerStatus = isRunning
      ? "DEEP RECOVERY ACTIVE"
      : "DEEP RECOVERY READY";
  }

  return (
    <section className={`timer-panel ${mode}`}>
      <p className="timer-label">
        {timerLabel}
      </p>

      <h2 className="timer-display">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h2>

      <p className="timer-status">
        {timerStatus}
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

      <audio
        ref={completionSound}
        src="/sounds/timer-complete.mp3"
        preload="auto"
      />
    </section>
  );
}

export default PomodoroTimer;