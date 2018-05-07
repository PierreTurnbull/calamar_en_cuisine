import React, { Component } from 'react';
import './App.css';

class Page extends Component {
    constructor(props) {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
        console.log(window.pageYOffset);
    }
    componentDidMount() {
        window.addEventListener("mousewheel", this.handleScroll);
        document.querySelectorAll(".page")[this.props.index].addEventListener("click", () => {
            this.props.flipBuffer();
        });
    }
    render() {
        return (
            <section className={"page page" + this.props.index}>page</section>
        );
    }
}

export { Page };
