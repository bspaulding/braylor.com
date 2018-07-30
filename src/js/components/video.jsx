import React, { Component } from 'react';
import mp4High from '../../video/wedding-highlight.mp4';
import webm from '../../video/wedding-highlight.webm';
import ogg from '../../video/wedding-highlight.ogg';
import mp4Low from '../../video/wedding-highlight-low.mp4';

class Video extends Component {
	static displayName = "Video";

	render() {
		return (
			<div className="video" style={{ textAlign: 'center' }}>
				<video
					allowFullScreen={true}
					controls
					style={{ marginBottom: '20px', width: '100%' }}>
					<source src='https://dl3qhh2xbcrs2.cloudfront.net/wedding-highlight-hls/prog_index.m3u8'/>
					<source src="https://dl3qhh2xbcrs2.cloudfront.net/205d6ce23c24b63c13e15b57c063e79c.mp4" type='video/mp4'/>
					<source src="https://dl3qhh2xbcrs2.cloudfront.net/0969aead51c61eb3380bfe105ca7b337.webm" type='video/webm'/>
					<source src="https://dl3qhh2xbcrs2.cloudfront.net/ff42c5f9ad07427dd721fd19df9128dd.ogg" type='video/ogg'/>
					<source src="https://dl3qhh2xbcrs2.cloudfront.net/df0d915793000733fc0bbdf35245a63b.mp4" type='video/mp4'/>
				</video>
				<span>
					Created by <a href="http://anthologyfilms.com/" target="_blank">Anthology Films</a>
				</span>
			</div>
		);
	}
}

export default Video;
