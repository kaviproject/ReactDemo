
//react module import
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './components/articleList';
import Header from './components/header';
import data from './data.json';
import ArticleDetail from './components/articleDetail';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleData = this.handleData.bind(this);
		this.state = {
			data: data.response,
			selectedVideo: data.response.docs[0],
			selectedState: ''
		};

	}
	handleData(data1) {
		this.setState({
			selectedState: data1
		});
	}

	render() {
		return (
			<div>
				<Header childIn={this.handleData} />
				<ArticleDetail video={this.state.selectedVideo} />
				<ArticleList data={this.state.data} handler={this.state.selectedState} />
			</div>
		)
	}
}


//Render this component to the view
//Meteor startup is help to wait until the dom is loaded on the web page
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));

}
)
