import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState(
    "From the moment you walked into my life, everything felt warmer, calmer, happier. This little space is just for you — always. ❤️"
  );

  useEffect(() => {
    const t = document.getElementById("love-text");
    if (t) {
      t.style.height = "auto";
      t.style.height = t.scrollHeight + "px";
    }
  }, [message]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={cardStyle}
          >
            <h1>Welcome my Queen 👑</h1>
            <p>A little birthday surprise I made just for you 💖</p>
            <button onClick={() => setStep(1)}>Enter 💕</button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div style={cardStyle}>
            <h2>Make a wish 🎂</h2>
            <div style={{ fontSize: "3rem" }}>🎂🕯️🕯️🕯️</div>
            <button onClick={() => setStep(2)}>Blow the candles 💨</button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div style={cardStyle}>
            <h2>Moments of My Love 💞</h2>
            <div style={gridStyle}>
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/300?random=${i}`}
                  style={imgStyle}
                />
              ))}
            </div>
            <button onClick={() => setStep(3)}>One last thing 💌</button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div style={cardStyle}>
            <h2>From My Heart ❤️</h2>
            <textarea
              id="love-text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={textareaStyle}
            />
            <p>Forever yours ✨</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.9)",
  padding: "24px",
  borderRadius: "20px",
  maxWidth: "400px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "8px",
  margin: "16px 0"
};

const imgStyle = {
  width: "100%",
  borderRadius: "10px"
};

const textareaStyle = {
  width: "100%",
  resize: "none",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #ccc"
};
