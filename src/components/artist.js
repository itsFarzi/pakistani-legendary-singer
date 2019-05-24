import React, { Component } from 'react';
import Header from './header' ;
import AlbumList from './albumList'

import {URL} from '../json'


class Artist extends Component {
    constructor(props){
        super(props);
        this.state={
            artist : URL.artists[this.props.match.params.artistId]
        }
            console.log(URL.artists[1]);
        
    }
   
    render() {
        const style ={
            background: `url(/images/covers/${this.state.artist.cover}.jpg)` ,
        }
        return (
            <div>
                <Header/>
                <div className="artist-bio">
                <div  className="avatar">
                <span
                   style={style} 
                   > 
                   </span>
                </div>
                    <div className="bio" >
                      <h3>{this.state.artist.name}</h3>
                      <div className="bio-text">{this.state.artist.bio}</div>
                    </div>
                </div>
                <AlbumList albumList={this.state.artist.albums} />
            </div>
        );
    }
}

export default Artist;