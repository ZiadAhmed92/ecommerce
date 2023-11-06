import { Box, Button, Dialog, IconButton } from '@mui/material'
import  { useState } from 'react'
import ProductDetails from './ProductDetails'
import { Close } from '@mui/icons-material'
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
const ShowMoreDetails = ({setOpen,setProducs,produces,open,item,handleClose}) => {
    const [img, setImg] = useState([]);
    const handleClickOpen = () => {
        setOpen(true);
      };
  return (
    <div>
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
          produces={produces }
        />
      </Dialog>
    </div>
  )
}

export default ShowMoreDetails