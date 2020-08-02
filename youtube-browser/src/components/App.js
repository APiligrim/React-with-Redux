import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';
 
const KEY = "AIzaSyBvU2vy44fSKzl7uxsZ_-Ek6R1V58XZ4M4";
 
class App extends React.Component {
    state={
      videos:[],
      selectedVideo: null
    
    }; //first the list of videos is empty
    //after the user searches for the videos, they will get put into the new "state"
  
    componentDidMount(){
      this.onTermSubmit('buildings')
    }
    onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });

    //after the user searches for the videos, they will get put into the updated "state"
    this.setState({
      videos:response.data.items,
      selectedVideo: response.data.items[0] //take the first video and use it as a DEFAULT video
    });
  };

  onVideoSelect =(video)=>{
    this.setState({selectedVideo: video})
  }
    render(){
        return(
          <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default App;