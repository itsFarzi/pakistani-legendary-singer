import React, { Component } from 'react';

const AlbumList =(props)=>{

const showList=({albumList})=>{
  if(albumList){
      return albumList.map((item , i)=>{
             return(
                 <li key={i}>
                   <img 
                   key={i} 
                   src={`/images/albums/${item.cover}.jpg`}
                   />
                   </li>
             )
      })
  }
    }
    return(
        <div className="album-list grid-4by4" >
          {showList(props)}
        </div>
    )
}

export default AlbumList;