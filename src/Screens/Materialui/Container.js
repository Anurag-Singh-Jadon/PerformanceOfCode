import React from 'react'
import { Container } from "@mui/material";
const ContainerPage = () => {
  return (
    <div>
    <Container maxWidth="lg"  style={{backgroundColor:'pink'}}>
    <h1 >Container</h1>
    </Container>
    <Container maxWidth="md"  style={{backgroundColor:'pink'}}>
    <h1 >Container</h1>
    </Container>
    <Container maxWidth="sm"  style={{backgroundColor:'pink'}}>
    <h1 >Container</h1>
    </Container>
    <Container fixed  style={{backgroundColor:'pink'}}>
    <h1 >Container</h1>
    </Container>
    </div>
  )
}

export default ContainerPage