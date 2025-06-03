import React from 'react'
import StarsRating from './StarsRating'
const ReviewCard = ({ review }) => {
    const { name, text, vote, } = review
    return (
        <div className="col-12">
            <div className="card">
                <h3>{name}</h3>
                <p>{text}</p>
                <StarsRating vote={vote} />
            </div>
        </div>
    )
}

export default ReviewCard
