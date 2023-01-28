import { Grid } from "@mui/material";
import React from "react";
import CustomButton from "../components/CustomButton";
import MovieInfo from "../components/MovieInfo";

const HomePage = () => {
  return (
    <div>
    <CustomButton buttonText="Add New Movie" onClickTask={() => console.log('Hello')}/>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MovieInfo />
        </Grid>
        <Grid item xs={4}>
          <MovieInfo />
        </Grid>

        <Grid item xs={4}>
          <MovieInfo />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
