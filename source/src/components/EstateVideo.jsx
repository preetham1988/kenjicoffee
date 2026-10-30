import React, { useEffect, useRef } from 'react';

const VIDEO_ID = "AJ8TvbBH0NA";
const CLIP_END = 22; // seconds: only this opening part of the video is played, on a loop

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

  useEffect(() => {
    let timer;
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled || !iframeRef.current) return;
      const player = new YT.Player(iframeRef.current, {
        events: {
          onStateChange: (e) => {
            // `end` in the URL stops playback at CLIP_END; restart from the beginning.
            if (e.data === YT.PlayerState.ENDED) {
              player.seekTo(0, true);
              player.playVideo();
            }
          }
        }
      });
      // Backup for when the player ignores `end` (e.g. after the user seeks).
      timer = setInterval(() => {
        if (player.getCurrentTime && player.getCurrentTime() >= CLIP_END) {
          player.seekTo(0, true);
        }
      }, 250);
    });

    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, []);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    start: "0",
    end: String(CLIP_END),
    rel: "0",
    playsinline: "1",
    modestbranding: "1",
    enablejsapi: "1",
    origin: window.location.origin
  });

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-ink">
      <iframe
        ref={iframeRef}
        src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?${params}`}
        title="Baba Budan Hills Coffee Estate"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
