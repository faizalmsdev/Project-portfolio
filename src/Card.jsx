import { useState } from "react"

    function Card({title,desc,link}) {
        const [readMore,setReadMore] = useState(false);
    return (
        <div className="card">
            <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" />
            <div className="card-body">
                <h2>{title}</h2>
                <p>{readMore ? desc :`${desc.substring(0,150)}...` }</p>
                <button onClick={()=> setReadMore(!readMore)}>Read more...</button>
                <a className="github" href={link} target="blank">Click here to view</a>
            </div>
        </div>
    )
    }

    export default Card
