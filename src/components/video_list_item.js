import React, { Component } from 'react';

class VideoItemList extends Component {
    render() {
        const video = this.props.video
        const imageUrl = video.snippet.thumbnails.default.url
        return (
            <li className='list-group-item' onClick={() => this.props.onVideoSelect(video)}>
                <div className='video-list media'>
                    <div className='media-left'>
                        <img className='media-object' src={imageUrl}/>
                    </div>

                    <div className='media-body'>
                        <div className='media-heading'>{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoItemList