import React from 'react'
import blank from '../blank.png'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, date, author, source } = props;
    return (
        <>
            <div className="card my-3 border-dark" >
                <span className="position-absolute m-1 py-2 px-4 badge rounded-pill bg-warning">{source}</span>
                <img src={imgUrl ? imgUrl : blank} className="card-img-top" alt="..." style={{ height: "300px", objectFit: "cover" }} />
                <div className="card-body  ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More      </a>
                </div>
            </div>
        </>
    )
}

export default NewsItem
