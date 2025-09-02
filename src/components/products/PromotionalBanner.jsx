// src/components/ProductList/PromotionalBanner.jsx
import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { girlImg } from "../../assets/images";

const PromotionalBanner = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 3, md: 6 } }}>
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #F4E8F3 0%, #F3EFF6 51%, #EEE0F9 100%)",
          borderRadius: 3,
          position: "relative",
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Grid container alignItems="center">
          {/* Left: Text */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 800, color: "#3A4980" }}
              >
                Grab Upto 50% Off On Selected Headphone
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 3,
                  backgroundColor: "#3A4980",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "#0d164d" },
                  "&:focus": { outline: "none" },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Grid>

          {/* Right: Image (pop out above banner) */}
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <Box
              component="img"
              src={girlImg}
              alt="promo"
              sx={{
                position: "absolute",
                top: { xs: -103, md: -185 },
                right: { xs: "20%", md: 130 },
                transform: { xs: "translateX(50%)", md: "none" },
                width: { xs: 150, md: 300 },
                height: { xs: 150, md: "auto" },
                zIndex: 2,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PromotionalBanner;