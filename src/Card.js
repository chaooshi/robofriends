import React from "react";



const Card = ({ name, task, id}) => {
    return (
        <div className="tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5 ">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{task}</p>
            </div>
        </div>
    )
}

export default Card;