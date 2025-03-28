import { useState } from "react";
import { useParams } from "react-router-dom";
import Fetch from "./fetch";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
  CircularProgress,
  Box,
  FormLabel,
} from "@mui/material";

const SingleShoe = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const { shoes: data } = Fetch(
    `https://shoes-website-backend.vercel.app/shoes/${id}`
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedColor || !selectedSize) {
      alert("Please select both size and color");
      return;
    }

    const details = { colour: selectedColor, size: selectedSize };

    fetch("https://shoes-website-backend.vercel.app/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        return res.json();
      })
      .then(() => {
        alert("Purchase completed");
      })
      .catch((error) => {
        console.error("Error submitting order: ", error);
        alert("There was an error processing your order");
      });
  };

  if (!data) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container justifyContent="center" mt={3}>
      <Card sx={{ maxWidth: 600, padding: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={`https://shoes-website-backend.vercel.app/pics/${data.image}`}
          alt={data.name}
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            This is a premium shoe with excellent quality and durability.
          </Typography>

          <Box mt={2} display="flex" alignItems="center">
            <Rating value={4} readOnly precision={0.5} />
            <Typography variant="body2" ml={1}>
              (4.5 stars)
            </Typography>
          </Box>

          <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
            {/* Size Selection */}
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel>Select Size</InputLabel>
              <Select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                required
              >
                <MenuItem value="" disabled>
                  Choose Size
                </MenuItem>
                <MenuItem value="7">Size 7</MenuItem>
                <MenuItem value="8">Size 8</MenuItem>
              </Select>
            </FormControl>

            {/* Color Selection */}
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend">Choose Color</FormLabel>
              <RadioGroup
                row
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                {data.colour &&
                  data.colour.map((color) => (
                    <FormControlLabel
                      key={color}
                      value={color}
                      control={<Radio />}
                      label={color}
                    />
                  ))}
              </RadioGroup>
            </FormControl>

            {/* Buy Button */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 3 }}
            >
              Buy Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleShoe;
