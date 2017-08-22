import React from 'react';
import ArticleListItem from './article_listitem';


const ArticleDetail = (props) => {
	const url = {
		backgroundImage: 'url(' + props.video.link + ')'
	};

	return (
		<div className="video-detail col-md-8" >
			<div className="embed-responsive embed-responsive-16by9">
				<a href={props.video.web_url}>

					<img className="media-object" src={props.video.link} />
				</a>
			</div>
			<div className="details">
				<h3> {props.video.headline.print_headline}</h3>
				<div> {props.video.snippet}</div>
				<br />

				<div><b>PublishedDate:</b>{props.video.pub_date}</div>
			</div>
		</div>
	);
}

export default ArticleDetail;