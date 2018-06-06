import React, { Component } from 'react';
import './App.css';
import { Page } from './Page.js';

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
        window.scrollTo(0, 0);
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

export { PageSystem };
