import React from 'react'

const StarsRating = ({ vote }) => {
    const renderStars = () => {
        return [1, 2, 3, 4, 5].map((elem, i) => {
            return (
                <i
                    key={`star-average-${i}`}
                    className={`fa-star ${i < vote ? "fa-solid" : "fa-regular"} text-warning`}></i>
            );
        });
    };

    return <span>{renderStars()}</span>
}

export default StarsRating
