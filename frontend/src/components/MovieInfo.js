import React from "react";
import CustomButton from "./CustomButton";
import Info from "./Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  rightAlignItem: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
}));

const MovieInfo = () => {
  const classes = useStyles();
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Info keyInfo="Movie Name " value="Hello Ghost" />
          <Info keyInfo="Year of Release " value="Hello Ghost" />
          <Info keyInfo="Producer " value="Hello Ghost" />
          <Info keyInfo="Actors " value="Hello Ghost" />
        </CardContent>
        <CardActions className={classes.rightAlignItem}>
          <CustomButton
            buttonText="edit"
            onClickTask={() => console.log("Hello")}
          />
        </CardActions>
      </Card>
    </div>
  );
};

export default MovieInfo;
