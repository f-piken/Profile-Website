"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    let exitTimer;
    let removeTimer;
    let fallback;

    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(fallback);
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, 1250 - elapsed);

      exitTimer = window.setTimeout(() => {
        setIsExiting(true);
        removeTimer = window.setTimeout(() => {
          setIsDone(true);
          window.dispatchEvent(new Event("portfolio:loaded"));
        }, 520);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    fallback = window.setTimeout(finish, 2200);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(fallback);
    };
  }, []);

  if (isDone) return null;

  return (
    <div className={`site-loader ${isExiting ? "is-exiting" : ""}`} aria-label="Loading portfolio">
      <div className="site-loader-mark" aria-hidden="true">
        <span className="site-loader-name">Fiky</span>
        <span className="site-loader-subtitle">PORTFOLIO LOADING</span>
        <span className="site-loader-line" />
        <span className="site-loader-line site-loader-line-slanted" />
      </div>
    </div>
  );
}
