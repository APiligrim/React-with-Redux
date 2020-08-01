import './ImageList.css'
import React from 'react';

const ImageList=(props)=>{
    const images = props.images.map(({describtion, id, urls})=>{
        return <img alt={describtion} key={id} src={urls.regular}/>
    });
    return (
        <div className='image-list'>{images}</div>
    );
};

export default ImageList;