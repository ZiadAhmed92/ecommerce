import { useTheme } from "@emotion/react";
import "./Main.css";
// @ts-ignore
import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  // @ts-ignore
  IconButton,
  Rating,
} from "@mui/material";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ProductDetails from "./ProductDetails";
import { Close } from "@mui/icons-material";
// @ts-ignore
import img1 from "../../img/1/final.png";
// @ts-ignore
import img12 from "../../img/1/images.jpg";
// @ts-ignore
import img2 from "../../img/2/2.jpg";
// @ts-ignore
import img22 from "../../img/2/3.jpg";
// @ts-ignore
import img23 from "../../img/2/final.jpg";
// @ts-ignore
import img3 from "../../img/3/1.jpg";
// @ts-ignore
import img32 from "../../img/3/2.jpg";
// @ts-ignore
import img33 from "../../img/3/4.jpg";
// @ts-ignore
import img34 from "../../img/3/final.jpg";
// @ts-ignore
import img4 from "../../img/4/3.jpg";
// @ts-ignore
import img42 from "../../img/4/4.jpg";
// @ts-ignore
import img43 from "../../img/4/final.jpg";
// @ts-ignore
import img5 from "../../img/5/1 (5).jpg";
// @ts-ignore
import img52 from "../../img/5/1 (6).jpg";
// @ts-ignore
import img53 from "../../img/5/100.jpg";
// @ts-ignore
import img6 from "../../img/6/1.jpg";
// @ts-ignore
import img62 from "../../img/6/2.jpg";

const Main = ({ addFavouritMovie ,favourites }) => {
  let AllProduce = [
    {
      varia: false,
      id: 1,
      img: [img1, img12],
      category: "Men",
      name: "Jacket",
      price: "29",
      desc: "2022 High Quality Custom Design Men Jacket Winter Fleece Jackets Warm Thicken Outerwear Men's Jackets",
      rating: 4,
    },
    {
      varia: false,
      id: 2,
      img: [img2, img22, img23],
      category: "Men",
      name: "Glasses",
      price: "12",
      desc: "Ready Stock Goods Ergonomic Design Fashion Metal Cheap Wholesale Sunglasses Women Men Sun Glasses",
      rating: 3,
    },
    {
      varia: false,
      id: 3,
      img: [img3, img32, img33, img34],
      category: "Women",
      name: "Bag",
      price: "10",
      desc: "Custom XP2404 Women Chain Handbag New Underarm Bag Fashion Simple Designer Ringer Ladies",
      rating: 2,
    },
    {
      varia: false,
      id: 4,
      img: [img43, img42, img4],
      category: "Men",
      name: "Wristwatch",
      price: "15",
      desc: "RAYMONS Wholesale Amazon Hot Model Business Men's Wrist Watch Waterproof Gold Men",
      rating: 4,
    },
    {
      varia: false,
      id: 5,
      img: [img5, img52, img53],
      category: "Men",
      name: "JacketMen",
      price: "29",
      desc: "2022 Hot Selling Winter Warm Windproof Hooded Coat Shiny Puffer Jacket Outdoor Thick",
      rating: 5,
    },
    {
      varia: false,
      id: 6,
      img: [img6, img62],
      category: "Women",
      name: "RingWoman",
      price: "150",
      desc: "Goldstones New Arrival S925 Jewelry Rings Fancy Cut D VVS Moissanite Ring Eternity Band Rings",
      rating: 5,
    },
  ];
  // @ts-ignore
  const [produce, setProduce] = useState(AllProduce);
  function filterProduce(cate) {
    let prt = AllProduce.filter((item) => item.category === cate);

    setProduce(prt);
  }
  // useEffect(()=>{
  //   filterProduce(category)
  // },[])
  const [produces, setProducs] = useState();
  // @ts-ignore

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

  // favourit
  const [isRed, setIsRed] = useState(false);

  // const heartColor = isRed ? "red" : "white";

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
            setProduce(AllProduce);

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
            filterProduce("Men");
          }}
          style={{ color: theme.palette.text.primary }}
          className={`myButton ${active === "MEN" ? " active" : ""}`}
        >
          MEN category
        </button>

        <button
          onClick={() => {
            filterProduce("Women");
            setActive("Women");
          }}
          style={{ color: theme.palette.text.primary }}
          className={`myButton ${active === "Women" ? " active" : ""}`}
        >
          Women category
        </button>
      </div>
      {produce.map((item, i) => {
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
                <div className="card-body ">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex  align-items-center">
                      <h5 className="card-title  me-4">{item.name}</h5>
                      <p className="card-title p-0">{item.price}$</p>
                    </div>

                    <div
                      onClick={() => {
                        addFavouritMovie(item);
                      }}
                    >
                      <div
                        style={{
                          color: favourites.find((fav) => fav.id === item.id)  ? "red" :theme.palette.mode === "dark"?"white":"rgb(190, 143, 81)",
                          border: "none",

                          cursor: "pointer",
                        }}
                        onClick={() =>{ ()=> favourites.find((fav) => fav.id === item.id)  ?setIsRed(!isRed):""}}
                      >
                        <FavoriteSharpIcon />
                      </div>
                    </div>
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
        />
      </Dialog>
    </div>
  );
};

export default Main;
