import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Snippets from '../assets/json/snippets.json';
import "../styles/pages/home.css";

const syntaxStyle = {
    margin: "15px 0px 15px 0px",
    color: "#fff", 
    fontSize: "inherit", 
    backgroundColor:'#1D1E18', 
    padding:"10px 10px 10px 10px", 
    borderRadius:"0px",
    overflow: "hidden"
};

export default class Home extends Component {
    snippet = Snippets.home[Math.floor(Math.random()*Snippets.home.length)]
    render() {
        return (
            <div>
                <div className="nameHeader">
                    Willow Rubenstein
                </div>
                Wow willow is so fucking cool holy shit wow omg no way I wanna meet willow they seem so cool
                omg wow this is just a shit ton of placeholder text omg no way<br/><br/>
                Random Code Snippet Written in <b>{this.snippet.lang}</b>:
                <div className="codeWrap">
                    <SyntaxHighlighter 
                        lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} 
                        language={this.snippet.lang.toLowerCase()} 
                        style={docco} 
                        customStyle={syntaxStyle} 
                        wrapLines={true}
                    >
                        {this.snippet.code}
                    </SyntaxHighlighter>
                </div>
                More placeholder text!!
            </div>
        )
    }
}