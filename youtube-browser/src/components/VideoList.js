import React from 'react';
import VideoItem from './VideoItem';

const VideoList =({videos})=>{
    const renderedList = videos.map((video)=> {
        return <VideoItem video={video} />; //need to return the video and the image of the video
    });
    //props.videos
    return <div>{renderedList}</div>;
}

export default VideoList;