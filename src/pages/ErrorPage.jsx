import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div>
            <h1>Page not Found</h1>
            <Link to="/">
                <button>Back to home</button>
            </Link>
        </div>
    ) ;
}

export default ErrorPage