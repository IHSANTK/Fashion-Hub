// src/components/ProductList/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #F4E8F3 0%, #F3EFF6 51%, #EEE0F9 100%)",
        color: "#111",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        py: 8,
        mt: 8,
        minHeight: 400,
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 500, mt: 7 }}>
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;