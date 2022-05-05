import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "../styles/components/nav.css";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="nameHeader">
                    Willow Rubenstein
                </div>
                Wow willow is so fucking cool holy shit wow omg no way I wanna meet willow they seem so cool
                omg wow this is just a shit ton of placeholder text omg no way
                <SyntaxHighlighter language="javascript" style={dark}>
                    console.log("something idk lol");
                </SyntaxHighlighter>
            </div>
        )
    }
}