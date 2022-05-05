import { Link } from "react-router-dom"

export default function Error() {
    return (
        <>
            Page not found.<br/>
            <Link id="link" to="/">Go to home page</Link>
        </>
    )
}