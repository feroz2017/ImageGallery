import React from "react";
import MediaCard from "./MediaCard";
import Pagination from "@material-ui/lab/Pagination";
import paginate from "../utils/paginate";
import { Grid } from "@material-ui/core/";

class RenderGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      currentPageData: [],
      perPageData: 10,
    };
  }

  componentDidMount() {
    const images = paginate(this.state.data, 1, this.state.perPageData);
    this.setState({ currentPageData: images });
  }

  getCount = () => {
    return Math.floor(this.state.data.length / this.state.perPageData); // will get the total number of pages
  };
    // will run on every click of pagination to render the required data on given page
  onChangeHandler = (event, page) => {
    const images = paginate(this.state.data, page, this.state.perPageData);
    this.setState({
      currentPageData: images,
    });
  };

  render() {
    if (!this.state.currentPageData.length) return <h1>Loading</h1>;
    return (
      <React.Fragment>
        {this.state.currentPageData.map((img) => {
          console.log(img);
          return <MediaCard key={img.id} image={img.url} title="hurrah!" />;
        })}

        <Grid item md={12} container>
          <Grid item md={2}></Grid>
          <Grid item md={8}>
            <Pagination
              size="large"
              count={this.getCount()}
              onChange={(event, page) => this.onChangeHandler(event, page)}
            />
          </Grid>
        </Grid>
        <Grid item md={2}></Grid>
      </React.Fragment>
    );
  }
}
export default RenderGallery;
