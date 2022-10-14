import { Box, Grid, ImageList, ImageListItem, Modal } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function Gallery() {
  const itemData = [
    { img: "/images/gallery/1room1.png" },
    { img: "/images/gallery/1room2.png" },
    { img: "/images/gallery/1room3.png" },
    { img: "/images/gallery/2room1.png" },
    { img: "/images/gallery/2room2.png" },
    { img: "/images/gallery/2room3.png" },
    { img: "/images/gallery/kidroom.png" },
    { img: "/images/gallery/masterroom.png" },
  ];
  const [img, setImg] = useState("");

  const handleClick = (img) => {
    setImg(img);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid
        container
        spacing={2}
        alignContent="center"
        alignSelf="center"
        sx={{
          maxWidth: {
            xs: "100%",
            md: "80%",
          },
          margin: {
            xs: "auto",
            md: "auto",
          },
          padding: "5px",
        }}
      >
        {itemData.map((item) => (
          <Grid item xs={6} md={4}>
            <Image
              src={item.img}
              layout="responsive"
              width={1180}
              height={614}
              alt="Cluster Studio"
              onClick={() => handleClick(item.img)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}       
      >
        <Box style={style}>
          <Image src={img} width={1180} height={614} onClick={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export default Gallery;
