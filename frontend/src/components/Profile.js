import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Grid,
  Box,
  TextField,
} from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      navigate("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(user);
      setUserDetails(parsedUser);
    } catch (error) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Grid container justifyContent="center" mt={4}>
      <Card sx={{ maxWidth: 500, padding: 3, textAlign: "center" }}>
        <Avatar
          src="../../custom-nike-dunk-high-by-you-shoes.png"
          alt="Profile"
          sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {userDetails.name || "User Name"}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {userDetails.email || "user@example.com"}
          </Typography>

          <Box mt={2}>
            <Button
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
            onClick={() => navigate("/track-orders")}
            >
              Track Orders
            </Button>
            <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate("/orders")}
            >
              View Orders
            </Button>
          </Box>

          <Typography variant="h6" mt={3} fontWeight="bold">
            Update Details
          </Typography>

          <Box mt={2}>
            <TextField
              fullWidth
              label="Name"
              value={userDetails.name || ""}
              InputProps={{ readOnly: true }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              value={userDetails.email || ""}
              InputProps={{ readOnly: true }}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Update Details
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Profile;
