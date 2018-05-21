import React, { Component } from 'react';
import './App.css';

class Page extends Component {
    constructor(props) {
        super();
        this.state = {
            hidden: true,
            scrollListener: null
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
        if (window.pageYOffset <= 0) {
            console.log("top");
        } else if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight) {
            console.log("bot");
        }
    }
    componentDidUpdate() {
        var propsHiddenIsActive = (this.props.pageData.classes.indexOf("hidden") !== -1);
        var stateHiddenIsActive = (this.state.scrollListener === null);
        if (!propsHiddenIsActive && stateHiddenIsActive) {
            console.log(this.props.pageData.index, "not hidden");
            this.setState({
                scrollListener: window.addEventListener("scroll", this.handleScroll)
            });
        } else if (propsHiddenIsActive && !stateHiddenIsActive) {
            console.log(this.props.pageData.index, "hidden");
            window.removeEventListener("scroll", this.handleScroll);
            this.setState({
                scrollListener: null
            });
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            // display a div corresponding to the page
            <
                div
                className={this.props.pageData.classes.join(" ")}
                style={
                    {
                        backgroundImage: "url('" + this.props.pageData.imgUrl + "')"
                    }
                }
            >
            {/* for each neighbour, display a button that enables to change page
                from the current page to the page corresponding to the neighbour */}
                {
                    this.props.pageData.neighbours.map((item, index) => (
                        <
                            button
                            className="pageBtn"
                            key={index}
                            style={item.style}
                            onClick={() => (this.props.changePage(this.props.pageData.index, item.index))}
                        >
                            {item.textContent}
                        </button>
                    ))
                }
            </div>
        );
    }
}

export { Page };
