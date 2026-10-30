import React, { useEffect, useRef, useState } from 'react';

const VIDEO_ID = "AJ8TvbBH0NA";
const CLIP_START = 4; // seconds: only this part of the video is played, on a loop
const CLIP_END = 18;
// YouTube shows the video title for a moment when playback starts; keep the cover up until it has gone.
const REVEAL_DELAY_MS = 3500;

function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  return new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (previous) previous();
      resolve(window.YT);
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  });
}

export default function EstateVideo() {
  const iframeRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let timer;
    let revealTimer;
    let cancelled = false;
    // Never leave the cover up for good if the player API can't load.
    const fallback = setTimeout(() => setRevealed(true), 8000);

    loadYouTubeApi().then((YT) => {
      if (cancelled || !iframeRef.current) return;
      const player = new YT.Player(iframeRef.current, {
        events: {
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.PLAYING && !revealTimer) {
              revealTimer = setTimeout(() => setRevealed(true), REVEAL_DELAY_MS);
            }
            // `end` in the URL stops playback at CLIP_END; go back to CLIP_START.
            if (e.data === YT.PlayerState.ENDED) {
              player.seekTo(CLIP_START, true);
              player.playVideo();
            }
          }
        }
      });
      // Backup for when the player ignores `end`.
      timer = setInterval(() => {
        if (player.getCurrentTime && player.getCurrentTime() >= CLIP_END) {
          player.seekTo(CLIP_START, true);
        }
      }, 250);
    });

    return () => {
      cancelled = true;
      clearInterval(timer);
      clearTimeout(revealTimer);
      clearTimeout(fallback);
    };
  }, []);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    start: String(CLIP_START),
    end: String(CLIP_END),
    controls: "0",
    disablekb: "1",
    fs: "0",
    iv_load_policy: "3",
    rel: "0",
    playsinline: "1",
    modestbranding: "1",
    enablejsapi: "1",
    origin: window.location.origin
  });

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-ink">
      {/* Oversized and non-interactive so YouTube's title bar, logo and hover controls stay out of view. */}
      <iframe
        ref={iframeRef}
        src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?${params}`}
        title="Baba Budan Hills Coffee Estate"
        tabIndex={-1}
        allow="autoplay; encrypted-media"
        className="absolute left-1/2 top-1/2 w-[135%] h-[135%] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
      />
      <img
        src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ${revealed ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
}
