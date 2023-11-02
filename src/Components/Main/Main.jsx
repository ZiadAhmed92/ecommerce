import { useTheme } from "@emotion/react";
import "./Main.css";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  IconButton,
  Rating,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ProductDetails from "./ProductDetails";
import { Close } from "@mui/icons-material";

const Main = () => {
  const [produce, setProduce] = useState([
    {
      img: [
        "src/Components/Main/images/1/final.png",
        "src/Components/Main/images/1/images.jpg",
      ],
      category: "Men",
      name: "Jacket",
      price: "29",
      desc: "2022 High Quality Custom Design Men Jacket Winter Fleece Jackets Warm Thicken Outerwear Men's Jackets",
      rating: 4,
    },
    {
      img: [
        "src/Components/Main/images/2/2.jpg",
        "src/Components/Main/images/2/3.jpg",
        "src/Components/Main/images/2/final.jpg",
      ],
      category: "Men",
      name: "Glasses",
      price: "12",
      desc: "Ready Stock Goods Ergonomic Design Fashion Metal Cheap Wholesale Sunglasses Women Men Sun Glasses",
      rating: 3,
    },
    {
      img: [
        "src/Components/Main/images/3/1.jpg",
        "src/Components/Main/images/3/2.jpg",
        "src/Components/Main/images/3/4.jpg",
        "./images/3/final.jpg",
      ],
      category: "Women",
      name: "Bag",
      price: "10",
      desc: "Custom XP2404 Women Chain Handbag New Underarm Bag Fashion Simple Designer Ringer Ladies",
      rating: 2,
    },
    {
      img: [
        "src/Components/Main/images/4/final.jpg",
        "src/Components/Main/images/4/3.jpg",
        "src/Components/Main/images/4/4.jpg",
        "src/Components/Main/images/4/final.jpg",
      ],
      category: "Men",
      name: "Wristwatch",
      price: "15",
      desc: "RAYMONS Wholesale Amazon Hot Model Business Men's Wrist Watch Waterproof Gold Men",
      rating: 4,
    },
    {
      img: [
        "src/Components/Main/images/5/1 (5).jpg",
        "src/Components/Main/images/5/1 (6).jpg",
        "src/Components/Main/images/5/100.jpg",
      ],
      category: "Men",
      name: "JacketMen",
      price: "29",
      desc: "2022 Hot Selling Winter Warm Windproof Hooded Coat Shiny Puffer Jacket Outdoor Thick",
      rating: 5,
    },
    {
      img: [
        "src/Components/Main/images/6/1.jpg",
        "src/Components/Main/images/6/2.jpg",
      ],
      category: "Women",
      name: "RingWoman",
      price: "150",
      desc: "Goldstones New Arrival S925 Jewelry Rings Fancy Cut D VVS Moissanite Ring Eternity Band Rings",
      rating: 5,
    },
  ]);
  const [produces, setProducs] = useState();
  const [url, setUrl] = useState(`?populate=*`);

  let theme = useTheme();
  const [active, setActive] = useState("All");
  const [img, setImg] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="row">
      <div className="col-md-6 main-text">
        <h4>Selected Products</h4>
        <p className="h6">
          All our new arrivals in a exclusive brand selection
        </p>
      </div>
      <div className="col-md-6 main-btn d-flex">
        <button
          onClick={() => {
            setUrl(`?populate=*`);
            setActive("All");
          }}
          style={{ color: theme.palette.text.primary }}
          className={`myButton ${active === "All" ? " active" : ""}`}
        >
          All Products
        </button>

        <button
          onClick={() => {
            setActive("MEN");
            setUrl(`?populate=*&filters[category][$eq]=men`);
          }}
          style={{ color: theme.palette.text.primary }}
          className={`myButton ${active === "MEN" ? " active" : ""}`}
        >
          MEN category
        </button>

        <button
          onClick={() => {
            setUrl(`?populate=*&filters[category][$eq]=women`);
            setActive("Women");
          }}
          style={{ color: theme.palette.text.primary }}
          className={`myButton ${active === "Women" ? " active" : ""}`}
        >
          Women category
        </button>
      </div>
      {produce.map((item, i) => {
        console.log(item.img);
        return (
          <div key={i} className="col-md-4 main-content ">
            <div>
              <div
                className="card"
                style={{
                  overflow: "hidden",
                  width: "18rem",
                  background: theme.palette.mode === "dark" ? "#000 " : "#fff ",
                  color: theme.palette.mode === "dark" ? "#EEE " : "#000 ",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <img src={item.img[0]} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{item.name}</h5>
                    <p>{item.price}$</p>
                  </div>
                  <p className="card-text ">{item.desc}</p>
                  <div className="d-flex justify-content-between">
                    <Box
                      sx={{
                        ":hover": { color: "blue", cursor: "pointer" },
                        transition: "0.2s",
                        alignItems: "center",
                      }}
                    >
                      <div
                        onClick={() => {
                          setImg(item.img);
                          // @ts-ignore
                          setProducs(item);
                        }}
                      >
                        <Button
                          sx={{ fontSize: "0.6em" }}
                          variant="outlined"
                          onClick={handleClickOpen}
                        >
                          <AddShoppingCartOutlinedIcon
                            sx={{ mr: 1 }}
                            fontSize="small"
                          />{" "}
                          Add To Cart
                        </Button>
                      </div>
                    </Box>
                    <Rating
                      precision={0.1}
                      name="read-only"
                      value={item.rating}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* dialog */}

      <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>

        <ProductDetails
          // @ts-ignore
          produces={produces}
          img={img}
        />
      </Dialog>
    </div>
  );
};

export default Main;
