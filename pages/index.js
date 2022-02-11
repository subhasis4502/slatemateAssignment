import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "rgb(0, 163, 150)",
          padding: "10px",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            color: "#311b92",
            fontWeight: "bold",
            padding: "10px",
            bgcolor: "#f9cf00",
            width: "fit-content",
            height: "fit-content",
            transform: "skewX(-8deg)",
          }}
        >
          Cambridge & IB- Maths Subject choices
        </Typography>

        <Grid
          className={styles.content}
          display="flex"
          padding="0 64px"
          sx={{
            justifyContent: "space-between",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <Box sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "#311b92", fontWeight: "bold" }}
            >
              IGCSE - Mathematics
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Mathematics Core/ Extended 0580
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              International Mathematics 0607
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Additional Mathematics 0606
            </Typography>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "#311b92", fontWeight: "bold" }}
            >
              AS-A level
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Mathematics 9709
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Mathematics Further 9231
            </Typography>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: "#311b92", fontWeight: "bold" }}
            >
              IBDP
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Mathematics: AA SL
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Mathematics: AA HL
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Mathematics: AI SL
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Mathematics: AI HL
            </Typography>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
