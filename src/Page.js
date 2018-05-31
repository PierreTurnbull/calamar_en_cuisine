import React, { Component } from 'react';
import './App.css';

class Page extends Component {
    constructor(props) {
        super();
        this.state = {
            hidden: null,
            backgroundPosition: "center 30%"
        };
        this.handleScroll       = this.handleScroll.bind(this);
        this.checkNeighbours    = this.checkNeighbours.bind(this);
        this.moveImage          = this.moveImage.bind(this);
    }
    moveImage() {
        var top = Math.floor(window.pageYOffset / (document.body.offsetHeight - window.innerHeight) * 40 + 30);
        this.setState({
            backgroundPosition: "center " + top + "%"
        });
    }
    checkNeighbours() {
        var neighbourTop = this.props.pageData.neighbours.find((item) => (item.scroll === "top"));
        var neighbourBot = this.props.pageData.neighbours.find((item) => (item.scroll === "bot"));
        if (window.pageYOffset <= 0 && neighbourTop) {
            this.props.changePage(this.props.pageData.index, neighbourTop.index);
        } else if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight &&
            neighbourBot !== undefined) {
            this.props.changePage(this.props.pageData.index, neighbourBot.index);
        }
    }
    handleScroll() {
        // this.checkNeighbours();
        this.moveImage();
    }
    componentDidUpdate() {
        var propsHiddenIsActive = (this.props.pageData.classes.indexOf("hidden") !== -1);
        var stateHiddenIsActive = (this.state.hidden === true);
        if (!propsHiddenIsActive && stateHiddenIsActive) {
            window.addEventListener("scroll", this.handleScroll);
            this.setState({
                hidden: false,
                backgroundPosition: "center " + Math.floor(window.pageYOffset / (document.body.offsetHeight - window.innerHeight) * 40 + 30) + "%"
            });
        } else if (propsHiddenIsActive && !stateHiddenIsActive) {
            window.removeEventListener("scroll", this.handleScroll);
            this.setState({
                hidden: true
            });
        }
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
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
                        backgroundImage: "url('" + this.props.pageData.imgUrl + "')",
                        backgroundPosition: this.state.backgroundPosition
                    }
                }
            >
            {"page " + this.props.pageData.pageIndex + " path " + this.props.pageData.pathIndex}
            {/* for each neighbour, display a button that enables to change page
                from the current page to the page corresponding to the neighbour */}
                {
                    this.props.pageData.neighbours.map((item, index) => {
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
                        return "";
                    })
                }
            </div>
        );
    }
}

export { Page };
