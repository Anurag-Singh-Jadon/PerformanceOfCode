import React from 'react'
import { Grid,Hidden } from "@mui/material";
const HiddenLayout = () => {
  return (
    <Grid  container item xs={12} spacing={2}>
     <Grid lg={3} sm={6} xs={12} item ><h1 style={{backgroundColor:'pink',flex: 1}}>Block 1</h1></Grid>
     <Grid lg={3} sm={6} xs={12} item ><h1 style={{backgroundColor:'green',flex: 1}}>Block 2</h1></Grid>
     {/* When we want to remove this from sm size */}
     {/* <Hidden only="sm" ><h1 style={{backgroundColor:'yellow',flex: 1}}>Block 3</h1></Hidden> */}
     {/* When we want to remove with md and sm both size only. */}
     <Hidden only={['sm','md']} ><h1 style={{backgroundColor:'yellow',flex: 1}}>Block 3</h1></Hidden>
     <Grid lg={3} sm={6} xs={12} item ><h1 style={{backgroundColor:'red',flex: 1}}>Block 4</h1></Grid>
    </Grid>
  )
}

export default HiddenLayout