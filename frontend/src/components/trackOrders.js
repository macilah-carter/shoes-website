import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
} from "@mui/material";

const TrackOrders = () => {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);

  // Dummy order tracking data
  const dummyOrders = [
    {
      _id: "ORD123456",
      item: "Nike Air Max 270",
      size: "42",
      color: "Black",
      status: "Shipped",
    },
    {
      _id: "ORD654321",
      item: "Adidas Ultraboost",
      size: "40",
      color: "White",
      status: "Processing",
    },
    {
      _id: "ORD789012",
      item: "Puma RS-X",
      size: "44",
      color: "Red",
      status: "Delivered",
    },
  ];

  const handleTrack = () => {
    if (!orderId) {
      alert("Please enter an Order ID");
      return;
    }

    // Simulating fetching order from dummy data
    const foundOrder = dummyOrders.find((order) => order._id === orderId);

    if (foundOrder) {
      setTrackingInfo(foundOrder);
    } else {
      setTrackingInfo(null);
      alert("Order not found");
    }
  };

  return (
    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" textAlign="center" mb={3}>
          Track Your Order
        </Typography>

        <TextField
          fullWidth
          label="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" fullWidth onClick={handleTrack}>
          Track Order
        </Button>

        {trackingInfo && (
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6">Order ID: {trackingInfo._id}</Typography>
              <Typography>Item: {trackingInfo.item}</Typography>
              <Typography>Size: {trackingInfo.size}</Typography>
              <Typography>Color: {trackingInfo.color}</Typography>
              <Typography>Status: {trackingInfo.status}</Typography>
            </CardContent>
          </Card>
        )}

        <Button
          variant="outlined"
          sx={{ m: 3 }}
          onClick={() => navigate("/profile")}
        >
          Back to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default TrackOrders;
