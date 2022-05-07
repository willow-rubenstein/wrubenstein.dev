import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Snippets from '../assets/json/snippets.json';

const syntaxStyle = {
    margin: "15px 0px 15px 0px",
    color: "#fff", 
    fontSize: "12pt", 
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
    const [snippet, setSnippet] = React.useState(Snippets[props.page][Math.floor(Math.random()*Snippets[props.page].length)]);

    function changeSnippet() {
        setSnippet(Snippets[props.page][Math.floor(Math.random()*Snippets[props.page].length)]);
    }

    return (
        <div className="codeWrap noselect">
            <div className="randomButton" onClick={changeSnippet}>
                <img src="image/random.svg" alt="" style={{display: "inline-block"}} />
            </div>
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