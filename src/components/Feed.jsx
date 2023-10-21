import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import Shrimp from "../images/shrimp.jpg";
import Nature1 from "../images/pexels-nathan-tran-16776159.jpg";
import Nature2 from "../images/pexels-michael-block-3225517.jpg";
import Friend from "../images/pexels-armin-rimoldi-5553094.jpg";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post image={Shrimp} title={"Shrimp and Chorizo Paella"} />
      <Post image={Nature1} title={"See Waves"} />
      <Post image={Nature2} title={"Beautiful nature with gorgeous view"} />
      <Post image={Friend} title={"loyal friends "} />
    </Box>
  );
};

export default Feed;
