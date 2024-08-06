import React from "react";

export default function Services(){

    const data=[
        {
            id:1,
            img : "../images/book.png",
            name:"Service 1",
            caption:"wgehrjhgwrgtjhgrhgejhgrehjgetrhjhhjerthjgte"
        },
        {
            id:2,
            img : "../images/book.png",
            name:"Service 2",
            caption:"wgehrjhgwrgtjhgrhgejhgrehjgetrhjhhjerthjgte"
        },
        {
            id:3,
            img : "../images/book.png",
            name:"Service 3",
            caption:"wgehrjhgwrgtjhgrhgejhgrehjgetrhjhhjerthjgte"
        },
        {
            id:4,
            img : "../images/book.png",
            name:"Service 4",
            caption:"wgehrjhgwrgtjhgrhgejhgrehjgetrhjhhjerthjgte"
        }
    ]

    return(
        <div className="section-container">
            {
                data.map((item) =>{
                    return(
                    <div className="section-col">
                        <div className="media">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="caption">
                            <span>{item.caption}</span>
                        </div>
                        <div className="title">
                            <h1>{item.name}</h1>
                        </div>
                        <div className="number">
                            <h1>{item.number}</h1>
                        </div>
                    </div>
                )})
            }
        </div>
    )
}