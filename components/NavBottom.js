import { CloudDownload, LocationOn, WhatsApp } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";

function NavBottom() {
  const handleDownload = (event) => {
    location.replace('https://wa.me/6281222226880?text=Halo..Marketing West Vista, boleh kirimkan brosur Apartemen ini ? Terima kasih')
  };
  const handleLokasi = (event) => {
    location.replace('https://wa.me/6281222226880?text=Halo..Marketing West Vista, boleh tahu alamat lokasi apartemen ini ? Terima kasih')
  };
  const handleWA = (event) => {
    location.replace('https://wa.me/6281222226880?text=Halo..Marketing West Vista, saya berminat dengan produk ini, boleh info lengkap? Terima kasih')
  }
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, opacity: "0.8" }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Brosur"
          onClick={handleDownload}
          icon={<CloudDownload />}
        />        
        <BottomNavigationAction label="Hubungi" icon={<WhatsApp />} onClick={handleWA} />
      </BottomNavigation>
    </Paper>
  );
}

export default NavBottom;
