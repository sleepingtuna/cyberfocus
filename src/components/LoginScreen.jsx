import { useState } from "react";

function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState("");
  const [accessCode, setAccessCode] = useState("");

  function handleLogin() {
    if (username && accessCode) {
      onLogin();
    }
  }

  return (
    <main className="login-screen">
      <div className="login-panel">

        <p className="system-label">
          CYBERFOCUS // SECURE TERMINAL
        </p>

        <h1>NEURAL ACCESS</h1>

        <p className="system-status">
          SYSTEM STATUS: ONLINE
        </p>

        <div className="login-form">

          <label>
            USER ID
          </label>

          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="ENTER USER ID"
          />

          <label>
            ACCESS KEY
          </label>

          <input
            type="password"
            value={accessCode}
            onChange={(event) => setAccessCode(event.target.value)}
            placeholder="ENTER ACCESS KEY"
          />

          <button onClick={handleLogin}>
            AUTHENTICATE
          </button>

        </div>

        <p className="connection-status">
          CONNECTION SECURE // 77.4.2
        </p>

      </div>
    </main>
  );
}

export default LoginScreen;