import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div style={{textAlign: "center", marginTop:"20px"}}>
            Page not found.<br/>
            <Link id="link" to="/">Go to home page</Link>
        </div>
    )
}