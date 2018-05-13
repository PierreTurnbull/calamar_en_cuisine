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
    render() {
        return (
            <
                section
                className={this.props.data.classes.join(" ")}
                style={
                    {
                        backgroundImage: "url('" + this.props.data.imgUrl + "')"
                    }
                }
            >
                {
                    this.props.data.neighbours.map((item, key) => (
                        <
                            button
                            className="pageBtn"
                            key={key}
                            style={item.style}
                        >
                            {item.text}
                        </button>
                    ))
                }
            </section>
        );
    }
}

export { Page };
