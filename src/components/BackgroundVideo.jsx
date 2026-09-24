import { useEffect, useState } from "react";

const backgrounds = [
  "/backgrounds/abstract-cyberpunk-city.1920x1080.mp4",
  "/backgrounds/cyberpunk-2077-night-city.3840x2160.mp4",
  "/backgrounds/cyberpunk-ronin.3840x2160.mp4",
  "/backgrounds/cyberpunk-tokyo-city.960x540.mp4",
  "/backgrounds/dark-alley-of-night-city.1920x1080.mp4",
  "/backgrounds/dystopian-night-city.3840x2160.mp4",
  "/backgrounds/lucys-apartment.3840x2160.mp4",
  "/backgrounds/retro-cyberpunk.3840x2160.mp4",
];

const FADE_DURATION = 800;

function BackgroundVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(event) {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({
        x,
        y,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function changeBackground() {
    if (isTransitioning) {
      return;
    }

    const newIndex =
      (currentIndex + 1) % backgrounds.length;

    setNextIndex(newIndex);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setIsTransitioning(false);
    }, FADE_DURATION);
  }

  const parallaxStyle = {
    transform: `
      translate(
        ${mousePosition.x * -12}px,
        ${mousePosition.y * -8}px
      )
      scale(1.06)
    `,
  };

  return (
    <>
      <div className="background-system">

        <video
          className={
            isTransitioning
              ? "background-video current-video fade-out"
              : "background-video current-video"
          }
          src={backgrounds[currentIndex]}
          style={parallaxStyle}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {nextIndex !== null && (
          <video
            className="background-video next-video fade-in"
            src={backgrounds[nextIndex]}
            style={parallaxStyle}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}

        <div className="background-dim" />
        <div className="background-grid" />
      </div>

      <button
        className="background-switcher"
        onClick={changeBackground}
        disabled={isTransitioning}
      >
        CHANGE FEED
        <span>
          {String(currentIndex + 1).padStart(2, "0")}
          /
          {String(backgrounds.length).padStart(2, "0")}
        </span>
      </button>
    </>
  );
}

export default BackgroundVideo;