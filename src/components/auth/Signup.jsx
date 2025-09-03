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
import { signupSchema } from "../../utils/validationSchemas";
import { signupBg, quoteImg } from "../../assets/images";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      setError("");
      await signup(data.email, data.password, {
        fullName: data.fullName,
        email: data.email,
        mobile: data.mobile,
        dateOfBirth: data.dateOfBirth,
      });

      console.log("Signup success, navigating...");
      navigate("/products"); // should work if route exists
    } catch (error) {
      setError(error.message || "Failed to create account");
    }
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Grid container sx={{ width: "100%", height: "100%", margin: 0 }}>
        {/* Left Side - Visual Content */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: { xs: "none", md: "flex" }, p: 0 }}
        >
          <Box
            sx={{
              backgroundImage: `url(${signupBg})`,
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
            {/* Text Overlay at Bottom */}
            <Box sx={{ position: "relative", zIndex: 2, width: "100%" }}>
              {/* Quote Text */}
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
                  scale. Rectangle device clip hand figma content frame
                  underline content.
                </Typography>
              </Box>

              {/* Name and Email with Carousel Arrows */}
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

                {/* Carousel Arrows */}
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <IconButton
                    sx={{
                      color: "white",
                      padding: 0.5,
                      "&:focus": { outline: "none" },
                    }}
                  >
                    <NavigateBefore sx={{ width: 35, height: 35 }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: "white",
                      padding: 0.5,
                      "&:focus": { outline: "none" },
                    }}
                  >
                    <NavigateNext sx={{ width: 35, height: 35 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Signup Form */}
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
              }}
            >
              {/* Title + Subtitle */}
              <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ mb: 1, fontWeight: 600 }}
                >
                  Create an Account
                </Typography>
                <Typography
                  variant="body1"
                  color="gray"
                  sx={{ fontSize: "13px", mb: 4, fontWeight: 500 }}
                >
                  Are you ready to join us! Let&apos;s create Account
                </Typography>
              </Box>

              {error && (
                <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
                  {error}
                </Alert>
              )}

              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ width: "100%" }}
              >
                {/* Full Name Field */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: "#000000",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    Full name
                  </Typography>
                  <TextField
                    {...register("fullName")}
                    required
                    fullWidth
                    id="fullName"
                    autoComplete="name"
                    autoFocus
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        backgroundColor: "#FFFFFF",
                        "& fieldset": {
                          borderColor: "#D3D3D3",
                        },
                        "&:hover fieldset": {
                          borderColor: "#A0A0A0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000000",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#000000",
                        fontSize: "1rem",
                        padding: "10px 14px",
                      },
                    }}
                  />
                </Box>

                {/* Email Field */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: "#000000",
                      fontWeight: 500,
                      fontSize: "0.95rem",
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
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        backgroundColor: "#FFFFFF",
                        "& fieldset": {
                          borderColor: "#D3D3D3",
                        },
                        "&:hover fieldset": {
                          borderColor: "#A0A0A0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000000",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#000000",
                        fontSize: "1rem",
                        padding: "10px 14px",
                      },
                    }}
                  />
                </Box>

                {/* Date of Birth Field */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: "#000000",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    Date of Birth
                  </Typography>
                  <TextField
                    {...register("dateOfBirth")}
                    required
                    fullWidth
                    id="dateOfBirth"
                    type="date"
                    error={!!errors.dateOfBirth}
                    helperText={errors.dateOfBirth?.message}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        backgroundColor: "#FFFFFF",
                        "& fieldset": {
                          borderColor: "#D3D3D3",
                        },
                        "&:hover fieldset": {
                          borderColor: "#A0A0A0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000000",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#000000",
                        fontSize: "1rem",
                        padding: "10px 14px",
                      },
                    }}
                  />
                </Box>

                {/* Mobile Field */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: "#000000",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    Mobile
                  </Typography>
                  <TextField
                    {...register("mobile")}
                    required
                    fullWidth
                    id="mobile"
                    autoComplete="tel"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        backgroundColor: "#FFFFFF",
                        "& fieldset": {
                          borderColor: "#D3D3D3",
                        },
                        "&:hover fieldset": {
                          borderColor: "#A0A0A0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000000",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#000000",
                        fontSize: "1rem",
                        padding: "10px 14px",
                      },
                    }}
                  />
                </Box>

                {/* Password Field */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 1,
                      color: "#000000",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    {...register("password")}
                    required
                    fullWidth
                    label=""
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{
                              color: "#000000",
                              "&:focus": { outline: "none" },
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        backgroundColor: "#FFFFFF",
                        "& fieldset": {
                          borderColor: "#D3D3D3",
                        },
                        "&:hover fieldset": {
                          borderColor: "#A0A0A0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#000000",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#000000",
                        fontSize: "1rem",
                        padding: "10px 14px",
                      },
                    }}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 7,
                    mb: 1,
                    py: { xs: 2, md: 1 },
                    borderRadius: 4,
                    textTransform: "none",
                    fontSize: 18,
                    fontWeight: "bold",
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    "&:hover": {
                      backgroundColor: "#1A1A1A",
                    },
                    "&.Mui-disabled": {
                      backgroundColor: "#BDBDBD", // light gray when disabled
                      color: "#FFFFFF",
                    },
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>

                <Box sx={{ textAlign: "center", mt: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#808080",
                      fontSize: "0.9rem",
                    }}
                  >
                    Already have an account!{" "}
                    <MuiLink
                      component={Link}
                      to="/login"
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        color: "#000000",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Sign-In
                    </MuiLink>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
