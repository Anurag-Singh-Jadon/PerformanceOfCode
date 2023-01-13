import React from "react";
import { Grid } from "@mui/material";
const GridSystem = () => {
  return (
    <Grid xs={12} container spacing={2}>
      <Grid item lg={3} xs={12} sm={6}>
        <h1 style={{ backgroundColor: "pink" }}>Block 1</h1>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <h1 style={{ backgroundColor: "pink" }}>Block 2</h1>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <h1 style={{ backgroundColor: "pink" }}>Block 3</h1>
      </Grid>
      <Grid item lg={3} xs={12} sm={6}>
        <h1 style={{ backgroundColor: "pink" }}>Block 4</h1>
      </Grid>
    </Grid>
  );
};

export default GridSystem;
