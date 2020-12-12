import { AppBar, Toolbar, Typography , makeStyles} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import React from "react";
// To make custom styles  using material hook makeStyle
const useStyles = makeStyles({
  setFlex: {
    flex : 1
  },
});
const Header = () => {
  const syles = useStyles();

  return (
    <React.Fragment>
    <AppBar position="sticky">
    <Toolbar>
      <Typography className={syles.setFlex}>Photo Gallery</Typography>
      <ImageIcon/>
    </Toolbar>
  </AppBar>
  <h1>Image Gallery</h1>
    </React.Fragment>
  );
};

export default Header;
