import React, { useEffect,useState } from 'react'
import Loader from './Loader';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
    const[articles,setArticle]=useState([]);
    const[page,setPage]=useState(1);
    const[loading,setLoading]=useState(true);
    const[totalResults,setTotalResults]=useState(0);

    useEffect(() => {
       updateNews();
      //eslint-disable-next-line;
    },[])

    const updateNews= async()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d8b176050b0f4f77b9aa8b9b8f67e0c3&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticle(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        
    }

    const fetchMoreData=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d8b176050b0f4f77b9aa8b9b8f67e0c3&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticle(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    // handlePrevClick = async () => {
    //     setPage(page-1);
    //     updateNews();
    // }
    // handleNextClick = async () => {
    //     if (page + 1 > Math.ceil(totalResults / props.pageSize)) { }
       
    //     else {
    //         setPage(page+1)
    //         updateNews();
    //     }
    // }

   const titleCase=(str)=> {
        return str.toLowerCase().split(' ').map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      }
        return (
            <div className="container mt-5">
                <h1 className="text-center my-4">Top {titleCase(props.category)} News</h1>
                {loading && <Loader />}
               
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loader/>}
                > 
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-sm-6 col-lg-4 d-flex" key={element.url}>
                            <div className="col-12 d-flex align-items-stretch">
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 80) : "Description Missing"} imgUrl={element.urlToImage} newsUrl={element.url ? element.url : "#"} date={new Date(element.publishedAt).toLocaleDateString("en-UK")} author={element.author ? element.author : "Unknown"} source={element.source.name ? element.source.name : "Source Unknown"} />
                            </div>
                        </div>
                    })}
                </div>
                {/* <div className="container my-3 d-flex justify-content-center text-center">
                    <button disabled={page <= 1} className="btn btn-primary mx-1" onClick={handlePrevClick}>&larr; Previous</button>
                    <button disabled={(page + 1 > Math.ceil(totalResults / props.pageSize))} className="btn btn-primary mx-1" onClick={handleNextClick}>Next  &rarr;</button>
                </div> */}
                </InfiniteScroll>
            </div>
        )
    
}

export default News
