import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link as MuiLink,
  Alert,
  InputAdornment,
  IconButton,
  Grid,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  NavigateBefore,
  NavigateNext,
} from "@mui/icons-material";
import { useAuth } from "../../contexts/AuthContext";
import { loginSchema } from "../../utils/validationSchemas";
import { loginBg, quoteImg } from "../../assets/images";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const getErrorMessage = (error) => {
    if (!error?.code) return "Something went wrong. Please try again.";

    switch (error.code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
        return "Invalid email or password. Please try again.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/network-request-failed":
        return "Network error. Please check your internet connection.";
      default:
        return "Failed to login. Please try again.";
    }
  };

  const onSubmit = async (data) => {
    try {
      setError("");
      await login(data.email, data.password);
      navigate("/products");
    } catch (error) {
      console.error("Login error:", error);
      setError(getErrorMessage(error));
    }
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Grid container sx={{ width: "100%", height: "100%", margin: 0 }}>
        {/* Left Side */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: { xs: "none", md: "flex" }, p: 0 }}
        >
          <Box
            sx={{
              backgroundImage: `url(${loginBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              color: "white",
              p: 8,
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: 1,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
              <Box sx={{ mb: 6 }}>
                <Box
                  component="img"
                  src={quoteImg}
                  alt="Quote"
                  sx={{
                    width: 30,
                    height: 30,
                    mb: 1,
                    opacity: 0.9,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.2rem",
                    lineHeight: 1.6,
                    opacity: 0.9,
                    maxWidth: "100%",
                    mb: 3,
                  }}
                >
                  Figma ipsum component variant main layer. Create flatten
                  create effect move strikethrough. Union export plugin bullet
                  effect hand arrange align. Project project boolean arrow
                  scale.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  width: "100%",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                      mb: 1,
                    }}
                  >
                    Pam Hand
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.8,
                      fontSize: "1rem",
                    }}
                  >
                    pam.hand@gmail.com
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <IconButton sx={{ color: "white", p: 0.5 }}>
                    <NavigateBefore sx={{ width: 35, height: 35 }} />
                  </IconButton>
                  <IconButton sx={{ color: "white", p: 0.5 }}>
                    <NavigateNext sx={{ width: 35, height: 35 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Login Form */}
        <Grid item xs={12} md={4} sx={{ p: 0 }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", md: "center" },
                textAlign: { xs: "left", md: "center" },
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{
                  mb: 1,
                  fontWeight: 600,
                  fontSize: { xs: "1.6rem", md: "2rem" },
                }}
              >
                Welcome Back!!
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 4,
                  fontSize: { xs: "0.9rem", md: 16 },
                  color: "#808080",
                  fontWeight: 500,
                  textShadow: "3px 4px 5px rgba(0, 0, 0, 0.2)", // 👈 shadow effect
                }}
              >
                Please Login your Account
              </Typography>

              {error && (
                <Alert
                  severity="error"
                  sx={{ width: "100%", mb: 2, fontSize: "13px" }}
                >
                  {error}
                </Alert>
              )}

              {/* Form with space-between layout for mobile */}
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  height: { xs: "75vh", md: "auto" },
                  justifyContent: { xs: "space-between", md: "flex-start" },
                }}
              >
                {/* Top section */}
                <Box>
                  {/* Email */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 1,
                        color: "#000000",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        textAlign: "left",
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      {...register("email")}
                      required
                      fullWidth
                      id="email"
                      autoComplete="email"
                      autoFocus
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          "& fieldset": { borderColor: "#D3D3D3" },
                          "&:hover fieldset": { borderColor: "#A0A0A0" },
                          "&.Mui-focused fieldset": { borderColor: "#000000" },
                        },
                        "& .MuiInputBase-input": {
                          fontSize: "1rem",
                          padding: "10px 14px",
                        },
                      }}
                    />
                  </Box>

                  {/* Password */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 1,
                        color: "#000000",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                        textAlign: "left",
                      }}
                    >
                      Password
                    </Typography>
                    <TextField
                      {...register("password")}
                      required
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="current-password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                              sx={{
                                color: "#000000",
                                "&:focus": { outline: "none" },
                              }}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          "& fieldset": { borderColor: "#D3D3D3" },
                          "&:hover fieldset": { borderColor: "#A0A0A0" },
                          "&.Mui-focused fieldset": { borderColor: "#000000" },
                        },
                        "& .MuiInputBase-input": {
                          fontSize: "1rem",
                          padding: "10px 14px",
                        },
                      }}
                    />
                  </Box>

                  {/* Forgot Password */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: 1,
                      mb: { xs: 2, md: 4 },
                    }}
                  >
                    <MuiLink
                      href="#"
                      variant="body2"
                      sx={{
                        textDecoration: "none",
                        color: "#000000",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      Forgot Password?
                    </MuiLink>
                  </Box>
                </Box>

                {/* Bottom section */}
                <Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: { xs: 2, md: 7 },
                      mb: 1,
                      py: { xs: 2, md: 1 },
                      borderRadius: 3.5,
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                      "&:hover": { backgroundColor: "#1A1A1A" },
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </Button>

                  {/* Divider */}
                  <Box
                    sx={{
                      my: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "45px",
                        height: "1px",
                        backgroundColor: "#808080",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#808080",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        mx: 3,
                      }}
                    >
                      OR
                    </Typography>
                    <Box
                      sx={{
                        width: "45px",
                        height: "1px",
                        backgroundColor: "#808080",
                      }}
                    />
                  </Box>

                  {/* Sign-up */}
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#808080",
                        fontSize: "0.9rem",
                      }}
                    >
                      Didn't have an Account?{" "}
                      <MuiLink
                        component={Link}
                        to="/signup"
                        variant="body2"
                        sx={{
                          fontWeight: "bold",
                          color: "#000000",
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        Sign-up
                      </MuiLink>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
