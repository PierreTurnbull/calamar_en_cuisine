import React, { Component } from 'react';
import './App.css';
import { pageData } from './TestData.js';

class Page extends Component {
    constructor(props) {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.hidePage = this.hidePage.bind(this);
    }
    handleScroll() {
        // console.log(window.pageYOffset);
    }
    hidePage(direction) {
        if (pageData["page" + (this.props.index + direction) ]) {
            console.log("hide page of index " + this.props.index);
            document.querySelectorAll(".page")[this.props.index].classList.add("hidden");
            console.log(document.querySelectorAll(".page")[this.props.index].classList);
        }
    }
    componentDidMount() {
        window.addEventListener("mousewheel", this.handleScroll);
        document.querySelectorAll(".pageBtnDown")[this.props.index].addEventListener("click", () => {
            this.props.changePage(this.props.index + 1, 1);
            this.hidePage(1);
        });
        document.querySelectorAll(".pageBtnUp")[this.props.index].addEventListener("click", () => {
            this.props.changePage(this.props.index - 1, -1);
            this.hidePage(-1);
        });
    }
    render() {
        return (
            <
                section
                className={"page hidden"}
                style={
                    {
                        backgroundImage: "url('" + this.props.imgSrc + "')"
                    }
                }
            >
                <button className="pageBtn pageBtnUp">UP</button>
                page
                <button className="pageBtn pageBtnDown">DOWN</button>
            </section>
        );
    }
}

export { Page };
