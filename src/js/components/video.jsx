import React, { Component } from 'react';

const mediaHost = 'http://media.braylor.com.s3-website-us-west-2.amazonaws.com';
const mp4Low = `${mediaHost}/wedding-highlight-low.mp4`;
const ogg = `${mediaHost}/wedding-highlight.ogg`;
const webm = `${mediaHost}/wedding-highlight.webm`;

class Video extends Component {
	static displayName = "Video";

	render() {
		return (
			<div className="video" style={{ textAlign: 'center' }}>
				<video
					allowFullScreen={true}
					controls
					style={{ marginBottom: '20px', width: '100%' }}>
					<source src={mp4Low} type='video/mp4'/>
					<source src={webm} type='video/webm'/>
					<source src={ogg} type='video/ogg'/>
				</video>
				<span>
					Created by <a href="http://anthologyfilms.com/" target="_blank">Anthology Films</a>
				</span>
			</div>
		);
	}
}

export default Video;
