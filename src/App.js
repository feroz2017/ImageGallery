import './App.css';
import {Grid} from '@material-ui/core';
import Header from './Components/Header';
import RenderGallery from './Components/RenderGallery'
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data:[]
    }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res=>{
        let filteredData = [];
        // Going to filtered requried data one image with even id of each album
        for (let index = 0; index < 100; index++) {
          filteredData.push(res.data[index*50 + 1]);
        }
        this.setState({data:filteredData}); // Setting state and it's re rerendeer the component
    })
    .catch(err =>console.log(err));
  }
  render() { 
    // As Axio request is async will take a little time, we will be showing nothing until data gets
    if(!this.state.data.length) return <h1>Loading....!</h1>;
    return (
      <Grid container direction="column">
        <Grid item><Header/></Grid>
        <Grid item container m={5}>
          <Grid item md={2} sm = {1} xs = {1}/>
          <Grid item md={8} sm={10} xs = {10}>
              <Grid item container spacing={3}>
              <RenderGallery data={this.state.data}/>
              </Grid>
          </Grid>
          <Grid item md={2} sm = {1} xs = {1}/>
        </Grid>
      </Grid> 
    );
  }
}
 


export default App;
