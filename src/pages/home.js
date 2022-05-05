import React, { Component } from 'react';
import Codesnippet from '../components/codesnip.js';
import "../styles/pages/home.css";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="nameHeader">
                    Willow Rubenstein
                </div>
                <Codesnippet page="home" />
                More placeholder text!!
            </div>
        )
    }
}