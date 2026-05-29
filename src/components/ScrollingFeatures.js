import React from "react";

function ScrollingFeatures() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.scrollContent} className="scroll-track">
          <span>🌟 Safe Environment</span>
          <span>💖 Personalised care for children</span>
          <span>👩‍🏫 Qualified Teachers</span>
          <span>🧘 Daily Fitness routine & Yoga</span>
          <span>🎨 Creative Activities</span>

          {/* Duplicate for smooth infinite scroll */}
          <span>🌟 Safe Environment</span>
          <span>💖 Well-Cared Children</span>
          <span>👩‍🏫 Qualified Teachers</span>
          <span>🧘 Daily Exercise & Yoga</span>
          <span>🎨 Creative Activities</span>
        </div>
      </div>

      <style>
        {`
          .scroll-track {
            animation: scroll 25s linear infinite;
          }

          .scroll-track:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </>
  );
}

const styles = {
  container: {
    width: "100%",
    overflow: "hidden",
    background: "linear-gradient(to right, #4facfe, #6a11cb)",
    padding: "15px 0",
  },
  scrollContent: {
    display: "flex",
    gap: "50px",
    width: "max-content",
    fontSize: "18px",
    fontWeight: "600",
    color: "white",
    whiteSpace: "nowrap",
  },
};

export default ScrollingFeatures;