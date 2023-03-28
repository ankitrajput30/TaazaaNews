import React from 'react'

const NewsItem = (props) => {
     let { title, description, imgUrl, newsUrl, author, date, source } = props;
     return (
          <div className='my-3'>
               <div className="card">
                    <div style={{
                         display: 'flex',
                         justifyContent: 'flex-end',
                         position: 'absolute',
                         right: '0'
                    }
                    }>
                         <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imgUrl ? "https://www.hindustantimes.com/ht-img/img/2023/03/21/550x309/Breaking-News-Live-Blog-pic_1627344775185_1677800210069_1679442306577_1679442306577.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                         <h5 className="card-title">{title}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>{source}</span></h5>
                         <p className="card-text">{description}...</p>
                         <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Explore</a>
                    </div>
               </div>
          </div>
     )
}

export default NewsItem