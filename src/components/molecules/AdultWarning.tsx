import { useEffect, useState } from "react";

export default function AdultWarning() {
  const [isVisible, setIsVisible] = useState(false);
  const [audio] = useState(new Audio("/Yamete Kudasai.mp3"));
  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = new Date().getTime();

    if (!lastVisit || currentDate - parseInt(lastVisit) > 24 * 60 * 60 * 1000) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const handleAccept = () => {
    const currentDate = new Date().getTime();
    localStorage.setItem("lastVisit", currentDate.toString());
    setIsVisible(false);
    playSound();
  };

  const playSound = () => {
    audio.play();
  };

  const handleMouseEnter = () => {
    if (!isAudioReady) {
      audio
        .play()
        .then(() => {
          setIsAudioReady(true);
        })
        .catch((error) => {
          console.error("Error al reproducir el sonido:", error);
        });
    } else {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center">
          <div className="rounded-lg p-6 w-96 text-center">
            <img
              src="https://peepoodo.bobbypills.com/images/adult.jpg"
              alt="Adult Content"
              className="w-full h-auto mb-4 rounded-xl"
            />
            <h2 className="text-xl text-white font-semibold">
              Website for adults only!
            </h2>
            <button
              onClick={handleAccept}
              onMouseEnter={handleMouseEnter}
              style={{
                backgroundColor: "#ff4500",
                border: "3px solid #FFF",
                color: "#FFF",
                padding: "12px 24px",
                cursor: "pointer",
                display: "inline-block",
                fontSize: "16px",
              }}
              className="mt-6 rounded-lg transition-all transform hover:bg-orange-700 hover:scale-105 hover:shadow-lg focus:outline-none"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
