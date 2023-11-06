import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Header1 from "./Components/Header/Header1";
import Header2 from "./Components/Header/Header2";
import Header3 from "./Components/Header/Header3";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import { useState } from "react";
import Footer from "./Components/Footer/footer";

function App() {
  const [theme, colorMode] = useMode();
  const [scroll, setScroll] = useState(0);

  window.onscroll = function () {
    setScroll(scrollY);
  };
  //favourit 
  const [favourites, setFavourites] = useState([]);
  function addFavouritMovie(movie) {
    if (favourites.find((fav) => fav.id === movie.id) == null) {
      setFavourites([...favourites, movie]);
      
      
    } else {
      // window.alert("Already Added");
      removeFavouritMovie(movie)
    }
  }
  function removeFavouritMovie(movie) {
    let newFavourit = favourites.filter(
      (moviedelete) => movie.id !== moviedelete.id
    );
    setFavourites(newFavourit);
    //  window.alert("Are You Sure To Remove This Movie From Favourites ?")
  }
  // main 
  const [produces, setProducs] = useState();
  const [open, setOpen] = useState(false);

 

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header1 />
        <Header2 open1={open} handleClose1={handleClose} setOpen={setOpen} favourites={favourites} produces={produces} setProducs={setProducs}  removeFavouritMovie={removeFavouritMovie}/>
        <Header3 />
        <Box
          sx={{ pb: 1 }}
          bgcolor={
            // @ts-ignore
            theme.palette.hero.main
          }
        >
          <Hero />
         <div className="container  p-0">
         
            <Main open={open} handleClose={handleClose} setOpen={setOpen} favourites={favourites} addFavouritMovie={addFavouritMovie} produces={produces} setProducs={setProducs} />
          
         </div>
           
         
             
         <a href="#home">
        {" "}
        <div
          className={` arrowUp position-fixed ${
            scroll >= 500 ? " d-flex" : "d-none"
          }`}
        >
          <KeyboardArrowUpIcon className="fa-arrow-up"/>
          {/* <i className=" fa-solid fa-arrow-up"></i> */}
        </div>
      </a>
      <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
