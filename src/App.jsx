import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import PomodoroTimer from "./components/PomodoroTimer";
import BackgroundVideo from "./components/BackgroundVideo";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAccessGranted, setShowAccessGranted] = useState(false);

  function handleLogin() {
    setShowAccessGranted(true);

    setTimeout(() => {
      setShowAccessGranted(false);
      setLoggedIn(true);
    }, 1500);
  }

  if (showAccessGranted) {
    return (
      <main className="access-granted-screen">
        <p className="system-label">
          CYBERFOCUS // SECURITY SYSTEM
        </p>

        <h1>ACCESS GRANTED</h1>

        <p className="access-message">
          INITIALIZING NEURAL INTERFACE...
        </p>
      </main>
    );
  }

  if (!loggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <main className="dashboard">

      <BackgroundVideo />

      <div className="dashboard-content">

        <header className="dashboard-header">
          <div>
            <p className="system-label">
              CYBERFOCUS // PRODUCTIVITY VIA POMODORO
            </p>

            <h1>CYBERFOCUS</h1>
          </div>

          <p className="online-status">
            ● SYSTEM ONLINE
          </p>
        </header>

        <PomodoroTimer />

      </div>

    </main>
  );
}

export default App;