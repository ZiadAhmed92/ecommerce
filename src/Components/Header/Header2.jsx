import { Close, ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  Rating,
  Stack,
  Typography,
  useTheme,
  Drawer,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ShowMoreDetails from "../Main/ShowMoreDetails";
const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All Categories", "CAR", "Clothes", "Electronics"];

const Header2 = ({ favourites, removeFavouritMovie ,setOpen,setProducs,produces,open1,handleClose1 }) => {
  // ------------------Menu-------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  // @ts-ignore


  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
     
      {/* drawer */}
      {favourites.length !==0 ? ( <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
          height: "100%",
        },
          ".MuiBox-root.css-entiip": {
            height: "100%",
            width:"100%",
          

             position: "relative"
          },
        }}
      >
        <Box
          sx={{ width:"100%",height:"100%" }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 10,
              right: 10,
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>
         
        <div>
          {" "}
      
          <div className="container ">
            <div className="row">
              {favourites.map((item, i) => {
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
                          color:
                            theme.palette.mode === "dark" ? "#EEE " : "#000 ",
                        }}
                      >
                        <div style={{ overflow: "hidden" }}>
                          <img
                            src={item.img[0]}
                            className="card-img-top w-100"
                            alt="..."
                          />
                        </div>
                        <div className="card-body ">
                          <div className="d-flex justify-content-between mb-2">
                            <div className="d-flex  align-items-center">
                              <h5 className="card-title  me-4">{item.name}</h5>
                              <p className="card-title p-0">{item.price}$</p>
                            </div>

                            <div onClick={() => removeFavouritMovie(item)}>
                              <DeleteSharpIcon
                                sx={{":hover":{color:"red",opacity:1} ,transition:"0.2s",fontSize:"1.4em",mr: 1,color:"red",opacity:"0.8", cursor: "pointer" }}
                                fontSize="small"
                              />
                            </div>
                          </div>

                          <p className="card-text ">{item.desc}</p>
                          <div className="d-flex justify-content-between">
                          <ShowMoreDetails setProducs={setProducs} produces={produces} handleClose={handleClose1} item={item} setOpen={setOpen} open={open1}/>

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
            </div>
          </div>
        </div>
      
         
        </Box>
      </Drawer>):""}
     

      <Container
        className="header2"
        sx={{ my: 3, display: "flex", justifyContent: "space-between" }}
      >
        <Stack className="icon1" alignItems={"center"}>
          <ShoppingCartOutlined />
          <Typography variant="body2">E-commerce</Typography>
        </Stack>

        <Search
          className="icon2"
          sx={{
            display: "flex",
            borderRadius: "22px",
            justifyContent: "space-between",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />

          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                // @ts-ignore
                bgcolor: theme.palette.myColor.main,
                borderBottomRightRadius: 22,
                borderTopRightRadius: 22,
                p: "0",
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  // className="border"
                  sx={{
                    width: 93,
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "13px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>

        <Stack className="icon3" direction={"row"} alignItems={"center"}>
          <IconButton  aria-label="cart">
            <StyledBadge
             onClick={toggleDrawer("top", true)}
              badgeContent={favourites.length}
              color="primary"
            >
              {/* <ShoppingCartIcon /> */}
              <FavoriteSharpIcon className="text-danger" />
            </StyledBadge>
          </IconButton>

          <IconButton>
            <Person2OutlinedIcon />
          </IconButton>
        </Stack>
      </Container>
    </>
  );
};

export default Header2;
