import React, { Component } from 'react';
import './App.css';
import { Page } from './Page.js';
import { format } from './TestData.js';

class PageSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            pageList: []
        };
        this.flipBuffer = this.flipBuffer.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }
    flipBuffer() {
        this.setState({
            pageIndex: this.state.pageIndex === 0 ? 1 : 0
        });
        if (this.state.pageIndex === 0) {
            document.querySelector(".page0").style.display = "none";
            document.querySelector(".page1").style.display = "block";
        } else {
            document.querySelector(".page0").style.display = "block";
            document.querySelector(".page1").style.display = "none";
        }
    }
    componentWillMount() {
        var pageList = [];
        for (let i = 0; i < format.maxChoices + 1; i++) {
            pageList.push(
                <
                    Page
                    key={i}
                    DOMData={this.props.DOMData}
                    index={i}
                    flipBuffer={this.flipBuffer}
                />
            );
        }
        this.setState({
            pageList: pageList
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.pageList.map((item) => {
                        return item;
                    })
                }
            </div>
        );
    }
}

export { PageSystem };
