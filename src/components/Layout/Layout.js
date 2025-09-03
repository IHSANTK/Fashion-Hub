import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AppBarComponent from "./AppBarComponent";
import Footer from "./Footer";
import { useAuth } from "../../contexts/AuthContext";

const Layout = () => {
  const { userData } = useAuth();


  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fafafa",
      }} 
    >
      {/* Header */}
      <AppBarComponent loading={false} userData={userData} />


      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
