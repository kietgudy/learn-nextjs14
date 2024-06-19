"use client";
import { useHasMounted } from "@/utils/customHook";
import { AppBar, Container } from "@mui/material";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Footer = () => {
  const hasMounted = useHasMounted();
  if (!hasMounted) return <></>;
  return (
    <div>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          background: "#f2f2f2",
          boxShadow: "unset",
        }}
      >
        <Container sx={{display: "flex", gap: 10}}>
          <AudioPlayer
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
            volume={0.5}
            style={{ boxShadow: "unset", background: "#f2f2f2" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              minWidth: 150,
            }}
          >
            <div style={{ color: "#ccc" }}>Kiet</div>
            <div style={{ color: "black" }}>Chung ta cua hien tai</div>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default Footer;
