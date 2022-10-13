import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Chip,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBottom from "../components/NavBottom";
import Unit from "../components/Unit";
import VideoBanner from "../components/Video";
import Fasilitas from "../components/Fasilitas";

function Index() {
  const [mnuDrawer, setMnuDrawer] = useState(false);
  const handleDrawerClose = (event) => {
    setMnuDrawer(false);
  };
  const handleDrawerOpen = () => {
    setMnuDrawer(true);
  };
  const handleWA = () => {
    location.replace(
      "https://wa.me/6281222226880?text=Halo..Marketing West Vista, saya berminat dengan apartemen ini, boleh info lengkap? Terima kasih"
    );
  };
  return (
    <>
      <Head>
        <title>West Vista apartemen - Fully Furnished</title>
        <meta
          name="description"
          content="Apartemen baru daerah Jakarta Barat DKI Jakarta, harga mulai 600jtan"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <React.Fragment>
        <CssBaseline />
        <Box p={2} margin="auto" mt="20px">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/logo-west-vista.png"
              width={223}
              height={58}
              alt="Logo West Vista"
            />
          </div>
        </Box>
        <Box
          p={{
            sx: { xs: 0, md: 4 },
          }}
          position="relative"
          margin="auto"
          mt="20px"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/west-vista-back.jpeg"
              width={1181}
              height={591}
              alt="Logo West Vista"
            />
          </div>
        </Box>
        <Box
          position="absolute"
          sx={{
            backgroundColor: "#c8a97e",
            marginTop: "-30px",
            borderRadius: "10px",
          }}
          left={{
            xs: "20%",
            md: "40%",
          }}
        >
          <Typography
            align="center"
            sx={{
              typography: {
                xs: "h6",
                md: "h4",
              },
            }}
            p={1}
            color="#222"
          >
            Apartemen Modern
          </Typography>
        </Box>
        <Box p={1}>
          <Container
            sx={{
              marginTop: "40px",
              border: "solid 1px #c8a97e",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <Typography component="div">
              Dikembangkan oleh Keppel Land, seorang warga Singapura pemenang
              penghargaan pengembang, bekerja sama dengan konsultan yang diakui
              secara internasional dari Spanyol dan Singapura, The Crest West
              Vista menawarkan kehidupan yang optimal di mana rasa kebersamaan
              dan perasaan kesendirian dapat saling muncul.
            </Typography>
            <Box mt="20px" fontWeight="bold">Kemudahan Pembayaran</Box>
            <Typography component="div" mt="20px">
              <Chip
                label="Hanya DP 10%"
                color="success"
                align="center"
                sx={{ fontWeight: "bold", fontSize: "16px" }}
              />
            </Typography>
          </Container>
        </Box>
        <Box p={1}>
          <Container
            sx={{
              backgroundColor: "#c8a97e",
              marginTop: "40px",
              border: "solid 1px #c8a97e",
              padding: "10px",
              borderRadius: "15px",
              position: "relative",
              maxWidth: {
                xs: "100%",
                md: "50%"
              }
            }}
          >
            <Box bgcolor="#66b566" color="#fff" p={1} align="center">PROMO BULAN INI</Box>
            <Typography align="center" mt="10px" color="#222">
              FREE PPN
              <br />
              New Concept Fully Furnished
              <br />
              Promo cara bayar KPA :<br />
              DP 5% / 10% 1x
              <br />
            </Typography>
          </Container>
        </Box>
        <Unit />        
        <VideoBanner />
        <Fasilitas />
        <Footer />
        <NavBottom />
      </React.Fragment>
    </>
  );
}

export default Index;
