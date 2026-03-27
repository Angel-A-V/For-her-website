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
  const [feedback, setFeedback] = useState("");

  const [yesClicks, setYesClicks] = useState(0);
  const [sureText, setSureText] = useState("");

  const getEmoji = (value) => {
    if (value <= 3) return "😢";
    if (value <= 7) return "😐";
    if (value <= 9) return "🥹";
    return "😍";
  };

  const pinkButtonStyle = {
    backgroundColor: "#facce7",
    color: "#e68bbe",
    fontWeight: "bold",
    borderRadius: "20px",
    padding: "14px 24px",
    fontSize: "16px",
    textTransform: "none",
    boxShadow: "0 4px 10px rgba(238,161,205,0.4)",
    transition: "all 0.2s ease",

    "&:hover": {
      backgroundColor: "#f1c0dc",
    },

    "&:active": {
      transform: "scale(0.97)",
    },
  };

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

    alert("Send me that file 😌");
  };

  return (
    <div style={styles.container}>
      
      {/* STEP 0 */}
      {step === 0 && (
        <>
          <h1>Rate our first official date 🍣</h1>

          <Box sx={{ width: "100%", maxWidth: 320, mt: 4 }}>
            <Slider
              value={rating}
              onChange={(e, v) => setRating(v)}
              min={0}
              max={10}
              step={1}
              valueLabelDisplay="on"
              sx={{ color: "#eea1cd" }}
            />

            <h2>{getEmoji(rating)}</h2>
          </Box>

          <Button sx={pinkButtonStyle} onClick={() => setStep(1)}>
            Submit →
          </Button>
        </>
      )}

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <h1>How should I improve? 😅</h1>

          <textarea
            style={styles.textarea}
            placeholder="Be honest... I can take it 😅"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button sx={pinkButtonStyle} onClick={() => setStep(0)}>
              Back
            </Button>

            <Button sx={pinkButtonStyle} onClick={() => setStep(2)}>
              Next →
            </Button>
          </Stack>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <h1>I have one more question...</h1>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button sx={pinkButtonStyle} onClick={() => setStep(1)}>
              Back
            </Button>

            <Button sx={pinkButtonStyle} onClick={() => setStep(3)}>
              Continue →
            </Button>
          </Stack>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <h1>May this brochacho be your boyfriend?</h1>

          {sureText && <h2>{sureText}</h2>}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button sx={pinkButtonStyle} onClick={() => setStep(2)}>
              Back
            </Button>

            <Button
              sx={{
                ...pinkButtonStyle,
                transform: `scale(${1 + yesClicks * 0.2})`,
              }}
              onClick={() => {
                if (yesClicks === 0) setSureText("Are you sure? 😳");
                else if (yesClicks === 1) setSureText("Really sure?? 🥹");
                else if (yesClicks === 2) {
                  setSureText("Okay okay I get it 😭❤️");
                  downloadResponse();
                  return;
                }

                setYesClicks(yesClicks + 1);
              }}
            >
              Yes ❤️
            </Button>

            <Button
              sx={{
                ...pinkButtonStyle,
                transform: `scale(${1 + yesClicks * 0.2})`,
              }}
              onClick={() => {
                if (yesClicks === 0) setSureText("Are you sure? 😳");
                else if (yesClicks === 1) setSureText("Really sure?? 🥹");
                else if (yesClicks === 2) {
                  setSureText("I knew it 😌❤️");
                  downloadResponse();
                  return;
                }

                setYesClicks(yesClicks + 1);
              }}
            >
              Of Course 😌
            </Button>
          </Stack>
        </>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },

  textarea: {
    marginTop: 20,
    width: "100%",
    maxWidth: 320,
    height: 120,
    padding: 15,
    borderRadius: "30px",
    border: "2px solid #eea1cd",
    fontSize: "16px",
    fontFamily: "CookieMonster",
    backgroundColor: "#fff0f6",
  },
};