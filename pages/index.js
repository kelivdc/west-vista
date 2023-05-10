import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Button, Chip, Typography } from "@mui/material";
import Head from "next/head";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBottom from "../components/NavBottom";
import Unit from "../components/Unit";
import Fasilitas from "../components/Fasilitas";
import { WhatsApp } from "@mui/icons-material";
import Gallery from "../components/Gallery";

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
        <title>West Vista Apartemen - Fully Furnished</title>
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
            marginTop: "-30px",
          }}
          mx="auto"
        >
          <Typography
            align="center"
            sx={{
              backgroundColor: "#c8a97e",
              borderRadius: "10px",
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
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/cicilan.jpeg"
            width={320}
            height={680}
            alt="Cicilan"
          />
        </div>
        {/* <Typography
          align="center"
          sx={{
            typography: {
              xs: "h6",
              md: "h5",
            },
            color: "#fff",
            bgcolor: "#ff6a00",
            maxWidth: "200px",
            borderRadius: "15px",
          }}
          mt={4}
          mx="auto"
          p={1}
          color="#222"
        >
          Harga 570jt an
        </Typography> */}
        <Typography
          align="center"
          sx={{
            typography: {
              xs: "h6",
              md: "h5",
            },
            color: "#fff",
            bgcolor: "#38bb83",
            maxWidth: "200px",
            borderRadius: "15px",
          }}
          mt={4}
          mx="auto"
          p={1}
          color="#222"
        >
          Harga 499jt*<br />
          Limited Stok<br />
          Sisa 3 unit
        </Typography>
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
            <Box mt="20px" fontWeight="bold">
              Hubungi
            </Box>
            <Button
              color="success"
              variant="contained"
              endIcon={<WhatsApp />}
              onClick={handleWA}
            >
              Ira 0812 2222 6880
            </Button>
          </Container>
        </Box>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/bca-green-mark.jpeg"
            width={620}
            height={680}
            alt="BCA"
          />
        </div>
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
                md: "50%",
              },
            }}
          >
            <Box bgcolor="#66b566" color="#fff" p={1} align="center">
              PROMO BULAN INI
            </Box>
            <Typography align="center" mt="10px" color="#222">
              Free full furnished (New Concept)
              <br />
              Free biaya akad
              <br />
              Free IPL
              <br />
            </Typography>
          </Container>
        </Box>
        <div
          style={{
            marginTop: "30px",
            display: "flex",            
            justifyContent: "center",
          }}
        >
         <video style={{ width: '100%', maxWidth: "640px" }} controls>
          <source src="/west-vista.mp4" type="video/mp4" />
        </video>

        </div>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/foto-awal1.png"
            width={1000}
            height={680}
            alt="West Vista"
          />
        </div>

        <Unit />
        <Gallery />
        <Fasilitas />
        <Box mt="20px" fontWeight="bold" align="center">
          Hubungi
          <br />
          <Button
            color="success"
            variant="contained"
            endIcon={<WhatsApp />}
            onClick={handleWA}
          >
            Ira 0812 2222 6880
          </Button>
        </Box>

        <Footer />
        <NavBottom />
      </React.Fragment>
    </>
  );
}

export default Index;
