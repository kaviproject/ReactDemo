import React from 'react';
import ArticleDetail from './articleDetail';


const ArticleListItem = (props) => {
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <a href={props.data.web_url}>
                        <img className="media-object" id="mainimage" src={props.data.link} />
                    </a>
                </div>
            </div>
            <div className="media-body">

                <div className="media-heading">
                    <h3> {props.data.headline.print_headline}</h3>
                    <div>{props.data.source}	</div>
                    <div>  {props.data.snippet}</div>
                    <br />
                    <div><b>PublishedDate:</b>{props.data.pub_date}</div>
                </div>

            </div>
        </li>
    )

}

export default ArticleListItem;