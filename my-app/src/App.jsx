import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";


import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function App() {
  const [step, setStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState(""); // ✅ ADDED

  const getEmoji = (value) => {
    if (value <= 3) return "😢";
    if (value <= 7) return "😐";
    if (value <= 9) return "🥹";
    return "😍";
  };

  // 💗 Button Style
  const pinkButtonStyle = {
    backgroundColor: "#facce7",
    color: "#e68bbe",
    fontWeight: "bold",
    borderRadius: "20px",
    padding: "10px 20px",
    textTransform: "none",
    boxShadow: "0 4px 10px rgba(238,161,205,0.4)",

    "&:hover": {
      backgroundColor: "#f1c0dc",
      boxShadow: "0 6px 14px rgba(238,161,205,0.6)",
    },

    "&:active": {
      transform: "scale(0.97)",
    },
  };

  // 💾 DOWNLOAD FUNCTION
  const downloadResponse = () => {
    const content = `
💗 First Official Date 💗

Rating: ${rating}
Feedback: ${feedback}

— from your future girlfriend (hopefully)
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "our-date.txt";
    a.click();

    URL.revokeObjectURL(url);

    alert("Send me that file 😌"); // 👈 smooth instruction
  };

  return (
    <div style={styles.container}>
      {/* STEP 0 */}
      {step === 0 && (
        <div>
          <h1>Rate our first official date 🍣</h1>

          <Box sx={{ width: 300, margin: "0 auto", mt: 4 }}>
            <Slider
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              min={0}
              max={10}
              step={1}
              valueLabelDisplay="on"
              sx={{
                color: "#eea1cd",

                "& .MuiSlider-thumb": {
                  backgroundColor: "#eea1cd",
                },

                "& .MuiSlider-rail": {
                  backgroundColor: "#eea1cd",
                  opacity: 0.5,
                },

                "& .MuiSlider-valueLabel": {
                  backgroundColor: "#f4b8da",
                },
              }}
            />

            <h2>Rating: {getEmoji(rating)}</h2>
          </Box>

          <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
            <Button
              sx={pinkButtonStyle}
              endIcon={<ArrowForwardIcon />}
              onClick={() => setStep(1)}
            >
              Submit
            </Button>
          </Stack>
        </div>
      )}

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h1>How should I improve? 😅</h1>

          <textarea
            className="custom-textarea"
            style={styles.textarea}
            placeholder="Be honest... I can take it 😅"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Button
              sx={pinkButtonStyle}
              startIcon={<ArrowBackIcon />}
              onClick={() => setStep(0)}
            >
              Back
            </Button>

            <Button
              sx={pinkButtonStyle}
              endIcon={<ArrowForwardIcon />}
              onClick={() => setStep(2)}
            >
              Next
            </Button>
          </Stack>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h1>I have one more question...</h1>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Button
              sx={pinkButtonStyle}
              startIcon={<ArrowBackIcon />}
              onClick={() => setStep(1)}
            >
              Back
            </Button>

            <Button
              sx={pinkButtonStyle}
              endIcon={<ArrowForwardIcon />}
              onClick={() => setStep(3)}
            >
              Continue
            </Button>
          </Stack>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h1>May this brochacho be your boyfriend?</h1>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Button
              sx={pinkButtonStyle}
              startIcon={<ArrowBackIcon />}
              onClick={() => setStep(2)}
            >
              Back
            </Button>

            <Button
              sx={pinkButtonStyle}
              endIcon={<FavoriteIcon />}
              onClick={downloadResponse}
            >
               Yes
            </Button>

            <Button
              sx={pinkButtonStyle}
              endIcon={<CelebrationIcon />}
              onClick={downloadResponse}
            >
              Of Course 😌
            </Button>
          </Stack>
        </div>
      )}
    </div>
  );
}

/* =========================
   STYLES
========================= */
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  textarea: {
    marginTop: 20,
    width: 320,
    height: 120,
    padding: 15,
    borderRadius: "30px",
    border: "2px solid #eea1cd",
    outline: "none",
    fontSize: "16px",
    fontFamily: "CookieMonster",
    backgroundColor: "#fff0f6",
    boxShadow: "0 4px 12px rgba(238,161,205,0.3)",
    color: "#e68bbe",
    caretColor: "#eea1cd",
  },
};