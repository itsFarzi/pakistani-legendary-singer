import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Artist=({allArtist})=>{
    console.log(allArtist.artists)
const list =({artists})=>{
    console.log(artists , 'render after')

    if(allArtist){
        return artists.map((item , i)=>{
            const style ={
                background : `url(./images/covers/${item.cover}.jpg)`
            }
          return(
             <Link key={item.id} to={`/artist/${i}`}
               className="artist_item" 
               style={style}>
             <div>{item.name}</div>
             </Link>
          )
        })
    }
}

    return(
       <div className="artist_list" >
       <h4>Browse The Artist</h4>
       {list(allArtist)}
       </div>
    )
}

export default Artist;