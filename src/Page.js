import React, { Component } from 'react';
import './App.css';

class Page extends Component {
    constructor(props) {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
        // console.log(window.pageYOffset);
    }
    componentDidMount() {
        // window.addEventListener("mousewheel", this.handleScroll);
        // document.querySelectorAll(".pageBtnDown")[this.props.index].addEventListener("click", () => {
        //     this.props.changePage(this.props.index, 1);
        // });
        // document.querySelectorAll(".pageBtnUp")[this.props.index].addEventListener("click", () => {
        //     this.props.changePage(this.props.index, -1);
        // });
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
                            onClick={() => (this.props.changePage([
                                this.props.pageData.pathIndex,
                                this.props.pageData.pageIndex
                            ], [
                                item.pathIndex,
                                item.pageIndex
                            ]))}
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
