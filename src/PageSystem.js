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
        // this.flipBuffer = this.flipBuffer.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this);
        // this.fillNextPages = this.fillNextPages.bind(this);
    }
    // flipBuffer() {
    //     if (this.state.currentPage < Object.keys(pageData).length - 1) {
    //         if (this.state.pageIndex === 0) {
    //             document.querySelector(".page0").style.display = "block";
    //             document.querySelector(".page1").style.display = "none";
    //         } else {
    //             document.querySelector(".page0").style.display = "none";
    //             document.querySelector(".page1").style.display = "block";
    //         }
    //         this.fillNextPages();
    //         this.setState({
    //             pageIndex: this.state.pageIndex === 0 ? 1 : 0,
    //             currentPage: this.state.currentPage + 1
    //         });
    //         console.log(this.state.currentPage);
    //         // ajax call to retrieve data here
    //     }
    // }
    // fillNextPages() {
    //     var pageKey = "page" + this.state.currentPage;
    //     for (let i = 0; i < pageData[pageKey].choiceCount; i++) {
    //         console.log(pageKey);
    //     }
    // }
    // fillPage(data) {}
    // componentWillMount() {
    //     this.setState({
    //         pagePath: [...this.state.pagePath,
    //             <
    //                 Page
    //                 key={this.state.pagePath.length}
    //                 index={this.state.pagePath.length}
    //                 flipBuffer={this.flipBuffer}
    //             />]
    //     });
    //     setTimeout(() => (
    //         this.setState({
    //             pagePath: [...this.state.pagePath,
    //                 <
    //                     Page
    //                     key={this.state.pagePath.length}
    //                     index={this.state.pagePath.length}
    //                     flipBuffer={this.flipBuffer}
    //                 />]
    //         })), 0);
    // }
    flipPage(index) {
        // makes current page disappear and next page appear
        var pagePath = this.state.pagePath;
        console.log(this.state.pagePath);
        // this.setState({
        //     pagePath: pagePath
        // });
    }
    changePage(index) {
        // displays a new page and loads the next page
        this.flipPage(index);
        this.loadPage(index + 1);
    }
    fetchPageData(index) {
        // fetch page data with AJAX
        return pageData["page" + index];
    }
    createPageComponent() {
        // push a JSX block in pagePath
        var newPage =
            <
                Page
                key={this.state.pagePath.length}
                index={this.state.pagePath.length}
                changePage={this.changePage}
                classes={"page"}
            />;
        const pagePath = [...this.state.pagePath, newPage];
        this.setState({
            pagePath: pagePath
        });
    }
    fillPageComponent(index) {
        // fill the page component with all corresponding informations from pageData at index 'index'
    }
    loadPage(index) {
        // loads page of index 'index'
        const pageData = this.fetchPageData(index); // TODO later with AJAX
        this.createPageComponent();
        this.fillPageComponent(index);
    }
    componentWillMount() {
        this.loadPage(this.state.currentPage);
        setTimeout(() => (this.loadPage(this.state.currentPage + 1)), 0);
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
