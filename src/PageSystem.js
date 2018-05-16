import React, { Component } from 'react';
import './App.css';
import { Page } from './Page.js';
import { data } from './TestData.js';

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
- all pages surrounding the currently displayed page are loaded via AJAX

how to load:
- the infos concerning the page to load are:
    - retrieved from the server with an AJAX call
    - stored in PageSystem state's 'pagePath' list
- these infos are retrieved from the server in the following cases:
    - the app starts and loads the first page (page index: 0, path index: 0)
    - the app starts and loads the neighbour pages of the first page
    - a new page is asked for from the currently displayed page
- they are stored in the following case:
    - the app retrieves data from the server in order to load a page
- values that are needed in order to load a page are:
    - path index
    - page index
- a loaded page gets the following props:
    - img URL
    - index of path
    - index of page in path
    - list of neighbours, containing for each item:
        - index of neighbour's path
        - index of neighbour's page

how to create a page:
- fetch its data
- load a Page component template and fill it with the data
- add this data to the PageSystem component's state

how to change page:
- hide the currently displayed page
- display the new page
- load all pages surrounding the created page that are not loaded yet
- update PageSystem's state to reflect these changes
    - modify currentPage
    - modify pagePath

how to show/hide a page:
- data corresponding to the classes of a page is modified in PageSystem's state

how to start the app:
- load the first page
- display the first page
- load all pages surrounding the first page

pageData in PageSystem's state contains:
- the list of all pages (array)
    - page (object)
*/

class PageSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // data of all loaded components
            pagePath: [],
            currentPage: {
                path: 0,
                page: 0
            }
        };
        this.loadPage   = this.loadPage.bind(this);
        this.fetchData  = this.fetchData.bind(this);
        this.showPage   = this.showPage.bind(this);
        this.hidePage   = this.hidePage.bind(this);
        this.changePage = this.changePage.bind(this);
    }
    // TODO: factorize showPage and hidePage
    showPage(pathIndex, pageIndex) {
        // var pagePath = this.state.pagePath;
        // var classes = pagePath["path" + pathIndex + "page" + pageIndex].classes;
        // if (classes.indexOf("hidden") !== -1) {
        //     classes.splice(classes.indexOf("hidden"), 1);
        // }
        // pagePath["path" + pathIndex + "page" + pageIndex].classes = classes;
        // this.setState({
        //     pagePath: pagePath
        // });
    }
    hidePage(pathIndex, pageIndex) {
        // var pagePath = this.state.pagePath;
        // var classes = pagePath["path" + pathIndex + "page" + pageIndex].classes;
        // if (classes.indexOf("hidden") === -1) {
        //     classes.push("hidden");
        // }
        // pagePath["path" + pathIndex + "page" + pageIndex].classes = classes;
        // this.setState({
        //     pagePath: pagePath
        // });
    }
    changePage(pathIndex, pageIndex) {
        // TODO:
        //  - hide current page
        //  - show page of pathIndex and pageIndex
        //  - load all neighbour of the newly displayed page
        //  - update PageSystem's state to reflect these changes
        //      - modify currentPage
        //      - modify pagePath

        // this.setState({
        //     currentPage: {
        //         path: pathIndex,
        //         page: pageIndex
        //     }
        // });
        // // hide the current page
        // this.hidePage(this.state.currentPage.path, this.state.currentPage.page);
        // // show the selected page
        // this.showPage(pathIndex, pageIndex);
        // // load all neighbour pages of the selected page
        // for (let i = 0; this.state.pagePath["path" + pathIndex + "page" + pageIndex].neighbours[i]; i++) {
        //     let neighbour = this.state.pagePath["path" + pathIndex + "page" + pageIndex].neighbours[i];
        //     this.loadPage(neighbour.path, neighbour.page);
        // }
        // // update PageSystem's current page informations
        // this.setState({
        //     currentPage: {
        //         path: pathIndex,
        //         page: pageIndex
        //     }
        // }, () => (setTimeout(() => (this.forceUpdate()), 1000)));
    }
    addGenericData(pageData, pathIndex, pageIndex) {
        // add all generic data that didn't need to be sent with AJAX (fast)
        pageData.classes = [
            "page",
            "hidden"
        ];
        pageData.pathIndex = pathIndex;
        pageData.pageIndex = pageIndex;
        pageData.JSX = (
            <
                Page
                key={this.state.pagePath.length}
                data={pageData}
                changePage={this.changePage}
            />
        );
    }
    fetchData(pathIndex, pageIndex) {
        // fetch a page's data with AJAX (potentially slow) // TODO AJAX
        var pageData = data["path" + pathIndex]["page" + pageIndex];
        return pageData;
    }
    loadPage(pathIndex, pageIndex) {
        // prepare new pagePath's value before modifying PageSystem's state
        var pagePath    = this.state.pagePath;
        // retrieve the requested page's data
        const pageData  = this.fetchData(pathIndex, pageIndex);
        // if the page is not loaded yet, load it
        if (!(this.state.pagePath.find(item => item.pageIndex === pageIndex) &&
            this.state.pagePath.find(item => item.pathIndex === pathIndex))) {
            this.addGenericData(pageData, pathIndex, pageIndex);
            pagePath.push(pageData);
            console.log("page " + pageData.pageIndex + " in path " + pageData.pathIndex + " loaded", pagePath);
            this.setState({
                pagePath: pagePath
            });
        } else {
            console.log("Couldn't load page " + pageIndex + " of path " + pathIndex + ": this page is already loaded");
        }
    }
    componentWillMount() {
        this.loadPage(0, 0);
        this.changePage(0, 0);
    }
    render() {
        return (
            <div className="PageSystem_container">
                {this.state.pagePath.map((item) => (item.JSX))}
            </div>
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
