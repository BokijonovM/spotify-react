import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const WallPaper = styled("div")();

const Widget = styled("div")(() => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
}));

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider({ minutes }) {
  const duration = minutes; // seconds
  const [position, setPosition] = React.useState(32);
  function formatDuration(value) {
    const minute = Math.floor(value / 60) || 0;
    const secondLeft = value - minute * 60 || 0;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  return (
    <Box>
      <Widget>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>

        <div></div>
      </Widget>
      <WallPaper />
    </Box>
  );
}

// <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
//   <VolumeDownRounded htmlColor={lightIconColor} />
//   <Slider
//     aria-label="Volume"
//     defaultValue={30}
//     sx={{
//       color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
//       "& .MuiSlider-track": {
//         border: "none",
//       },
//       "& .MuiSlider-thumb": {
//         width: 24,
//         height: 24,
//         backgroundColor: "#fff",
//         "&:before": {
//           boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
//         },
//         "&:hover, &.Mui-focusVisible, &.Mui-active": {
//           boxShadow: "none",
//         },
//       },
//     }}
//   />
//   <VolumeUpRounded htmlColor={lightIconColor} />
// </Stack>;
