import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

const Orders = () => {
  const navigate = useNavigate();

  // Dummy order data
  const orders = [
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

  return (
    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" textAlign="center" mb={3}>
          Your Orders
        </Typography>

        {orders.length > 0 ? (
          orders.map((order) => (
            <Card key={order._id} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">Order ID: {order._id}</Typography>
                <Typography>Item: {order.item}</Typography>
                <Typography>Size: {order.size}</Typography>
                <Typography>Color: {order.color}</Typography>
                <Typography>Status: {order.status}</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography textAlign="center">No orders found.</Typography>
        )}

        <Button variant="contained"  sx={{ m: 3 }} onClick={() => navigate("/profile")}>
          Back to Home
        </Button>
      </Grid>
    </Grid>
  );
};

export default Orders;
