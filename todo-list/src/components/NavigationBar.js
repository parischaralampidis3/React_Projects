import React from "react";

 function NavigationBar(){
     return (
         <div className="navbar">
            <div className="bg-gray-200">
                <div className="container mx-auto">            
                    <div className="flex justify-between p-10">
                        <div>
                            <h3><a href="# " target="_blank">Home</a></h3>
                        </div>  
                         <nav>  
                             <ul className="flex">
                                <li className="mr-2"><a href="# " target="_blank">Tasks</a>|</li>  
                                <li><a href="# " target="_blank">About</a></li>
                            </ul> 
                         </nav>
                    </div>
                </div>
           </div>
        </div>
     );
 }  

 export default NavigationBar;
 
            
/*draft code */ 
            /*<nav>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </nav>*/