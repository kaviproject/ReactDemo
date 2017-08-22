
//importing react library
import React, { Component } from 'react';
import ArticleDetail from './articleDetail';
import ArticleListItem from './article_listitem';
import Header from './header';


//Create the component
var RenderArticles;
class ArticleList extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		//It will filter the artciles based on the selection in the navigation bar except HOME
		if (this.props.handler && this.props.handler != "HOME") {
			RenderArticles = null;
			const hello = this.props.handler;
			const filteredItem = this.props.data.docs.filter(function (data) { return data.section_name == hello });
			RenderArticles = filteredItem.map(data => {
				return <ArticleListItem key={data._id} data={data} />
			});

		}
		else {
			RenderArticles = null;
			RenderArticles = this.props.data.docs.map(data => {
				return <ArticleListItem key={data._id} data={data} />
			});
		}
		return (

			<ul className="col-md-4 list-group">

				{RenderArticles}
			</ul>
		)
	}
}


//export the component
export default ArticleList;