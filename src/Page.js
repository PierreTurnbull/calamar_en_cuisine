import React, { Component } from 'react';
import './App.css';
import { data } from './TestData.js';

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
    componentWillUpdate() {
        console.log("new props");
    }
    render() {
        return (
            // display a div corresponding to the page
            <
                div
                className={this.props.data.classes.join(" ")}
                style={
                    {
                        backgroundImage: "url('" + this.props.data.imgUrl + "')"
                    }
                }
            >
            // for each neighbour, display a button that enable to change page
                {
                    this.props.data.neighbours.map((item, index) => (
                        <
                            button
                            className="pageBtn"
                            key={index}
                            style={item.style}
                            onClick={() => (this.props.changePage(item.pathIndex, item.pageIndex))}
                        >
                            {item.text}
                        </button>
                    ))
                }
            </div>
        );
    }
}

export { Page };
