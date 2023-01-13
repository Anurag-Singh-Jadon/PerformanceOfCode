import { Button, Box } from "@mui/material";
import React from "react";

const BoxView = () => {
  return (
    <div style={{ flex: 1,alignSelf:'center' }}>
      <Box
        component="span"
        sx={{
          display: "flex",
         
          width: 130,
          height: 50,
          background: "red",
          borderRadius: 12,
          border: "1px dashed grey",
          alignItems: "center",
          justifyContent: "center",
          marginTop:30
        }}
      >
        <Button>Hello</Button>
      </Box>
    </div>
  );
};

export default BoxView;
