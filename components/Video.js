import { Box } from "@mui/material";
import React from "react";

function Video() {
  return (    
        <Box sx={{
            width: {
                xs: "100%",
                md: "40%"
            },
            margin: "auto",
            paddingTop: "60px"
        }}>
      <iframe
        src="https://spindonesia.com/crest/"
        name="myiFrame"
        scrolling="no"
        frameborder="0"
        marginheight="0px"
        marginwidth="0px"
        height="600px"
        width="100%"
        allowfullscreen=""
      />
    </Box>
  )
}

export default Video;
