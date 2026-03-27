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
  const [rating, setRating] = useState(5); // ⭐ NEW

  return (
    <div style={styles.container}>

      {/* STEP 0 — SLIDER */}
      {step === 0 && (
        <div>
          <h1>Rate our first date 🍣</h1>

          <Box sx={{ width: 300, margin: "0 auto", mt: 4 }}>
            <Slider
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              step={1}
              marks
              min={1}
              max={10}
              valueLabelDisplay="auto"
            />
          </Box>

          <Stack direction="row" justifyContent="center" sx={{ mt: 3 }}>
            <Button
              variant="contained"
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

          <textarea style={styles.textarea} />

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => setStep(0)}
            >
              Back
            </Button>

            <Button
              variant="contained"
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
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => setStep(1)}
            >
              Back
            </Button>

            <Button
              variant="contained"
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
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => setStep(2)}
            >
              Back
            </Button>

            <Button
              variant="contained"
              color="success"
              endIcon={<FavoriteIcon />}
            >
              Yes ❤️
            </Button>

            <Button
              variant="contained"
              color="secondary"
              endIcon={<CelebrationIcon />}
            >
              Of Course 😌
            </Button>
          </Stack>
        </div>
      )}

    </div>
  );
}


const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "sans-serif",
  },

  textarea: {
    marginTop: 20,
    width: 300,
    height: 100,
    padding: 10,
  },
};

