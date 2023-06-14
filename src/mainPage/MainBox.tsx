import CSS from 'csstype';
import { Link } from 'react-router-dom';

export function MainBox( {type} ) {
    let styleDay = ""
    let styleWeek = ""
    let styleMonth = ""
    if (type === "Day") {
        styleDay = "white"
    } else if (type === "Week") {
        styleWeek = "white"
    } else {
        styleMonth = "white"
    }

    const sd: CSS.Properties = {
        color: styleDay,

    }

    const sw: CSS.Properties = {
        color: styleWeek,
    }
    
    const sm: CSS.Properties = {
        color: styleMonth,
    }

    return ( 
        <form>
        <div className="topBox">
            <img src="../public/image-jeremy.png" alt="profile" />
            <div className="text">
                <h1>Report for</h1>
                <h2>Jeremy Robson</h2>
            </div>
        </div>

        <ul>
            <li>
                <Link to="/" className='butt' style={sd}>Daily</Link>
            </li>
            <li>
                <Link to="/weekly" className='butt' style={sw}>Weekly</Link>
            </li>
            <li>
                <Link to="/monthly" className='butt' style={sm}>Monthly</Link>
            </li>
        </ul>
        </form>
    )
}