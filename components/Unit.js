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
                src="/images/studio.jpg"
                layout="responsive"
                width={1400}
                height={580}
                alt="Cluster Studio"
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
                src="/images/1bedroom.jpg"
                layout="responsive"
                width={1400}
                height={580}
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
                src="/images/2bedroom.jpg"
                layout="responsive"
                width={1400}
                height={580}
                alt="Cluster Studio"
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
