import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Snippets from '../assets/json/snippets.json';

const syntaxStyle = {
    margin: "15px 0px 15px 0px",
    color: "#fff", 
    fontSize: "inherit", 
    backgroundColor:'#1D1E18', 
    padding:"10px 10px 10px 10px", 
    borderRadius:"0px",
    overflow: "hidden"
};
const langComment = (lang) => {
    switch (lang) {
        case "JavaScript":
            return "// Written in Node.JS\n\n";
        default:
            return "## Written in Python 3.10\n\n";
    }
}

export default function Codesnippet(props) {
    const snippet = Snippets[props.page][Math.floor(Math.random()*Snippets[props.page].length)]

    return (
        <div className="codeWrap">
            <SyntaxHighlighter 
                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} 
                language={snippet.lang.toLowerCase()} 
                style={docco} 
                customStyle={syntaxStyle} 
                wrapLines={true}
            >
                {langComment(snippet.lang)+snippet.code}
            </SyntaxHighlighter>
        </div>
    )
}