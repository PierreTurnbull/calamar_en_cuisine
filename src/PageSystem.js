import React, { Component } from 'react';
import './App.css';
import { Page } from './Page.js';

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
- page list:
    - imgUrl
    - infos concerning surrounding pages

what to load:
- all pages are loaded via AJAX on mount

how to load:
- the infos concerning the page list to load are:
    - retrieved from the server with an AJAX call
    - stored in PageSystem state's 'pageList'
- these infos are retrieved from the server in the following case:
    - the app starts and loads every page
- they are stored in the following case:
    - the app retrieves all the data from the server in order to load every page
- a loaded page gets the following props:
    - img URL
    - index of path
    - index of page in path
    - list of neighbours, containing for each item:
        - index of neighbour's path
        - index of neighbour's page

how to change page:
- hide the currently displayed page
- display the new page
- update PageSystem's state to reflect these changes
    - modify currentPage

how to show/hide a page:
- data corresponding to the classes of a page is modified in PageSystem's state

how to start the app:
- fetch all data
- load all pages
- display the first page

// pageList in PageSystem's state contains:
// - the list of all pages (array)
//     - page (object)
*/

class PageSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageList: [],
            currentPage: {
                pathIndex: 0,
                pageIndex: 0
            }
        };
        this.loadStory      = this.loadStory.bind(this);
        this.fetchData      = this.fetchData.bind(this);
        this.showPage       = this.showPage.bind(this);
        this.hidePage       = this.hidePage.bind(this);
        this.changePage     = this.changePage.bind(this);
    }
    hidePage(currentIndex, nextIndex) {
        console.log("hide", currentIndex);
        var pageList    = JSON.parse(JSON.stringify(this.state.pageList));
        var pageClasses = pageList.find((item) => (item.index === currentIndex)).classes;
        if (pageClasses.indexOf("hidden") !== -1) {
            console.log("Error: page " + currentIndex + " is already hidden.");
            return;
        }
        pageClasses.push("hidden");
        this.setState({
            pageList
        }, () => {
            this.showPage(nextIndex);
        });
    }
    showPage(index) {
        console.log("show", index);
        var pageList    = JSON.parse(JSON.stringify(this.state.pageList));
        var pageClasses = pageList.find((item) => (item.index === index)).classes;
        if (pageClasses.indexOf("hidden") === -1) {
            console.log("Error: page " + index + " is already shown.");
            return;
        }
        pageClasses = pageClasses.filter((item) => (item !== "hidden"));
        pageList.find((item) => (item.index === index)).classes = pageClasses;
        this.setState({
            pageList
        });
    }
    changePage(currentIndex, nextIndex) {
        this.hidePage(currentIndex, nextIndex);
    }
    fetchData() {
        var pageList = [];
        fetch("http://localhost:3000/pageData.json", {
            method: "get"
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let i = 0;
            for (var path in data) {
                for (var page in data[path]) {
                    let pageData = data[path][page];
                    pageData.classes = [
                        "page",
                        "hidden"
                    ];
                    pageData.pathIndex  = Number(path.replace("path", ""));
                    pageData.pageIndex  = Number(page.replace("page", ""));
                    pageData.index = i++;
                    pageList.push(pageData);
                }
            }
            for (i = 0; pageList[i]; i++) {
                let page = pageList[i];
                for (let j = 0; page.neighbours[j]; j++) {
                    let pathIndex               = page.neighbours[j].pathIndex;
                    let pageIndex               = page.neighbours[j].pageIndex;
                    let neighbourIndex          = pageList.find((item) => (item.pathIndex === pathIndex && item.pageIndex === pageIndex)).index;
                    page.neighbours[j].index    = neighbourIndex;
                }
            }
            this.setState({
                pageList: pageList
            }, () => {
                this.showPage(0);
            });
        });
    }
    loadStory() {
        this.fetchData();
    }
    componentWillMount() {
        this.loadStory();
    }
    render() {
        return(
            <div className="PageSystem_container">
                {
                    this.state.pageList.map((item) => {
                        return (
                            <
                                Page
                                key={item.index}
                                pageData={item}
                                changePage={this.changePage}
                            />
                        );
                    }
                )}
            </div>
        );
    }
}

/*class PageSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // data of all loaded pages
            pagePath: [],
            // JSX of all loaded pages
            JSX: [],
            currentPage: {
                pathIndex: 0,
                pageIndex: 0
            }
        };
        this.fetchData      = this.fetchData.bind(this);
        this.loadPage       = this.loadPage.bind(this);
        this.addGenericData = this.addGenericData.bind(this);
        this.showPage       = this.showPage.bind(this);
        this.hidePage       = this.hidePage.bind(this);
        this.changePage     = this.changePage.bind(this);
        this.loadNeighbours = this.loadNeighbours.bind(this);
    }
    // TODO: factorize showPage and hidePage
    showPage(pathIndex, pageIndex) {
        console.log("Show page " + pageIndex + " of path " + pathIndex);
        var pagePath = JSON.parse(JSON.stringify(this.state.pagePath));
        var classes = pagePath.find((item) => (item.pathIndex === pathIndex && item.pageIndex === pageIndex)).classes;
        var index = pagePath.find((item) => (item.pathIndex === pathIndex && item.pageIndex === pageIndex)).index;
        classes = classes.filter((item) => (item !== "hidden"));
        pagePath[index].classes = classes;
        console.log("pagepath", pagePath);
        this.setState({
            pagePath: pagePath
        }, ()=>(console.log("show page", this.state)));
    }
    hidePage(pathIndex, pageIndex) {
        console.log("Hide page " + pageIndex + " of path " + pathIndex);
        var pagePath = JSON.parse(JSON.stringify(this.state.pagePath));
        var classes = pagePath.find((item) => (item.pathIndex === pathIndex && item.pageIndex === pageIndex)).classes;
        var index = pagePath.find((item) => (item.pathIndex === pathIndex && item.pageIndex === pageIndex)).index;
        classes.push("hidden");
        pagePath[index].classes = classes;
        this.setState({
            pagePath: pagePath
        });
    }
    loadNeighbours(pathIndex, pageIndex) {
        console.log("Load neighbours of page " + pageIndex + " of path " + pathIndex);
        const neighbours = this.state.pagePath.find((item) => (item.pathIndex === pathIndex && item.pageIndex === pageIndex)).neighbours;
        for (let i = 0; i < neighbours.length; i++) {
            this.loadPage(neighbours[i].pathIndex, neighbours[i].pageIndex);
        }
    }
    changePage(pathIndex, pageIndex) {
        // TODO:
        //  - hide current page OK
        //  - show page of pathIndex and pageIndex OK
        //  - load all neighbour of the newly displayed page
        //  - update PageSystem's state to reflect these changes
        //      - modify currentPage

        var pagePath = this.state.pagePath;
        this.hidePage(this.state.currentPage.pathIndex, this.state.currentPage.pageIndex);
        this.loadNeighbours(pathIndex, pageIndex);
        this.setState({
            currentPage: {
                pathIndex: pathIndex,
                pageIndex: pageIndex
            }
        });
    }
    addGenericData(pageData, pathIndex, pageIndex) {
        // add all generic data that didn't need to be sent with AJAX (fast)
        pageData.index = this.state.pagePath.length;
        pageData.classes = [
            "page",
            "hidden"
        ];
        pageData.pathIndex = pathIndex;
        pageData.pageIndex = pageIndex;
    }
    fetchData(pathIndex, pageIndex) {
        // fetch a page's data with AJAX (potentially slow) // TODO AJAX
        var pageData = data["path" + pathIndex]["page" + pageIndex];
        return pageData;
    }
    loadPage(pathIndex, pageIndex) {
        // prepare new pagePath's value before modifying PageSystem's state
        var pagePath    = this.state.pagePath;
        var JSX         = this.state.JSX;
        // retrieve the requested page's data
        const pageData  = this.fetchData(pathIndex, pageIndex);
        // if the page is not loaded yet, load it
        if (!pagePath.find((item) => (item.pathIndex === pathIndex && item.pageIndex === pageIndex))) {
            this.addGenericData(pageData, pathIndex, pageIndex);
            pagePath.push(pageData);
            this.setState({
                pagePath: pagePath
            }, () => {
                JSX.push(
                    <
                        Page
                        key={pageData.index}
                        data={this.state.pagePath.find((item) => (item.pathIndex === pathIndex && item.pageIndex === pageIndex))}
                        changePage={this.changePage}
                    />
                );
                this.setState({
                    JSX: JSX
                });
            });
            console.log("page " + pageData.pageIndex + " in path " + pageData.pathIndex + " loaded", pagePath);
        } else {
            // the page is already loaded
            console.log("Couldn't load page " + pageIndex + " of path " + pathIndex + ": this page is already loaded");
        }
    }
    componentWillMount() {
        this.loadPage(0, 0);
        this.showPage(0, 0);
        this.loadNeighbours(0, 0);
    }
    render() {
        return (
            <div className="PageSystem_container">
                {this.state.JSX}
            </div>
        );
    }
}*/

export { PageSystem };
