import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    constructor() {
        super();
        //this.handleChange=this.handleChange.bind(this);
        this.state = { selectedState: '' };
    }
    handleChange(val) {
        // console.log(event.target.value);
        this.setState({
            selectedState: val
        }, function () {
            console.log(this.state.selectedState);
        });
        this.props.childIn(this.state.selectedState);

    }

    render() {

        return (
            <div>
                <nav className="nav navbar-default" id="Header">
                    <h1 >THE TIMES</h1>
                </nav>
                <nav className="navbar navbar-default" id="subMenu">

                    <ul id="nav1"  >
                        <li><a href="#" onClick={this.handleChange.bind(this, "HOME")}>Home</a></li>
                        <li><a href="#" onClick={this.handleChange.bind(this, "World")} >World</a></li>
                        <li><a href="#" onClick={this.handleChange.bind(this, "U.S.")}  >U.S.</a></li>
                        <li><a href="#" onClick={this.handleChange.bind(this, "Sports")}>Sports</a></li>
                        <li><a href="#" onClick={this.handleChange.bind(this, "Business Day")}>Business Day</a></li>
                        <li><a href="#" onClick={this.handleChange.bind(this, "Arts")}>More</a></li>

                    </ul>
                </nav>
                <h2 >TOP STORIES</h2>

            </div>
        )
    }
}

export default Header;