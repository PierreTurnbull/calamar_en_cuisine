import React, { Component } from 'react';
import './App.css';

class Page extends Component {
    constructor(props) {
        super();
        this.state = {
            hidden: true,
            hidden: null
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
        var neighbourTop = this.props.pageData.neighbours.find((item) => (item.scroll === "top"));
        var neighbourBot = this.props.pageData.neighbours.find((item) => (item.scroll === "bot"));
        if (window.pageYOffset <= 0 && neighbourTop !== undefined) {
            console.log("top");
            this.props.changePage(this.props.pageData.index, neighbourTop.index);
        } else if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight &&
            neighbourBot !== undefined) {
            console.log("bot");
            this.props.changePage(this.props.pageData.index, neighbourBot.index);
        }
    }
    componentDidUpdate() {
        var propsHiddenIsActive = (this.props.pageData.classes.indexOf("hidden") !== -1);
        var stateHiddenIsActive = (this.state.hidden === true);
        if (!propsHiddenIsActive && stateHiddenIsActive) {
            console.log(this.props.pageData.index, "not hidden");
            window.addEventListener("scroll", this.handleScroll);
            this.setState({
                hidden: false
            });
        } else if (propsHiddenIsActive && !stateHiddenIsActive) {
            console.log(this.props.pageData.index, "hidden");
            window.removeEventListener("scroll", this.handleScroll);
            this.setState({
                hidden: true
            });
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
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
            {"page " + this.props.pageData.pageIndex + " path " + this.props.pageData.pathIndex}
            {/* for each neighbour, display a button that enables to change page
                from the current page to the page corresponding to the neighbour */}
                {
                    this.props.pageData.neighbours.map((item, index) => {
                        if (item.scroll === null) {
                            return (
                                <
                                    button
                                    className="pageBtn"
                                    key={index}
                                    style={item.style}
                                    onClick={() => (this.props.changePage(this.props.pageData.index, item.index))}
                                >
                                    {item.textContent}
                                </button>
                            );
                        }
                    })
                }
            </div>
        );
    }
}

export { Page };
