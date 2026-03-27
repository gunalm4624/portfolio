"use client";

import { useEffect, useState, useRef } from "react";

const LAUNCH_DATE = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

function useCountdown(target: Date) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

function Digit({ value, label }: { value: number; label: string }) {
  const prev = useRef(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (prev.current !== value) {
      setFlip(true);
      const t = setTimeout(() => setFlip(false), 300);
      prev.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div className="digit-group">
      <div className={`digit-card ${flip ? "flip" : ""}`}>
        <span className="digit-value">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="digit-label">{label}</span>
    </div>
  );
}

function NoiseCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let raf: number;

    const draw = () => {
      const { width, height } = canvas;
      const image = ctx.createImageData(width, height);
      const data = image.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = data[i + 1] = data[i + 2] = v;
        data[i + 3] = 12;
      }
      ctx.putImageData(image, 0, 0);
      frame++;
      if (frame % 3 === 0) raf = requestAnimationFrame(draw);
      else raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "overlay",
        opacity: 0.35,
      }}
    />
  );
}

export default function MaintenancePage() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #080808;
          --fg: #ffffff;
          --muted: #555555;
          --accent: #ffffff;
          --accent-dim: rgba(255,255,255,0.08);
          --border: rgba(255,255,255,0.08);
          --border-accent: rgba(255,255,255,0.35);
        }

        html, body { height: 100%; }

        body {
          background: var(--bg);
          color: var(--fg);
          font-family: 'DM Mono', monospace;
          font-weight: 300;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .page {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          z-index: 1;
        }

        /* Radial glow */
        .glow {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }



        .inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 680px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          animation: fadein 1.2s ease both;
        }

        @keyframes fadein {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Top bar */
        .top-bar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5rem;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .top-bar .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
          margin-right: 8px;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Eyebrow */
        .eyebrow {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .eyebrow::before, .eyebrow::after {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--accent);
          opacity: 0.5;
        }

        /* Headline */
        h1 {
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          font-size: clamp(3.2rem, 8vw, 5.5rem);
          line-height: 1.0;
          text-align: center;
          color: var(--fg);
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        h1 em {
          font-style: italic;
          color: var(--accent);
        }

        /* Subtext */
        .subtext {
          font-size: 13px;
          color: var(--muted);
          text-align: center;
          max-width: 360px;
          line-height: 1.8;
          margin-bottom: 4rem;
          letter-spacing: 0.01em;
        }

        /* Countdown */
        .countdown {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
          align-items: flex-start;
        }

        .digit-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .digit-card {
          background: rgba(240,236,227,0.04);
          border: 1px solid var(--border);
          border-radius: 8px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }

        .digit-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(201,169,110,0.05) 0%, transparent 100%);
        }

        .digit-card.flip {
          animation: flipCard 0.3s ease;
        }

        @keyframes flipCard {
          0%   { transform: scaleY(1); }
          50%  { transform: scaleY(0.85); }
          100% { transform: scaleY(1); }
        }

        .digit-value {
          font-family: 'Instrument Serif', serif;
          font-size: 2.2rem;
          color: var(--fg);
          position: relative;
          z-index: 1;
          letter-spacing: -0.02em;
        }

        .digit-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .countdown-sep {
          font-family: 'Instrument Serif', serif;
          font-size: 2rem;
          color: var(--muted);
          margin-top: 18px;
          opacity: 0.4;
          animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% { opacity: 0.1; }
        }

        /* Progress bar */
        .progress-wrap {
          width: 100%;
          margin-bottom: 4rem;
        }

        .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }

        .progress-labels span:last-child { color: var(--accent); }

        .progress-bar {
          width: 100%;
          height: 2px;
          background: var(--border);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #888 0%, #fff 100%);
          border-radius: 2px;
          width: 72%;
          position: relative;
          animation: growBar 2s cubic-bezier(0.22,1,0.36,1) 0.5s both;
        }

        @keyframes growBar {
          from { width: 0%; }
          to   { width: 72%; }
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          right: 0; top: 50%;
          transform: translate(50%, -50%);
          width: 8px; height: 8px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255,255,255,0.5);
        }

        /* Notify form */
        .notify-form {
          width: 100%;
          display: flex;
          gap: 0;
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.3s;
          margin-bottom: 5rem;
        }

        .notify-form:focus-within {
          border-color: var(--border-accent);
        }

        .notify-form input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          padding: 14px 18px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          font-weight: 300;
          color: var(--fg);
          letter-spacing: 0.04em;
        }

        .notify-form input::placeholder { color: var(--muted); }

        .notify-form button {
          background: #ffffff;
          color: #080808;
          border: none;
          padding: 14px 22px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, opacity 0.2s;
          white-space: nowrap;
        }

        .notify-form button:hover { background: #dddddd; }
        .notify-form button:active { opacity: 0.85; }

        .success-msg {
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 0.08em;
          margin-bottom: 5rem;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: fadein 0.5s ease;
        }

        .success-msg::before {
          content: '✓';
          font-size: 14px;
        }

        /* Footer */
        .footer {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.08em;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-links a {
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-size: 10px;
          transition: color 0.2s;
        }

        .social-links a:hover { color: var(--accent); }

        @media (max-width: 480px) {
          h1 { font-size: 3rem; }
          .countdown { gap: 0.8rem; }
          .digit-card { width: 64px; height: 64px; }
          .digit-value { font-size: 1.8rem; }
          .top-bar, .footer { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>

      <div className="glow" />
      <NoiseCanvas />

      <main className="page">
        <div className="inner">
          {/* Eyebrow */}
          <div className="eyebrow">Under Construction</div>

          {/* Headline */}
          <h1>
            Something <em>Beautiful</em> is Coming
          </h1>

          {/* Subtext */}
          <p className="subtext">
            I&apos;m crafting a new portfolio experience.
            Expect thoughtful design, focused work, and a few surprises.
          </p>

          {/* Countdown */}
          <div className="countdown">
            <Digit value={days} label="Days" />
            <span className="countdown-sep">:</span>
            <Digit value={hours} label="Hours" />
            <span className="countdown-sep">:</span>
            <Digit value={minutes} label="Min" />
            <span className="countdown-sep">:</span>
            <Digit value={seconds} label="Sec" />
          </div>

          {/* Progress */}
          <div className="progress-wrap">
            <div className="progress-labels">
              <span>Progress</span>
              <span>72% complete</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" />
            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <span>© 2026 · Gunal M</span>
            <div className="social-links">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Youtube</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

