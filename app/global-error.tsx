"use client";

/**
 * Root-level error boundary — must render its own html/body.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0c0b0a",
          color: "#f4efe6",
          fontFamily: "Georgia, 'Times New Roman', serif",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 500, margin: 0 }}>
            Something went wrong
          </h1>
          <p style={{ marginTop: "1rem", color: "#a89f93" }}>
            Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #c9a96e",
              background: "#c9a96e",
              color: "#0c0b0a",
              font: "inherit",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
