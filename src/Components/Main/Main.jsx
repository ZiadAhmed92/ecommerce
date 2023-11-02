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
import axios from "axios";
const Main = () => {
  const [produce, setProduce] = useState();
  const [produces, setProducs] = useState();
  const [url, setUrl] = useState(`?populate=*`);

  async function data(url) {
    let {
      data: { data }
    } = await axios.get(`http://localhost:1337/api/produces${url}`);
    setProduce(data);
  }

  useEffect(() => {
    data(url);
  }, [url]);
  let theme = useTheme();
  const [active, setActive] = useState("All");
  const [img, setImg] = useState([]);
  const [open, setOpen] = useState(false);
  // http://localhost:1337/api/produces?populate=*&filters[category][$eq]=men
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="row">
      <div className="col-md-6 main-text">
        <h4 >Selected Products</h4>
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
          onClick={() => {setActive("MEN");setUrl(`?populate=*&filters[category][$eq]=men`) }}
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
      {
        // @ts-ignore
        produce?.map((item, i) => {
          return (
            <div key={i} className="col-md-4 main-content ">
              <div>
                <div
                  className="card"
                  style={{
                    overflow: "hidden",
                    width: "18rem",
                    background:
                      theme.palette.mode === "dark" ? "#000 " : "#fff ",
                    color: theme.palette.mode === "dark" ? "#EEE " : "#000 ",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <img
                      src={
                        "http://localhost:1337" +
                        item.attributes.image.data[0].attributes.url
                      }
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{item.attributes.title}</h5>
                      <p>{item.attributes.price}$</p>
                    </div>
                    <p className="card-text ">{item.attributes.description}</p>
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
                            setImg(item.attributes.image.data);
                            setProducs(item.attributes);
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
                        value={item.attributes.rating}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      }

      {/* <div className="col-md-4 main-content ">
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
              <img
                src="src/Components/Main/images/2.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Card title</h5>
                <p>12$</p>
              </div>
              <p className="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
                <Box
                  sx={{
                    ":hover": { color: "blue", cursor: "pointer" },
                    transition: "0.2s",
                    alignItems: "center",
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
                </Box>
                <Rating precision={0.1} name="read-only" value={3} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 main-content ">
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
              <img
                src="src/Components/Main/images/3.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Card title</h5>
                <p>7$</p>
              </div>
              <p className="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
                <Box
                  sx={{
                    ":hover": { color: "blue", cursor: "pointer" },
                    transition: "0.2s",
                    alignItems: "center",
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
                </Box>
                <Rating precision={0.1} name="read-only" value={2} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 main-content ">
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
              <img
                src="src/Components/Main/images/4.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Card title</h5>
                <p>20$</p>
              </div>
              <p className="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
                <Box
                  sx={{
                    ":hover": { color: "blue", cursor: "pointer" },
                    transition: "0.2s",
                    alignItems: "center",
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
                </Box>
                <Rating precision={0.1} name="read-only" value={5} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 main-content ">
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
              <img
                src="src/Components/Main/images/5.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Card title</h5>
                <p>15$</p>
              </div>
              <p className="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
                <Box
                  sx={{
                    ":hover": { color: "blue", cursor: "pointer" },
                    transition: "0.2s",
                    alignItems: "center",
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
                </Box>
                <Rating precision={0.1} name="read-only" value={4} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 main-content ">
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
              <img
                src="src/Components/Main/images/6.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Card title</h5>
                <p>
                  <span style={{ textDecoration: "line-through" }}>20$</span> 5$
                </p>
              </div>
              <p className="card-text ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-between">
                <Box
                  sx={{
                    ":hover": { color: "blue", cursor: "pointer" },
                    transition: "0.2s",
                    alignItems: "center",
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
                </Box>
                <Rating precision={0.1} name="read-only" value={4} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div> */}
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
