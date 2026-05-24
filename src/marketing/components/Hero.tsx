import React, { useEffect, useRef } from "react";

/* ── Sparkle canvas ─────────────────────────────────────────── */
function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Sparkle particles
    const count = 55;
    const sparks = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.003,
      phase: Math.random() * Math.PI * 2,
      drift: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.25 + 0.08),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks.forEach((s) => {
        s.phase += s.speed;
        s.x += s.drift;
        s.y += s.vy;
        s.alpha = 0.35 + 0.65 * Math.abs(Math.sin(s.phase));

        if (s.y < -4) {
          s.y = canvas.height + 4;
          s.x = Math.random() * canvas.width;
        }
        if (s.x < -4) s.x = canvas.width + 4;
        if (s.x > canvas.width + 4) s.x = -4;

        // outer glow
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
        grd.addColorStop(0, `rgba(255,255,255,${s.alpha * 0.6})`);
        grd.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

/* ── Hero ────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e293b 100%)",
        paddingTop: "calc(64px + 4.5rem)",
        paddingBottom: "5rem",
        color: "#ffffff",
      }}
    >
      {/* Sparkle layer */}
      <SparkleCanvas />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(2rem, 8vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            margin: "0 0 1.25rem",
            color: "#ffffff",
          }}
        >
          Professional Cleaning,{" "}
          <span style={{ color: "#D91429" }}>On Your Schedule</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.2rem)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.82)",
            margin: "0 0 0.75rem",
            lineHeight: 1.6,
          }}
        >
          Trusted professionals delivering quality cleaning with convenience.
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            margin: "0 0 2.75rem",
            letterSpacing: "0.01em",
            lineHeight: 1.7,
          }}
        >
          Elevating residential cleaning through professionalism and simplicity.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            alignItems: "center",
          }}
        >
          <a
            href="https://app.procleanvlinc.com/#/signup/location"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "340px",
              background: "#D91429",
              color: "#ffffff",
              textAlign: "center",
              padding: "1rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(217,20,41,0.45)",
            }}
          >
            Sign Up as a Provider
          </a>
          <a
            href="https://app.procleanvlincservice.com/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "340px",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              textAlign: "center",
              padding: "1rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            Sign Up as a Customer
          </a>
        </div>
      </div>
    </section>
  );
}
