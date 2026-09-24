# Cyberfocus

CyberFocus is currently a React application built with Vite. As of now, the project includes a cyberpunk login interface, animated login transition, Pomodoro timer, focus/break cycles, timer completion audio, and selectable animated video backgrounds. This project is intended for productivity purposes.

For those unfamiliar, a pomodoro timer is a time-management tool used to break work or study into 25-minute focused intervals followed by short 5-minute breaks.

## Current Features

The project currently contains:

* Cyberpunk-style login screen
* Temporary `ACCESS GRANTED` transition screen
* Pomodoro productivity dashboard
* 25-minute focus sessions
* 5-minute short breaks
* 15-minute long break after four focus sessions
* Start, pause, and reset controls
* Audio notification when a timer reaches zero
* Multiple looping cyberpunk video backgrounds
* Background-switching button
* Crossfade animation between backgrounds
* Mouse-based background parallax effect
* Responsive cyberpunk interface

### Current Login Behavior

The login screen is currently a front-end demonstration rather than a real authentication system.

Any non-empty username and access key will allow access to the dashboard.

No passwords or user information are currently stored.

### Prerequisites

Before running the project, ensure these are installed:

* [Node.js](https://nodejs.org/) — Node 20 or newer is recommended
* npm — included with Node.js
* Git

You can check installion by running:

* node -v
* npm -v

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sleepingtuna/cyberfocus.git
```

Move into project directory:

```bash
cd cyberfocus
```

### 2. Install Dependencies

Install packages required by the project:

```bash
npm install
```

This basically reads the project's `package.json` file and installs the required dependencies into `node_modules`.

You should not manually copy or upload the `node_modules` folder to GitHub since anyone downloading the project can recreate it by running `npm install`.

---

### 3. Add Background Videos (if not installed)

CyberFocus uses local MP4 files as backgrounds for the main Pomodoro screen.

The videos automatically:

* Play in a continuous loop
* Play without audio
* Appear dimmed behind the interface
* Crossfade when the background is changed
* Move slightly based on mouse position to create a parallax effect

These files are expected by the website:

* abstract-cyberpunk-city.1920x1080.mp4
* cyberpunk-2077-night-city.3840x2160.mp4
* cyberpunk-ronin.3840x2160.mp4
* cyberpunk-tokyo-city.960x540.mp4
* dark-alley-of-night-city.1920x1080.mp4
* dystopian-night-city.3840x2160.mp4
* lucys-apartment.3840x2160.mp4
* retro-cyberpunk.3840x2160.mp4

If these video files are unavailable, use your own `.mp4` files inside `public/backgrounds/` and update the `backgrounds` array inside:

```text
src/components/BackgroundVideo.jsx
```

For example:

```jsx
const backgrounds = [
  "/backgrounds/background-one.mp4",
  "/backgrounds/background-two.mp4",
];
```

---

### 4. Add the Timer Completion Sound (if not installed)

The Pomodoro timer plays an audio notification whenever a focus or break timer reaches `00:00`.

The application currently expects the sound file at:

```text
public/sounds/timer-complete.mp3
```

If you want to use a different filename, update the `<audio>` element inside:

```text
src/components/PomodoroTimer.jsx
```

For example:

```jsx
<audio
  ref={completionSound}
  src="/sounds/timer-complete.mp3"
  preload="auto"
/>
```

---

### 5. Run Development Server

```bash
npm run dev
```

Vite will yield a local development address in the terminal. Should look like this:

```text
http://localhost:5173/
```

Open that in your browser, or click it while holding ctrl.

Changes made to the React or CSS files will automatically update the development version of the website.

---

### Important Files

`main.jsx`

Starts the application and renders the main `App` component.

`App.jsx`

Controls the major screens of the application, including:

* Login Screen
* Access Granted Screen
* Pomodoro Dashboard


`LoginScreen.jsx`

Contains cyberpunk login interface. Currently simulated using React state and is not connected to a real account system.

`PomodoroTimer.jsx`

Contains the Pomodoro timer logic, including:

* Start
* Pause
* Reset
* 25-minute focus sessions
* 5-minute short breaks
* 15-minute long breaks
* Four-session Pomodoro cycles
* Timer completion sound

`BackgroundVideo.jsx`

Controls the animated dashboard backgrounds, including:

* Background video selection
* Video looping
* Crossfade transitions
* Mouse-based parallax movement

`App.css`

Contains most of the visual styling for the cyberpunk interface.

---

## Production Build

To create a production version of the current React application, run:

```bash
npm run build
```

Vite will create the optimized website inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

No backend server, database, external API, AI assistant, or account authentication system is required to run the project at this stage.
