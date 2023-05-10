import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

function Unit() {
  return (
    <Box mt={4}>
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
            md: "auto"
          },
          padding: "5px"
        }}
      >
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <Image
                src="/images/West-studio1.png"
                layout="responsive"
                width={1180}
                height={614}
                alt="Studio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Studio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  30.20 - 34.13 m<sup>2</sup> (Semi Gross Area)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <Image
                src="/images/West-1bedroom3.png"
                layout="responsive"
                width={1180}
                height={614}
                alt="Cluster Studio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  1 Room
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  41.90 - 43.16 m<sup>2</sup> (Semi Gross Area)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardActionArea>
              <Image
                src="/images/West-2bedroom1.png"
                layout="responsive"
                width={1180}
                height={614}
                alt="2 Bedroom"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  2 Room
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  59.80 - 63.98 m<sup>2</sup> (Semi Gross Area)
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Unit;
