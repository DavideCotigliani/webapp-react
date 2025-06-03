import React from 'react'

const ReviewCard = ({ review }) => {
    const { name, text, vote, } = review
    return (
        <div className="col-12">
            <div className="card">
                <h3>{name}</h3>
                <p>{text}</p>
                <p>Vote: {vote}</p>
            </div>
        </div>
    )
}

export default ReviewCard
