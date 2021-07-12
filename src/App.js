import React, { Component } from 'react';
import Slides from './components/Slides';
import Listings from './components/Listings';
import { connect } from 'react-redux';
import loadData from './actions/loadData';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: [], 
      model: [],
      hyperdriveRating: 0,
      passengers: 0,
      cargoCapacity: 0,
      starshipClass: [],
      costInCredits: 0,
      starships: []
    }
  };

getData = async() => {
  
  const where = encodeURIComponent(JSON.stringify({
    "name": {
      "$exists": true
    },
    "model": {
      "$exists": true
    },
    "hyperdriveRating": {
      "$exists": true
    },
    "passengers": {
      "$exists": true
    },
    "cargoCapacity": {
      "$exists": true
    },
    "starshipClass": {
      "$exists": true
    },
    "costInCredits": {
      "$exists": true
    }
  }));

  const response = await fetch(
    `https://parseapi.back4app.com/classes/SWAPI_Starship?limit=20&order=name,model,costInCredits&excludeKeys=MGLT,consumables,length,manufacturer&where=${where}`,
    {
      headers: {
        'X-Parse-Application-Id': 'CTbZf66pLpOr0U4AIKjW6PJ4c0drYtWyeA7rcNW5', // This is your app's application id
        'X-Parse-REST-API-Key': 'Q6YChru0AoSTmLcb0LCafsHTg4ahFqLKVEvQNRtS', // This is your app's REST API key
      }
    }
  );
  const data = await response.json(); // Here you have the data that you need
  console.log(JSON.stringify(data, null, 2));

    this.props.loadData(data.results)
    this.setState({starships: data.results})

}


componentDidMount(){

  this.getData()
  // .then(data=> {
  //   this.setState({
  //     name: [], 
  //     model: [],
  //     hyperdriveRating: 0,
  //     passengers: 0,
  //     cargoCapacity: 0,
  //     starshipClass: [],
  //     costInCredits: 0
  //   })
  // }

  // )
}


render(){
  console.log(this.state.starships);
  return(
    <>
      
      <Listings listings={this.state.starships} />

    </>);
};
  }

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (data)=>dispatch(loadData(data))
  }
}


export default connect(null, mapDispatchToProps)(App);
