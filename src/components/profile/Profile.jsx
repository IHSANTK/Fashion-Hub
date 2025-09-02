// import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  Grid,
  Divider,
  IconButton,
//   useTheme,
//   useMediaQuery,
} from "@mui/material";
import { Person, Email, Phone, CalendarToday, Logout } from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleBackToProducts = () => {
    navigate("/products");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Box>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Profile Header */}
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: "center",
                position: "relative",
                background:
                  "linear-gradient(135deg, #F4E8F3 0%, #F3EFF6 51%, #EEE0F9 100%)",
                color: "white",
                borderRadius: 3,
              }}
            >
              {/* Logout Icon Top Right */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                }}
              >
                <IconButton
                  onClick={handleLogout}
                  sx={{
                    bgcolor: "#fff",
                    color: "#3A4980",
                 
                  }}
                >
                  <Logout />
                </IconButton>
              </Box>

              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 3,
                  bgcolor: "rgba(42, 6, 149, 0.2)",
                  border: "4px solid #3A4980",
                  fontSize: "3rem",
                }}
              >
                {userData?.fullName?.charAt(0) || <Person />}
              </Avatar>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#3A4980" }}
              >
                {userData?.fullName || "User Profile"}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, color: "#3A4980" }}>
                Welcome to your profile
              </Typography>
            </Paper>
          </Grid>

          {/* Profile Details - Full Width */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#3A4980", mb: 3 }}
              >
                Personal Information
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Person sx={{ mr: 2, color: "primary.main" }} />
                    <Box>
                      <Typography variant="body2" color="#3A4980">
                        Full Name
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#3A4980" }}
                      >
                        {userData?.fullName || "Not provided"}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Email sx={{ mr: 2, color: "primary.main" }} />
                    <Box>
                      <Typography variant="body2" color="#3A4980">
                        Email Address
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#3A4980" }}
                      >
                        {userData?.email || "Not provided"}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Phone sx={{ mr: 2, color: "primary.main" }} />
                    <Box>
                      <Typography variant="body2" color="#3A4980">
                        Mobile Number
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#3A4980" }}
                      >
                        {userData?.mobile || "Not provided"}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <CalendarToday sx={{ mr: 2, color: "primary.main" }} />
                    <Box>
                      <Typography variant="body2" color="#3A4980">
                        Date of Birth
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#3A4980" }}
                      >
                        {userData?.dateOfBirth
                          ? formatDate(userData.dateOfBirth)
                          : "Not provided"}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={handleBackToProducts}
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    background: "#3A4980",
                  }}
                >
                  Back to Products
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
