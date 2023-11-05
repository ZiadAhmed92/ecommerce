/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";


const ProductDetails = ({ produces}) => {
  const[imgSmall , setImgSmall] = useState(produces.img[0] )

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex",padding:"0"  }}>
       <div className="produceDetails" style={{overflow:"hidden"}}>
         <img
           width={300}
           className="card-img-top-product-detials"
          //  src="img"
           src={imgSmall!=="" ?`${imgSmall}`:``}
           alt=""
         />
       </div>
      </Box>

      <Box  className="produceDetails" sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
       <div className="produce-mobile">
       <Typography variant="h5">
          {produces.category}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
        {produces.price}$
        </Typography>
       </div>
        <Typography variant="body1">
          
          {produces.desc}
        </Typography>

        <Stack
       
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
         
            {produces.img.map((item, index) => {
              return (
                <div key={index} style={{overflow:"hidden"}}>
                  <img
                  key={index}
                  onClick={()=>setImgSmall(item)}
                  className={`${item === imgSmall?" opacity-1":" opacity "}   card-img-top-product-detials`}
                    style={{ borderRadius: 3 }}
                    height={100}
                    width={90}
                    src={item}
                    alt=""
                  />
               </div>
              );
            })}
         
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
