import { Link } from "react-router-dom";
import About from "./About";
import Fetch from "./fetch";
import Shop from "./shop";
import TopPics from "./TopPicks";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

function Home() {
  const { shoes: data, error } = Fetch(
    "https://shoes-website-backend.vercel.app/shoes"
  );
  const brandImages = [
    process.env.PUBLIC_URL + "/logo1.png",
    process.env.PUBLIC_URL + "/logo2.png",
    process.env.PUBLIC_URL + "/logo3.png",
    process.env.PUBLIC_URL + "/logo4.png",
  ];
  return (
    <>
      <div id="home" className="homeSec bg-gray-100 ">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide home"
          data-bs-ride="carousel"
        >
          <div className="home-text">
            <h2 className="">
              STEP INTO <br /> <span className="mx-8">SHOE STYLE</span>
            </h2>
          </div>
          <div className="text-content">
            <p className="font-bold">
              All shoes <span className="text-orange-500">New collection</span>
            </p>
            <h2 className="font-bold">
              Footwear{" "}
              <span>
                <h1 className="text-orange-500">BOOT IN BLACK</h1>
              </span>
            </h2>
            <p className="my-2 font-bold">
              Bring your shoe game to a <span className="text-white"> new level</span>
            </p>
            <Link
              to="/shop"
              className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              Start Shopping →
            </Link>
          </div>
          <div className="carousel-inner image">
            {data.slice(0, 1).map((shoe, index) => (
              <div
                key={shoe._id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={`https://shoes-website-backend.vercel.app/pics/${shoe.image}`}
                  alt={error && { error }}
                  className="d-block w-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="brandSec">
        <h2 className="trusted text-center text-3xl font-bold">Trusted By Top Companies</h2>
        <Box
          sx={{
            marginTop: "3em",
            width: "80%",
            display: "flex",
            // gridTemplateColumns:
            //   "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
            
            justifyContent: "center",
            alignItems: "center",
            // border:"1px solid black",
            gap:2,
            
          }}
        >
          {brandImages.map((image, index) => (
            <Card
              sx={{
                width: "150px",
                // border: "1px solid black",

              }}
            >
              <CardActionArea
                sx={{
                  height: "100%",
                  backgroundColor: "action.selected",
                  backgroundColor: "action.selectedHover",
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    <img className="brands" src={image} alt="brand" />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
      <div id="Toppics" className="topPicks">
        <TopPics />
      </div>
      <div id="about" className="aboutSec">
        <About />
      </div>
      <div className="shopSec">
        <Shop />
      </div>
    </>
  );
}

export default Home;
