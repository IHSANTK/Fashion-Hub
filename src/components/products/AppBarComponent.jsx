// src/components/ProductList/AppBarComponent.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Box,
  Typography,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Popover,
  Divider,
  ListItemIcon,
  Skeleton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close,
  Person,
  ExitToApp,
} from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext";
import { logo, cart } from "../../assets/images";

const AppBarComponent = ({ loading, userData }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Navbar center links
  const navLinks = ["Category", "Brand", "Contact", "FAQ's"];

  const handleMobileMenuOpen = () => setMobileMenuOpen(true);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  // Profile popup handlers - Fixed to prevent body shake
  const handleProfileClick = (event) => {
    // Prevent default to avoid any potential scroll issues
    event.preventDefault();
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleProfileNavigate = () => {
    handleProfileClose();
    navigate("/profile");
  };

  const handleLogout = async () => {
    try {
      handleProfileClose();
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const profileOpen = Boolean(profileAnchorEl);
  const profileId = profileOpen ? "profile-popover" : undefined;

  if (loading) {
    return (
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#222",
          boxShadow: "none",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box component="img" src={logo} alt="logo" sx={{ height: 36 }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Skeleton variant="circular" width={40} height={40} />
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#222",
          boxShadow: "none",
          borderBottom: "1px solid #eee",
          py: { xs: 1, md: 1.5 },
          borderRadius: 0,
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", px: { xs: 2, md: 11.5 } }}
        >
          {/* Left: Logo and Mobile Menu Button */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            {isMobile && (
              <IconButton
                sx={{ "&:focus": { outline: "none" } }}
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Box
              component="img"
              src={logo}
              alt="FashionHub Logo"
              sx={{ height: { xs: 15, md: 20 }, cursor: "pointer" }}
              onClick={() => navigate("/")}
            />

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                {navLinks.map((link) => (
                  <Link
                    key={link}
                    underline="none"
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      cursor: "pointer",
                      "&:hover": { color: "black" },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            )}
          </Box>

          {/* Right: Cart + User */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mr: 1 }}>
            {/* Cart Icon */}
            <Badge
              badgeContent={3}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#1D364D",
                  color: "#fff",
                  fontSize: "0.7rem",
                  border: "1px solid white",
                  fontWeight: 600,
                  minWidth: 18,
                  height: 19,
                  mr: 0.5,
                  mt: 0.2,
                  transform: "translate(30%, -30%)",
                },
              }}
            >
              <IconButton
                sx={{
                  bgcolor: "#f9f6f4",
                  borderRadius: "50%",
                  width: isMobile ? 36 : 44, // smaller on mobile
                  height: isMobile ? 36 : 44, // smaller on mobile
                  position: "relative",
                  "&:focus": { outline: "none" },
                }}
              >
                <Box
                  component="img"
                  src={cart}
                  alt="cart"
                  sx={{
                    width: isMobile ? 16 : 20, // smaller on mobile
                    height: isMobile ? 16 : 20,
                    objectFit: "contain",
                  }}
                />
              </IconButton>
            </Badge>

            {/* User Avatar */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  alt={userData?.fullName || "User"}
                  src={userData?.avatar || ""}
                  sx={{
                    width: isMobile ? 36 : 44, // smaller on mobile
                    height: isMobile ? 36 : 44, // smaller on mobile
                    cursor: "pointer",
                    "&:focus": { outline: "none" },
                  }}
                  onClick={handleProfileClick}
                  aria-describedby={profileId}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0.5,
                    right: 3,
                    width: 8,
                    height: 8,
                    bgcolor: "#D75951",
                    borderRadius: "50%",
                    border: "1px solid #fff",
                  }}
                />
              </Box>

              {/* Greeting + Name (hide text on mobile) */}
              {!isMobile && (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="caption"
                    sx={{ color: "#C0C3C6", fontSize: "0.8rem" }}
                  >
                    Good Morning!
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, color: "#1A2C3D" }}
                  >
                    {userData?.fullName || "Scarlet Johnson"}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Popover - Fixed to prevent body shake */}
      <Popover
        id={profileId}
        open={profileOpen}
        anchorEl={profileAnchorEl}
        onClose={handleProfileClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        disableScrollLock={true} // This prevents the scrollbar from disappearing
        PaperProps={{
          sx: {
            width: 200,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            mt: 1,
          },
        }}
      >
        <Box sx={{ py: 1 }}>
          <ListItem button onClick={handleProfileNavigate}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Person fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleLogout}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <ExitToApp fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Box>
      </Popover>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleMobileMenuClose}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link}
              onClick={() => {
                handleMobileMenuClose();
              }}
            >
              <ListItemText primary={link} />
            </ListItem>
          ))}
          <ListItem
            button
            onClick={() => {
              handleMobileMenuClose();
              handleLogout();
            }}
          >
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default AppBarComponent;
