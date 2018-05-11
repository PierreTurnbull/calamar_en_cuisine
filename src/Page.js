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
        // TODO: make the same with upBtn and downBtn
        var leftBtn     = "";
        var rightBtn    = "";
        var upBtn       = "";
        var downBtn     = "";
        if (this.props.canGoLeft) {
            leftBtn = <button className="pageBtn pageBtnLeft">LEFT</button>;
        }
        if (this.props.canGoRight) {
            rightBtn = <button className="pageBtn pageBtnRight">RIGHT</button>;
        }
        if (this.props.canGoUp) {
            upBtn = <button className="pageBtn pageBtnUp">UP</button>;
        }
        if (this.props.canGoDown) {
            downBtn = <button className="pageBtn pageBtnDown" onClick={() => (
                this.props.changePage(this.props.listIndex, 1, this.props.isLastPage)
            )}>DOWN</button>;
        }
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
                {leftBtn}
                {rightBtn}
                {upBtn}
                {downBtn}
            </section>
        );
    }
}

export { Page };
