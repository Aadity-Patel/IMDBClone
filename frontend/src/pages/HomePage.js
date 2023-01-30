import { Grid } from "@mui/material";
import React from "react";
import CustomButton from "../components/CustomButton";
import EditWindow from "../components/EditWindow";
import MovieInfo from "../components/MovieInfo";

const HomePage = () => {
  return (
    <div>
      <CustomButton
        buttonText="Add New Movie"
        onClickTask={() => console.log("Hello")}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <MovieInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MovieInfo />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MovieInfo />
        </Grid>
      </Grid>
      <EditWindow/>
    </div>
  );
};

export default HomePage;
