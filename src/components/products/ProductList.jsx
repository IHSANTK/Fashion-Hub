// src/components/ProductList/ProductList.jsx
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Pagination,
  Alert,
  PaginationItem,
  Skeleton,
  IconButton,
} from "@mui/material";
import { Search, FavoriteBorder } from "@mui/icons-material";
import axios from "axios";

// Import the new components
import PromotionalBanner from "./PromotionalBanner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
//   const navigate = useNavigate();

  const productsPerPage = 16;

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, searchTerm, selectedCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProducts(data);
      const uniqueCategories = Array.from(new Set(data.map((p) => p.category)));
      setCategories(uniqueCategories);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;
    if (searchTerm)
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    if (selectedCategory)
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => setCurrentPage(value);

  // Pagination slice
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) {
    return (
      <Box mt={4}>
      {/* Banner Skeleton */}
      

      {/* Product Cards */}
      <Container maxWidth="xl">
      <Skeleton
        variant="rectangular"
        height={300}
        width="100%"
        sx={{ borderRadius: 2, mb: 4 }}
      />
        <Grid container spacing={3}>
          {[...Array(8)].map((_, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{ borderRadius: 2 }}>
                {/* Image Skeleton */}
                <Skeleton variant="rectangular" height={150} sx={{ borderRadius: 2 }} />
                <CardContent>
                  {/* Text Skeletons */}
                  <Skeleton variant="text" height={28} sx={{ mb: 1 }} />
                  <Skeleton variant="text" height={20} sx={{ mb: 1 }} />
                  <Skeleton variant="text" height={20} sx={{ mb: 2 }} />
                  {/* Button Skeletons */}
                  <Skeleton variant="rectangular" height={36} width="48%" sx={{ mr: 1, display: "inline-block", borderRadius: 2 }} />
                  <Skeleton variant="rectangular" height={36} width="48%" sx={{ display: "inline-block", borderRadius: 2 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    );
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fafafa" }}>
      {/* App Bar */}
      {/* <AppBarComponent loading={false} userData={userData} /> */}

      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* Main content container */}
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Filters */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            {/* Search Input */}
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <Search sx={{ mr: 1, color: "text.secondary" }} />
                  ),
                }}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    height: 46,
                    borderRadius: 1,
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#999",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ccc !important",
                    },
                  },
                  "& input::placeholder": {
                    fontSize: "0.95rem",
                    color: "#777",
                  },
                }}
              />
            </Grid>

            {/* Category Dropdown */}
            <Grid item xs={12} md={3}>
              <FormControl
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 46,
                    borderRadius: 1,
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#999",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ccc !important",
                    },
                  },
                }}
              >
                <InputLabel
                  sx={{
                    top: -3,
                    fontSize: "0.95rem",
                    color: "#777",
                  }}
                >
                  Category
                </InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <MenuItem value="">All Categories</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {currentProducts.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="body1">No products found.</Typography>
            </Grid>
          ) : (
            currentProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    boxShadow: "0",
                    border: "2px solid #F7F5F7",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 6px 20px rgba(20,20,20,0.12)",
                      transition: "all .2s ease-in-out",
                    },
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      position: "relative",
                      backgroundColor: "#F7F5F7",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        height: 340,
                        objectFit: "contain",
                        p: 2,
                      }}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        backgroundColor: "#fff",
                        "&:focus": { outline: "none" },
                      }}
                      aria-label="wishlist"
                    >
                      <FavoriteBorder />
                    </IconButton>
                  </Box>

                  {/* Content Section */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      px: 2.5,
                      pb: 2,
                    }}
                  >
                    {/* Title + Price Row */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        component="h2"
                        sx={{
                          fontWeight: 600,
                          color: "text.secondary",
                          flex: 1,
                          mr: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "#000" }}
                      >
                        ₹{product.price}
                      </Typography>
                    </Box>

                    {/* Subtitle */}
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      5 types of shoes available
                    </Typography>

                    {/* Rating */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Rating
                        value={product.rating?.rate || 4}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1 }}
                      >
                        ({product.rating?.count || 0})
                      </Typography>
                    </Box>

                    {/* Buttons */}
                    <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                      <Button
                        variant="contained"
                        size="medium"
                        fullWidth
                        sx={{
                          textTransform: "none",
                          py: 1,
                          borderRadius: 5,
                          fontWeight: 600,
                          backgroundColor: "#3A4980",
                          "&:hover": { backgroundColor: "#0d164d" },
                          "&:focus": { outline: "none" },
                        }}
                      >
                        Add To Cart
                      </Button>
                      <Button
                        variant="outlined"
                        size="medium"
                        fullWidth
                        sx={{
                          textTransform: "none",
                          borderRadius: 5,
                          fontWeight: 600,
                          borderColor: "#ccc",
                          color: "text.primary",
                          backgroundColor: "#fff",
                          "&:focus": { outline: "none" },
                        }}
                      >
                        Add Shortlist
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>

        {totalPages > 1 && (
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 18, mb: 18 }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size="large"
              shape="rounded"
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  slots={{
                    previous: () => "Previous",
                    next: () => "Next",
                  }}
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    mx: 0.5,
                    width:
                      item.type === "previous" || item.type === "next"
                        ? "auto"
                        : 48,
                    height: 48,
                    fontWeight: item.selected ? 700 : 500,
                    fontSize: "0.95rem",
                    color: item.selected ? "#2D2A55" : "#5a6573",
                    background: item.selected
                      ? "linear-gradient(135deg, #ede9fe, #f5f3ff)"
                      : "#fff",
                    "&:hover": {
                      backgroundColor: "#f9f9f9",
                    },
                    "&.Mui-selected:hover": {
                      background: "linear-gradient(135deg, #ede9fe, #f5f3ff)",
                    },
                    "&:focus": { outline: "none" },
                  }}
                />
              )}
            />
          </Box>
        )}
      </Container>

      {/* Footer */}
      {/* <Footer /> */}
    </Box>
  );
};

export default ProductList;