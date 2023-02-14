import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useEffect } from "react";
import axios from "axios";
import FavouritesListItem from "./FavouritesListItem";
import useToken from "../hooks/useToken";
import { getSelectedRecipe } from "../helpers/selectors";
import FavouritesCard from "./Cards/FavouritesCard";

const drawerWidth = 240;

export default function FavouritesView() {
  const [recipeFavs, setRecipeFavs] = useState(null);
  const [selectedrecipe, setSelectedrecipe] = useState(null);

  const getToken = useToken().getToken();

  const displayFavs = async () => {
    try {
      const response = await axios.post("/myrecipes", {
        userId: getToken,
      });
      console.log("response data is ", response.data);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    (async () => {
      const result = await displayFavs();
      setRecipeFavs(result);
    })();
  }, []);

  let recipeFavsList;
  if (recipeFavs !== null) {
    recipeFavsList = recipeFavs.map((favs) => {
      const onClick = (event) => {
        event.preventDefault();
        setSelectedrecipe(getSelectedRecipe(recipeFavs, favs.title));
      };
      return (
        <FavouritesListItem
          title={favs.title}
          recipeId={favs.id}
          onClick={onClick}
          setRecipeFavs={setRecipeFavs}
          setSelectedrecipe={setSelectedrecipe}
        />
      );
    });
  }

  const favouritesCard = () => {
    return (
      <FavouritesCard
        title={selectedrecipe.title}
        spoonacularSourceUrl={selectedrecipe.spoon_url}
        image={selectedrecipe.image}
        ready_in_minutes={selectedrecipe.ready_in_minutes}
        vegetarian={selectedrecipe.vegetarian}
        summary={selectedrecipe.summary}
        dairy_free={selectedrecipe.dairy_free}
        gluten_free={selectedrecipe.gluten_free}
        vegan={selectedrecipe.vegan}
      />
    );
  };
  //  Sidebar lower rendering
  return (
    <div>
      {recipeFavs !== null ? (
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
          ></AppBar>
          <Drawer
            sx={{
              display: "flex",
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                mt: "4.3em",
                width: drawerWidth,
                boxSizing: "border-box",
                maxHeight: "90%",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            {/* THIS BOX DIV CONTAINS BOTH INGREDIENT LIST AND SEARCH BUTTON */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: 900,
              }}
            >
              {/* THIS BOX DIV CONTAINS ONLY INGREDIENTS LIST AND TEXT INPUT.
          MaxHeight fixes scroll button pushing */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  height: "90%",
                }}
              >
                <Box
                  sx={{
                    flexGrow: 0,
                    width: 239,
                    height: "3.5em",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2em",
                  }}
                  bgcolor="#fc5149"
                >
                  <header> My Saved Recipes</header>
                </Box>
                <List>
                  <Drawer
                    sx={{
                      display: "flex",
                      flexShrink: 0,
                      "& .MuiDrawer-paper": {
                        mt: "8em",
                        boxSizing: "border-box",
                        maxHeight: "90%",
                      },
                    }}
                    variant="permanent"
                    anchor="left"
                  >
                    {recipeFavsList}
                    {/* {favouritesList} */}
                  </Drawer>
                </List>
              </Box>
              {/* END OF INGREDIENT LIST */}
              <Divider />
              {/* END OF  BOX DIV CONTAINING BOTH INGREDIENT LIST AND SEARCH BUTTON */}
            </Box>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "black",
              p: 3,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              backgroundImage: "url(Kitchenware.png)",
              bgcolor: "#CBF5EF",
              backgroundSize: "85%",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          >
            {/* END OF LEFT NAV/BEGINNING OF MAIN CONTAINER */}
            <Toolbar />
            {/* Shows selected recipe on state update */}
            {selectedrecipe !== null && favouritesCard()}
          </Box>
        </Box>
      ) : (
        <p> loading </p>
      )}
    </div>
  );
}
