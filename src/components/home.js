import React, { Component } from 'react';
import Banner from './banner' ;
import Artist from './artistList'

const URL = "http://localhost:3005/artists"

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            artist : ''
        }
    }
    componentDidMount(){
        fetch(URL , {
            method  : 'GEt'
        })
        .then( response => response.json() )
        .then( json =>{
           this.setState({
               artist : json
           })
        })
    }
    render() {
        return (
            <div>
               <Banner/>
               <Artist allArtist={this.state.artist} />
            </div>
        );
    }
}

export default Home;