import React from 'react';
import VideoItem from './VideoItem';

const VideoList =({videos, onVideoSelect })=>{
    const renderedList = videos.map((video)=> {
        return (
            <VideoItem 
                key={video.id.videoId} 
                onVideoSelect={onVideoSelect} 
                video={video} 
            /> //need to return the video and the image of the video
        )

    });
    //props.videos
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;