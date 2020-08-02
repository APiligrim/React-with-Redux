import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
 
const KEY = "AIzaSyBvU2vy44fSKzl7uxsZ_-Ek6R1V58XZ4M4";
 
class App extends React.Component {
    state={videos:[]}; //first the list of videos is empty
    //after the user searches for the videos, they will get put into the new "state"
    onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    });

    //after the user searches for the videos, they will get put into the updated "state"
    this.setState({videos:response.data.items});
  };
    render(){
        return(
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;