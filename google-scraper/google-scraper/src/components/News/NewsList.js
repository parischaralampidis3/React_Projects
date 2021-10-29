import React, { Component } from 'react';
import NewsItem from "../../components/News/NewsItem";
class NewsList extends  Component{
    state ={
    news : [
        {
            position :"1",
            title : "Trump brushes aside environmental concerns, signs 2 executive ...",
            link : "https://www.usatoday.com/story/news/nation/2019/04/10/president-trump-orders-speed-oil-gas-pipeline-projects/3431466002/",
            thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdBI3wIjf_BX3zfRRYJjTGRRF5CNNZvqWAuza8-4mVZ75iBjlwOVTxcfGtg6_hLyUbPQ9cFA"   
        },
        {
            position :"2",
            title : "January 6 committee is losing patience with Trump's former chief of staff Mark Meadows as it seeks his testimony",
            link : "https://www.cnn.com/2021/10/28/politics/january-6-committee-eyes-contempt-proceedings-mark-meadows/index.html",
            thumbnail : "https://serpapi.com/searches/617b9510303eb14035d841a4/images/6a792cf6b0133605c489d2eb48a4bea8a47ae86b1c08a3383408d7d72ed7c4f6.jpeg"
        },
        {
            position :"3",
            title : "Scottish Gov't Offers Bizarre Defense for Not Investigating Trump",
            link : "https://www.thedailybeast.com/scottish-govt-offers-bizarre-defense-for-not-investigating-donald-trump-golf-course-turnberry",
        }, 
    ]
}
    render(){
        return(
            <div>
                        {this.state.news.map(newsEl =>(
                            <div>
                            <NewsItem key={newsEl.position} newsEl={newsEl} />
                            </div>
                        ))}   
            </div>
        );
    }
}
export default NewsList;