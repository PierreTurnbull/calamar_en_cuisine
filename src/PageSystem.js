import React, { Component } from 'react';
import './App.css';
import { Page } from './Page.js';
import { format, pageData } from './TestData.js';

class PageSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            pagePath: [],
            currentPage: 0
        };
        this.loadPage = this.loadPage.bind(this);
        this.changePage = this.changePage.bind(this);
        this.showPage = this.showPage.bind(this);
    }
    showPage(index) {
        console.log("show page of index " + index);
        var pagePath = this.state.pagePath;
        document.querySelectorAll(".page")[index].classList.remove("hidden");
    }
    changePage(index, direction) {
        // displays a new page (index) and loads the next page (index + 1)
        if (pageData["page" + (index + 1)] && direction === 1 && this.state.pagePath.length <= (index + 1)) {
            console.log("flip down");
            this.showPage(index);
            this.loadPage(index + 1);
        } else if (pageData["page" + (index)]) {
            console.log("flip down last page");
            this.showPage(index);
        } else if (pageData["page" + (index)]) {
            this.flipPage(index);
            console.log("flip up");
        }
    }
    fetchPageData(index) {
        // fetch page data with AJAX
        return pageData["page" + index];
    }
    createPageComponent(index) {
        // push a JSX block in pagePath
        var newPage =
            <
                Page
                key={index}
                index={index}
                changePage={this.changePage}
                showPage={this.showPage}
                imgSrc={pageData["page" + index].imgSrc}
                classes={"page"}
            />;
        const pagePath = [...this.state.pagePath, newPage];
        this.setState({
            pagePath: pagePath
        });
    }
    loadPage(index) {
        // loads page of index 'index'
        const pageData = this.fetchPageData(index); // TODO later with AJAX
        this.createPageComponent(index );
    }
    componentWillMount() {
        this.loadPage(this.state.currentPage);
        setTimeout(() => (this.loadPage(this.state.currentPage + 1)), 0);
    }
    componentDidMount() {
        document.querySelector(".page").classList.remove("hidden");
    }
    render() {
        return (
            <div>
                {
                    this.state.pagePath.map((item) => {
                        return item;
                    })
                }
            </div>
        );
    }
}

export { PageSystem };
