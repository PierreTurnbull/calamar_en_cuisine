import React, { Component } from 'react';
import { Page } from './Page.js';

class PageSystem extends Component {
    render() {
        return (
            <div>
                <Pager DOMData={this.props.DOMData} />
            </div>
        );
    }
}

export { PageDoubleBuffer };
