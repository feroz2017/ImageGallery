import React from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  media: {
    height: 200,

  },
});
export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Grid item md={4} sm={6} xs = {12}>
          <CardMedia className={classes.media} image={props.image}></CardMedia>
        </Grid>     
    </React.Fragment>
  );
}
