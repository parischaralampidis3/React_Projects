import React from "react";


function NewsItem({newsEl: {title,link,thumbnail}}){ 
     
     return(
         <div>
             <img src={thumbnail} alt="thumbnail"/> 
            <h1>{title}</h1>
            <p>{link}</p>
         </div>
         );
     }

  

export default NewsItem;