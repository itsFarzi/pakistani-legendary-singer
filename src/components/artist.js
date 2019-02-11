import React, { Component } from 'react';
import Header from './header' ;
import AlbumList from './albumList'

const URL = ' http://localhost:3005/artists'


class Artist extends Component {
    constructor(props){
        super(props);
        this.state={
            artist : ''
        }
    }
    componentDidMount(){
       // console.log(this.props.match.params.artistId)
       fetch( `${URL}/${this.props.match.params.artistId}`, {
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