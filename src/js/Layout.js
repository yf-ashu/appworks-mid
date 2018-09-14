import React, { Component } from 'react';
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
      
    }
    render() {
        return (
            <BrowserRouter >
                <div>
                    <Router />
                </div>
            </BrowserRouter >
        );
    }
}
export default Layout;
