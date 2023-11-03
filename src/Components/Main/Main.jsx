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
import img1 from "../../img/1/final.png"
import img12 from "../../img/1/images.jpg"
import img2 from "../../img/2/2.jpg"
import img22 from "../../img/2/3.jpg"
import img23 from "../../img/2/final.jpg"
import img3 from "../../img/3/1.jpg"
import img32 from "../../img/3/2.jpg"
import img33 from "../../img/3/4.jpg"
import img34 from "../../img/3/final.jpg"
import img4 from "../../img/4/3.jpg"
import img42 from "../../img/4/4.jpg"
import img43 from "../../img/4/final.jpg"
import img5 from "../../img/5/1 (5).jpg"
import img52 from "../../img/5/1 (6).jpg"
import img53 from "../../img/5/100.jpg"
import img6 from "../../img/6/1.jpg"
import img62 from "../../img/6/2.jpg"
const Main = () => {
  const [produce, setProduce] = useState([
    {
      img: [
        img1,
        img12
      ],
      category: "Men",
      name: "Jacket",
      price: "29",
      desc: "2022 High Quality Custom Design Men Jacket Winter Fleece Jackets Warm Thicken Outerwear Men's Jackets",
      rating: 4,
    },
    {
      img: [
        img2,
        img22,
        img23,
      ],
      category: "Men",
      name: "Glasses",
      price: "12",
      desc: "Ready Stock Goods Ergonomic Design Fashion Metal Cheap Wholesale Sunglasses Women Men Sun Glasses",
      rating: 3,
    },
    {
      img: [
        img3,
        img32,
        img33,
        img34,
      ],
      category: "Women",
      name: "Bag",
      price: "10",
      desc: "Custom XP2404 Women Chain Handbag New Underarm Bag Fashion Simple Designer Ringer Ladies",
      rating: 2,
    },
    {
      img: [
        img4,
        img42,
        img43
        
      ],
      category: "Men",
      name: "Wristwatch",
      price: "15",
      desc: "RAYMONS Wholesale Amazon Hot Model Business Men's Wrist Watch Waterproof Gold Men",
      rating: 4,
    },
    {
      img: [
        img5,
        img52,
        img53,
      ],
      category: "Men",
      name: "JacketMen",
      price: "29",
      desc: "2022 Hot Selling Winter Warm Windproof Hooded Coat Shiny Puffer Jacket Outdoor Thick",
      rating: 5,
    },
    {
      img: [
        img6,
        img62,
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
