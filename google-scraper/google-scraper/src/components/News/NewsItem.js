import React from "react";
import "../../App.css"

function NewsItem({newsEl: {snippet,source,date,link,thumbnail,title}}){ 
     
     return(
         <div class="container">
           
             <a href={link} target="_blank">
                 <h3 class="news-title">{title}</h3>
                 </a>
            <h1> </h1>
            <div class="image-container">
                <img src={thumbnail} alt="news_image"/>
                <p class="snippet">{snippet}</p>
                
            </div>
            <div class="meta-information">
                <p class="meta-title">{source}</p>
                <span>-</span>
                <p>{date}</p>
            </div>
            
         </div>
         );
     }

  

export default NewsItem;