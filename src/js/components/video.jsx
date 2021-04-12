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
					<source src={mp4High} type='video/mp4'/>
					<source src={webm} type='video/webm'/>
					<source src={ogg} type='video/ogg'/>
					<source src={mp4Low} type='video/mp4'/>
				</video>
				<span>
					Created by <a href="http://anthologyfilms.com/" target="_blank">Anthology Films</a>
				</span>
			</div>
		);
	}
}

export default Video;
