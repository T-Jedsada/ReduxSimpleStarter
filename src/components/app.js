import React, { Component } from 'react';
import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBWfZNAT_8Mq46afTAZA6KD8uyeU410dsQ'

class App extends Component {

  constructor(props) {
    super(props)
    this.state={ 
      videos: [], 
      selectedVideo: null
    }
    YTSearch({ key: API_KEY, term: 'CR7' }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0]})
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})} 
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App