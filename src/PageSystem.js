import React, { Component } from 'react';
import './App.css';
import { Page } from './Page.js';
import { format, data } from './TestData.js';

/*
how is data structured:
- several objects representing each a path
- each path contains objects representing each a page.
- each page contains the following data:
    - img URL
    - list of page relations:
        - for each page that can be reached from the current one:
            - index of it
            - index of its path

data fetched:
- list:
    - imgUrl
    - infos concerning surrounding pages?

what to load:
- all pages surrounding the displayed page are loaded

how to load:
- a page loaded gets the following props:
    - img URL
    - index of path
    - index of page in path
    - surrounding pages info
    - coordinates (path index + page index) of the pages to reach when
        going on the left or right
*/

class PageSystem extends Component {
    constructor(props) {
        super(props);
    }
    fetchData() {
        console.log(data);
    }
    render() {
        this.fetchData();
        return (
            <div className="PageSystem_container">page</div>
        );
    }
}

// class PageSystem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pagePath: [],
//             currentPage: 0
//         };
//         this.loadPage = this.loadPage.bind(this);
//         this.changePage = this.changePage.bind(this);
//         this.hidePage = this.hidePage.bind(this);
//         this.showPage = this.showPage.bind(this);
//     }
//     hidePage(index) {
//         document.querySelectorAll(".page")[index].classList.add("hidden");
//     }
//     showPage(index) {
//         document.querySelectorAll(".page")[index].classList.remove("hidden");
//     }
//     changePage(index, direction, isLastPage) {
//         // hide, show and load pages if conditions are met
//         const nextIndex = index + direction;
//         const loadIndex = nextIndex + 1;
//         if ((direction === 1 && !isLastPage) || (direction === -1 && index !== 0)) {
//             console.log("show " + (nextIndex) + " and hide " + index);
//             this.showPage(nextIndex);
//             this.hidePage(index);
//         }
//         // if (this.state.pagePath.length <= loadIndex) {
//         //     console.log("load " + loadIndex);
//         //     this.loadPage(loadIndex);
//         // }
//         console.log(" ");
//     }
//     createPageComponent(index, pageData) {
//         // push a list of JSX blocks into the array 'this.state.pagePath'
//         var listIndex = index;
//         var newPageList = [];
//         for (let i = 0; pageData["page" + i]; i++) {
//             var canGoLeft   = false;
//             var canGoRight  = false;
//             var canGoUp     = false;
//             var canGoDown   = false;
//             for (let j = 0; pageData["page" + j]; j++) {
//                 if (pageData["page" + j].position < pageData["page" + i].position) {
//                     canGoLeft = true;
//                 }
//                 if (pageData["page" + j].position > pageData["page" + i].position) {
//                     canGoRight = true;
//                 }
//                 if (pageData["page" + j].position === 0) {
//                     canGoUp = true;
//                     canGoDown = true;
//                 }
//             }
//             newPageList.push(
//                 <
//                     Page
//                     key={index++}
//                     listIndex={listIndex}
//                     changePage={this.changePage}
//                     showPage={this.showPage}
//                     imgSrc={pageData["page" + i].imgUrl}
//                     canGoLeft={canGoLeft}
//                     canGoRight={canGoRight}
//                     canGoUp={canGoUp}
//                     canGoDown={canGoDown}
//                     isLastPage={pageData.isLastPage}
//                 />
//             );
//         }
//         const pagePath = [...this.state.pagePath, newPageList];
//         this.setState({
//             pagePath: pagePath
//         });
//     }
//     fetchPageData(index) {
//         // fetch page data with AJAX // TODO
//         return data["pageList" + index];
//     }
//     loadPage(index) {
//         // loads page of index 'index'
//         const pageData = this.fetchPageData(index); // TODO later with AJAX
//         this.createPageComponent(index, pageData);
//     }
//     componentWillMount() {
//         // loads the first page to be shown and the next page
//         this.loadPage(this.state.currentPage);
//         setTimeout(() => (this.loadPage(this.state.currentPage + 1)), 0);
//     }
//     componentDidMount() {
//         document.querySelector(".page").classList.remove("hidden");
//     }
//     render() {
//         console.log(this.state.pagePath);
//         return (
//             <div>
//                 {
//                     this.state.pagePath.map((item) => {
//                         return item[0];
//                     })
//                 }
//             </div>
//         );
//     }
// }

export { PageSystem };
