import React from 'react';
import NewsItem from "../../components/News/NewsItem";
import Spinner from "../layout/Spinner"

function NewsList ({newsFeed,loading}){
        if(loading){
            return <Spinner />
        }else{
        return(
                    <div>
                                {newsFeed.map(newsEl =>(
                                    <div>
                                    <NewsItem key={newsEl.id} newsEl={newsEl} />
                                    </div>
                                ))}   
                    </div>
                );
        }
       
    }

export default NewsList;