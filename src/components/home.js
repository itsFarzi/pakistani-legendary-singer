import React, { Component } from 'react';
import Banner from './banner' ;
import Artist from './artistList';
import {URL} from '../json'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            artist : URL
        }
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