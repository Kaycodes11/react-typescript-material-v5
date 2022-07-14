import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import cake from "../assets/cake.png";

function HeroSection() {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Typography variant="h4">A bliss in every bite</Typography>
        <Typography variant="h5">We offer tasty cakes and sweets</Typography>
        <Button variant="contained" sx={{ borderRadius: 5 }}>
          call us
        </Button>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        justifyContent="center"
        order={{ xs: 1, sm: 2 }}
      >
        <Box component="img" src={cake} />
      </Grid>
    </Grid>
  );
}

export default HeroSection;
