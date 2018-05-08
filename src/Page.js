import React, { Component } from 'react';
import './App.css';

class Page extends Component {
    constructor(props) {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            hidden: false
        };
        this.hidePage = this.hidePage.bind(this);
    }
    handleScroll() {
        // console.log(window.pageYOffset);
    }
    hidePage() {
        console.log("hide page of index " + this.props.index);
        this.setState({
            hidden: true
        });
    }
    componentDidMount() {
        window.addEventListener("mousewheel", this.handleScroll);
        document.querySelectorAll(".page")[this.props.index].addEventListener("click", () => {
            this.props.changePage(this.props.index);
            this.hidePage();
        });
    }
    render() {
        return (
            <section className={"page" + (this.state.hidden === true ? " hidden" : "")}>page</section>
        );
    }
}

export { Page };
