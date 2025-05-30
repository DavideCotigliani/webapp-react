import React from 'react'

const ReviewCard = ({ review }) => {
    const { author, text, vote } = review
    return (
        <div className="col-12">
            <div className="card">
                <h3>{author}</h3>
                <p>{text}</p>
                <p>{vote}</p>
            </div>
        </div>
    )
}

export default ReviewCard
