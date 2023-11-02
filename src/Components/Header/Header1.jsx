import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Header1 = () => {
    const options = [
        'AR',
        'EN'
        
      ];
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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

  return (
    <Box sx={{ bgcolor: "#2B3445" }} id="home">
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            variant="body2"
            sx={{
              color: "#EEE",
              bgcolor: "#D23F57",
              padding: "5px 10px",
              borderRadius: "20px",
              mx: 3,
              fontWeight: "bold",
            }}
          >
            HOT
          </Typography>
          <Typography variant="body2" sx={{ color: "#EEE", fontSize: "13px" }}>
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "#FFF" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined />
              </IconButton>
            )}
          </div>

          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ cursor:"pointer" , ".MuiTypography-root":{color:"#EEE"} }}
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
                 
                  secondary={options[selectedIndex]}
                />
                 <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
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
                  key={option}
                  sx={{fontSize:"11px"}}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>

          {/* icon */}
          <a href="#" style={{ display: "flex" }}>
            {" "}
            <TwitterIcon
              sx={{
                fontSize: "16px",
                color: "#fff",
                mx: "5px",
              }}
            />
          </a>
          <a href="#" style={{ display: "flex" }}>
            {" "}
            <FacebookIcon
              sx={{
                fontSize: "16px",
                mx: "5px",
                color: "#fff",
              }}
            />
          </a>

          <a href="#" style={{ display: "flex" }}>
            {" "}
            <InstagramIcon
              sx={{
                fontSize: "16px",
                color: "#fff",
                mx: "5px",
              }}
            />
          </a>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
